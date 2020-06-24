<?php

namespace App\Http\Controllers;
use App\Attendee;
use App\Request\AttendeeRequest;
use App\Helper\Functions\HelperTrait;

class AttendeeController extends Controller
{
    use HelperTrait;

    public function getAttendees() {
        $attendees =  Attendee::latest()->get();
        return $this->apiResponse(200, 'success', $attendees);
 
     }

    public function addAttendee(AttendeeRequest $request) {
        $validatedAttendee = $request->validated();

        $attendee = Attendee::createIfNotExist($validatedAttendee);

        return $this->apiResponse(201, 'success', $attendee);
    }

    
}
