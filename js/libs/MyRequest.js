var myRequest = (function(){
	return function httpGet(url) {
		return new Promise(function (res, rej) {
			var xhr = new XMLHttpRequest();
			xhr.open("GET", url, true);

			xhr.onload = function () {
				if (this.status === 200) {
					res(this.response);
				}


			};

if (this.status === 404) {
					var error = new Error(this.status);
					error.code = this.status;
					rej(error);

				} else if (this.status > 300) {
					var error = new Error(this.status);
					error.code = this.status;
					rej(error);
				};

			//xhr.onerror = function () {
			//	rej(new Error('DoesntWork'));

			//}
			xhr.send();
		})
	}

})()