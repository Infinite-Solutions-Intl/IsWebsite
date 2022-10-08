<?php

namespace App\Models;

use App\Models\Formation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Date extends Model
{
    use HasFactory;
    
    protected $guarded = [];


    /**
     * Get the formation that owns the Date
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function formation(): BelongsTo
    {
        return $this->belongsTo(Formation::class);
    }

}
