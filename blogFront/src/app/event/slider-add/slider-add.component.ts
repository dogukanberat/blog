import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../../event.service';

@Component({
  selector: 'app-slider-add',
  templateUrl: './slider-add.component.html',
  styleUrls: ['./slider-add.component.css']
})
export class SliderAddComponent implements OnInit {

  allSliders;
  statusCode;
  data;
  datas;
  createSlider = false;

  requestProcessing = false;
  sliderIdToUpdate = null;
  processValidation = false;
  sliderForm = new FormGroup({
    url: new FormControl('', Validators.required),
    href: new FormControl('', Validators.required)
  });
  constructor(private sliderService: EventService) {}
  ngOnInit(): void {
    this.getAllSliders();
  }

  getAllSliders() {
    this.sliderService.getAllSliders()
      .subscribe(
        data => this.allSliders = data,
        errorCode => this.statusCode = errorCode);
  }

  openCreateSlider() {
    if (this.createSlider === false) {
      this.createSlider = true;
      this.backToCreateSlider();
    } else {
      this.createSlider = false;
      this.backToCreateSlider();
    }
  }
  onSliderFormSubmit() {
    this.processValidation = true;
    if (this.sliderForm.invalid) {
      return;
    }
    this.preProcessConfigurations();
    const slider = this.sliderForm.value;


    if (this.sliderIdToUpdate === null) {
      this.sliderService.getAllSliders()
        .subscribe(sliders => {
          this.data = sliders;
          this.sliderService.createSlider(slider)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.getAllSliders();
                this.backToCreateSlider();
              },
              errorCode => this.statusCode = errorCode
            );
        });
    } else {
      slider.id = this.sliderIdToUpdate;
      this.sliderService.updateSlider(slider)
        .subscribe(successCode => {
            this.statusCode = successCode;
            this.getAllSliders();
            this.backToCreateSlider();
          },
          errorCode => this.statusCode = errorCode);
    }
  }
  loadSliderToEdit(sliderId) {
    this.createSlider = true;
    this.preProcessConfigurations();
    this.sliderService.getSliderById(sliderId)
      .subscribe(slider => {
          this.datas = slider;
          this.sliderIdToUpdate = this.datas.id;
          this.sliderForm.setValue({ url: this.datas.url, href: this.datas.href});
          this.processValidation = true;
          this.requestProcessing = false;
        },
        errorCode => this.statusCode = errorCode);
  }
  deleteSlider(sliderId: string) {
    this.preProcessConfigurations();
    this.sliderService.deleteSliderById(sliderId)
      .subscribe(successCode => {
          this.statusCode = 204;
          this.getAllSliders();
          this.backToCreateSlider();
        },
        errorCode => this.statusCode = errorCode);
  }
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }
  backToCreateSlider() {
    this.sliderIdToUpdate = null;
    this.sliderForm.reset();
    this.processValidation = false;
  }
}

