import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-article-element',
  imports: [
    NgFor
  ],
  templateUrl: './article-element.component.html',
  styleUrl: './article-element.component.css'
})
export class ArticleElementComponent {
  @Input() articlesArray!:any[];
}
