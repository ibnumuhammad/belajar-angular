import {Component} from "@angular/core";
import {Model as data} from "./list.model"
import {ValueTransformer} from "@angular/compiler/src/util";
@Component({
	selector:'app-list',
	templateUrl:'./list.component.html'
})

export class ListComponent{
	
	counterClick : number = 0;
	jabatan:string = "trainer";
	
	constructor(){
		let value = new data();
		value._nama = "ibnu muhammad hamri";
		value.active = false;
		value.alamat = "jljl";
		value.umur = 18;
		this.list.push(value);
		
		value = new data();
		value._nama = "ismail";
		value.active = false;
		value.alamat = "jljl";
		value.umur = 18;
		this.list.push(value);
		
		
	}
	list: Array<data>=[];

	clickedHandler(event: any){
		this.counterClick++;
		console.log(event.data);
	}

	clickedHandler2(event:any){
		console.log(event.data);
	}
}