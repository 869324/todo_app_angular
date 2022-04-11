import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface Utils {
  showEditor: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  utils = {
    showEditor: false,
  };

  changeEditor = (status: boolean) => {
    this.utils.showEditor = status;
  };

  getEditor = () => {
    return this.utils.showEditor;
  };
}
