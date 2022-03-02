import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[restrictSpecialChar]'
})

export class RestrictSpecialChar {

  constructor(private el: ElementRef) { }

  omit_special_char(keyCode: any) {
    return (keyCode > 64 && keyCode < 91) || (keyCode > 96 && keyCode < 123) || keyCode == 8 || keyCode == 32
      || (keyCode >= 48 && keyCode <= 57);
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    let e = <KeyboardEvent>event;
    const { keyCode, ctrlKey, metaKey, shiftKey } = e;
    if (
      // Allow: Ctrl+A
      (keyCode === 65 && (ctrlKey || metaKey)) ||
      // Allow: Ctrl+C
      (keyCode === 67 && (ctrlKey || metaKey)) ||
      // Allow: Ctrl+V
      // (keyCode === 86 && (ctrlKey || metaKey)) ||
      // Allow: Ctrl+X
      (keyCode === 88 && (ctrlKey || metaKey)) ||
      // Allow: home, end, left, right
      (keyCode >= 35 && keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }

    if (!this.omit_special_char(keyCode) || shiftKey) {
      e.preventDefault();
    }
  }

}
