<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public $userId;

    public function storeDocuments(Request $request)
    {
        $data = request()->validate([
            'user_id' => 'required'
        ]);

        $this->userId = $data['user_id'];

        $fronte = $this->storeFile($request->file(['fronte']), 'fronte');
        $retro = $this->storeFile($request->file(['retro']), 'retro');
        $condice_fiscale = $this->storeFile($request->file(['codice_fiscale']), 'codice_fiscale');
        
        return response()->json([
            'status' => true
        ], 200);
    }

    public function storeSelfie(Request $request)
    {
        $data = request()->validate([
            'user_id' => 'required'
        ]);

        $this->userId = $data['user_id'];

        $selfie = $this->storeFile($request->file(['selfie']), 'selfie');

        $result = DB::table('users')->where('id', $data['user_id'])->update(['status' => 1]);
        
        return response()->json([
            'status' => true,
        ], 200);
    }

    public function downloadFile($fileName, Request $request)
    {
        // $fileExists = Storage::download('/app/public/files/'.$data['file_name']);

        $file = Storage::disk('public')->get("/files/".$fileName);
 
		return (new Response($file, 200))
              ->header('Content-Type', 'image/jpeg');

        // return response()->json([
        //     'fileExists' => $fileExists,
        //     'status' => true,
        // ], 200);
    }

    public function storeFile($file, $content)
    {
        // Get filename with extension
        $fileNameWithExt = $file->getClientOriginalName();
        //Get just filename
        $fileName = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
        // Get extension
        $extension = pathinfo($fileNameWithExt, PATHINFO_EXTENSION);
        // Filename to store
        $fileNameToStore = $fileName .'_'.time().'.'.$extension;
        // Upload Image
        $path = $file
        ->storeAs('files', $fileNameToStore);

        DB::table('files')
        ->updateOrInsert(['user_id' => $this->userId, 'content' => $content], ['user_id' => $this->userId, 'name' => $fileNameToStore, 'content' => $content]);
        
        return $path;
    }
}
