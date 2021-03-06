import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { GivenDose } from '../common/given-dose';
import { GivenDrugService } from '../services/given-drug.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-save-given-dose',
  templateUrl: './given-dose.component.html',
  styleUrls: ['./given-dose.component.css']
})

export class GivenDoseComponent implements OnInit {

    
  @ViewChild('givenDoseForm', { static: false })
  givenDoseForm: NgForm;

  givenDoseData: GivenDose;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'drug', 'dateOfAdministration', 'actions'];

  isEditMode = false;

  constructor(private givenDoseService: GivenDrugService) { 
    this.givenDoseData = {} as GivenDose
  }

  ngOnInit(): void {
    this.getAllGivenDoses();
  }

  editItem(element: any) {
    this.givenDoseData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.givenDoseForm.resetForm();
  }

  getAllGivenDoses() {
    this.givenDoseService.getGivenDoses().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    });
  }

  addGivenDose() {
      this.givenDoseService.addGivenDose(this.givenDoseData).subscribe((response: GivenDose) => {
        this.dataSource.data.push({ ...response })
        this.dataSource.data = this.dataSource.data.map((o: any) => {
        return o;
      })
    });
  }

  updateGivenDose() {
    this.givenDoseService.updateGivenDose(this.givenDoseData).subscribe((response: GivenDose) => {

      // Approach #1 to update datatable data on local itself without fetching new data from server
      this.dataSource.data = this.dataSource.data.map((o: any) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      })
      this.cancelEdit()
    });
}

deleteGivenDose(id: any) {
  this.givenDoseService.deleteGivenDose(id).subscribe((response: any) => {
    this.dataSource.data = this.dataSource.data.filter((o: any) => {
      return o.id !== id ? o : false;
    });
})
}

onSubmit() {
  if (this.givenDoseForm.form.valid) {
    if (this.isEditMode)
      this.updateGivenDose()
    else
      this.addGivenDose();
  } else {
    console.log('Enter valid data!');
  }
}

}