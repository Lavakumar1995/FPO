import { Component, OnInit } from '@angular/core';
declare var $: any;  
import * as AOS from 'aos';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    AOS.init();
  }

}
