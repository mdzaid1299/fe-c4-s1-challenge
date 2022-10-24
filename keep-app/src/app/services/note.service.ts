import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Note } from '../models/note';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private http :HttpClient ) { }
  getNotes(): Observable<Array<Note>>{
  return this.http.get<Array<Note>>(" http://localhost:3000/notes");
  }
  addNote(data : Note){
    return this.http.post(" http://localhost:3000/notes",data);
  }
}
