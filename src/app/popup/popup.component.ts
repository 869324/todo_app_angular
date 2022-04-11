import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  @Input() title = '';
  @Input() text = '';
  @Input() icon = '';
  @Input() showOk = false;
  @Input() showCancel = false;
  @Input() okText = '';
  @Input() cancelText = '';

  constructor() {}

  onOk = () => {
    return true;
  };

  dismiss() {}

  ngOnInit(): void {}
}
