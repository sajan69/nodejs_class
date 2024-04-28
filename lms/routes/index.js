const express = require('express');
const bookRouter = require('./book.route');

const router = express.Router();

const routes =[
    {
        endpoint: '/books',
        route : bookRouter,

    },
];

routes.forEach((route) => {
    
    router.use(route.endpoint, route.route);
}
);

module.exports = router;
