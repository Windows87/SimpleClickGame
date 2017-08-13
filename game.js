document.addEventListener('DOMContentLoaded', function(){
	/* Game Function */

	var jogo = new game(); 

	function game(){
		this.pontuation = 0;
		this.price = [20, 30];
		this.click = 1;
		this.winPerSecond = 0;

		this.main = function(){
			thisVar = this;
			window.setInterval(function(){thisVar.getPerSecond()} , 1000);
		}

		this.onClicked = function(){
			this.pontuation+= this.click;
			document.getElementById('value').innerText = parseInt(this.pontuation);

			if(this.pontuation >= this.price[0]){
				document.getElementById('buy').style['display'] = "block";
			}

			if(this.pontuation >= this.price[1]){
				document.getElementById('buyclick').style['display'] = "block";
			}		
		}

		this.buy = function(n){
			if(this.pontuation >= this.price[n]){
				this.pontuation -= this.price[n];

				switch (n){
					case 0:
						this.winPerSecond *= 1.4;
						this.price[n] *= 1.2;
						document.getElementById('buy').style['display'] = "inline";
						document.getElementById('buyclick').style['display'] = "inline";
						break;
					case 1:
						this.click *= 1.4;
						this.price[n] *= 1.8;
						document.getElementById('buy').style['display'] = "inline";
						document.getElementById('buyclick').style['display'] = "inline";
						break;
				}

				document.getElementById('value').innerText = parseInt(this.pontuation);
			}			
		}

		this.getPerSecond = function(){
			this.pontuation += this.winPerSecond;
			document.getElementById('value').innerText = parseInt(this.pontuation);
			
			if(this.pontuation >= this.price[0]){
				document.getElementById('buy').style['display'] = "block";
			}

			if(this.pontuation >= this.price[1]){
				document.getElementById('buyclick').style['display'] = "block";
			}	
		}

		this.main();
	}

	/* DOM Functions */

	click.addEventListener('click', function(){
		jogo.onClicked();
	});

	buy.addEventListener('click', function(){
		jogo.buy(0);
	});

	buyclick.addEventListener('click', function(){
		jogo.buy(1);
	});		
}, false);