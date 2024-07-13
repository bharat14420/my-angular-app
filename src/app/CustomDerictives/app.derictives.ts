import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector :  '[setBackgroundDerictive]'
})
export class setBackgroundDerictive
{
    constructor(private element : ElementRef,private renderer : Renderer2) {
       element.nativeElement.style.backgroundColor = "#CFD8DC"
       }
       
    @HostBinding('style.backgroundColor') backgroundcolour : string = "pink"    //change css properties

    @HostListener('mouseenter') onMouserOver(){
        this.renderer.setStyle(this.element.nativeElement, "backgroundColor", "yellow") //change any property even value 
    }

    @HostListener('mouseleave') onMouserOut(){
        console.log(1212)
        this.renderer.setStyle(this.element.nativeElement, "backgroundColor", "pink")
        }


}


    