import { Component } from '@angular/core';
import { Carousel, Dropdown, initTE } from 'tw-elements';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit() {
    initTE({ Carousel, Dropdown });
  }

}
