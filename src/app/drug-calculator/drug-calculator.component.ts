import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DrugDose } from '../common/drug-dose';
import { DrugCalculatorService } from '../services/drug-calculator.service';

@Component({
  selector: 'app-drug-calculator',
  templateUrl: './drug-calculator.component.html',
  styleUrls: ['./drug-calculator.component.css']
})
export class DrugCalculatorComponent implements OnInit {
  drugs: string[];
  dose: DrugDose = new DrugDose();
  drugCalculatorForm = this.formBuilder.group({
    selectedDrug: '',
    bodyWeight: '',
    singleDose: "",
    maxDose: ""
  });

  constructor(private drugCalculatorService: DrugCalculatorService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getDrugList();
  }

  getDrugList(): void {
    this.drugCalculatorService.getDrugList().subscribe(
      drugs => this.drugs = drugs
    )
  }

  getDrugDose(): void {
    let bodyWeight : number = + this.drugCalculatorForm.value.bodyWeight;
    console.log(this.drugCalculatorForm.value.selectedDrug)
    this.drugCalculatorService.getDrugDose(this.drugCalculatorForm.value.selectedDrug, bodyWeight).subscribe(
      data => {
        this.dose = data;
        this.drugCalculatorForm.patchValue({
          singleDose: this.dose.singleDose,
          maxDose: this.dose.maxDose
        })
      }
    )
  }

}
