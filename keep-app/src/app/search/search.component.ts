import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AddNoteComponent } from '../add-note/add-note.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText:string = "";
   @Output()
  searchs:EventEmitter<string> = new EventEmitter<string>();

display(child:AddNoteComponent){
console.log(AddNoteComponent)
}
  se(){
   this.searchs.emit(this.searchText)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
