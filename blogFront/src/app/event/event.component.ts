import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  loggedin = false;
  loginform = false;
  loginForm = new FormGroup({
    id: new FormControl('', Validators.required),
    pw: new FormControl('', Validators.required)
  });

  constructor(private userService: EventService) {
  }

  idpwErr = false;
  login = false;
  admin = false;
  author = false;
  allUsers;
  statusCode;
  loginData;

  ngOnInit(): void {
    this.getAllUsers();


  }


  getAllUsers() {
    this.userService.getAllUsers()
      .subscribe(
        data => {
          this.allUsers = data;
          if (localStorage.getItem('metropolLoginData')) {
            this.loginData = JSON.parse(localStorage.getItem('metropolLoginData'));
            this.loginWithOldData(this.loginData, this.allUsers);
          } else {
            this.loginform = true;
          }

          /*this.loginControl(this.allUsers);*/
        },
        errorCode => this.statusCode = errorCode);
  }

  /*
    public loginControl(data) {
      if (localStorage.getItem('loginData') === null) {
        this.loginform = true;
      } else {
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
        data.forEach(user => {
          if (this.loginData.uName === user.uName && this.loginData.pw === user.pW) {
            this.loggedin = true;
            if (this.loginData.uType === 'admin') {
              this.admin = true;
            }
          } else {
            if (this.loginData.uName !== user.uName || this.loginData.pw !== user.pW) {
              this.idpwErr = true;
              this.loginform =true;

            }
          }
        });
      }
    }
  */

  loginWithOldData(loginData, users) {
    const login = loginData;
    const map = [];
    users.forEach(data => {
      if (login.uName === data.uName && login.pW === data.pW) {
        this.login = true;
        this.loggedin = true;
        this.loginform = false;
        map.push(data);
        if (data.uType === 'admin') {
          this.admin = true;
        }
        if (data.uType === 'author') {
          this.author = true;
        }
      } else {
        if (login.uName !== data.uName || login.pW !== data.pW) {
          localStorage.clear();
          this.idpwErr = true;
        }
      }
    });
    console.log(map.length);

  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

  loginFormSubmit() {
    const login = this.loginForm.value;
    this.allUsers.forEach(data => {
      if (login.id === data.uName && login.pw === data.pW) {
        this.login = true;
        this.loggedin = true;
        this.loginform = false;
        localStorage.setItem('metropolLoginData', JSON.stringify(data));

        if (data.uType === 'admin') {
          this.admin = true;
        }
        if (data.uType === 'author') {
          this.author = true;
        }
      } else {
        if (login.id !== data.uName || login.pw !== data.pW) {
          this.idpwErr = true;

        }
      }
    });

  }

}
