<?php
namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller {
    public function index(){ return Task::where('completed',0)->latest()->take(5)->get(); }
    public function store(Request $r){
        $r->validate(['title'=>'required']);
        return Task::create(['title'=>$r->title,'description'=>$r->description]);
    }
    public function complete($id){
        $t=Task::find($id);
        if(!$t) return response()->json(['error'=>'not found'],404);
        $t->completed=1; $t->save();
        return ['success'=>true];
    }
}
