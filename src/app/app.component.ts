import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  steps = [
    { label: 'Preparing', content: '' },
    { label: 'Queued', content: '' },
    { label: 'Executing', content: '' },
    { label: 'Finanlizing', content: '' }];

  preparingFormGroup: FormGroup;
  queuedFormGroup: FormGroup;
  executingFormGroup: FormGroup;
  selected: boolean;
  active: boolean;


  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.preparingFormGroup = this._formBuilder.group({
      preparingFormCtrl: ['a', Validators.required]
    })
    this.queuedFormGroup = this._formBuilder.group({
      queuedFormCtrl: ['dd', Validators.required]
    })
    this.executingFormGroup = this._formBuilder.group({
      executingFormCtrl: ['', Validators.required]
    })
    this.selected = true;
    this.active = true;
  }

}
