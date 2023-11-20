import { Component } from '@angular/core';
import { Carousel, Dropdown, initTE,Collapse,Ripple  } from 'tw-elements';
import {Lightbox} from "tw-elements";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  ngOnInit() {
    initTE({ Carousel, Dropdown,Collapse,Ripple,Lightbox  });
  }

}
