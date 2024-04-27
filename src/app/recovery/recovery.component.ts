import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VideoModalComponent } from '../video-modal/video-modal.component';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss'],
})
export class RecoveryComponent {
  showVideo = false; // Zmienna kontrolująca wyświetlanie wideo

  constructor(public dialog: MatDialog) {}

  openVideoModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      src: 'https://www.youtube.com/embed/nPvdXRFSO4s?si=B9UnMMYw5hnSjbgB',
    };
    this.dialog.open(VideoModalComponent, dialogConfig);
  }
}
