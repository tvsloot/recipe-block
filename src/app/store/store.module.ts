import {isDevMode, NgModule} from '@angular/core';
import {provideReduxForms} from '@angular-redux/form';
import {NgReduxRouter} from '@angular-redux/router';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {Middleware, StoreEnhancer} from 'redux';
import {createLogger} from 'redux-logger';
import {rootReducer} from './reducers';
import {AppState, initialState} from '../app-state';

@NgModule({
    imports: [NgReduxModule],
    providers: [NgReduxRouter]
})
export class StoreModule {

    private enhancers: Array<StoreEnhancer<AppState>> = [];
    private middleware: Array<Middleware> = [];

    constructor(private store: NgRedux<AppState>,
                private devTools: DevToolsExtension,
                private ngReduxRouter: NgReduxRouter) {
        this.configureStore();
    }

    private configureStore(): void {
        this.enableLogger();
        this.enableDevTools();
        this.store.configureStore(rootReducer, initialState, this.middleware, this.enhancers);
        this.initializeReduxRouter();
        provideReduxForms(this.store);
    }

    private enableLogger(): void {
        this.middleware.push(createLogger());
    }

    private enableDevTools() {
        if (isDevMode() && this.devTools.isEnabled()) {
            this.enhancers = [...this.enhancers, this.devTools.enhancer()];
        }
    }

    private initializeReduxRouter(): void {
        if (this.ngReduxRouter) {
            this.ngReduxRouter.initialize();
        }
    }
}
