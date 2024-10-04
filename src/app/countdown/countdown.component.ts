import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  countdownDate: number;
  remainingTime!: string;
  intervalId: any;

  constructor() {
    // Setze das Ziel-Datum für den Countdown
    this.countdownDate = new Date('Oct 31, 2024 00:00:00').getTime();
  }

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // Stoppe den Timer, wenn die Komponente zerstört wird
  }

  startCountdown(): void {
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.countdownDate - now;

      // Berechne Tage, Stunden, Minuten und Sekunden
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Aktualisiere die verbleibende Zeit
      if (distance < 0) {
        clearInterval(this.intervalId);
        this.remainingTime = 'Countdown abgelaufen!';
      } else {
        this.remainingTime = `${days} Tage ${hours} Stunden ${minutes} Minuten ${seconds} Sekunden`;
      }
    }, 1000);
  }
}
