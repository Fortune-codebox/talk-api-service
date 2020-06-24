<?php

namespace App\Http\Controllers;
use App\Attendee;
use App\Request\AttendeeRequest;
use App\Helper\Functions\HelperTrait;

class AttendeeController extends Controller
{
    use HelperTrait;

    public function getAttendees() {
        // get all attendees LIFO i.e last in first out
        $attendees =  Attendee::latest()->get();

        // checks if the query to get attendees was not empty then return the attendees
        if($attendees) {
            return $this->apiResponse(200, 'success', $attendees);
        }
        
        // else return an empty array
        return $this->apiResponse(200, 'success', []);
 
     }

    public function addAttendee(AttendeeRequest $request) {
        //validates the attendee request on creating an attendee
        $validatedAttendee = $request->validated();
        
        //create a record of a new attendee if it does not exist
        $attendee = Attendee::createIfNotExist($validatedAttendee);

        // returns a response with the attendee created
        return $this->apiResponse(201, 'success', $attendee);
    }

    
}
