/**
 * Created by NM on 10/4/2016.
 */


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.scss']
})
export class ViewMemberComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('view member init');
  }

}
