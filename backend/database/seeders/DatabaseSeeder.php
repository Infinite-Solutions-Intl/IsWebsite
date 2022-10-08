<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Date;
use App\Models\Projet;
use App\Models\Contact;
use App\Models\Pricing;
use App\Models\Service;
use App\Models\Formation;
use App\Models\Newsletter;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(5)->create();

        Newsletter::truncate();
        Formation::truncate();
        Projet::truncate();
        Service::truncate();
        Contact::truncate();
        Date::truncate();
        Pricing::truncate();
        // Testimonial::truncate();

        \App\Models\Newsletter::factory(20)->create();
        \App\Models\Formation::factory(20)->create();
        \App\Models\Projet::factory(20)->create();
        \App\Models\Service::factory(20)->create();
        \App\Models\Contact::factory(10)->create();
        \App\Models\Date::factory(10)->create();
        \App\Models\Pricing::factory(10)->create();
        //\App\Models\Testimonial::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
