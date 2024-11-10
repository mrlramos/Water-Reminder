import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-interval-dialog-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './interval-dialog-modal.component.html',
  styleUrls: ['./interval-dialog-modal.component.scss'],
})
export class IntervalDialogModalComponent {
  interval: number = 60;

  constructor(public dialogRef: MatDialogRef<IntervalDialogModalComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(this.interval);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
