import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Book {
  id: number;
  author: string;
  title: string;
  comment: string;
  state: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public books: Book[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.http.get<Book[]>('/api/books').subscribe(
      (result) => {
        this.books = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'booklist.client';
}
