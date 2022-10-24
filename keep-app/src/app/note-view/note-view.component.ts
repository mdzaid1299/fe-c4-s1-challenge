import { Component,Input, OnInit } from '@angular/core';
import { NOTES } from '../models/notes';
@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  
  notes = NOTES;
  // text = ''


  

  search(searchText: string) {
    if(searchText === '' || !searchText)
      this.notes = NOTES;
    else
    {
      this.notes = NOTES;
      this.notes = this.notes.filter(note => note.title?.startsWith(searchText));
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
