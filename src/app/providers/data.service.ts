import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Note {
  id?: string;
  title: string;
  text: string;
}

export interface Pessoa {
  id?: string;
  dataNascimento: string;
  email: string;
  idade: string;
  nome: string
  ocupacao: string;
  telefone: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getNotes(): Observable<Note[]> {
    const notesRef = collection(this.firestore, 'notes');

    return collectionData(notesRef, {idField: 'id'}) as Observable<Note[]>;
  }

  getNoteById(id): Observable<Note> {
    const noteDocRef = doc(this.firestore, `notes/${id}`);
    return docData(noteDocRef, {idField: 'id'}) as Observable<Note>;
  }

  addNote(note: Note) {
    const notesRef = collection(this.firestore, 'notes');
    return addDoc(notesRef, note);
  }

  deleteNote(note: Note) {
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return deleteDoc(noteDocRef)
  }

  updateNote(note: Note) {
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return updateDoc(noteDocRef, {title: note.title, text: note.text})
  }
  

  getPessoa(): Observable<Pessoa[]> {
    const notesRef = collection(this.firestore, 'pessoas');

    return collectionData(notesRef, {idField: 'id'}) as Observable<Pessoa[]>;
  }

  getPessoaById(id): Observable<Pessoa> {
    const noteDocRef = doc(this.firestore, `pessoas/${id}`);
    return docData(noteDocRef, {idField: 'id'}) as Observable<Pessoa>;
  }

  addPessoa(note: Pessoa) {
    const notesRef = collection(this.firestore, 'pessoas');
    return addDoc(notesRef, note);
  }

  deletePessoa(note: Pessoa) {
    const noteDocRef = doc(this.firestore, `pessoas/${note.id}`);
    return deleteDoc(noteDocRef)
  }

  updatePessoa(note: Pessoa) {
    const noteDocRef = doc(this.firestore, `pessoas/${note.id}`);
    return updateDoc(noteDocRef, {
      nome: note.nome,
      dataNascimento: note.dataNascimento,
      email: note.email,
      idade: note.idade,
      ocupacao: note.ocupacao,
      telefone: note.telefone
    })
  }
}
