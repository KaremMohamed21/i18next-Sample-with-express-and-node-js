const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');

module.exports = {
  i18nextt: function () { 
      i18next
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
    ns: ['translation', 'common'],
    defaultNS: 'translation',
    backend: {
    loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
    order: ['querystring', 'cookie'],
    caches: ['cookie']
    },
    fallbackLng: 'en',
    preload: ['en', 'ar']
    })
  },

  handleMiddleware: i18nextMiddleware.handle(i18next, {
    ignoreRoutes: ["/foo"], // or function(req, res, options, i18next) { /* return true to ignore */ }
    removeLngFromUrl: true
  }),
}


