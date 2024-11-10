import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ReminderComponent } from './components/reminder/reminder.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ReminderComponent,
    MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'water-reminder-frontend';
}
