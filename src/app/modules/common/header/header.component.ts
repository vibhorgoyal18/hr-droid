import {Component, Input, OnInit} from '@angular/core';
import {SideNavService} from '../side-nav/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isSecuredLayout = false;
  isSideNavDisplayed: boolean;
  constructor(private sideNavService: SideNavService) {
  }

  ngOnInit() {
  }

    showHideSideNav() {
    this.isSideNavDisplayed = !this.isSideNavDisplayed;
    this.sideNavService.isSideNavDisplayed.next(this.isSideNavDisplayed);
  }
}
