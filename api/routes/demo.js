var demoController = require('../controllers/demoController');

module.exports = function(router){
    router.get('/api/demo', demoController.getData);
}