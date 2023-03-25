import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    collapsed = true;
    @Output() selected = new EventEmitter<{type: string}>();

    onClicked(type: string) {
        this.selected.emit({type: type});
    }
}