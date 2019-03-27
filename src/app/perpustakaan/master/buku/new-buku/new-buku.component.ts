import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BukuService } from '../buku/buku.service';
import { buku } from '../buku/buku.model';

@Component({
  selector: 'app-new-buku',
  templateUrl: './new-buku.component.html',
  styleUrls: ['./new-buku.component.css']
})
export class NewBukuComponent implements OnInit {

  formGroup: FormGroup;
  @Output() submitted = new EventEmitter<string>();
  constructor(
    private _bukuService: BukuService,
    private formBuilder : FormBuilder  
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nama: this.formBuilder.control('',[Validators.required]),
      isbn: this.formBuilder.control('',[Validators.required]),
      penerbit: this.formBuilder.control('',[Validators.required]),
      rak: this.formBuilder.control(''),
      kategori: this.formBuilder.control('')
      
    });
  }

  send(event:any){
    const data: buku = this.formGroup.value;
    this._bukuService.save(data).subscribe(response=>{
      if(response.status == 200){
        alert('data berhasil disimpan');
        this.submitted.emit('berhasil');
      }
    }, error=>{
      console.error(error);
      
    })
  }
}
