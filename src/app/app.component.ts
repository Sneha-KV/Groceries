import { Component } from '@angular/core';
import listData from './_files/listData.json';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'json-file-read-angular';
  public applicantsList:{id:number, name:string, position: string, applied: string, 
    experience: number, availability: any, questions: any}[] = listData;

  public dashboard = DashboardTableComponent;
}

