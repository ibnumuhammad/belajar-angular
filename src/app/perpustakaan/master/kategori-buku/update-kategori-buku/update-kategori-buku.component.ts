import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KategoriBukuService } from '../kategori-buku/kategori-buku.service';
import { ActivatedRoute, Router } from '@angular/router';
import { kategoribuku } from '../kategori-buku/kategori-buku.model';

@Component({
  selector: 'app-update-kategori-buku',
  templateUrl: './update-kategori-buku.component.html',
  styleUrls: ['./update-kategori-buku.component.css']
})
export class UpdateKategoriBukuComponent implements OnInit {

  formGroup: FormGroup;
  constructor(
    private _kategoriBukuService: KategoriBukuService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activtedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      id: this._formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      nama: this._formBuilder.control('', [Validators.required]),
      keterangan: this._formBuilder.control('')
    });

    this._activtedRoute.params.subscribe(params => {
      const kode = params['kode'];

      this._kategoriBukuService.findById(kode).subscribe((response: any) => {
        if (response.status == 200) {
          console.log(response.body);
          const value: kategoribuku = response.body
          this.formGroup.patchValue(value);
        } else {
          this._router.navigate(['/', 'perpustakaan', 'master', 'kategori', 'buku']);
        }
      }, errors => {
        console.error('data error');

      })
    })
  }

  send(event: any) {
    const value: kategoribuku = this.formGroup.value;
    this._kategoriBukuService.update(value).subscribe((response:any)=>{
      if (response.status == 200){
        this._router.navigate(['/', 'perpustakaan', 'master', 'kategori', 'buku']);
      }
    },error => {
      console.error(error);
      
    })
  }

}
