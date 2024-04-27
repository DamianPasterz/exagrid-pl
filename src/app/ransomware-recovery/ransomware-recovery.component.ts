import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VideoModalComponent } from '../video-modal/video-modal.component';

@Component({
  selector: 'app-ransomware-recovery',
  templateUrl: './ransomware-recovery.component.html',
  styleUrls: ['./ransomware-recovery.component.scss'],
})
export class RansomwareRecoveryComponent {
  constructor(public dialog: MatDialog) {}

  public openVideoModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      src: 'https://www.youtube.com/embed/E5hryNnHBzI?si=E8Y2mg0AugnkLHhG',
    };
    this.dialog.open(VideoModalComponent, dialogConfig);
  }
}
