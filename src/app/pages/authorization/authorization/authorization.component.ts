import { Component, OnInit } from '@angular/core';
// import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from '../shared/providers/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  // public faLock = faLock;
  // public faEnvelope = faEnvelope;
  public form: FormGroup;
  public error: string;

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
        () => this.router.navigate(['/dashboard/blogs']),
        error => this.error = error
      );
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

}
