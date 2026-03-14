import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Info } from './info/info';
import { Rsvp } from './rsvp/rsvp';
import { Footer } from './footer/footer';
import { Countdown } from './countdown/countdown';
import { CouplePhoto } from './couple-photo/couple-photo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, Info, Countdown, CouplePhoto, Rsvp, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}