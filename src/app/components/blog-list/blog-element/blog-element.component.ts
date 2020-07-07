import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Blog } from '@models/blog.interface';
import { environment } from '@env/environment';

@Component({
  selector: 'app-blog-element',
  templateUrl: './blog-element.component.html',
  styleUrls: ['./blog-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogElementComponent {
  @Input() blog: Blog;
  public backEndURL = environment.backEndURL;

}
