import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // @HostBinding('class') dropdown: string;

    // @HostListener('click') toggleOpen() {
    //     if(this.dropdown === 'open') {
    //         this.dropdown = '';
    //     } else {
    //         this.dropdown = 'open';
    //     }
    // }

    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click', ['$event']) toggleOpen() {
        this.isOpen = this.element.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private element: ElementRef) {}
}