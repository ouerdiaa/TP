<?php
namespace App\Http\Controllers;
session_start();
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Http\Resources\EtudiantResource;
use App\Http\Resources\AbsenceResource;
use App\Http\Resources\NameResource;
use App\Http\Resources\GroupesResource;
use App\Http\Resources\NomEnseignantResource;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function getetud()
    {
        $etud = \DB::table('etudiants')
        ->get() ;
        return EtudiantResource::collection($etud);
    }
    public static function listeetud($id_groupe)
    {
        
        $etud = \DB::table('etudiants')->where("groupe",$id_groupe)->where("anneesc",2019)
        ->get() ;
        return EtudiantResource::collection($etud);
    }

   
    
    
    public function getabs()
    {
        $abs= \DB::table('absences')->where("idetudiant",2)
        ->get();
        return AbsenceResource::collection($abs);
        
    }
    public function getnom()
    {
        //remplacer tous les 2 par session
        $nom= \DB::table('etudiants')->where("id",2)
        ->get();
        return NameResource::collection($nom);    
    }
    public function getgroupes()
    {
        $groupes = \DB::table('ensgroupes')->where("idprof",3)
        ->get();
        return GroupesResource::collection($groupes);    
         
    }
    public function getnomprof()
    {
        //remplacer tous les 2 par session
        $nom= \DB::table('enseignants')->where("id",3)
        ->get();
        return NomEnseignantResource::collection($nom);    
    }

    


}
