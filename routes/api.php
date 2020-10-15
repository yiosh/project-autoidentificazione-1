<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/files', 'Api\FileController@storeDocuments');
Route::post('/selfie', 'Api\FileController@storeSelfie');
Route::get('/download-file/{file_name}', 'Api\FileController@downloadFile');


Route::post('/send-verification-mail', 'Api\MailController@sendMail');

Route::post('/send-verification-code', 'Api\MailController@verifyMail');

Route::post('/send-verification-sms', 'Api\SMSController@sendSMS');

Route::post('/verify-sms-code', 'Api\SMSController@verifyTelefono');


