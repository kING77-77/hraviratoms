import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TelegramService } from '../telegram';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rsvp.html',
  styleUrl: './rsvp.css',
})
export class Rsvp {

  name = '';
  surname = '';
  come = '';
  guests = 1;
  isSending = false;

  constructor(private telegram: TelegramService) {}

  send(e: Event) {
    e.preventDefault();

    if(this.name == '' || this.surname == '' || this.come == '') {
      alert('Խնդրում ենք լրացնել բոլոր դաշտերը! / Пожалуйста, заполните все поля!');
      return;
    }

    this.isSending = true;

    // Simulate sending time briefly for UX, then actually trigger telegram service
    setTimeout(() => {
      try {
        this.telegram.send({
          name: this.name,
          surname: this.surname,
          come: this.come,
          guests: this.guests
        });
        alert('Շնորհակալություն պատասխանի համար! / Спасибо за ответ!');
        
        // Reset form
        this.name = '';
        this.surname = '';
        this.come = '';
        this.guests = 1;
      } catch (err) {
        alert('Произошла ошибка / Սխալ տեղի ունեցավ');
      } finally {
        this.isSending = false;
      }
    }, 800);
  }
}