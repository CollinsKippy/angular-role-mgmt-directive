import { Directive, TemplateRef, Input } from '@angular/core';
import { Role } from './app.component';
import { RoleService } from './role.service';

@Directive({
  selector: '[hasRole]',
  standalone: true,
})
export class HasRoleDirective {
  constructor(
    private roleService: RoleService,
    private templateRef: TemplateRef<unknown>
  ) {}

  @Input() set hasRole(roles: Role[]) {}
}
