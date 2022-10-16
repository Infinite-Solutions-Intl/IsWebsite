<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Models\Date;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dates = Date::all();

        return response()->json(['data' => $dates]);
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
            'formation_id'  => 'required',
            'date'          => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'    => false,
                'message'   => $validator->errors()
            ],422
            );
        }

        $date = Date::create($request->all());

        return response()->json(['status' => true, 'data' => $date]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Date  $date
     * @return \Illuminate\Http\Response
     */
    public function show(Date $date)
    {
        return response()->json(['status' => true, 'data' => $date]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Date  $date
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Date $date)
    {
        $validator = Validator::make($request->all(), [
            'formation_id'  => 'required',
            'date'          => 'required'
        ]);

        if ($validator->fails()) {
            return response->json([
                'status'    => false,
                'message'   => $validator->errors()
            ],422
            );
        }

        $date->update($request->all());

        return response()->json(['status' => true, 'data' => $date]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Date  $date
     * @return \Illuminate\Http\Response
     */
    public function destroy(Date $date)
    {
        $date->delete();

        return response()->json(['status'=>true , 'message' => 'Successfully deleted the resource']);
    }
}
