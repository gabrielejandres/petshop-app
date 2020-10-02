<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Requests\AddressRequest;
use Illuminate\Http\Request;

class Address extends Model
{
    use HasFactory;

    public function createAddress(AddressRequest $request) {
        $this->street = $request->street;
        $this->number = $request->number;
        $this->district = $request->district;
        $this->city = $request->city;
        $this->state = $request->state;
        $this->postalCode = $request->postalCode;
        $this->complement = $request->complement;
        $this->save();
    }

    public function updateAddress(AddressRequest $request) {
        if($request->street) {
            $this->street = $request->street;
        }
        if($request->number) {
            $this->number = $request->number;
        }
        if($request->district) {
            $this->district = $request->district;
        }
        if($request->city) {
            $this->city = $request->city;
        }
        if($request->state) {
            $this->state = $request->state;
        }
        if($request->postalCode) {
            $this->postalCode = $request->postalCode;
        }
        if($request->complement) {
            $this->complement = $request->complement;
        }
        
        $this->save();
    }
}
