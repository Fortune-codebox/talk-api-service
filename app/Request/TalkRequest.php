<?php

namespace App\Request; 

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\HttpResponseException;

class TalkRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'host' => 'required|string',
            'guest_speaker' => 'required|string',
            'theme' => 'required|string',
            'start_time' => 'required|date'
           
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
            'host' => 'host field is required',
            'guest_speaker' => 'guest speaker field is required',
            'theme' => 'theme field is required',
            'date' => 'date field is required',
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