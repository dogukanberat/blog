import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.css']
})
export class AddpageComponent implements OnInit {

  allPages;
  allCategorys;
  statusCode;
  createPage = false;
  data;
  datas;
  requestProcessing = false;
  pageIdToUpdate = null;
  processValidation = false;
  pageForm = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    descR: new FormControl('', Validators.required),

  });
  constructor(private pageService: EventService) {}
  ngOnInit(): void {
    this.getAllPages();
    this.getAllCategorys();
  }

  getAllPages() {
    this.pageService.getAllPages()
      .subscribe(
        data => {
          this.allPages = data;
        },
        errorCode => this.statusCode = errorCode);

  }

  openCreatePage() {
    if (this.createPage === false) {
      this.createPage = true;
      this.backToCreatePage();
    } else {
      this.createPage = false;
      this.backToCreatePage();

    }
  }
  getAllCategorys() {
    this.pageService.getAllCategorys()
      .subscribe(
        data => this.allCategorys = data,
        errorCode => this.statusCode = errorCode);
  }
  onPageFormSubmit() {
    this.processValidation = true;
    if (this.pageForm.invalid) {
      return;
    }
    this.preProcessConfigurations();
    const page = this.pageForm.value;


    if (this.pageIdToUpdate === null) {
      this.pageService.getAllPages()
        .subscribe(pages => {
          this.data = pages;
          this.pageService.createPage(page)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.getAllPages();
                this.backToCreatePage();
              },
              errorCode => this.statusCode = errorCode
            );
        });
    } else {
      page.id = this.pageIdToUpdate;
      this.pageService.updatePage(page)
        .subscribe(successCode => {
            this.statusCode = successCode;
            this.getAllPages();
            this.backToCreatePage();
          },
          errorCode => this.statusCode = errorCode);
    }
  }
  loadPageToEdit(pageId) {
    this.createPage = true;
    this.preProcessConfigurations();
    this.pageService.getPageById(pageId)
      .subscribe(page => {
          this.datas = page;
          this.pageIdToUpdate = this.datas.id;
          this.pageForm.setValue({ title: this.datas.title, category: this.datas.category,
            descR: this.datas.descR });
          this.processValidation = true;
          this.requestProcessing = false;
        },
        errorCode => this.statusCode = errorCode);
  }


  deletePage(pageId: string) {
    this.preProcessConfigurations();
    this.pageService.deletePageById(pageId)
      .subscribe(successCode => {
          this.statusCode = 204;
          this.getAllPages();
          this.backToCreatePage();
        },
        errorCode => this.statusCode = errorCode);
  }
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }
  backToCreatePage() {
    this.pageIdToUpdate = null;
    this.pageForm.reset();
    this.processValidation = false;
  }
}
