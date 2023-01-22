import { Component, OnInit } from '@angular/core';
declare var $: any;  
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    AOS.init();
    // AOS.refresh();

  //   $(window).scroll(function() {
  //     if ($("#return-to-top").scrollTop() >= 50) {        // If page is scrolled more than 50px
  //         $('#return-to-top').fadeIn(200);    // Fade in the arrow
  //     } else {
  //         $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  //     }
  // });
  // $('#return-to-top').click(function() {      // When arrow is clicked
  //     $('body,html').animate({
  //         scrollTop : 0                       // Scroll to top of body
  //     }, 500);
  // });

  }

}
