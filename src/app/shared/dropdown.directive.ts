import {Directive,HostListener,Input,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})

export class DropdownDirective {

@HostBinding('class.open') isOpen=false
 
  @HostListener('click') toggleOpne(){
      this.isOpen=!this.isOpen;
  } 

}