import {Component, OnInit} from '@angular/core'
import {Location} from '@angular/common'
import {BreakpointObserver} from '@angular/cdk/layout'

const BREAKPOINTS = {
  MOBILE: 320
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public SIDENAV_WIDTH = '300px'

  constructor(
    public breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {

  }

  get isMobile() {
    return this.breakpointObserver.isMatched(`(max-width: ${BREAKPOINTS.MOBILE}px)`)
  }
}
