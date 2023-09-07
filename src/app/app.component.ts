import { Component } from '@angular/core';
import { Options } from './custom-dropdown/custom-dropdown.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'futuristic';
  public optionsList1: Options[] = [
    { value: 'Option 1' },
    { value: 'Option 2' },
    { value: 'Option 3' },
    { value: 'Option 4' },
    { value: 'Option 5' },
    { value: 'Option 6' },
    { value: 'Option 7' },
    { value: 'Option 8' },
    { value: 'Option 9' },
    { value: 'Option 10' },
    { value: 'Option 11' },
  ];
}
