import { Injectable } from '@angular/core';
import applicantsList from './_files/listData.json';
// import test from './_files'
import { listData } from './dashboard-table/dashboard-table.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor() { }

  getApplicantsList(): listData[] {
    console.log(applicantsList);
    return applicantsList;
  }

  // Local storage
  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getItem(key: string){ 
    return localStorage.getItem(key)
  }  
  
  public removeItem(key:string) {
    localStorage.removeItem(key);
  }  
  
  public clear(){
    localStorage.clear(); 
  }
}
