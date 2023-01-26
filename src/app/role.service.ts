import { Injectable } from '@angular/core';

@Injectable()
export class RoleService {
  _roleName: string | undefined;

  constructor() {}

  getRole() {
    this._roleName = sessionStorage.get('role');
    return this._roleName;
  }

  setRole(roleName: string) {
    this._roleName = roleName;
    sessionStorage.set('role', this._roleName);
  }
}
