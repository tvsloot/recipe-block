import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatInputModule} from '@angular/material';

const MAT_MODULES = [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule
];

@NgModule({
    imports: MAT_MODULES,
    exports: MAT_MODULES
})
export class CustomAngularMaterialModule {
}
