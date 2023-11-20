import { Component } from '@angular/core';
import { Carousel, Dropdown, initTE,Collapse,Ripple  } from 'tw-elements';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-scope';
  ngOnInit() {
    initTE({ Carousel, Dropdown,Collapse,Ripple  });
  }

}
