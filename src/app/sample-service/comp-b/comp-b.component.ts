import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { mahasiswa } from '../mahasiswa.model';
import { DataMahasiswaService } from '../data-mahasiswa.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  formGroup: FormGroup;
  list:string[];

  constructor(private dataService:DataMahasiswaService) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      'namaLengkap': new FormControl('')
    });
    this.list = this.dataService.list;
  }

  kirim(){
    let value: mahasiswa = this.formGroup.value;
    this.dataService.addItem(value.namaLengkap);
  }

}
