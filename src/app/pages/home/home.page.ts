import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'app/components';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  public closeResult: string = '';
  public name1: any;
  public name2: any;
  public Editor = ClassicEditor;
  public config = {
    toolbar: ['heading', '|', 'bold', 'italic']
  };

  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    country: new FormControl('vi', Validators.required),
  });
  sourceControl = new FormControl("vi");

  constructor(
    private modalService: NgbModal,
  ) { }

  onOpenModal(): void {
    this.modalService.open(ConfirmModalComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = 'Dismissed';
    });
  }

  onChangeInput(e: any): void {
    console.log(e.target.value);
  }

  onChangeEditor({ editor }: ChangeEvent): void {
    const data = editor.getData();
  }

  onSubmit(value: any): void {
    console.log(11111, value)
  }

}
