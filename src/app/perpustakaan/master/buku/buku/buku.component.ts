import { Component, OnInit } from '@angular/core';
import { buku } from './buku.model';
import { BukuService } from './buku.service';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {

  list:Array<buku>=[];
  constructor(private _bukuService: BukuService) { }

  ngOnInit() {
    this._bukuService.findAll().subscribe(
      (response:any)=>{
        this.list = response;
        console.log(response);
      }, error =>{
        console.error(error);
        
      }
    )
  }

}
