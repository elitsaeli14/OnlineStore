import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { TV } from '../tv';
import { PHONE } from '../phone';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  television = TV;
  phone = PHONE;

  constructor() { }

  ngOnInit() {
  }

}
