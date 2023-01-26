import { Injectable } from '@angular/core';

@Injectable()
export class RoleService {
  private _roleSubject = Subject<string | undefined>();
  public readonly currentRole$ = this._roleSubject.asObservable();

  constructor() {}

  updateRole(roleName: string) {
    this._roleSubject.next(roleName);
  }
}
