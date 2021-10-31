import express from 'express';
import fs from 'fs';
import RDS from 'react-dom/server';
import path from 'path';

import App from '../src/app';

const app = express();

app.use(express.static('dist', { maxAge: 600000 }));

app.get('*', (req, res) => {

    const reactApp = RDS.renderToStaticMarkup(<App />);

    const file = path.resolve(__dirname, 'src/index.html');
    const fileContent = fs.readFileSync(file).toString();
    const markup = fileContent.replace('<div id="react"></div>', `<div id="react">${reactApp}</div >`);
    res.send(markup);

});

app.listen(3000, 'localhost');