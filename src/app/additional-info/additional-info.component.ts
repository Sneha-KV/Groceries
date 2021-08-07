import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css']
})

export class AdditionalInfoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  @Input() info: any;
  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ApplicantDialog, {
      width: '750px',
      data: {...this.info}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'applicant-dialog',
  templateUrl: 'applicant-dialog.html',
})
export class ApplicantDialog {

  // @Input() info: any;
  constructor(
    public dialogRef: MatDialogRef<ApplicantDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
