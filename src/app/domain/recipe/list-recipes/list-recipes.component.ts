import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routeNames} from '../../../route-names';

@Component({
    selector: 'rb-list-recipes',
    templateUrl: './list-recipes.component.html',
    styleUrls: ['./list-recipes.component.scss']
})
export class ListRecipesComponent implements OnInit {

    constructor(private router: Router) {
    }

    public ngOnInit() {
    }

    public navigateToCreateRecipe(): void {
        this.router.navigate([routeNames.recipe.create]);
    }

}
