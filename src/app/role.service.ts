import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Role } from './app.component';

@Injectable()
export class RoleService {
  private _roleSubject = new BehaviorSubject<Role[]>([]);
  public readonly currentRole$ = this._roleSubject.asObservable();

  constructor() {}

  updateRole(roles: Role[]) {
    this._roleSubject.next(roles);
  }
}
