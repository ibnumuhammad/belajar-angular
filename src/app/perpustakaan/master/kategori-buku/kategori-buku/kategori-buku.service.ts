import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { kategoribuku } from './kategori-buku.model';


@Injectable()

export class KategoriBukuService{
    constructor(private _httpClient:HttpClient) {}

    findAll(){
        return this._httpClient.get('/api/kategori/buku/list');
        }

    findById(id:string){
        return this._httpClient.get(`/api/kategori/buku/${id}`,{observe: 'response'});
    }
    save(kategori: kategoribuku){
        return this._httpClient.post('/api/kategori/buku/', kategori, {observe: 'response'});
    }
    update(kategori: kategoribuku){
        return this._httpClient.put('/api/kategori/buku/', kategori, {observe: 'response'});
    }

    delete(id:string){
        return this._httpClient.delete(`/api/kategori/buku/${id}`,{observe: 'response'});
    }
        
    }
