import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';
import {EventService} from '../../event.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  allFooters;
  statusCode;
  data;


  requestProcessing = false;
  followerIdToUpdate = null;
  processValidation = false;
  followerForm = new FormGroup({
    mail: new FormControl('', Validators.required),
  });

  constructor(private appComp: AppComponent,
              private footerService: EventService) {
  }

  ngOnInit() {
    this.getAllFooters();


    if (localStorage.getItem('privacy') != null) {
      document.getElementById('cerezss').style.display = 'none';
    }
    if (localStorage.getItem('subscribed') != null) {
      document.getElementById('footeralt').style.display = 'none';

    }
  }

  getAllFooters() {
    this.footerService.getAllFooterLinks()
      .subscribe(
        data => this.allFooters = data,
        errorCode => this.statusCode = errorCode);


  }

  closePrivacy() {
    localStorage.setItem('privacy', 'true');
    document.getElementById('cerezss').style.display = 'none';
  }

  validateEmail(email) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      document.getElementById('footeralt').style.background = 'red';

    }
    return re.test(String(email).toLowerCase());
  }


  onFollowerFormSubmit() {
    this.processValidation = true;
    if (this.followerForm.invalid) {
      return;
    }
    const follower = this.followerForm.value;

    if (this.followerIdToUpdate === null && this.validateEmail(this.followerForm.value.mail)) {
      this.footerService.getAllFollowers()
        .subscribe(followers => {
          this.data = followers;
          const maxIndex = this.data.length - 1;
          const followerWithMaxIndex = this.data[maxIndex];
          const followerId = followerWithMaxIndex.id + 1;
          follower.id = followerId;
          console.log(follower, 'this is form data---');
          localStorage.setItem('subscribed', 'true');
          document.getElementById('footeralt').style.display = 'none';


          this.footerService.createFollower(follower)
            .subscribe(successCode => {
                this.statusCode = successCode;
              },
              errorCode => this.statusCode = errorCode
            );
        });
    } else {
      follower.id = this.followerIdToUpdate;
      this.footerService.updateFollower(follower)
        .subscribe(successCode => {
            this.statusCode = successCode;
          },
          errorCode => this.statusCode = errorCode);
    }
  }

}
