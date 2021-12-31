const TranslateController = require('../Controllers/TranslateController');
module.exports = (app) => {
   app.post('/Translate', TranslateController.post);
   app.put('/Translate/:id', TranslateController.put);
   app.delete('/Translate/:id', TranslateController.delete);
   app.get('/Translates', TranslateController.get);
   app.get('/Translate/:id', TranslateController.getById);
}