<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AddressRequest;
use App\Models\Address;

class AddressController extends Controller
{
    
    public function createAddress(AddressRequest $request) {
        $address = new Address;
        $address->createAddress($request);
        return response()->json(['address'=>$address]);
    }

    public function getAddress($id) {
        $address = Address::findOrFail($id);
        return response()->json(['address'=>$address]);
    }

    public function updateAddress(AddressRequest $request, $id) {
        $address = Address::findOrFail($id);
        $address->updateAddress($address);
        return response()->json(['address'=>$address]);
    }

    public function deleteAddress($id) {
        $address = Address::findOrFail($id);
        $address->delete();
        return response()->json('Address deleted.');
    }

    public function testar() {
        return 'f';
    }
}
