import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { AuthorizationService } from '../shared/providers/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  public form: FormGroup;
  public error: string;

  get email(): AbstractControl { return this.form.get('email'); }

  constructor(
    private formBuilder: FormBuilder,
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  public onSubmit(): void {
    if (!this.form.valid) {
      return;
    }
    this.authorizationService.signIn(this.form.value)
      .subscribe(
        () => {
          this.router.navigate(['/dashboard/blogs'])
        },
        error => {
          this.error = 'Email or password is wrong';
        }
      );
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

}
