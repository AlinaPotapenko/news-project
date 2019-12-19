// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://newsapi.org/v2/everything?apiKey=1ba395290b6e4a0c80a106c611938608',
  API_HOTNEWS_URL: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1ba395290b6e4a0c80a106c611938608',
  API_CONFIG: {
    globalSearch: ''
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
