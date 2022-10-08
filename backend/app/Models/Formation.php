<?php

namespace App\Models;

use App\Models\Date;
use App\Models\Pricing;
use App\Models\Service;
use App\Models\Testimonial;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Formation extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    /**
     * The services that belong to the Formation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function services(): BelongsToMany
    {
        return $this->belongsToMany(Service::class);
    }

    
    public function testimonials()
    {
        return $this->morphMany(Testimonial::class, 'testimonialtable');
    }

    /**
     * Get all of the dates for the Formation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function dates(): HasMany
    {
        return $this->hasMany(Date::class);
    }

    /**
     * Get all of the pricings for the Formation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function pricings(): HasMany
    {
        return $this->hasMany(Pricing::class);
    }
}
