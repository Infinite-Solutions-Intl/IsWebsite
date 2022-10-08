<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
class ContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'service_id' => rand(1,20),
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'phone' => rand(10,1000),
            'message' => fake()->sentence(5)
        ];
    }
}
