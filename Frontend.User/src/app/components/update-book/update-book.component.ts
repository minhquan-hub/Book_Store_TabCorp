import { Book } from "./../../models/book.model";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  updateForm!: FormGroup;
  book!: Book;
  id!: string;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.router.url.split('/')[3];
    this.bookService.getBookById(this.id).subscribe((res) => {
      console.log(res)
      this.book = res;
    })
    this.updateForm = new FormGroup({
      'title': new FormControl(),
      'author': new FormControl(),
      'category': new FormControl(),
      'description': new FormControl(),
      'price': new FormControl(),
      'quantity': new FormControl(),
      'image': new FormControl()
    })
  }

  onUpdate() {
    const formData = this.updateForm.value;
    this.bookService.updateBook(this.id, formData).subscribe((res) => {
      alert("Update Successful");
       console.log(res);
    })

    this.router.navigate(['/admin'])
  }

}
