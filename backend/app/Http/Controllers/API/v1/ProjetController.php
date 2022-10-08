<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Models\Projet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projets = Projet::all();

        return response()->json($projets);
    }

    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'title'         =>'required|max:255',
            'description'   => 'required',
            'image'         => ['required', 'mimes:png,jpeg,jpg', 'max:2024'],
            'template'      => 'required|string'
        ]);

        $extension = $request->image->extension();

        $fileName = $request->title.'.'.$extension;

        $path = $request->file('image')->storeAs(
            'asset/images',
            $fileName,
            'public'
        );

        // $path = $request->file('image')->store('public/asset/images');

        if ($validator->fails()) {
            return response()->json([
                'status'    => false,
                'message'   => $validator->errors()
            ],422
            );
        }

        $projet = Projet::create([
            'title'         => $request->title,
            'description'   => $request->description,
            'image'         => $path,
            'template'      => $request->template
        ]);

        return response()->json(['status' => true, 'projet' => $projet]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Projet  $projet
     * @return \Illuminate\Http\Response
     */
    public function show(Projet $projet)
    {
        return response()->json(['status' => true, 'projet' => $projet]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Projet  $projet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Projet $projet)
    {
        $validator = Validator::make($request->all(),[
            'title'         =>'required|max:255',
            'description'   => 'required',
            'image'         => ['required', 'mimes:png, jpeg, jpg', 'max:2024'],
            'template'      => 'required|string'
        ]);
        
        $path = $request->file('image')->store('public/asset/images');


        if ($validator->fails()) {
            return response()->json([
                'status'    => false,
                'message'   => $validator->errors()
            ],422
            );
        }

        $projet = Projet::update([
            'title'         => $request->title,
            'description'   => $request->description,
            'image'         => $path,
            'template'      => $request->template
        ]);
        return response()->json(['status' => true, 'projet' => $projet]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Projet  $projet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Projet $projet)
    {
        $projet->delete();
        
        return response()->json(['status'=>true , 'message' => 'Successfully deleted the resource']);
    }
}
