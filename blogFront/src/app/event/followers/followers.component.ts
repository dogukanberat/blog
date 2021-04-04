import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  allFollowers;
  statusCode;
  data;
  datas;
  createFollower = false;

  requestProcessing = false;
  followerIdToUpdate = null;
  processValidation = false;
  followerForm = new FormGroup({
    mail: new FormControl('', Validators.required),
  });
  constructor(private followerService: EventService) {}
  ngOnInit(): void {
    this.getAllFollowers();
  }

  getAllFollowers() {
    this.followerService.getAllFollowers()
      .subscribe(
        data => this.allFollowers = data,
        errorCode => this.statusCode = errorCode);
  }

  openCreateFollower() {
    if (this.createFollower === false) {
      this.createFollower = true;
      this.backToCreateFollower();
    } else {
      this.createFollower = false;
      this.backToCreateFollower();
    }
  }
  onFollowerFormSubmit() {
    this.processValidation = true;
    if (this.followerForm.invalid) {
      return;
    }
    this.preProcessConfigurations();
    const follower = this.followerForm.value;


    if (this.followerIdToUpdate === null) {
      this.followerService.getAllFollowers()
        .subscribe(followers => {
          this.data = followers;
          this.followerService.createFollower(follower)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.getAllFollowers();
                this.backToCreateFollower();
              },
              errorCode => this.statusCode = errorCode
            );
        });
    } else {
      follower.id = this.followerIdToUpdate;
      this.followerService.updateFollower(follower)
        .subscribe(successCode => {
            this.statusCode = successCode;
            this.getAllFollowers();
            this.backToCreateFollower();
          },
          errorCode => this.statusCode = errorCode);
    }
  }
  loadFollowerToEdit(followerId) {
    this.createFollower = true;
    this.preProcessConfigurations();
    this.followerService.getFollowerById(followerId)
      .subscribe(follower => {
          this.datas = follower;
          this.followerIdToUpdate = this.datas.id;
          this.followerForm.setValue({ mail: this.datas.mail});
          this.processValidation = true;
          this.requestProcessing = false;
        },
        errorCode => this.statusCode = errorCode);
  }
  deleteFollower(followerId: string) {
    this.preProcessConfigurations();
    this.followerService.deleteFollowerById(followerId)
      .subscribe(successCode => {
          this.statusCode = 204;
          this.getAllFollowers();
          this.backToCreateFollower();
        },
        errorCode => this.statusCode = errorCode);
  }
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }
  backToCreateFollower() {
    this.followerIdToUpdate = null;
    this.followerForm.reset();
    this.processValidation = false;
  }
}

