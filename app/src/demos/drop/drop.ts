import { Component } from 'angular2/core';

import { DROP_DIRECTIVES } from '../../drop/drop';

///////////////////
///////////////////

class Friend {
    constructor(
        public name: string,
        public age: number
    ) {}
}

@Component({
    selector: 'drop-demo',
    directives: [DROP_DIRECTIVES],
    template: `
        <h2>Drop</h2>

        <button class="btn btn-default" (click)="reset()">
            reset friend
        </button>

        <br>
        <br>

        <drop [(value)]="friend">
            <drop-item>Select a Friend</drop-item>
            <drop-item *ngFor="#friend of friends" [label]="friend.name" [value]="friend">
                {{friend.name}}
            </drop-item>
        </drop>

        <pre><code>selected friend : {{ friend | json }}</code></pre>
    `
})

export class DropDemo {

    friends: Array<Friend> = [
        new Friend('Curtis Newcomer', 29),
        new Friend('Andrew VanHorn', 25),
        new Friend('William Zablocki', 29),
        new Friend('Jake Webb', 30),
        new Friend('Stephanie Billovits', 25),
        new Friend('Ben Myerson', 34),
        new Friend('Chris Elkins', 40)
    ];

    friend: Friend = this.friends[0];

    reset() {
        this.friend = null;
    }

}
