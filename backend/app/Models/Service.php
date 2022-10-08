<?php

namespace App\Models;

use App\Models\Projet;
use App\Models\Contact;
use App\Models\Formation;
use App\Models\Testimonial;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Service extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    /**
     * Get all of the contacts for the Service
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function contacts(): HasMany
    {
        return $this->hasMany(Contact::class);
    }

    /**
     * The formations that belong to the Service
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function formations(): BelongsToMany
    {
        return $this->belongsToMany(Formation::class);
    }

    /**
     * The projets that belong to the Service
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function projets(): BelongsToMany
    {
        return $this->belongsToMany(Projet::class);
    }

    public function testimonials()
    {
        return $this->morphMany(Testimonial::class, 'testimonialtable');
    }

}
