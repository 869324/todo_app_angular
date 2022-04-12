import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faCheck,
  faXmarkCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  @Input() data = {
    id: '',
    title: '',
    text: '',
    icon: '',
    showOk: false,
    showCancel: false,
    okText: '',
    cancelText: '',
  };

  @Output() dismiss = new EventEmitter();
  @Output() okay = new EventEmitter();

  faCheck = faCheck;
  faError = faXmarkCircle;
  faWarning = faExclamationCircle;

  constructor() {}

  onOk = () => {
    //this.dismiss.emit();
    this.okay.emit(this.data.id);
  };

  ngOnInit(): void {}
}
