(function () {
	var url = 'http://codeit.pro/frontTestTask/news/getList';
	var counter = 0;
	var responceFromServer;
	var navigate = document.querySelector('.nav');
	var loader = document.getElementsByClassName ('loader')[3];
	var infoBlock = document.getElementById('news-list');
    navigate.addEventListener('click',showChoosenNews);
	myRequest(url)
		.then(ready, error);

	function error(error) {
		document.write(error);
	}
	function ready(res) {
		loader.style.display = "none";
		navigate.style.display = 'block';
		infoBlock.style.display = "block";
		responceFromServer = JSON.parse(res);
		showNews(responceFromServer, counter);
	}

	var timer = setInterval(function () {
		clearNews();
		if (counter === 9) {counter = 0;}
		showNews(responceFromServer,counter++);
		
	}, 99000);


	function showChoosenNews(evt) {
		console.log(evt.target.innerHTML);
		console.log(counter);
		clearInterval(timer);
		if (evt.target.innerHTML === " previous ") {
			if (counter === 0) {
				counter = 9;
				clearNews();
				showNews(responceFromServer,counter);
				
			} else {
				clearNews();
				showNews(responceFromServer,counter--);

			}
		}
		else if (evt.target.innerHTML === " next ") {
			if (counter === 9) {
				counter = 0;
				clearNews();
				showNews(responceFromServer,counter);
			} else {
				clearNews();
				showNews(responceFromServer,counter++);	
			}
		
		}
		timer = setInterval(function () {
		clearNews();
		if (counter === 9) {counter = 0;}
		showNews(responceFromServer,counter++);
		
	}, 3000);
	}
	function showNews(responceFromServer, counter) {
		var allNews = responceFromServer.list[counter]; //all about one news
		var refTitle = allNews.description.split('.')[0];
		var link = allNews.link;
		var parent = document.getElementById('news-list');
		var wrap = createElement('div', null, ['wrap-all']);
		var imgCont = createElement('div', null, ['img-cont']);
		var newsText = createElement('div', null, ['news-text']);


		var title = createElement('a', refTitle, null, {
				'href':link,
				'title':refTitle
			})
			parent.appendChild(wrap);


			wrap.appendChild(title);
			wrap.appendChild(imgCont);
			wrap.appendChild(newsText);
		var imgparent = document.getElementsByClassName('img-cont')[0];
		var textparent = document.getElementsByClassName("news-text")[0];
		

			var oneN = allNews[counter];
			 var imgSrc = allNews.img;
			 
			var image = createElement('img',null, null, {
			 	'src':imgSrc
			 });
			//image.setAttribute()

			 imgparent.appendChild(image);

			var newsText = allNews.description;
			var text = createElement('p', newsText, ['text-news']);

			
			textparent.appendChild(text);

			var newAuthor = allNews.author;
			var newsDate = allNews.date;
			var author = createElement('p', newAuthor, ['text-news']);
			var date = createElement('p', newsDate, ['text-news']);

			wrap.appendChild(author);
			wrap.appendChild(date);


		//title
		//text
		//author
		//date*/

	}

	function clearNews(){
	//	var Cont = document.getElementsByClassName("img-cont")[0];
		var cont = document.getElementsByClassName('wrap-all')[0];
		cont.remove();
	}
})()