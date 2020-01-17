<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\User;
use App\Etudiant;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Etudiant::class, function (Faker $faker) {
    return [
        'nom' => $faker->name,
        'prenom' =>'aejje',
        'matricule' => 100,
        'anneesc'=>2019,
        'niveau' => 3,
        'groupe'=>'1CSG01'
        
        
    ];
});
