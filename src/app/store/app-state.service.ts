import {ClientEvent} from './client-event';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../app-state';
import {Injectable} from '@angular/core';

@Injectable()
export class AppStateService {

    constructor(private ngRedux: NgRedux<AppState>) {
    }

    public fireEvent(event: ClientEvent): void {
        this.ngRedux.dispatch(event);
    }
}
