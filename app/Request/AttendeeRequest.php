<?php

namespace App\Request; 

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\HttpResponseException;

class AttendeeRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required|string|min:3|max:25',
            'last_name' => 'required|string|min:3|max:25',
            'address' => 'required|string',
            'phone' => 'required|string|max:14',
            'job_title' => 'required|string',
            'reason_for_attending' => 'required|max:1000'
           
        ];
    }

     /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        return [
            'first_name' => 'first name is required',
            'last_name' => 'last name is required',
            'address' => 'address is required',
            'phone' => 'phone number is required',
            'job_title' => 'job title is required',
            'reason_for_attending' => 'reason for attending is required'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $errors = (new ValidationException($validator))->errors();
        throw new HttpResponseException(response()->json(['errors' => $errors
        ], 422));
        // JsonResponse::HTTP_UNPROCESSABLE_ENTITY
    }
}