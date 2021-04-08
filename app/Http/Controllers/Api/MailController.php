<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Faker\Provider\DateTime;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\User;

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

        $emailExists = User::where('email', $data['email'])->exists();

        if ($emailExists) {
            return (new Response([ 'message' => "Non è possibile procedere con l'operazione. La mail che hai inserito è già presente nei nostri archivi. Per maggiori informazioni contatta il nostro Customer Care."], 403));
        }

        $updateInsert = User::updateOrInsert(['email' => $data['email']], $data);

        $user = User::where('email', $data['email'])->first();
        
        $verificationCode = rand(11111,99999);
        $mailVerification = DB::table('mail_verifications')
        ->updateOrInsert(['user_id' => $user->id, 'email' => $data['email']], ['email' => $data['email'], 'verification_code' => $verificationCode]);

        if ($mailVerification) {
            $details = [
                'title' => 'CODICE di verifica mail',
                'body' => 'Questo è il codice di verifica per il tuo indirizzo email',
                'verificationCode' => $verificationCode
            ];
            \Mail::to(base64_decode($data['email']))->send(new \App\Mail\TestMail($details));

            return (new Response([ 'message' => "Email inviata correttamente.", 'mailverification' => $mailVerification], 200));
        }
        return (new Response([ 'message' => "Bad request.", 'mailverification' => $mailVerification], 400));

    }

    public function verifyMail(Request $request)
    {
        $data = request()->validate([
            'verification_code' => 'required'
        ]);

        $mailVerification = DB::table('mail_verifications')->where('verification_code', $data['verification_code'])->first();
        if ($mailVerification) {

            $result = User::where('id', $mailVerification->user_id)
                ->update(['email_verified_at' =>  Carbon::now(), 'ip_address' => base64_encode($_SERVER['REMOTE_ADDR'])]);

            $delete = DB::table('mail_verifications')->where('id', '=', $mailVerification->id)->delete();

            return (new Response([ 'message' => "Email correttamente verificato."], 200));
        } else {
            return (new Response([ 'message' => "Il codice inserito non è valido."], 400));
        }
    }
}
