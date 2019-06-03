var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const persons =[{
	name: 'Lokesh', age:24 , cityResiding: 'Barrie', countryBorn: 'India'
}];

router.get('/lokesh', function(req, res, next) {
	res.render('person', {name: 'Lokesh', age:24 , cityResiding: 'Barrie', countryBorn: 'India'});
}) ;

router.get('/thummala', function(req, res, next) {
	res.render('person', {name: 'Thummala',age:50 , cityResiding: 'Guntur', countryBorn: 'India'});
}) ;

router.get('/sai', function(req, res, next) {
	res.render('person', {name: 'Sai',age:22 , cityResiding: 'NY', countryBorn: 'India'});
}) ;

router.get('/ram', function(req, res, next) {
	res.render('person', {name: 'Ram',age:25 , cityResiding: 'Barrie', countryBorn: 'India'});
}) ;

module.exports = router;
