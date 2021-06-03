import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  banner = {
    id: 1,
    path: '../../../assets/undraw_Growth_analytics_re_pyxf.svg',
    description: 'banner'
  }

  service: any[] = []

  constructor() {
    this.service = [
      {
        id: 1,
        path: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title: 'Software development',
        description: 'asd'
      },
      {
        id: 2,
        path: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
        title: 'Advisory',
        description: ''
      },
      {
        id: 3,
        path: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title: 'Electronic security',
        description: ''
      }
    ]

   }

  ngOnInit(): void {
  }

}
