import { Component } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  frecciaDown = faChevronDown;

  TransactionDown(anything: any) {
    const element = document.getElementById("main-section");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
