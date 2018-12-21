import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RecipeModule} from './domain/recipe/recipe.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routing/app.routes';
import {PageNotFoundComponent} from './page-not-found.component';
import {StoreModule} from './store/store.module';
import {AppStateService} from './store/app-state.service';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        BrowserAnimationsModule,
        RecipeModule,
        StoreModule
    ],
    providers: [
        AppStateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
