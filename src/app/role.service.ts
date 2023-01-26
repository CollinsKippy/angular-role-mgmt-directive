import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class RoleService {
  private _roleSubject = new Subject<string | undefined>();
  public readonly currentRole$ = this._roleSubject.asObservable();

  constructor() {}

  updateRole(roleName: string) {
    this._roleSubject.next(roleName);
  }
}
