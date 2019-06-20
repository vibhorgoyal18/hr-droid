import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {SideNavModel} from '../../../models/side-nav.model';


@Injectable()
export class SideNavService {

    isSideNavDisplayed: Subject<boolean> = new Subject<boolean>();
    sideNavObjects: Subject<SideNavModel[]> = new Subject<SideNavModel[]>();
}
