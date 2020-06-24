<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Talk Routes
Route::get('/talks', 'TalkController@getTalks');
Route::post('/talks', 'TalkController@addTalk');
Route::delete('/talks/{id}', 'TalkController@deleteTalk');

//Attendee Routes
Route::post('/attendee', 'AttendeeController@addAttendee');
Route::get('/attendees', 'AttendeeController@getAttendees');
