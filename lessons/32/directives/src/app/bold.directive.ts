import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  	@Input() selectedSize = "18px";
    @Input() defaultSize = "16px";
    @Input() selectColor = "#ff1187";
     
    private defaultColor:string = "black";
    private fontSize : string;
    private fontWeight = "normal";
    private color = "black";
    ngOnInit(){
        this.fontSize = this.defaultSize;
    }
     
    @HostBinding("style.fontSize") get getFontSize(){
         
        return this.fontSize;
    }
     
    @HostBinding("style.fontWeight") get getFontWeight(){
         
        return this.fontWeight;
    }

    @HostBinding("style.color") get getColor(){
         
        return this.color;
    }
     
    @HostBinding("style.cursor") get getCursor(){
        return "pointer";
    }
     
    @HostListener("mouseenter") onMouseEnter() {
        this.fontWeight ="bold";
        this.fontSize = this.selectedSize;
        this.color = this.selectColor;
    }
 
    @HostListener("mouseleave") onMouseLeave() {
        this.fontWeight = "normal";
        this.fontSize = this.defaultSize;
        this.color = this.defaultColor;
    }

}
