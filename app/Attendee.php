<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attendee extends Model
{
    protected $hidden = ['pivot'];
    protected $fillable = [
        'first_name', 
        'last_name',
        'address',
        'phone', 
        'job_title', 
        'reason_for_attending'
    ];

    // public $timestamps;
    
    public static function createIfNotExist($req){

        $result = self::where($req)->first();
        if(!empty($result)){
            return false;
        }
        return self::create($req);
    }

    public function talks() {
        return $this->belongsToMany(Talk::class);
    }
}
