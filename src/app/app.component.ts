import { Component } from '@angular/core';
//import {FlatTreeControl} from '@angular/cdk/tree';
//import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
//import { NoopAnimationPlayer } from '@angular/animations';


//interface FoodNode{
  //name: string ; 
  //children?: FoodNode[]; 
//}

//interface ExampleFlatNode {
  //expandable: boolean ; 
  //name: string ;
  //level: number ;
//}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stage-front';
 // private _transformer= (node: FoodNode , level: number)=>{
   // return {
     // expandable: !!node.children && node.children.length >0, 
      //name: node.name , 
      //level: level ,

    //};
  }
 // treecontrol = new FlatTreeControl<ExampleFlatNode>(
    //node=>node.level,
    //node=>node.expandable,
  //);
 //  treeFlattener: new MatTreeFlattener(
   // this._transformer, 
    //node=> node.level, 
    //node=> node.expandable, 
    //node=>node.children, 
 // ); 
//}
