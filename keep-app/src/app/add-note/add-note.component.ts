import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../models/notes';
import { NoteService } from '../services/note.service';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
 
  cardadd:Note ={}
  constructor(private noteservices:NoteService) { }
   saveNote(id:string,title:string,content:string){
      this.cardadd ={
        id: parseInt(id),
        title: title,
        content: content
      }
      this.noteservices.addNote(this.cardadd).subscribe( card => {
        alert("New Blog Added");
        this.cardadd = {}
      })
     }
     ngOnInit(): void {
     }

}
