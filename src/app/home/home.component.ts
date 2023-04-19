import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
home = [

  {"id": 1, "name": "Angular1"},
  {"id": 2, "name": "Angular2"},
  {"id": 3, "name": "Angular3"},
  {"id": 4, "name": "Angular4"},
  {"id": 5, "name": "Angular5"},
  
]
  route: any;
  id: any;

  constructor() { }
    
  ngOnInit() {
    this.route.paramMap.subscribe((params: { get: (arg: string) => any; }) => {
        this.id = params.get('id');
    });

  }

 }