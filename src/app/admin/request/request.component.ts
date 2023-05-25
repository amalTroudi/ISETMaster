import { Component ,OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl ,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./ request.component.css']
})
export class RequestComponent {
  datademande
  ={
    id : '' ,
    status : '',
    refus_reason:'',
 
  }
  update: any;
  messageSuccess: string | undefined;
  messageErr =''
  counter:any
  dataArray:any = [] ;
  constructor(private demandesService: AuthentificationService,private route:Router  ) {
    this.demandesService.getalldemandes().subscribe(data=>{
      this.dataArray=data
      debugger
      console.log(this.dataArray)
      this.counter = this.dataArray.length , (err:HttpErrorResponse)=>{
      this.messageErr="this user not found"} 
    
    }) 
    this.update = new FormGroup({
      status: new FormControl(''),
      refus_reason: new FormControl(''),
    });


  
  }
  
  deleterequest(id:any  ){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.demandesService.deleterequest(id).subscribe(response=>{
           
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        window.location.reload()
      }
    })
  }
  updatedemande (f:any){

    let data=f.value
  const formData = new FormData();
  formData.append('status', this.update.value.status );
  formData.append('refus_reason', this.update.value.refus_reason);
  Swal.fire({
    title: 'Action Irreversible,Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      debugger
      this.demandesService.updatedemande(this.datademande.id,formData).subscribe(Response=>
        {
         
          let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.datademande.id)
  
          //this.dataArray[indexId].id=data.id
          this.dataArray[indexId].status=data.status
          this.dataArray[indexId].refus_reason=data.refus_reason
          
          this.messageSuccess=`this demande : ${this.dataArray[indexId].status} is updated`
          
         this.route.navigate(['/postulated-missions-client']);
        
        },(err:HttpErrorResponse)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You cant update twice!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        
        })
      Swal.fire('Saved!', '', 'success')
      window.location.reload()
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  }) 
  }  
  getdata(status:string,refus_reason:string , id:any){
    this.datademande.id=id
    this.datademande.status=status
    this.datademande.refus_reason=refus_reason
    console.log(this.datademande)
  }


  


}

