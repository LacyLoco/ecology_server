const Article = require('../model/article');
const router = require('express').Router();	        


router.get('/articles', (req, res) => {
	
  var articleArray = [];
    articleArray.push(new Article(
		'Настоящее и будущее «зеленой» энергетики в России', 
		'energy', 
		'https://recyclemag.ru/article/nastoyaschee-buduschee-zelenoi-energetiki-rossii'));
    articleArray.push(new Article(
		'Чем опасен микропластик', 
		'mikroplastic', 
		'https://recyclemag.ru/article/mikroplastik-opasen-umenshit-kolichestvo'));
	articleArray.push(new Article(
		'Пластик в океане', 
		'musor', 
		'https://www.bbc.com/russian/features-42307854'));
	articleArray.push(new Article(
		'Как связаны веганство и защита окружающей среды', 
		'vegan', 
		'https://recyclemag.ru/article/svyazani-veganstvo-zaschita-okruzhayuschei-sredi'));
	articleArray.push(new Article(
		'Почему бумажные стаканчики вредны для природы', 
		'koffestakan', 
		'https://recyclemag.ru/article/eko-pochemu-kofeinie-stakanchiki-vredyat-okruzhayuschei-srede-ekologichnie-alternativi'));
	
  return res.json({success: true, msg: articleArray});

});

module.exports = router;
