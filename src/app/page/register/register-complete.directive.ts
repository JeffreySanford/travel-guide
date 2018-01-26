import { Directive } from '@angular/core';

@Directive({
  selector: '[register-complete]',
  exportAs: 'register-complete'
})
export class RegisterCompleteDirective {

  constructor() { }

}
