import { Component } from '@angular/core';

@Component({
  selector: 'app-reminder',
  standalone: true,
  imports: [],
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.scss'
})
export class ReminderComponent {
    reminderInterval: any;
    audio = new Audio('assets/reminder-sound.wav');

    startReminder() {
        const interval = prompt('Insira o intervalo de lembrete em minutos:', '60');
        if (interval) {
            const intervalMs = parseInt(interval) * 60000;
            this.reminderInterval = setInterval(() => {
            this.audio.play();
            }, intervalMs);
        }
    }

    stopReminder() {
        if (this.reminderInterval) {
            clearInterval(this.reminderInterval);
        }
    }
}