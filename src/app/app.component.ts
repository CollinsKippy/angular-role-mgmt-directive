import { Component, VERSION } from '@angular/core';
import { RoleService } from './role.service';

export type Role =
  | 'ADMIN'
  | 'MANAGER'
  | 'WRITER'
  | 'READER'
  | 'CLIENT'
  | 'PUBLIC';

export interface User {
  name: string;
  isAdmin: boolean;
  roles: Role[];
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  roleList: { roles: Role[]; name: string }[] = [
    { name: 'Admin', roles: ['ADMIN'] },
    { name: 'Manager', roles: ['MANAGER'] },
    { name: 'Reader', roles: ['READER'] },
    { name: 'Writer', roles: ['WRITER'] },
    { name: 'Reader or Writer', roles: ['READER', 'WRITER'] },
    { name: 'Client', roles: ['CLIENT'] },
    { name: 'Public', roles: ['PUBLIC'] },
  ];

  contentList: { name: string; roles: Role[] }[] = [
    { roles: ['ADMIN'], name: 'For Admin Eyes' },
    { roles: ['MANAGER'], name: 'For Manager Eyes' },
    { roles: ['READER'], name: 'For Reader Eyes' },
    { roles: ['WRITER'], name: 'For Writer Eyes' },
    { roles: ['READER', 'WRITER'], name: 'For Reader and Writer Eyes' },
    { roles: ['CLIENT'], name: 'For Client Eyes' },
    { roles: ['PUBLIC'], name: 'For Public Eyes' },
  ];

  constructor(private roleService: RoleService) {}

  onSelectRole(role: { name: string; roles: Role[] | null }) {
    console.log({ role });
    this.roleService.updateRole(role.name);
  }
}
