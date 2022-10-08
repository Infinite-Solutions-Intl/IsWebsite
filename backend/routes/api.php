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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::prefix('v1')->group(function(){
    Route::post('register',[\App\Http\Controllers\API\v1\Auth\AuthController::class,'register']);
      Route::post('login',[\App\Http\Controllers\API\v1\Auth\AuthController::class,'login']);
      Route::post('logout',[\App\Http\Controllers\API\v1\Auth\AuthController::class,'logout']);
});


Route::middleware('auth:sanctum')->prefix('v1')->group(function (){
    Route::apiResource('contact', \App\Http\Controllers\API\v1\ContactController::class);
    Route::apiResource('date', \App\Http\Controllers\API\v1\DateController::class);
    Route::apiResource('formation', \App\Http\Controllers\API\v1\FormationController::class);
    Route::apiResource('newsletter', \App\Http\Controllers\API\v1\NewsletterController::class);
    Route::apiResource('pricing', \App\Http\Controllers\API\v1\PricingController::class);
    Route::apiResource('projet', \App\Http\Controllers\API\v1\ProjetController::class);
    Route::apiResource('service', \App\Http\Controllers\API\v1\ServiceController::class);
    Route::apiResource('testimonial', \App\Http\Controllers\API\v1\TestimonialController::class);

}
);