/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EnvironmentModel } from '../models/environment.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private modal: NzModalService, private http: HttpClient) { }
}

export function getApplicationConfig(): EnvironmentModel {
  let configApp = <EnvironmentModel>{};
  const request = new XMLHttpRequest();
  try {
    request.open('GET', './assets/config/config.json', false);
    request.send(null);
    if (request.status === 200) {
      configApp = JSON.parse(request.responseText);
    }
  } catch (error) {
    console.log(error);
  }

  return { ...configApp };
}

