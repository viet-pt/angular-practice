import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'app/components';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';

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

  constructor(private modalService: NgbModal) { }

  onOpenModal(): void {
    this.modalService.open(ConfirmModalComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log('success')
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log('failure')
      this.closeResult = 'Dismissed';
    });
  }

  onChangeInput(e: any): void {
    console.log(e.target.value);
  }

  onChangeEditor({ editor }: ChangeEvent): void {
    const data = editor.getData();
    // console.log(data);
  }

}
