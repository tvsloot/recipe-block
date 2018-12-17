import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RecipeModule} from './domain/recipe/recipe.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {PageNotFoundComponent} from './page-not-found.component';
import {StoreModule} from './store/store.module';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        RecipeModule,
        StoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
