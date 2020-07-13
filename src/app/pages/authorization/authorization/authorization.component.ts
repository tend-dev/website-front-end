import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { AuthorizationService } from '../shared/providers/authorization.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public error: string;
  private authSub: Subscription;
  public isAuthenticated: boolean;

  get email(): AbstractControl { return this.form.get('email'); }

  constructor(
    private formBuilder: FormBuilder,
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();

    this.refreshAuthstatus();
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }

  onSubmit(): void {
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

  logOut() {
    this.authorizationService.signOut();
    this.refreshAuthstatus();
  }

  // TODO: implement via STORE or service as observable
  private refreshAuthstatus() {
    this.authSub = this.authorizationService.isAuthenticated().subscribe(res => {
      this.isAuthenticated = res;
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

}
