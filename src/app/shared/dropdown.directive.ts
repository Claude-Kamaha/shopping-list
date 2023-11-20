import { HostBinding, HostListener } from '@angular/core';
import { Directive } from 'angular/core';

@Directive({
  selector: '[appDropdown]',

})

export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;


  @HostListener('click') tocggleClick() {
    this.isOpen = !this.isOpen
  }

}
