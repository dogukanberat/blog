import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-footerlink',
  templateUrl: './footerlink.component.html',
  styleUrls: ['./footerlink.component.css']
})
export class FooterlinkComponent implements OnInit {

  allFooters;
  statusCode;
  data;
  datas;
  createFooter = false;

  requestProcessing = false;
  footerIdToUpdate = null;
  processValidation = false;
  footerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required)
  });
  constructor(private footerService: EventService) {}
  ngOnInit(): void {
    this.getAllFooters();
  }

  getAllFooters() {
    this.footerService.getAllFooterLinks()
      .subscribe(
        data => this.allFooters = data,
        errorCode => this.statusCode = errorCode);
  }

  openCreateFooter() {
    if (this.createFooter === false) {
      this.createFooter = true;
      this.backToCreateFooter();
    } else {
      this.createFooter = false;
      this.backToCreateFooter();
    }
  }
  onFooterFormSubmit() {
    this.processValidation = true;
    if (this.footerForm.invalid) {
      return;
    }
    this.preProcessConfigurations();
    const footer = this.footerForm.value;


    if (this.footerIdToUpdate === null) {
      this.footerService.getAllFooterLinks()
        .subscribe(footers => {
          this.data = footers;
          this.footerService.createFooterLink(footer)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.getAllFooters();
                this.backToCreateFooter();
              },
              errorCode => this.statusCode = errorCode
            );
        });
    } else {
      footer.id = this.footerIdToUpdate;
      this.footerService.updateFooterLink(footer)
        .subscribe(successCode => {
            this.statusCode = successCode;
            this.getAllFooters();
            this.backToCreateFooter();
          },
          errorCode => this.statusCode = errorCode);
    }
  }
  loadFooterToEdit(footerId) {
    this.createFooter = true;
    this.preProcessConfigurations();
    this.footerService.getFooterLinkById(footerId)
      .subscribe(footer => {
          this.datas = footer;
          this.footerIdToUpdate = this.datas.id;
          this.footerForm.setValue({ name: this.datas.name, url: this.datas.url});
          this.processValidation = true;
          this.requestProcessing = false;
        },
        errorCode => this.statusCode = errorCode);
  }
  deleteFooter(footerId: string) {
    this.preProcessConfigurations();
    this.footerService.deleteFooterLinkById(footerId)
      .subscribe(successCode => {
          this.statusCode = 204;
          this.getAllFooters();
          this.backToCreateFooter();
        },
        errorCode => this.statusCode = errorCode);
  }
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }
  backToCreateFooter() {
    this.footerIdToUpdate = null;
    this.footerForm.reset();
    this.processValidation = false;
  }
}

