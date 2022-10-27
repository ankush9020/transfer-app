import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

  getAccountHolderData() {
    return this.http.get(`${this.apiUrl}` + '/transfer').pipe();
  }

  saveAccountHolder(transfer: any) {

    return this.http.post(`${this.apiUrl}` + '/transfer', transfer).pipe();
  }

  updateAccountHolder(transfer: any) {

    return this.http.post(`${this.apiUrl}` + '/transfer', transfer).pipe();
  }

  public deleteAccountHolder(id: any) {
    return this.http.delete(`${this.apiUrl}` + '/transfer/'+ id).pipe();
  }



}
