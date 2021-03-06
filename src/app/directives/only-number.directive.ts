import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyNumber]'
})
export class OnlyNumber {

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    let e = <KeyboardEvent>event;
    const { keyCode, ctrlKey, metaKey, shiftKey } = e;

    if ([46, 8, 9, 27, 13, 110].indexOf(keyCode) !== -1 ||
      // Allow: Ctrl+A
      (keyCode === 65 && (ctrlKey || metaKey)) ||
      // Allow: Ctrl+C
      (keyCode === 67 && (ctrlKey || metaKey)) ||
      // Allow: Ctrl+V
      (keyCode === 86 && (ctrlKey || metaKey)) ||
      // Allow: Ctrl+X
      (keyCode === 88 && (ctrlKey || metaKey)) ||
      // Allow: home, end, left, right
      (keyCode >= 35 && keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((shiftKey || (keyCode < 48 || keyCode > 57)) && (keyCode < 96 || keyCode > 105)) {
      e.preventDefault();
    }
  }
}
