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

  @Input() set hasRole(userRoles: Role[]) {
    this.sub = this.roleService.currentRole$
      .pipe(catchError((err) => of(err)))
      .subscribe({
        next: (role: Role[]) => {
          if (role.some((r) => userRoles.some((uRole) => uRole === r))) {
            this.viewContainerRef.clear();
            this.viewContainerRef.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainerRef.clear();
          }
        },
        error: (err) => {
          console.log(err);
          this.viewContainerRef.clear();
        },
      });
  }
}
