<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Models\Formation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FormationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $formations = Formation::all();

        return response()->json(['data' => $formations]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required'
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                'status'    => false,
                'message'   => $validator->errors()
            ],422
            );
        }

        $formation = Formation::create($request->all());

        return response()->json(['status' => true, 'data' => $formation]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Formation  $formation
     * @return \Illuminate\Http\Response
     */
    public function show(Formation $formation)
    {
        return response()->json(['status' => true, 'data' => $formation]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Formation  $formation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Formation $formation)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required'
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                'status'    => false,
                'message'   => $validator->errors()
            ],422
            );
        }

        $formation->update($request->all());

        return response()->json(['status' => true, 'data' => $formation]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Formation  $formation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Formation $formation)
    {
        $formation->delete();

        return response()->json(['status'=>true , 'message' => 'Successfully deleted the resource']);
    }
}
