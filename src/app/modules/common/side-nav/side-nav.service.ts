import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export interface SideNavItem {
  name: string;
  routerLink: string;
  children?: SideNavItem[];
}

@Injectable()
export class SideNavService {

  isSideNavDisplayed: Subject<boolean> = new Subject<boolean>();
  sideNavObjects: Subject<SideNavItem> = new Subject<SideNavItem>();

  public showSideNav(sideNavObjects: SideNavItem) {
    this.isSideNavDisplayed.next(true);
    this.sideNavObjects.next(sideNavObjects);
  }

  public hideSideNav() {
    this.isSideNavDisplayed.next(false);
  }
}
