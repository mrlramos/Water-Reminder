import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { IntervalDialogModalComponent } from '../interval-dialog-modal/interval-dialog-modal.component';

@Component({
  selector: 'app-reminder',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    IntervalDialogModalComponent,
  ],
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss'],
})
export class ReminderComponent {
  reminderInterval: any;
  audio = new Audio('assets/reminder-sound.wav');

  constructor(private dialog: MatDialog) {}

  startReminder() {
    const dialogRef = this.dialog.open(IntervalDialogModalComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const intervalMs = result * 60000;
        this.reminderInterval = setInterval(() => {
          this.audio.play();
        }, intervalMs);
      }
    });
  }

  stopReminder() {
    if (this.reminderInterval) {
      clearInterval(this.reminderInterval);
    }
  }
}
