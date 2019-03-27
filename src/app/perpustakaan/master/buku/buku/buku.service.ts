import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { buku } from './buku.model';

@Injectable({
  providedIn: 'root'
})
export class BukuService {

  constructor(private _httpClient:HttpClient) { }

  findAll(){
    return this._httpClient.get('/api/buku/json/list');
  }

  findById(id:string){
    return this._httpClient.get(`/api/buku/${id}`,{observe:'response'});
  }

  save(buku: buku){
    return this._httpClient.post('/api/buku/',buku,{observe:'response'});
  }

  update(buku:buku){
    return this._httpClient.put('/api/buku/',buku,{observe:'response'});
  }
  delete(id:string){
    return this._httpClient.delete(`/api/buku/${id}`,{observe:'response'});
  }

}
