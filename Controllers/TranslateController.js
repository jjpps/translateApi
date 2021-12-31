const translatte = require('translatte');

exports.post = (req, res, next) => {
   res.setHeader('Content-Type', 'application/json');
   let text = "";
   let textToTranslate = "";
   let data = '';
   req.on('data', chunk => {
      data += chunk;
   })
   req.on('end', () => {
      textToTranslate = JSON.parse(data).texto;
      translatte(textToTranslate, {
         to: 'pt'
      }).then(res2 => {

         res.status(200);
         res.end(JSON.stringify({
            texto: res2.text
         }));
      }).catch(err => {
         res.status(200).send(err);
         res.end;
      });
   })
};

exports.put = (req, res, next) => {
   let id = req.params.id;
   res.status(201).send(`Rota PUT com ID! --> ${id}`);
};

exports.delete = (req, res, next) => {
   let id = req.params.id;
   res.status(200).send(`Rota DELETE com ID! --> ${id}`);
};

exports.get = (req, res, next) => {
   res.status(200).send('rota get');
};

exports.getById = (req, res, next) => {
   let id = req.params.id;
   res.status(200).send(`Rota GET com ID! ${id}`);
};