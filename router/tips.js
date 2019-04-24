const Tip = require('../model/tip');
const router = require('express').Router();	        


router.get('/tips', (req, res) => {
	
  var tipsArray = [];
	tipsArray.push(new Tip(
		'Берите книги в библиотеке вместо того, чтобы покупать их', 
		'biblioteka'));
	 tipsArray.push(new Tip(
		'Выключайте воду, пока намыливаете посуду', 
		'posuda'));
	 tipsArray.push(new Tip(
		'Создавайте из мандариновой кожуры полезные вещи', 
		'oranges'));
	 tipsArray.push(new Tip(
		'Замените пластиковые пакеты на многоразовые сумки', 
		'sumka'));
	tipsArray.push(new Tip(
		'Обзаведитесь многоразовой бутылкой', 
		'butylka'));
	tipsArray.push(new Tip(
		'Пользуйтесь экомешочками для фруктов и овощей', 
		'ecocups'));
    tipsArray.push(new Tip(
		'Замените одноразовые трубочки для напитков на многоразовые из металла', 
		'trubochka'));
  return res.json({success: true, msg: tipsArray});

});

module.exports = router;
