const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

function appRoutes(app) {
    const routes = new express.Router();

    routes.get('/healthz', (req, res) => {
        return res.status(200).json({'status': 'ok'});
    });

    const production = app.env.NODE_ENV === 'production';

    if (production) {
        app.use(favicon(path.join(__dirname, '../..', 'favicon.ico')));
        app.use('/static', express.static(path.join(__dirname, '../../static')));
        app.use('/', express.static(path.join(__dirname, '../../static')));
    } else {
        // Currently, whether running this in production or not, it serves the most recent statically from /build. It is not meant to act as development server.
        app.use(favicon(path.join(__dirname, '../../build', 'favicon.ico')));
        app.use('/static', express.static(path.join(__dirname, '../../build/static')));
        app.use('/', express.static(path.join(__dirname, '../../build/static')));
    }

    routes.get('/*', (req, res) => {
        if (production) {
            res.sendFile(path.join(__dirname, '../../index.html'));
        } else {
            res.sendFile(path.join(__dirname, '../../build/index.html'));
        }
    });

    return routes;
}


module.exports = appRoutes;
