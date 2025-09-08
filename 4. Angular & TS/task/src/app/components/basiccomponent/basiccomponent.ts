import { Component, input } from '@angular/core';

@Component({
  selector: 'app-basiccomponent',
  imports: [],
  templateUrl: './basiccomponent.html',
  styleUrl: './basiccomponent.scss'
})
export class Basiccomponent {
  name    = input();
  age     = input();
  ishappy = input();
}
