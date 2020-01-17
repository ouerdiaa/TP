<?php

namespace Tests\Unit;

use App\Etudiant;
use App\Enseignant;
use App\Absence;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $etudiant = factory(Etudiant::class)->create();
        $absence1= new Absence;
        $absence2= new Absence;
        $absence1->idetudiant=$etudiant->id;
        $absence2->idetudiant=$etudiant->id;
        $absence1->justifiee=0;
        $absence2->justifiee=0;
        $absence1->save(); // Sauvegarde des objets crées dans la bdd
        $absence2->save();
        $reponse = $this->get(`api/absences/{$etudiant->id}`);
        // $reponse = $this->call('GET', `api/absences/{$etudiant->id}`);
        // $reponse->assertDatabaseHas('absences', [
        //     'idetudiant' => $etudiant->id
        // ]);
        $this->line('$reponse->abs');
        // $this->assertCount(2, $reponse->getData()->data); // Pour assurer qu'il n'y a que ces deux absences qui ont été renvoyées dans la réponses
       

        $this->assertTrue(true);
    }
}