const RecyclePoint = require('../model/points');
const router = require('express').Router();        

router.get('/recyclepoints', (req, res) => {

  var recyclePointsArray = [];
	recyclePointsArray.push(new RecyclePoint(
		'ООО «Вторресурс24»', 
		'макулатура,алюминий,бутылки ПЭТ,полиэтилен,стеклянные бутылки', 
		'ул.Ак.Киренского, 25', 
		'55.990508', 
		'92.90463'));
	recyclePointsArray.push(new RecyclePoint(
		'ИП КРАСНОВ С.Н.', 
		'жестяные банки,стекло', 
		'ул.Королева, 11', 
		'56.005749', 
		'92.801030'));
	recyclePointsArray.push(new RecyclePoint(
		'Краевой музей', 
		'батарейки', 
		'ул.Дубровинского, 84', 
		'56.007277', 
		'92.872776'));
	recyclePointsArray.push(new RecyclePoint(
		'Точка сбора стеклотары', 
		'стекло', 
		'ул.Маерчака, 49', 
		'56.029103', 
		'92.824693'));
	recyclePointsArray.push(new RecyclePoint(
		'Я сдаю в переработку', 
		'все виды пластика (кроме 3 и 6), тетрапак, стекло, батарейки', 
		'ул.Семафорная, 443а', 
		'56.001587', 
		'92.956901'));

  return res.json({success: true, msg: recyclePointsArray});

});

module.exports = router;
