<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Models\Pricing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PricingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pricings = Pricing::all();

        return response()->json(['data' => $pricings]);
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
            'formation_id'  => 'integer',
            'mount'         => 'required'
        ]);

        if ($validator->fails()) {
            return response->json([
                'status'    => false,
                'message'   => $validator->errors()
            ],422
            );
        }

        $pricing = Pricing::create($request->all());

        return response()->json(['status' => true, 'data' => $pricing]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pricing  $pricing
     * @return \Illuminate\Http\Response
     */
    public function show(Pricing $pricing)
    {
        return response()->json(['status' => true, 'data' => $pricing]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pricing  $pricing
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pricing $pricing)
    {
        $validator = Validator::make($request->all(), [
            'formation_id'  => 'integer',
            'mount'         => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'    => false,
                'message'   => $validator->errors()
            ],422
            );
        }

        $pricing->update($request->all());

        return response()->json(['status' => true, 'data' => $pricing]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pricing  $pricing
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pricing $pricing)
    {
        $pricing->delete();

        return response()->json(['status'=>true , 'message' => 'Successfully deleted the resource']);
    }
}
