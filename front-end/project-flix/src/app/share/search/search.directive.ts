import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appSearch]'
})
export class SearchDirective {

    @Input() width = ''

    constructor(private el: ElementRef,private render: Renderer2) {}
    

    @HostListener('click')
    open(){
        
        let a = this.render.parentNode(this.el.nativeElement) 
        if(a.previousElementSibling.placeholder == "Search..."
        ){

            this.render.setStyle(a.parentElement,'width', `30px`)
            a.previousElementSibling.placeholder = 'close'
            this.render.setStyle(a.previousElementSibling,'display', `none`)

        }
        else{
            this.render.setStyle(a.parentElement,'width', `250px`)
            a.previousElementSibling.placeholder = "Search..."
            this.render.setStyle(a.previousElementSibling,'display', ``)
            this.render.setStyle(a.previousElementSibling,'padding', `10px`)

        }

    }

}