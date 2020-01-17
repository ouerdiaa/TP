<?php

namespace Tests\Unit;
use App\Etudiant;
use App\Enseignant;
use App\Absence;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;


class MesAbsencestest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testExample()
    {
        
        $this->assertTrue(true);
    }
    public function test_absences_etudiant()
    // {
    //     $etudiant = factory(Etudiant::class)->create();
    //     $absence1= new Absence;
    //     $absence2= new Absence;
    //     $absence1->idetudiant=$etudiant->id;
    //     $absence2->idetudiant=$etudiant->id;
    //     $absence1->justifie=0;
    //     $absence2->justifie=0;

    //     $absence1->save(); 
    //     $absence2->save();
    //     $reponse = $this->call('GET', `/api/absences/{$etudiant->id}`);
    //     $this->assertCount(2, $reponse->getData()->data);

    //     $this->assertEquals($absence1->id, $reponse->getData()->data[0]->id);
    //     $this->assertEquals($absence2->id, $reponse->getData()->data[1]->id);
    //     $this->assertTrue(false);
    // }
}
