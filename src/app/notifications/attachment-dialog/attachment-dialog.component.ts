import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { AttachmentDetails } from 'src/app/models/attachment';

@Component({
  selector: 'attachment-dialog',
  templateUrl: './attachment-dialog.component.html',
  styleUrls: ['./attachment-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AttachmentDialogComponent implements OnInit {
  public AttachmentData: any;
  constructor(
    public matDialogRef: MatDialogRef<AttachmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public attachmentDetails: AttachmentDetails,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const fileURL = URL.createObjectURL(this.attachmentDetails.blob);
    this.AttachmentData = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
    // this.AttachmentData = fileURL;
    // console.log(this.AttachmentData);
  }

  CloseClicked(): void {
    this.matDialogRef.close(null);
  }
  // downloadFile(): void {
  //   console.log('download click')
  //   saveAs(this.attachmentDetails.blob, this.attachmentDetails.FileName);
  // }

}
