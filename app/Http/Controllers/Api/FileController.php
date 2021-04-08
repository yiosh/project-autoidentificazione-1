<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\User;

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
        $codice_fiscale = $this->storeFile($request->file(['codice_fiscale']), 'codice_fiscale');
        
        return response()->json([
            'status' => true,
            'fronte' => $fronte,
            'retro' => $retro,
            'cf' => $codice_fiscale
        ], 200);
    }

    public function storeSelfie(Request $request)
    {
        $data = request()->validate([
            'user_id' => 'required'
        ]);

        $this->userId = $data['user_id'];

        $selfie = $this->storeFile($request->file(['selfie']), 'selfie');

        $result = User::where('id', $data['user_id'])->update(['status' => 1]);
        
        return (new Response(['message' => "Selfie stored."], 200));
    }

    public function downloadFile($fileName, Request $request)
    {
        $file = Storage::disk('public')->get("/files/".$fileName);

        if ($file) {
            return (new Response($file, 200))->header('Content-Type', 'image/jpeg');
        }
        return (new Response(['message' => "Nessun file trovato"], 404));
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
