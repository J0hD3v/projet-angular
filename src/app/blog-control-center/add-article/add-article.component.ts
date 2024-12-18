import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  imports: [
    FormsModule,
  ],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {

  @Output() notify = new EventEmitter();

  name:string = ''
  content:string = ''

  addArticle():void {
    this.notify.emit({name: this.name, content: this.content, date: new Date(), author: 'Joh', type: 'Article'})
  }
  addBrouillon():void {
    this.notify.emit({name: this.name, content: this.content, date: new Date(), author: 'Joh', type: 'Brouillon'})
  }
}
