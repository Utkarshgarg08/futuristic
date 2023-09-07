import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Options {
  value: string;
  isActive?: boolean;
  }

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit{

  constructor() {}

  public testForm!: NgForm;
  public isDropDownOpen: boolean = false;
  public dropdown: string = '';

  @Input('options') options!: Options[];

  ngOnInit() {
    this.options.forEach((opt) => {
      opt.isActive = false;
    });
  }

  toggleDropdown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  selectOption(evt: any, optionIndex: number) {
    this.options.forEach((opt: any, index: number) => {
      opt.isActive = optionIndex === index;
    });
    this.dropdown = evt.target.innerHTML;
    console.log(this.dropdown)
  }

}
