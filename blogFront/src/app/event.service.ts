import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable()
export class EventService {
  env = environment;
  dbUrl = this.env.dbUrl;

  constructor(private http: HttpClient) {
  }

  getAllPages() {
    return this.http.get(this.dbUrl + '/get-page');

  }

  createPage(page) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.post(this.dbUrl + '/create-page', page, options);
  }

  getPageById(pageId: string) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    console.log(this.dbUrl + '/get-page-by-id?id=' + pageId);
    return this.http.get(this.dbUrl + '/get-page-by-id?id=' + pageId);
  }

  updatePage(page) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.put(this.dbUrl + '/update-page', page, options);
  }

  deletePageById(pageId) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.delete(this.dbUrl + '/delete-page?id=' + pageId);
  }

  getAllFollowers() {
    return this.http.get(this.dbUrl + '/get-follower');

  }

  createFollower(follower) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.post(this.dbUrl + '/create-follower', follower, options);
  }

  getFollowerById(followerId: string) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    console.log(this.dbUrl + '/get-follower-by-id?id=' + followerId);
    return this.http.get(this.dbUrl + '/get-follower-by-id?id=' + followerId);
  }

  updateFollower(follower) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.put(this.dbUrl + '/update-follower', follower, options);
  }

  deleteFollowerById(followerId) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.delete(this.dbUrl + '/delete-follower?id=' + followerId);
  }

  getAllUsers() {
    return this.http.get(this.dbUrl + '/get-user');

  }

  createUser(follower) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.post(this.dbUrl + '/create-user', follower, options);
  }

  getUserById(followerId: string) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    console.log(this.dbUrl + '/get-follower-by-id?id=' + followerId);
    return this.http.get(this.dbUrl + '/get-user-by-id?id=' + followerId);
  }

  updateUser(follower) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.put(this.dbUrl + '/update-user', follower, options);
  }

  deleteUserById(followerId) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.delete(this.dbUrl + '/delete-user?id=' + followerId);
  }

  getAllCategorys() {
    return this.http.get(this.dbUrl + '/get-category');

  }

  createCategory(category) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.post(this.dbUrl + '/create-category', category, options);
  }

  getCategoryById(categoryId: string) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    console.log(this.dbUrl + '/get-category-by-id?id=' + categoryId);
    return this.http.get(this.dbUrl + '/get-category-by-id?id=' + categoryId);
  }

  updateCategory(category) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.put(this.dbUrl + '/update-category', category, options);
  }

  deleteCategoryById(categoryId) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.delete(this.dbUrl + '/delete-category?id=' + categoryId);
  }


  getAllUploadLinks() {
    return this.http.get(this.dbUrl + '/get-uploadLink');

  }

  createUploadLink(uploadLink) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.post(this.dbUrl + '/create-uploadLink', uploadLink, options);
  }


  deleteUploadLinkById(uploadLinkId) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.delete(this.dbUrl + '/delete-uploadLink?id=' + uploadLinkId);
  }


  getAllSliders() {
    return this.http.get(this.dbUrl + '/get-slider');

  }

  createSlider(slider) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.post(this.dbUrl + '/create-slider', slider, options);
  }

  getSliderById(sliderId: string) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    console.log(this.dbUrl + '/get-slider-by-id?id=' + sliderId);
    return this.http.get(this.dbUrl + '/get-slider-by-id?id=' + sliderId);
  }

  updateSlider(slider) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.put(this.dbUrl + '/update-slider', slider, options);
  }

  deleteSliderById(sliderId) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.delete(this.dbUrl + '/delete-slider?id=' + sliderId);
  }


  getAllEvents() {
    return this.http.get(this.dbUrl + '/get-event');

  }

  createEvent(event) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.post(this.dbUrl + '/create-event', event, options);
  }

  getEventById(eventId: string) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    console.log(this.dbUrl + '/get-event-by-id?id=' + eventId);
    return this.http.get(this.dbUrl + '/get-event-by-id?id=' + eventId);
  }

  updateEvent(event) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.put(this.dbUrl + '/update-event', event, options);
  }

  deleteEventById(eventId) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.delete(this.dbUrl + '/delete-event?id=' + eventId);
  }

  getAllMenuLinks() {
    return this.http.get(this.dbUrl + '/get-menu');

  }

  createMenuLink(footer) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.post(this.dbUrl + '/create-menu', footer, options);
  }

  getMenuLinkById(footerId: string) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    console.log(this.dbUrl + '/get-footer-by-id?id=' + footerId);
    return this.http.get(this.dbUrl + '/get-menu-by-id?id=' + footerId);
  }

  updateMenuLink(footer) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.put(this.dbUrl + '/update-menu', footer, options);
  }

  deleteMenuLinkById(footerId) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.delete(this.dbUrl + '/delete-menu?id=' + footerId);
  }

  getAllFooterLinks() {
    return this.http.get(this.dbUrl + '/get-footer');

  }

  createFooterLink(footer) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.post(this.dbUrl + '/create-footer', footer, options);
  }

  getFooterLinkById(footerId: string) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    console.log(this.dbUrl + '/get-footer-by-id?id=' + footerId);
    return this.http.get(this.dbUrl + '/get-footer-by-id?id=' + footerId);
  }

  updateFooterLink(footer) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.put(this.dbUrl + '/update-footer', footer, options);
  }

  deleteFooterLinkById(footerId) {
    const cpHeaders = {'Content-Type': 'application/json'};
    const options = {headers: cpHeaders};
    return this.http.delete(this.dbUrl + '/delete-footer?id=' + footerId);
  }

}
