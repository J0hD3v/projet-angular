import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleElementComponent } from './article-element/article-element.component';

@Component({
  selector: 'app-blog-control-center',
  imports: [
    AddArticleComponent,
    ArticleElementComponent,
  ],
  templateUrl: './blog-control-center.component.html',
  styleUrl: './blog-control-center.component.css'
})
export class BlogControlCenterComponent {

  @Output() eventNewArticle = new EventEmitter();

  articlesArray: object[] = []

  notifyChildComponent(article:object):void {
    this.articlesArray.push(article);
  }
}
