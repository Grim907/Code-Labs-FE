import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set unless(condition: boolean) {
    if (!condition){
      this.vcRef.createEmbeddedView(this.templateRef)
    }else {
      this.vcRef.Ref.clear{}
    }
  }

  constructor(private templetRef: TemplateRef<any>, private vcRef: ViewContainerRef ) { }

}
