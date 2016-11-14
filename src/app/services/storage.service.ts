import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() {}

  write(key: string, value: any): any {
    localStorage.setItem(key, JSON.stringify(value));
  }

  read(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

}
