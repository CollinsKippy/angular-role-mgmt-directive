import { Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';
import { catchError, of, Subscription, throwError } from 'rxjs';
import { Role } from './app.component';
import { RoleService } from './role.service';

@Directive({
  selector: '[hasRole]',
  standalone: true,
})
export class HasRoleDirective {
  sub: Subscription;

  constructor(
    private roleService: RoleService,
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set hasRole(roleName: string) {
    this.sub = this.roleService.currentRole$
      .pipe(catchError((err) => of(err)))
      .subscribe({
        next: (role) => {
          this.viewContainerRef.clear();

          if (roleName === role) {
            // Create the template
            this.viewContainerRef.createEmbeddedView(this.templateRef);
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
