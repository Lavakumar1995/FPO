import { Component, OnInit } from '@angular/core';
declare var $: any;  
import * as AOS from 'aos';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    AOS.init();

  }

}
