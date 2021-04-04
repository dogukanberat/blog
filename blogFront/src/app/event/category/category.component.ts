import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  allCategorys;
  statusCode;
  data;
  datas;
  createCategory = false;

  requestProcessing = false;
  categoryIdToUpdate = null;
  processValidation = false;
  categoryForm = new FormGroup({
    category: new FormControl('', Validators.required),
  });

  constructor(private categoryService: EventService) {
  }

  ngOnInit(): void {
    this.getAllCategorys();
  }

  getAllCategorys() {
    this.categoryService.getAllCategorys()
      .subscribe(
        data => this.allCategorys = data,
        errorCode => this.statusCode = errorCode);

  }

  openCreateCategory() {
    if (this.createCategory === false) {
      this.createCategory = true;
      this.backToCreateCategory();
    } else {
      this.createCategory = false;
      this.backToCreateCategory();
    }
  }

  onCategoryFormSubmit() {
    this.processValidation = true;
    if (this.categoryForm.invalid) {
      return;
    }
    this.preProcessConfigurations();
    const category = this.categoryForm.value;

    if (this.categoryIdToUpdate === null) {
      this.categoryService.getAllCategorys()
        .subscribe(categorys => {
          this.data = categorys;
          this.categoryService.createCategory(category)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.getAllCategorys();
                this.backToCreateCategory();
              },
              errorCode => this.statusCode = errorCode
            );
        });
    } else {
      category.id = this.categoryIdToUpdate;
      this.categoryService.updateCategory(category)
        .subscribe(successCode => {
            this.statusCode = successCode;
            this.getAllCategorys();
            this.backToCreateCategory();
          },
          errorCode => this.statusCode = errorCode);
    }
  }

  loadCategoryToEdit(categoryId) {
    this.createCategory = true;
    this.preProcessConfigurations();
    this.categoryService.getCategoryById(categoryId)
      .subscribe(category => {
          this.datas = category;
          this.categoryIdToUpdate = this.datas.id;
          this.categoryForm.setValue({category: this.datas.category});
          this.processValidation = true;
          this.requestProcessing = false;
        },
        errorCode => this.statusCode = errorCode);
  }

  deleteCategory(categoryId: string) {
    this.preProcessConfigurations();
    this.categoryService.deleteCategoryById(categoryId)
      .subscribe(successCode => {
          this.statusCode = 204;
          this.getAllCategorys();
          this.backToCreateCategory();
        },
        errorCode => this.statusCode = errorCode);
  }

  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }

  backToCreateCategory() {
    this.categoryIdToUpdate = null;
    this.categoryForm.reset();
    this.processValidation = false;
  }
}

