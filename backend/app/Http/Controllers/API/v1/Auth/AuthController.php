<?php

namespace App\Http\Controllers\API\v1\Auth;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request){

       $validator = Validator::make($request->all(),[
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        'password' => ['required', 'string', 'min:8', 'confirmed'],
       ]);

        if ($validator->fails()) {
            return response()->json([
                    'status'=>false,
                    'message' => $validator->errors()
                ],422
            );
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'email_verified_at' => now(),
            'password' => Hash::make($request->password),
            'remember_token' => Str::random(10),
        ]);

        $token = $user->createToken('isolutions')->plainTextToken;

        return response()->json(
            [
                'status' => true,
                'access_token' => $token,
                'user' => $user
            ],200
        );

    }

    public function login(Request $request){
       
        $validator = Validator::make($request->all(),[
            'email'=>'required|email',
            'password' => 'required|min:8',
        ]);   
 
        if ($validator->fails()) {
            return response()->json([
                    'status'=>false,
                    'message' => $validator->errors()
                ],422
            );
        }

        $user = User::where('email', $request->email)->first();

        if (!$user || $user->email!=$request->email) {
            return response()->json([
                'status' => false,
                'message' => "L\'email ou le mot de passe est incorrecte",
            ],401);
        }
        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => false,
                'message' => "L\'email ou le mot de passe est incorrect",
            ],401);
        }

        $token = $user->createToken('isolutions')->plainTextToken;

        return response()->json([
            'status' => true,
            'message' => 'Connexion réussie',
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout(Request $request){
        // Auth::logout();
 
        // $request->session()->invalidate();
     
        // $request->session()->regenerateToken();
     
        // return 'redirect()';
    }
}
