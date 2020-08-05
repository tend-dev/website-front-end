import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  EditBlogState,
  getBlogSelector,
  getBlogIsUpdatingSelector,
  getBlogImageUrlSelector,
  editBlogFinished
} from '@store/blog-state';
import { BlogsService } from '@services/blogs.service';
import { Blog } from '@models/blog.interface';
import { QuillEditorComponent } from 'ngx-quill';


@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit, OnDestroy {
  blogForm: FormGroup;
  blogIsUpdating: boolean;
  imageUrl: string | ArrayBuffer;
  imageFile: string | ArrayBuffer;
  @ViewChild('editor', {
    static: true
  }) editor: QuillEditorComponent;

  constructor(
    private store: Store<EditBlogState>,
    private blogsService: BlogsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.blogForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: ['', Validators.required]
    });

    this.store.pipe(select(getBlogSelector))
      .subscribe(blog => {
        const { id, title, content } = blog;

        if (id) {
          this.blogForm.get('image').clearValidators();
        }

        this.blogForm.setValue({ id, title, content, image: null });
      });

    this.store.pipe(select(getBlogIsUpdatingSelector))
      .subscribe(value => this.blogIsUpdating = value);


    this.store.pipe(select(getBlogImageUrlSelector))
      .subscribe(value =>  this.imageUrl = value);
  }

  ngOnDestroy() {
    this.cancelEditting();
  }

  createBlog(blog: FormData) {
    this.blogsService.createBlog(blog)
      .subscribe(result => {
        this.blogsService.addOneToCache(result);
        this.cancelEditting();
      });
  }

  updateBlog(blog: FormData, blogValues) {
    this.blogsService.updateBlog(blog, blogValues)
      .subscribe(result => {
        this.blogsService.updateOneInCache(result);
        this.cancelEditting();
      });
  }

  onSubmit() {
    if (this.blogForm.invalid) {
      console.error('Error this.blogForm is invalid');
      return;
    }

    const blogValues = this.blogForm.value;
    const blogRaw = {};
    for (const key of Object.keys(blogValues)) {
      const value = blogValues[key];
      if (value) {
        if (key === 'image') {
          blogRaw[key] = this.imageFile || null;
        } else {
          blogRaw[key] = value;
        }
      }
    }

    const blogFormData = this.mapToMultiformData(blogRaw);

    if (this.blogIsUpdating) {
      this.updateBlog(blogFormData as FormData, blogRaw);
    } else {
      this.createBlog(blogFormData as FormData);
    }

  }

  fileChange($event, imgUrl: 'imageUrl', imgFile: 'imageFile') {
    if ($event.target.files && $event.target.files[0] ) {
      const file = $event.target.files[0];

      if (!(file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg')) {
        console.error('Format of chosen file is not supported');
        return;
      }

      this[imgFile] = file;

      const reader = new FileReader();

      reader.readAsDataURL($event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this[imgUrl] = event.target.result;
      }
    }
  }

  mapToMultiformData(body) {
    const formData: FormData = new FormData();
    Object.keys(body)
      .forEach(key => {
        formData.append(`${key}`, body[key])
      });

    return formData;
  }

  cancelEditting() {
    this.blogForm.get('image').setValidators(Validators.required);
    this.store.dispatch(editBlogFinished());
    this.imageUrl = '';
  }

}
