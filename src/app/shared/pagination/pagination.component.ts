import {Component, Input, OnInit, Renderer} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input()
  pagSize;
  private arr;
  private activeIndex;
  constructor() { }

  ngOnInit() {
    this.arr = new Array(this.pagSize);
    this.activeIndex = 0;
  }
  toggleActive(id) {
    this.activeIndex = id;
  }

}
