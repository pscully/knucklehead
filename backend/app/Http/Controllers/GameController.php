<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;

class GameController extends Controller
{
    public function create()
    {
        $game = new Game();
        dd($game);
    }
}
