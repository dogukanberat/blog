import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-addleftmenu',
  templateUrl: './addleftmenu.component.html',
  styleUrls: ['./addleftmenu.component.css']
})
export class AddleftmenuComponent implements OnInit {

  allMenus;
  statusCode;
  data;
  datas;
  createMenu = false;
  allParents = [];
  requestProcessing = false;
  menuIdToUpdate = null;
  submenu;
  processValidation = false;
  menuForm = new FormGroup({
    name: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    imagelink: new FormControl('', Validators.required),
    parent: new FormControl(''),
    submenu: new FormControl('', Validators.required)
  });

  constructor(private menuService: EventService) {
  }

  ngOnInit(): void {
    this.getAllMenus();
  }

  getAllMenus() {
    this.menuService.getAllMenuLinks()
      .subscribe(
        data => {
          this.allMenus = data;
          this.allParents = [];
          this.allMenus.forEach(parent => {
            if (parent.submenu == 'no') {
              this.allParents.push(parent);
            }
          });
        },
        errorCode => this.statusCode = errorCode);
  }

  openCreateMenu() {
    if (this.createMenu === false) {
      this.createMenu = true;
      this.backToCreateMenu();
    } else {
      this.createMenu = false;
      this.backToCreateMenu();
    }
  }

  onMenuFormSubmit() {
    this.processValidation = true;
    if (this.menuForm.invalid) {
      return;
    }
    this.preProcessConfigurations();
    const menu = this.menuForm.value;


    if (this.menuIdToUpdate === null) {
      this.menuService.getAllMenuLinks()
        .subscribe(menus => {
          this.data = menus;
          this.menuService.createMenuLink(menu)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.getAllMenus();
                this.backToCreateMenu();
              },
              errorCode => this.statusCode = errorCode
            );
        });
    } else {
      menu.id = this.menuIdToUpdate;
      this.menuService.updateMenuLink(menu)
        .subscribe(successCode => {
            this.statusCode = successCode;
            this.getAllMenus();
            this.backToCreateMenu();
          },
          errorCode => this.statusCode = errorCode);
    }
  }


  loadMenuToEdit(menuId) {
    this.createMenu = true;
    this.preProcessConfigurations();
    this.menuService.getMenuLinkById(menuId)
      .subscribe(menu => {
          this.datas = menu;
          this.menuIdToUpdate = this.datas.id;
          this.menuForm.setValue({
            name: this.datas.name,
            url: this.datas.url,
            imagelink: this.datas.imagelink,
            parent: this.datas.parent,
            submenu: this.datas.submenu
          });
          this.processValidation = true;
          this.requestProcessing = false;
        },
        errorCode => this.statusCode = errorCode);
  }

  deleteMenu(menuId: string) {
    this.preProcessConfigurations();
    this.menuService.deleteMenuLinkById(menuId)
      .subscribe(successCode => {
          this.statusCode = 204;
          this.getAllMenus();
          this.backToCreateMenu();
        },
        errorCode => this.statusCode = errorCode);
  }

  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }

  backToCreateMenu() {
    this.menuIdToUpdate = null;
    this.menuForm.reset();
    this.processValidation = false;
  }
}


