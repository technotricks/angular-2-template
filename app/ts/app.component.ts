import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    //template: '<h1>{{ mainHeading }}</h1>'
   templateUrl:'app/ts/app.component.html',
    directives:[PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;


    constructor() {
        this.videos = [
            new Video(1,"Title 1","sCnGSOaaZFo","Description 1"),
            new Video(2,"Title 2","sCnGSOaaZFo","Description 2"),
            new Video(3,"Title 3","sCnGSOaaZFo","Description 3"),
            new Video(4,"Title 4","sCnGSOaaZFo","Description 4")
        ]
    }
}
