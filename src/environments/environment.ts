// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCvAFrmyzfuEIoNIQxNgWKx9T2HYjiOqNk",
    authDomain: "crud-teste-back.firebaseapp.com",
    projectId: "crud-teste-back",
    storageBucket: "crud-teste-back.appspot.com",
    messagingSenderId: "258963809263",
    appId: "1:258963809263:web:6ce91827c1371062020c1a"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
