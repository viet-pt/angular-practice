import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'app/components';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  closeResult: string = '';
  name: any;

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

}
