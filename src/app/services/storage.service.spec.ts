/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('Service: Storage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
  });

  it('should init service', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));

  it('should write arbitrary types to local storage', inject([StorageService], (service: StorageService) => {
    let key = 'mykey';
    let val: any = {fnord: 'blarg'};

    service.write(key, val);
    expect(service.read(key)).toEqual(val);
  }));
});
