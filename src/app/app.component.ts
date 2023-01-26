import { Component, VERSION } from '@angular/core';

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

  cardList: string[] = [
    'For Admin Eyes',
    'For Manager Eyes',
    'For Reader Eyes',
    'For Writer Eyes',
    'For Reader and Writer Eyes',
    'For Client Eyes',
    'For Public Eyes',
  ];

  onSelectRole(role: { name: string; roles: Role[] | null }) {
    console.log({ role });
  }
}
