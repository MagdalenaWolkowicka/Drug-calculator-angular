import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrugDose } from '../common/drug-dose';

@Injectable({
  providedIn: 'root'
})
export class DrugCalculatorService {
  private drugDoseUrl = 'http://localhost:8080/drugDose';
  private listDrugsUrl = 'http://localhost:8080/drugList';
  constructor(private httpClient: HttpClient) { }

  getDrugList(): Observable<any> {
    return this.httpClient.get<any>(this.listDrugsUrl);
  }

  getDrugDose(drugId: string, bodyWeight: number): Observable<DrugDose> {
    let params = new HttpParams().set("drugId", drugId).set("bodyWeight", bodyWeight);
    return this.httpClient.get<DrugDose>(this.drugDoseUrl, {params: params});
  }
}
