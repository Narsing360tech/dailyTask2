import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective {
  @Input('appHighlightText') isActive: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.isActive) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'green');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
    }
  }

}
