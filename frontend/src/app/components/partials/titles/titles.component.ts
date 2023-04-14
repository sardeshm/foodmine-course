import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss'],
})
export class TitlesComponent implements OnInit {
  constructor() {}

  @Input()
  title!: string;

  @Input()
  margin? = '1rem 0rem 0.2rem;';

  @Input()
  fontSize? = '1.7rem';
  ngOnInit(): void {}
}
