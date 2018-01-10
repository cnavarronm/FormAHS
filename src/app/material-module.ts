import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatOptionModule,MatSelectModule} from '@angular/material';
@NgModule({
    imports:[MatButtonModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatOptionModule,MatSelectModule],
    exports:[MatButtonModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatOptionModule,MatSelectModule],

})

export class MaterialModule{}