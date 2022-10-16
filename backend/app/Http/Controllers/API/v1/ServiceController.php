<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $services = Service::all();

        return response()->json(['data' => $services]);
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
            'title'         => 'required|string',
            'description'   => 'required|string'
        ]);

        if ($validator->fails()) {
            return response->json([
                'status'    => false,
                'message'   => $validator->errors()
            ],422
            );
        }

        $service = Service::create($request->all());

        return response()->json(['status' => true, 'data' => $service]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function show(Service $service)
    {
        return response()->json(['status' => true, 'data' => $service]);
    }

 

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Service $service)
    {
        $validator = Validator::make($request->all(), [
            'title'         => 'required|string',
            'description'   => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'    => false,
                'message'   => $validator->errors()
            ],422
            );
        }

        $service->update($request->all());

        return response()->json(['status' => true, 'data' => $service]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function destroy(Service $service)
    {
        $service->delete();

        return response()->json(['status'=>true , 'message' => 'Successfully deleted the resource']);
    }
}
