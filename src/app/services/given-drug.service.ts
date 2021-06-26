import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GivenDose } from '../common/given-dose';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class GivenDrugService {
  private listGivenDosesUrl = 'http://localhost:8080/givenDoses';
  private saveGivenDoseUrl = 'http://localhost:8080/saveGivenDose';
  private deleteGivenDoseUrl = 'http://localhost:8080/deleteGivenDose';
  constructor(private httpClient: HttpClient) { }

  getGivenDoses(): Observable<any> {
    return this.httpClient.get<any>(this.listGivenDosesUrl);
  }

  addGivenDose(givenDose: GivenDose): Observable<GivenDose> {
    let givenDoseJson = JSON.stringify(givenDose)
    return this.httpClient.post<GivenDose>(this.saveGivenDoseUrl, givenDoseJson, httpOptions);
  }

  deleteGivenDose(drugId: number): Observable<GivenDose> {
    let params = new HttpParams().set("id", drugId);
    return this.httpClient.delete<GivenDose>(this.deleteGivenDoseUrl, {params: params});
  }

}