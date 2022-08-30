import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare let $: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  ngAfterViewInit() {
    $('.mainBanner').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    }) 
  }

  slideOpts = {
    initialSlide: 0,
    speed: 700,
    loop: true,
    autoplay: {
          delay: 1200
    },
  };
  
 constructor() { }
}