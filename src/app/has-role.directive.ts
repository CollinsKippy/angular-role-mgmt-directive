import { Directive } from '@angular/core';
import { RoleService } from './role.service';

@Directive({
  selector: '[hasRole]',
})
export class HasRoleDirective {
  constructor(private roleService: RoleService, private templateRef: TemplateRef<unknown>) {}

  @Input() set hasRole(roles: Role[]) {

  }
}
