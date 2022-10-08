<?php

namespace App\Http\Controllers\API\v1;

use App\Models\Newsletter;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class NewsletterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $newsletters = Newsletter::all();

        return response()->json($newsletters);
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
            'email'             => 'required|email',
            'actif'             => 'required|boolean',
            'dateDesactivation' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'    => false,
                'message'   => $validator->errors(),
            ],422
            );
        }

        $newsletter = Newsletter::create($request->all());

        return response()->json(['status' => true, 'newsletter' => $newsletter]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Newsletter  $newsletter
     * @return \Illuminate\Http\Response
     */
    public function show(Newsletter $newsletter)
    {
        return response()->json(['status' => true, 'newletter' => $newsletter]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Newsletter  $newletter
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Newsletter $newsletter)
    { 
        $validator = Validator::make($request->all(), [
            'email'             => 'required|email',
            'actif'             => 'required',
            'dateDesactivation' => 'required|string'
        ]);

        // $validator = Validator::make($request->all(), [
        //     'title' => 'required'
        // ]);

        if ($validator->fails()) {
            return response()->json([
                'status'    => false,
                'message'   => $validator->errors(),
            ],422
            );
        }

        $newsletter->update($request->all());

        return response()->json(['status' => true, 'newsletter' => $newsletter]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Newsletter  $newsletter
     * @return \Illuminate\Http\Response
     */
    public function destroy(Newsletter $newsletter)
    {
        $newsletter->delete();

        return response()->json(['status'=>true , 'message' => 'Successfully deleted the resource']);
    }
}
