<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//Talk Routes
Route::get('/talks', 'TalkController@getTalks');
Route::post('/talks', 'TalkController@addTalk');
Route::delete('/talks/{id}', 'TalkController@deleteTalk');
Route::get('/talk/attendees/{id}', 'TalkController@getTalkAttendees');

//Attendee Routes
Route::post('/attendee', 'AttendeeController@addAttendee');
Route::get('/attendees', 'AttendeeController@getAttendees');
// Route::post()
