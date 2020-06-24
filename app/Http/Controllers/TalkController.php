<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Request\TalkRequest;
use App\Helper\Functions\HelperTrait;
use App\Talk;


class TalkController extends Controller
{

    use HelperTrait;

    public function getTalks() {
        $talks = Talk::latest()->get();
        return $this->apiResponse(200, 'success', $talks);
    }

    public function addTalk(TalkRequest $request) {

        // validate requests
        $validatedTalk = $request->validated();

        // creates a talk 
        $createdTalk = Talk::createIfNotExist($validatedTalk);

        $formatted = $this->formatData($createdTalk);
        
        // checks if attendees were passed in the request and syncs that with talk model i.e 
        if($request->attendees) {
         $createdTalk->attendees()->sync($request->attendees);
        }

        return $this->apiResponse(201, 'success', $formatted);
    }


    public function deleteTalk($id) {
        $talk = Talk::find($id);

        $talk->attendees()->detach();

        $talk->delete();

        return $this->apiResponse(204, 'success', []);
    }
}
