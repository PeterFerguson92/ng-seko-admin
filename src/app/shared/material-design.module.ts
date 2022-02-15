import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatInputModule,
         MatGridListModule, MatExpansionModule, MatDialogModule, MatTooltipModule, MatButtonToggleModule, MatOptionModule, MatChipsModule,
         MatBottomSheetModule, MatSnackBarModule, MatProgressSpinnerModule, MatTableModule, MatTabsModule,  MatBadgeModule, MatSelectModule,
         MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [MatButtonModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
            MatInputModule, MatCardModule, MatGridListModule, MatExpansionModule, MatDialogModule, MatTooltipModule, MatButtonToggleModule,
            MatOptionModule, MatChipsModule, MatBottomSheetModule, MatSnackBarModule, MatProgressSpinnerModule, MatTableModule,
            MatTabsModule, MatBadgeModule, MatSelectModule, MatCheckboxModule, MatInputModule],
})
export class MaterialDesignModule { }
