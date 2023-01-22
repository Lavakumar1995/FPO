import { Component, OnInit } from '@angular/core';
declare var $: any;  
import * as AOS from 'aos';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    AOS.init();
    AOS.refresh();




    $(document).ready(function(){
      $("#flip").click(function(){
        $("#panel").slideDown("slow");
      });
    });

    


  }


}
