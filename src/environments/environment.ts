// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBR0YFWQ8EPtvfah-9D63I3DZRD49JuZOs',
    authDomain: 'lm-fitness-tracker.firebaseapp.com',
    databaseURL: 'https://lm-fitness-tracker.firebaseio.com',
    projectId: 'lm-fitness-tracker',
    storageBucket: 'lm-fitness-tracker.appspot.com',
    messagingSenderId: '833514196266'
  }
};
