import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private el: ElementRef) { }

  private highlight(color: string){
    this.el.nativeElement.style.color = color;
    // or we can user Rendere2.setStyle and Renderer2.removeStyle on leave
  }

  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }

  
}
