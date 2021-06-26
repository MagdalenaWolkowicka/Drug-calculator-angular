import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DrugCalculatorComponent } from './drug-calculator/drug-calculator.component';
import { AppComponent } from './app.component';
import { DrugInfoComponent } from './drug-info/drug-info.component';
import { HttpClientModule } from '@angular/common/http';
import { DrugCalculatorService } from './services/drug-calculator.service';
import { GivenDoseComponent } from './given-dose/given-dose.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {
      path: 'drugsInfo',
      component: DrugInfoComponent
  },
  {
      path: 'calculateDose',
      component: DrugCalculatorComponent
  },
  {
    path: 'givenDose',
    component: GivenDoseComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DrugCalculatorComponent,
    DrugInfoComponent,
    GivenDoseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,

    // Material Modules 
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports:[RouterModule],
  providers: [DrugCalculatorService, DrugCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
