import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomStructuralDerictive]'
})
export class CustomStructuralDerictiveDirective {

  constructor(private template : TemplateRef<any> ,private viewControllerRef : ViewContainerRef ) { }

  @Input('appCustomStructuralDerictive') set appCustomStructuralDerictive(condition : boolean)
  {
    if(condition){
      this.viewControllerRef.createEmbeddedView(this.template)
    } else{
      this.viewControllerRef.clear()
    }
  }

}
