import { Component, OnInit } from '@angular/core';
import { kategoribuku } from './kategori-buku.model';
import { KategoriBukuService } from './kategori-buku.service';

@Component({
  selector: 'app-kategori-buku',
  templateUrl: './kategori-buku.component.html',
  styleUrls: ['./kategori-buku.component.css']
})
export class KategoriBukuComponent implements OnInit {

  list: Array<kategoribuku> = [];

  constructor(private _kategoriBukuService: KategoriBukuService) { }

  ngOnInit() {
    this._kategoriBukuService.findAll().subscribe(
      (response: any) =>{
        this.list = response;
        console.log(response);
      }, error =>{
        console.error(error);
        
      }
    )
  }

  detailData(id: string){
    this._kategoriBukuService.findById(id).subscribe(
      (Response : any) =>{
        console.log(Response);
        if (Response.status == 200){
          console.log(Response.body);
        }else{
          alert(`data kategori tidak ditemukan`);
        }
      }, error =>{
        console.error(error);
        
      }
    )
  }

  removeById(data:string){
    this._kategoriBukuService.delete(data).subscribe((response:any)=>{
      if(response.status ==200){
        this.ngOnInit();
      }
    })
  }

}
