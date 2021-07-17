import { Directive, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[specialIsAlphaNumeric]'
})

//директива для отсеивания лишних символов
export class SpecialCharacterDirective {

  private regexStr_input = '^[а-яА-Яa-zA-Z0-9]*$';
  private regexStr_clipboard = /[^а-яА-Яa-zA-Z0-9]/g;

  @Input() isAlphaNumeric: boolean;

  constructor( ) { }


  @HostListener('keypress', ['$event']) onKeyPress(event) {
    return new RegExp(this.regexStr_input).test(event.key);
  }

  @HostListener('paste', ['$event']) blockPaste(event: ClipboardEvent) {
    this.validateFields(event);
  }

  validateFields(event: ClipboardEvent) {
    event.preventDefault();
    const pasteData = event.clipboardData.getData('text/plain').replace(this.regexStr_clipboard, '');
    document.execCommand('insertHTML', false, pasteData);
  }
}
