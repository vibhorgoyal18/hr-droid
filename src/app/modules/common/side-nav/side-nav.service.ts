import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {SideNavModel} from '../../../models/side-nav.model';


@Injectable()
export class SideNavService {

    isSideNavDisplayed: Subject<boolean> = new Subject<boolean>();
    sideNavObjects: Subject<SideNavModel> = new Subject<SideNavModel>();
    isSideNavToggleActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
