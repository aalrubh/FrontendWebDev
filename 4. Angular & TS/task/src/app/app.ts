import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Basiccomponent } from './components/basiccomponent/basiccomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Basiccomponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('task');

  myname = signal("ali");
  myage = signal(23);
  amhappy = signal(false);
  disabled = signal(false);

  buttonhandler() {
    console.log("Button Pressed")
    if (!this.amhappy()) {
    this.amhappy.update(v => true);
      this.disabled.update(v => true);
    }
  }
}
