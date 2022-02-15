<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    protected $fillable = [
        'round_one_winner_id',
        'round_two_winner_id',
        'round_three_winner_id',
    ];

}
