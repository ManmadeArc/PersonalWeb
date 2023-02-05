import { Component, OnInit } from '@angular/core';
import { assigments } from 'src/assigments';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  links =  assigments.links
  ngOnInit(): void {
   console.log(this.links)

  }



}
