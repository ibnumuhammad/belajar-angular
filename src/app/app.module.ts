import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CollectionComponent } from './list/collection/collection.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './list/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CellComponent } from './list/cell/cell.component';
import { CompBComponent } from './sample-service/comp-b/comp-b.component';
import { DataMahasiswaService } from './sample-service/data-mahasiswa.service';
import { CompAComponent } from './sample-service/comp-a/comp-a.component';
import { SampleServiceComponent } from './sample-service/sample-service.component';
import { Routes, RouterModule } from '@angular/router';
import { PembelianComponent } from './transaksi/pembelian/pembelian.component';
import { KategoriBukuComponent } from './perpustakaan/master/kategori-buku/kategori-buku/kategori-buku.component';
import { KategoriBukuService } from './perpustakaan/master/kategori-buku/kategori-buku/kategori-buku.service';
import { NewKategoriBukuComponent } from './perpustakaan/master/kategori-buku/new-kategori-buku/new-kategori-buku.component';
import { DetailKategoriBukuComponent } from './perpustakaan/master/kategori-buku/detail-kategori-buku/detail-kategori-buku.component';
import { UpdateKategoriBukuComponent } from './perpustakaan/master/kategori-buku/update-kategori-buku/update-kategori-buku.component';
import { RakComponent } from './perpustakaan/master/buku/rak/rak.component';
import { AnggotaComponent } from './perpustakaan/master/buku/anggota/anggota.component';
import { NewBukuComponent } from './perpustakaan/master/buku/new-buku/new-buku.component';
import { BukuComponent } from './perpustakaan/master/buku/buku/buku.component';


const appRoutes: Routes = [
  {path:'form',
component: FormReactiveComponent
},
{path: 'list',
component: ListComponent
},
{path:'sample-service',
component: SampleServiceComponent
},
{
  path:'kategori/master/kategori/buku',
component: KategoriBukuComponent
},
{
  path:'kategori/master/kategori/buku/detail/:kode',
component: KategoriBukuComponent
},

];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CollectionComponent,
    FormReactiveComponent,
    DetailComponent,
    CellComponent,
    CompAComponent,
    CompBComponent,
    SampleServiceComponent,
    PembelianComponent,
    KategoriBukuComponent,
    NewKategoriBukuComponent,
    DetailKategoriBukuComponent,
    UpdateKategoriBukuComponent,
    RakComponent,
    AnggotaComponent,
    NewBukuComponent,
    BukuComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{}),
    HttpClientModule
  ],
  providers: [DataMahasiswaService, KategoriBukuService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
