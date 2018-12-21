import {Component, Inject} from '@angular/core';
import {unitsOfMeasurement} from '../units-of-measurement';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Ingredient} from '../../recipe';

@Component({
    selector: 'rb-view-ingredient',
    templateUrl: './view-ingredient.component.html',
    styleUrls: ['./view-ingredient.component.scss']
})
export class ViewIngredientComponent {

    public unitsOfMeasurement = unitsOfMeasurement;

    constructor(public dialogRef: MatDialogRef<ViewIngredientComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Ingredient) {
    }

    public cancel(): void {
        this.dialogRef.close();
    }

}
