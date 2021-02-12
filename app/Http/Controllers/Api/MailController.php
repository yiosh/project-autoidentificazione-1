<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Faker\Provider\DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class MailController extends Controller
{
    public function sendMail(Request $request)
    {
        $data = request()->validate([
            'nome' => 'required',
            'cognome' => 'required',
            'codice_fiscale' => 'required',
            'username' => 'required',
            'email' => 'required',
            'external' => 'required'
        ]);

        $data['email'] = base64_encode($data['email']);

        $emailExists = DB::table('users')->where('email', $data['email'])->exists();

        if ($emailExists) {
            return response()->json([ 'message' => "Non è possibile procedere con l'operazione. La mail che hai inserito è già presente nei nostri archivi. Per maggiori informazioni contatta il nostro Customer Care."], 403);
            exit;
        }

        $details['user'] = DB::table('users')
        ->updateOrInsert(['email' => $data['email']], $data);

        $user = DB::table('users')->where('email', $data['email'])->get()[0];
        
        $verificationCode = rand(11111,99999);
        $details['verification'] = DB::table('mail_verifications')
        ->updateOrInsert(['user_id' => $user->id, 'email' => $data['email']], ['email' => $data['email'], 'verification_code' => $verificationCode]);
        
        $details = [
            'title' => 'CODICE di verifica mail',
            'body' => 'Questo è il codice di verifica per il tuo indirizzo email',
            'verificationCode' => $verificationCode
        ];
        \Mail::to(base64_decode($data['email']))->send(new \App\Mail\TestMail($details));
        return response()->json($details);
    }

    public function verifyMail(Request $request)
    {
        $data = request()->validate([
            'verification_code' => 'required'
        ]);

        $row = DB::table('mail_verifications')->where('verification_code', $data['verification_code'])->first();
        if ($row) {
            $row = (array)$row;
            $userId = $row['user_id'];

            $result = DB::table('users')
                ->where('id', $row['user_id'])
                ->update(['email_verified_at' =>  Carbon::now(), 'ip_address' => base64_encode($_SERVER['REMOTE_ADDR'])]);

            $delete = DB::table('mail_verifications')->where('id', '=', $row['id'])->delete();

            return response()->json([ 'status' => $result, 'delete' => $delete, 'user_id' => $userId ]);
        } else {
            return response()->json([ 'message' => 'Il codice inserito non è valido.' ], 404);
        }
    }
}
