import {Component, OnInit} from '@angular/core';
import {FileUploader, FileItem, ParsedResponseHeaders} from 'ng2-file-upload';
import {ToastrService} from 'ngx-toastr';
import {EventService} from '../../event.service';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})

export class FileuploadComponent implements OnInit {
  env = environment;

  uploadLink = this.env.uploadLink;
  link = this.env.uploadsLink;

  public uploader: FileUploader = new FileUploader({
    url: this.uploadLink,
    itemAlias: 'image',
    maxFileSize:  50 * 1024 * 1024
  });
  itemName;
  allUploadLinks;
  statusCode;
  data;

  datas;
  createUploadLink = false;

  requestProcessing = false;
  uploadLinkIdToUpdate = null;
  processValidation = false;

  constructor(private toastr: ToastrService,
              private uploadLinkService: EventService) {
  }

  ngOnInit() {

    this.getAllUploadLinks();

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);

    this.uploader.onCompleteItem = (item: any, status: any) => {
      this.toastr.success(item + 'File uploaded!' + status);
    };
  }

  onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    this.toastr.success(item + 'File successfully uploaded!' + status);
    const data = JSON.parse(response);
    console.log(data.link);
    this.onUploadSubmit(data);
  }

  getAllUploadLinks() {
    this.uploadLinkService.getAllUploadLinks()
      .subscribe(
        data => this.allUploadLinks = data,
        errorCode => this.statusCode = errorCode);

  }


  onUploadSubmit(value) {
    const category = {
      id: '',
      link: value.link
    };


    if (this.uploadLinkIdToUpdate === null) {
      this.uploadLinkService.getAllUploadLinks()
        .subscribe(categorys => {
          this.data = categorys;

          this.uploadLinkService.createUploadLink(category)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.getAllUploadLinks();
              },
              errorCode => this.statusCode = errorCode
            );
        });
    } else {
      category.id = this.uploadLinkIdToUpdate;
      console.log('link editlenemez');
    }
  }


  deleteUploadLink(uploadLinkId: string) {
    this.preProcessConfigurations();
    this.uploadLinkService.deleteUploadLinkById(uploadLinkId)
      .subscribe(successCode => {
          this.statusCode = 204;
          this.getAllUploadLinks();
        },
        errorCode => this.statusCode = errorCode);
  }

  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }


}








