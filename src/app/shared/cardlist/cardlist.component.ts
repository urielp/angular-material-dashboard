import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit {

  nameList = [
    {
      name:'שם כלשהוא הגיוני',
    },
    {
      name:'שם כלשהוא הגיוני',
    },
    {
      name:'שם כלשהוא הגיוני',
    },
    {
      name:'שם כלשהוא הגיוני',
    },
    {
      name:'שם כלשהוא הגיוני',
    },
    {
      name:'שם כלשהוא הגיוני',
    },
    {
      name:'שם כלשהוא הגיוני',
    },
    {
      name:'שם כלשהוא הגיוני',
    },
    {
      name:'שם כלשהוא הגיוני',
    },
    {
      name:'שם כלשהוא הגיוני',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
