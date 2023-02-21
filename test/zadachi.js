
var renderCards = (icreamData) => {
	var listCard = document.querySelector('.goods');
	
	for(var i = 0 ; i < icreamData.length; i++ ) {
	var iceCream = document.createElement('li');
	iceCream.classList.add('good');
	listCard.appendChild(iceCream);
	
	var  description = document.createElement('h2');
	description.classList.add("good__description");
	description.textContent = icreamData[i].text
	iceCream.appendChild(description);
	
	var image = document.createElement('img');
	image.classList.add('good__image');
	image.src = icreamData[i].imgUrl 
	image.alt = icreamData[i].text;
	iceCream.appendChild(image);
  
  var price = document.createElement('p');
	 price.classList.add('good__price');
	 price.textContent = `${icreamData[i].price}Р/кг`
	 iceCream.appendChild(price);
	
  var icreamAvaliable = 'good--available'
	 listCard.classList.add(icreamAvaliable);
	 if (!iceCream.inStock) {
		icreamAvaliable = 'good--unavailable'
		};
		
	 if (iceCream.isHit)  {
		iceCream.classList.add('good--hit')
		}}
	  
	return listCard
		}