import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {unitsOfMeasurement} from '../units-of-measurement';
import {Ingredient} from '../ingredients';

export interface ViewIngredientData {
    ingredient: Ingredient;
}

@Component({
    selector: 'rb-view-ingredient',
    templateUrl: './view-ingredient.component.html',
    styleUrls: ['./view-ingredient.component.scss']
})
export class ViewIngredientComponent implements OnInit {

    public unitsOfMeasurement = unitsOfMeasurement;
    public ingredientForm: FormGroup;
    public ingredient: Ingredient;

    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<ViewIngredientComponent, ViewIngredientData>,
                @Inject(MAT_DIALOG_DATA) public data: ViewIngredientData) {
    }

    public ngOnInit(): void {
        this.ingredient = this.data.ingredient;
        this.buildForm();
    }

    public saveIngredient(): void {
        const data: ViewIngredientData = {ingredient: this.ingredientForm.value};
        this.dialogRef.close(data);
    }

    public cancel(): void {
        this.dialogRef.close();
    }

    private buildForm(): void {
        this.ingredientForm = this.formBuilder.group({
            id: [this.ingredient.id],
            name: [this.ingredient.name, Validators.required],
            quantity: this.formBuilder.group({
                unit: [this.ingredient.quantity.unit, Validators.required],
                value: [this.ingredient.quantity.value, Validators.min(0.0001)]
            })
        });
    }
}

export type ViewIngredientDialogRef = MatDialogRef<ViewIngredientComponent, ViewIngredientData>;
