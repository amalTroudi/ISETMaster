import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/app/model /user.model';
import Swal from 'sweetalert2';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'addMaster',
  templateUrl: './addMaster.component.html',
  styleUrls: ['./addMaster.component.css']
})
export class AddMasterComponent {
item: any;
submit: any;
addnewemployee!: FormGroup<any>;
 /* addnewemployeednewemployee: FormGroup<{ email: any; password: any; nom: any; prenom: any; cin: any; datenaissance: any; }>;
  constructor(private usersService:AuthentificationService,private route:Router ,private activatedRoute: ActivatedRoute  ) {
    this.addnewemployeednewemployee = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      cin: new FormControl('', [Validators.required]),
      datenaissance: new FormControl('', [Validators.required])
    });
  }
  user: any ; 
  messageErr: any;
  value: any;
  addnewemployee (value:any){
    const data = {
      user :{
        email:this.user.email,
        password:this.user.password,
        role : this.user.role, 
        name : this.user.name,
      }
    };
    this.usersService.addnewemployee(data).subscribe( 
      (Response: any)=>{
        console.log(Response)
        Swal.fire('Saved!', '', 'success')
        window.location.reload()
    
      },(err:HttpErrorResponse)=>{
        this.messageErr=err.error      
      }) ;
    }
  */

  }
