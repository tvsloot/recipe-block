import {NgModule} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';

const MAT_MODULES = [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
];

const CDK_MODULES = [
    DragDropModule
];

@NgModule({
    imports: [...MAT_MODULES, ...CDK_MODULES],
    exports: [...MAT_MODULES, ...CDK_MODULES]
})
export class CustomAngularMaterialModule {
}
