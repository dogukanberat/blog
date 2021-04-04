// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dbUrl: 'http://' + document.location.host + '/event',
  //dbUrl : 'http://localhost:3050/event',

  uploadLink: 'http://' + document.location.host + '/api/upload',
  //uploadLink : 'http://localhost:3050/api/upload/',


  uploadsLink: 'http://' + document.location.host + '/uploads/'
  //uploadsLink : 'http://localhost:3050/uploads/'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
