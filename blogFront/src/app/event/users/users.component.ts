import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers;
  statusCode;
  data;
  datas;
  createUser = false;
  requestProcessing = false;
  userIdToUpdate = null;
  processValidation = false;
  userForm = new FormGroup({
    uName: new FormControl('', Validators.required),
    pW: new FormControl('', Validators.required),
    uType: new FormControl('', Validators.required),
  });

  constructor(private userService: EventService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers()
      .subscribe(
        data => this.allUsers = data,
        errorCode => this.statusCode = errorCode);
  }

  openCreateUser() {
    if (this.createUser === false) {
      this.createUser = true;
      this.backToCreateUser();
    } else {
      this.createUser = false;
      this.backToCreateUser();
    }
  }

  onUserFormSubmit() {
    this.processValidation = true;
    if (this.userForm.invalid) {
      return;
    }
    this.preProcessConfigurations();
    const user = this.userForm.value;


    if (this.userIdToUpdate === null) {
      this.userService.getAllUsers()
        .subscribe(users => {
          this.data = users;
          this.userService.createUser(user)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.getAllUsers();
                this.backToCreateUser();
              },
              errorCode => this.statusCode = errorCode
            );
        });
    } else {
      user.id = this.userIdToUpdate;
      this.userService.updateUser(user)
        .subscribe(successCode => {
            this.statusCode = successCode;
            this.getAllUsers();
            this.backToCreateUser();
          },
          errorCode => this.statusCode = errorCode);
    }
  }

  loadUserToEdit(userId) {
    this.createUser = true;
    this.preProcessConfigurations();
    this.userService.getUserById(userId)
      .subscribe(user => {
          this.datas = user;
          this.userIdToUpdate = this.datas.id;
          this.userForm.setValue({uName: this.datas.uName, pW: this.datas.pW, uType: this.datas.uType});
          this.processValidation = true;
          this.requestProcessing = false;
        },
        errorCode => this.statusCode = errorCode);
  }

  deleteUser(userId: string) {
    this.preProcessConfigurations();
    this.userService.deleteUserById(userId)
      .subscribe(successCode => {
          this.statusCode = 204;
          this.getAllUsers();
          this.backToCreateUser();
        },
        errorCode => this.statusCode = errorCode);
  }

  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }

  backToCreateUser() {
    this.userIdToUpdate = null;
    this.userForm.reset();
    this.processValidation = false;
  }
}

