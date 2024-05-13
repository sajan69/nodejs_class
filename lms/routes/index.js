const express = require('express');
const bookRouter = require('./book.route');
const authRouter = require('./auth.route');

const router = express.Router();

const routes =[
    {
        endpoint: '/books',
        route : bookRouter,

    },
    {
        endpoint: '/auth',
        route : authRouter,
    }
];

routes.forEach((route) => {
    
    router.use(route.endpoint, route.route);
}
);

module.exports = router;
