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

    Route::apiResource('contact', \App\Http\Controllers\API\v1\ContactController::class);
    Route::apiResource('newsletter', \App\Http\Controllers\API\v1\NewsletterController::class);

    Route::get('date', [\App\Http\Controllers\API\v1\DateController::class, 'index']);
    Route::get('date/{date}', [\App\Http\Controllers\API\v1\DateController::class, 'show']);

    Route::get('formation', [\App\Http\Controllers\API\v1\FormationController::class, 'index']);
    Route::get('formation/{formation}', [\App\Http\Controllers\API\v1\FormationController::class, 'show']);

    Route::get('pricing', [\App\Http\Controllers\API\v1\PricingController::class, 'index']);
    Route::get('pricing/{pricing}', [\App\Http\Controllers\API\v1\PricingController::class, 'show']);

    Route::get('projet', [\App\Http\Controllers\API\v1\ProjetController::class, 'index']);
    Route::get('projet/{projet}', [\App\Http\Controllers\API\v1\ProjetController::class, 'show']);

    Route::get('service', [\App\Http\Controllers\API\v1\ServiceController::class, 'index']);
    Route::get('service/{service}', [\App\Http\Controllers\API\v1\ServiceController::class, 'show']);

    Route::get('testimonial', [\App\Http\Controllers\API\v1\TestimonialController::class, 'index']);
    Route::get('testimonial/{testimonial}', [\App\Http\Controllers\API\v1\TestimonialController::class, 'show']);
});


Route::middleware('auth:sanctum')->prefix('v1')->group(function (){
    Route::post('date', [\App\Http\Controllers\API\v1\DateController::class, 'store']);
    Route::match(['put', 'patch'] ,'date/{date}', [\App\Http\Controllers\API\v1\DateController::class, 'update']);
    Route::delete('date/{date}', [\App\Http\Controllers\API\v1\DateController::class, 'destroy']);

    Route::post('formation', [\App\Http\Controllers\API\v1\FormationController::class, 'store']);
    Route::match(['put', 'patch'] ,'formation/{formation}', [\App\Http\Controllers\API\v1\FormationController::class, 'update']);
    Route::delete('formation/{formation}', [\App\Http\Controllers\API\v1\FormationController::class, 'destroy']);

    Route::post('pricing', [\App\Http\Controllers\API\v1\PricingController::class, 'store']);
    Route::match(['put', 'patch'] ,'pricing/{pricing}', [\App\Http\Controllers\API\v1\PricingController::class, 'update']);
    Route::delete('pricing/{pricing}', [\App\Http\Controllers\API\v1\PricingController::class, 'destroy']);

    Route::post('projet', [\App\Http\Controllers\API\v1\ProjetController::class, 'store']);
    Route::match(['put', 'patch'] ,'projet/{projet}', [\App\Http\Controllers\API\v1\ProjetController::class, 'update']);
    Route::delete('projet/{projet}', [\App\Http\Controllers\API\v1\ProjetController::class, 'destroy']);

    Route::post('service', [\App\Http\Controllers\API\v1\ServiceController::class, 'store']);
    Route::match(['put', 'patch'] ,'service/{service}', [\App\Http\Controllers\API\v1\ServiceController::class, 'update']);
    Route::delete('service/{service}', [\App\Http\Controllers\API\v1\ServiceController::class, 'destroy']);

    Route::post('testimonial', [\App\Http\Controllers\API\v1\TestimonialController::class, 'store']);
    Route::match(['put', 'patch'] ,'testimonial/{testimonial}', [\App\Http\Controllers\API\v1\TestimonialController::class, 'update']);
    Route::delete('testimonial/{testimonial}', [\App\Http\Controllers\API\v1\TestimonialController::class, 'destroy']);
}
);