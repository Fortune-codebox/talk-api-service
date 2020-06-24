<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Talk extends Model
{
    protected $table = "talks";
    protected $hidden = ['pivot'];
    protected $fillable = [
        'host', 'guest_speaker', 'theme','start_time'
    ];
    // public $timestamps = false;

    public function attendees() {
        return $this->belongsToMany(Attendee::class);
    }

    public static function createIfNotExist($req){

        $result = self::where($req)->first();
        if(!empty($result)){
            return false;
        }
        return self::create($req);
    }
}
