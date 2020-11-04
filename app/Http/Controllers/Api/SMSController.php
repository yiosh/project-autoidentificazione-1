<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Twilio\Rest\Client;

// require __DIR__ . '/vendor/autoload.php';
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class SMSController extends Controller
{
    public function sendSMS(Request $request)
    {
        $data = request()->validate([
            'telefono' => 'required',
            'user_id' => 'required'
        ]);

        $telefonoExists = DB::table('users')->where('telefono', base64_encode($data['telefono']))->exists();

        if ($telefonoExists) {
            return response()->json([ 'message' => 'Il tuo numero risulta già associato ad un utenza. Contatta il customer care per informazioni.'], 403);
            exit;
        }

        // Your Account SID and Auth Token from twilio.com/console
        $account_sid = config('app.account_sid');
        // In production, these should be environment variables. E.g.:
        $auth_token = config('app.auth_token');
        // A Twilio number you own with SMS capabilities
        $twilio_number = config('app.twilio_number');
        $verificationCode = rand(11111,99999);


        $client = new Client($account_sid, $auth_token);
        $client->messages->create(
            // Where to send a text message (your cell phone?)
            '+39' . $data['telefono'],
            array(
                'from' => $twilio_number,
                'body' => 'Ecco il codice per verificare il tuo numero: ' . $verificationCode
            )
        );

        $result = DB::table('users')->where('id', $data['user_id'])->update(['telefono' =>  base64_encode($data['telefono'])]);

        $details['verification'] = DB::table('sms_verifications')->updateOrInsert(['user_id' => $data['user_id'], 'user_id' => $data['user_id'], 'telefono' => base64_encode($data['telefono']), 'verification_code' => $verificationCode]);

        return response()->json([ 'status' => $result, 'insert' => $details]);
    }

    public function verifyTelefono(Request $request)
    {
        $data = request()->validate([
            'verification_code' => 'required'
        ]);

        $row = DB::table('sms_verifications')->where('verification_code', $data['verification_code'])->first();
        $row = (array)$row;

        if ($row) {
            $result = DB::table('users')->where('id', $row['user_id'])->update(['telefono_verified_at' =>  Carbon::now()]);
            DB::table('sms_verifications')->where('verification_code', $data['verification_code'])->delete();
            return response()->json([ 'status' => 'Verified' ], 200);
        } else {
            return response()->json([ 'message' => 'Il codice inserito non è corretto' ], 404);
        }

        
    }
}
