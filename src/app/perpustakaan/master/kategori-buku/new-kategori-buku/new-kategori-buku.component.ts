import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KategoriBukuService } from '../kategori-buku/kategori-buku.service';
import { kategoribuku } from '../kategori-buku/kategori-buku.model';

@Component({
  selector: 'app-new-kategori-buku',
  templateUrl: './new-kategori-buku.component.html',
  styleUrls: ['./new-kategori-buku.component.css']
})
export class NewKategoriBukuComponent implements OnInit {

  formGroup: FormGroup;
  @Output() submitted = new EventEmitter<string>();

  constructor(
    private _kategoriBukuService: KategoriBukuService,
    private _formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      id: this._formBuilder.control('',[Validators.required, Validators.minLength(3)]),
      nama: this._formBuilder.control('',[Validators.required]),
      keterangan: this._formBuilder.control('')
    });
  }

  send(event: any){
    const data: kategoribuku = this.formGroup.value;
    this._kategoriBukuService.save(data).subscribe(response =>{
      if(response.status == 200){
        alert('data berhasil disimpan');
        this.submitted.emit('berhasil');
      }
    }, error =>{
      console.error(error);
      
    })
  }

}
