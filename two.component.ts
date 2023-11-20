import { Component } from '@angular/core';
import { Carousel, Dropdown, initTE,Collapse,Ripple  } from 'tw-elements';


@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {
  ngOnInit() {
    initTE({ Carousel, Dropdown,Collapse,Ripple  });
  }

}
