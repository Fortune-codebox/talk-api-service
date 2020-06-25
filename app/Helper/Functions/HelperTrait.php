<?php

namespace App\Helper\Functions;

use App\Response\Response;

trait HelperTrait {
    
    protected function apiResponse($status_code = 0, $status, $data){
        if( !isset($data) || !isset($status)){
            return false;
        }
        if($status_code != 0)
            $res = new Response($status_code, $status, $data);
        else
            $res = new Response($status_code, $status, $data);
       return $res->send();
    }

    protected function formatData($data) {
        return [
            'id' => (int) $data->id,
            'host' => (string) $data->host,
            'guest_speaker' => (string) $data->guest_speaker,
            'theme' => (string) $data->theme,
            'start_time' => date("Y-m-d", strtotime($data->start_time)),
            'created_at' => date("Y-m-d H:i:s", strtotime($data->created_at))

        ];
    }


}


