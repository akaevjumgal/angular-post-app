import {Component} from '@angular/core'
import {Location} from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public location: Location) { }

  get isRoot(): boolean {
    return this.location.isCurrentPathEqualTo('/')
  }
}
