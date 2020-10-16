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

        // Your Account SID and Auth Token from twilio.com/console
        $account_sid = ENV('ACCOUNT_SID');
        $auth_token = env('AUTH_TOKEN');
        // In production, these should be environment variables. E.g.:
        // $auth_token = $_ENV["TWILIO_AUTH_TOKEN"]

        // A Twilio number you own with SMS capabilities
        $twilio_number = env('TWILIO_NUMBER');
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

        $details['verification'] = DB::table('sms_verifications')->updateOrInsert(['user_id' => $data['user_id'], 'user_id' => $data['user_id'], 'telefono' => $data['telefono'], 'verification_code' => $verificationCode]);

        return response()->json([ 'status' => $result, 'insert' => $details]);
    }

    public function verifyTelefono(Request $request)
    {
        $data = request()->validate([
            'verification_code' => 'required'
        ]);

        $row = DB::table('sms_verifications')->where('verification_code', $data['verification_code'])->first();
        $row = (array)$row;

        $result = DB::table('users')->where('id', $row['user_id'])->update(['telefono_verified_at' =>  Carbon::now()]);

        return response()->json([ 'status' => $result ]);
    }
}
