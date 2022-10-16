<?php

namespace App\Http\Controllers\API\v1;

use App\Models\Service;
use App\Models\Formation;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $testimonials = Testimonial::all();

        return response()->json(['data' => $testimonials]);
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
            'testimonialtable_id'   => 'integer',
            'testimonialtable_type' => 'string',
            'author'                => 'required|string|max:120',
            'content'               => 'required',
            'score'                 => 'integer|max:5'
        ]);


        if ($validator->fails()) {
            return response()->json([
                'status'    => false,
                'message'   => $validator->errors()
            ],422
            );
        }

        if ($request->testimonialtable_type == 'App\Models\Service') 
        {
            $service = Service::find($request->testimonialtable_id);

            $testimonial = Testimonial::create($request->all());

            $service->testimonials()->save($testimonial);

            return response()->json(['status' =>true, 'data' => $testimonial]);
        }
        else {

            $formation = Formation::find($request->testimonialtable_id);

            $testimonial = Testimonial::create($request->all());

            $formation->testimonials()->save($testimonial);
            
            return response()->json(['status' =>true, 'data' => $testimonial]);
        }
        
        
        // $testimonial = Testimonial::create($request->all());
        // return response()->json(['status' =>true, 'testimonial' => $testimonial]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */
    public function show(Testimonial $testimonial)
    {
        return response()->json(['status' => true, 'data' => $testimonial]);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Testimonial $testimonial)
    {
        $validator = Validator::make($request->all(),[
            'testimonialtable_id'   => 'integer',
            'testimonialtable_type' => 'string',
            'author'                => 'required|string|max:120',
            'content'               => 'required',
            'score'                 => 'integer|max:5'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'    => false,
                'message'   => $validator->errors()
            ],422
            );
        }

        $testimonial->update($request->all());

        return response()->json(['status' =>true, 'data' => $testimonial]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */
    public function destroy(Testimonial $testimonial)
    {
        $testimonial->delete();

        return response()->json(['status'=>true , 'message' => 'Successfully deleted the resource']);
    }
}
