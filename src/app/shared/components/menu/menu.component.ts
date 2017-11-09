import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { collapse } from '../../animation/collapse-animate';
@Component({
  selector: 'du-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [collapse]
})

export class MenuComponent implements OnInit {
  @Input() menuInfo: any;

  @Output() chooseMenuItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  isToggleOn(item) {
    item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
  }

  public onChooseMenuItem(item) {
    this.chooseMenuItem.emit(item);
  }

}
