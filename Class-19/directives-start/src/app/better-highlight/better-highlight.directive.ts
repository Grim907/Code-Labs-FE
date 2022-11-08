import { Directive, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @Input() defaultColor: string = 'transparent'
  @Input('appBetterHighlight') highlightColor: string = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor: string = ;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
 ngOnInit () {
  this.backgroundColor = this.defaultColor
  //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false )
 }
 @HostListener('mouseenter') mouseenter(eventData: Event) {
  //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue',)
  this.backgroundColor = this.highlightColor
}
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent',)
    this.backgroundColor = 'transparent'
  }
}
