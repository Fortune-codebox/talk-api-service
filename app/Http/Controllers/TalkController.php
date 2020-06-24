<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Request\TalkRequest;
use App\Helper\Functions\HelperTrait;
use App\Talk;


class TalkController extends Controller
{

    use HelperTrait;
    
    // gets all talks created
    public function getTalks() {
        // get all talks LIFO i.e last in first out
        $talks = Talk::latest()->get();

        // checks if the query was not empty then return the talk array
        if($talks) {
            return $this->apiResponse(200, 'success', $talks);
        }
        
        // else return an empty array
        return $this->apiResponse(200, 'success', []);
    }

    public function addTalk(TalkRequest $request) {

        // validate talk requests
        $validatedTalk = $request->validated();

        // creates a talk if it doesn't exist
        $createdTalk = Talk::createIfNotExist($validatedTalk);

        $formatted = $this->formatData($createdTalk);
        
        // if attendees was sent from the request it will sync the pivot table else it will create the talk without attendees
        if($request->attendees) {
         $createdTalk->attendees()->sync($request->attendees);
        }

        return $this->apiResponse(201, 'success', $formatted);
    }


    public function deleteTalk($id) {
        // find the record you wanna delere
        $talk = Talk::find($id);

        // detach/remove/delete the records from all assiociative pivot tables and relationships
        $talk->attendees()->detach();

        // delete the $talk
        $talk->delete();

        //return response
        return $this->apiResponse(204, 'success', []);
    }
}
