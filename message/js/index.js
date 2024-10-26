this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Banyak waktu aku lewatin dengan beribu harapan yang selalu pupus, akhirnya aku ketemu seseorang yang memenuhi semua harapan aku. Satu dari ribuan hal kecil yang aku pengen dari dulu adalah punya sebuah buku yang isinya tentang hubungan aku sama seseorang yang selalu aku pengen dari dulu. Aku orang yang gampang banget nethink, ketemu kamu yang selalu ngeredam nethink aku itu salah satu hal yang paling aku syukurin sampe sekarang. I have something for u, klik for next!!!";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}
