import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})

export class PlayerComponent {

    constructor(private router: Router){}

    backHome(): void {
        this.router.navigate([""])
    }

}