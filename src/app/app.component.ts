import { Component, VERSION } from '@angular/core';

export type Role = 'ADMIN' | 'MANAGER' | 'WRITER' | 'READER' | 'CLIENT';

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

  buttonList: { role: Role; name: string }[] = [
    { name: 'Admin', role: 'ADMIN' },
    { name: 'Manager', role: 'MANAGER' },
    { name: 'Reader', role: 'READER' },
    { name: 'Writer', role: 'WRITER' },
    { name: 'Reader and Writer', role: 'READER' || 'WRITER' },
    { name: 'Client', role: 'CLIENT' },
    { name: 'Public', role: undefined },
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

  onSelectRole(role: Role) {
    console.log(role);
  }
}
