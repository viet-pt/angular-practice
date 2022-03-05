import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[maxlengthCkeditor]'
})

export class MaxlengthCkeditor {
  @Input() maxlengthCkeditor: number;
  public allowTyping: boolean = true;

  constructor() { }

  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    let e = <KeyboardEvent>event;
    if (!this.allowTyping) {
      e.preventDefault();
    }

    // if (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) { // Ctrl+V
    // }
  }

  @HostListener('change', ['$event']) onChange({ editor }: any) {
    const data = editor.getData();
    const strippedString = data.replace(/(<([^>]+)>)/gi, "");
    this.allowTyping = strippedString.length < this.maxlengthCkeditor;
  }
}
