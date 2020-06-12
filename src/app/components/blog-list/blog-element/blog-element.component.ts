import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Blog } from '@models/blog.interface';

@Component({
  selector: 'app-blog-element',
  templateUrl: './blog-element.component.html',
  styleUrls: ['./blog-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogElementComponent {
  @Input() blog: Blog;

}
