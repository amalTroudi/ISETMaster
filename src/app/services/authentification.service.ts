import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  logout() {
    throw new Error('Method not implemented.');
  }
  getemploye() {
    throw new Error('Method not implemented.');
  }


  email: any;
  constructor(private http : HttpClient , public router: Router) { }
  
  public getAllusers(){
    return this.http.get(environment.urlBackend + 'employees/')
  }

  public login(data:any): Observable<any> {
    return this.http.post(environment.urlBackend + 'sessions/', data);
  }
  deleteemployee(id:any){
    return this.http.delete(environment.urlBackend+'deleteemployee/' + id )
  }
  addnewemployee(data:any){
    return this.http.post<any>(environment.urlBackend + 'registrations/' , data)
  }
  updateemployee(id:string,newdata:any){
    return this.http.patch(environment.urlBackend+'updateemployeebyadmin/' + id , newdata )
  }
  createuser(data:any)
{
return this.http.post(environment.urlBackend+'registrations/', data);
}
deleterequest(id:any)
{
return this.http.delete(environment.urlBackend+'demandes/'+id);

}
getalldemandes() {
  return this.http.get(environment.urlBackend+'demandes/');
}
updatedemande(id: string, formData: FormData) {
  return this.http.patch(environment.urlBackend+'demandes/'+id,FormData);
}
}
