import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  show = true;

  sentence: any = {
    message: 'Wassup, can a loc come up in your crib?',
    author: 'Lamar',
  };

  characters: string[] = ['Lamar', 'Franklin', 'Tanisha'];

  constructor() {}

  ngOnInit(): void {}
}
