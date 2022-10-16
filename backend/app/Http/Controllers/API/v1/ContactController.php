<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = Contact::all();

        return response()->json(['data' => $contacts]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all() ,[

            'service_id'    => ['required'],
            'name'          => ['required','max:120'],
            'email'         => ['required','email'],
            'phone'         => ['required','max:25'],
            'message'       => ['required']
        ]);


        if ($validator->fails()) {
            return response()->json([
                'status'=> false,
                'message' => $validator->errors()
            ],422
            );
        } 

        $contact = Contact::create($request->all());
        return response()->json(['status' => true,'data' => $contact]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        return response()->json(['status' => true,'data' => $contact]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        $validator= Validator::make($request->all() ,[

            'service_id'    => ['required'],
            'name'          => ['required','max:120'],
            'email'         => ['required'],
            'phone'         => ['required','max:25'],
            'message'       => ['required']
        ]);

        if($validator->fails()){
            return response()->json(
                [
                    'status'=>false,
                    'message'=>$validator->errors()
                ], 422
            );
        }

        $contact->update($request->all());

        return response()->json(['status'=>true , 'data'=>$contact]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();

        return response()->json(['status'=>true , 'message'=>'Successfully deleted the resource']);
    
    }
}
