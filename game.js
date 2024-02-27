let skor = 0;
			function black(){
			document.getElementById("tus").setAttribute("value","Start Game");
			document.getElementById("resim1").setAttribute("src","s.jpg");
			document.getElementById("resim2").setAttribute("src","s.jpg");
			document.getElementById("resim3").setAttribute("src","s.jpg");
			document.getElementById("resim4").setAttribute("src","s.jpg");
			document.getElementById("resim5").setAttribute("src","s.jpg");
			document.getElementById("resim1").setAttribute("onclick","resim('resim1')");
			document.getElementById("resim2").setAttribute("onclick","resim('resim2')");
			document.getElementById("resim3").setAttribute("onclick","resim('resim3')");
			document.getElementById("resim4").setAttribute("onclick","resim('resim4')");
			document.getElementById("resim5").setAttribute("onclick","resim('resim5')");
			}
			function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
			}			
			function foto(){
			black();
			skor = 0;
			document.getElementById("score").textContent = skor;
			document.getElementById("tus").setAttribute("value","Restart");
			var liste = ["sayi1","sayi2","sayi3","sayi4","sayi5"];
			liste.sort(function(a, b){return 0.5 - Math.random()});
			switch(liste[0]){
			case "sayi1":
			document.getElementById("resim1").setAttribute("src","e.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim1").setAttribute("src","e_s.jpg");});
			break;
			case "sayi2":
			document.getElementById("resim1").setAttribute("src","m.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim1").setAttribute("src","m_s.jpg");});
			break;
			case "sayi3":
			document.getElementById("resim1").setAttribute("src","i.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim1").setAttribute("src","i_s.jpg");});
			break;
			case "sayi4":
			document.getElementById("resim1").setAttribute("src","n.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim1").setAttribute("src","n_s.jpg");});
			break;
			case "sayi5":
			document.getElementById("resim1").setAttribute("src","1.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim1").setAttribute("src","1_s.jpg");});
			break;
			}
			switch(liste[1]){
			case "sayi1":
			document.getElementById("resim2").setAttribute("src","e.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim2").setAttribute("src","e_s.jpg");});
			break;
			case "sayi2":
			document.getElementById("resim2").setAttribute("src","m.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim2").setAttribute("src","m_s.jpg");});
			break;
			case "sayi3":
			document.getElementById("resim2").setAttribute("src","i.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim2").setAttribute("src","i_s.jpg");});
			break;
			case "sayi4":
			document.getElementById("resim2").setAttribute("src","n.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim2").setAttribute("src","n_s.jpg");});
			break;
			case "sayi5":
			document.getElementById("resim2").setAttribute("src","1.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim2").setAttribute("src","1_s.jpg");});
			break;
			}
			switch(liste[2]){
			case "sayi1":
			document.getElementById("resim3").setAttribute("src","e.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim3").setAttribute("src","e_s.jpg");});
			break;
			case "sayi2":
			document.getElementById("resim3").setAttribute("src","m.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim3").setAttribute("src","m_s.jpg");});
			break;
			case "sayi3":
			document.getElementById("resim3").setAttribute("src","i.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim3").setAttribute("src","i_s.jpg");});
			break;
			case "sayi4":
			document.getElementById("resim3").setAttribute("src","n.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim3").setAttribute("src","n_s.jpg");});
			break;
			case "sayi5":
			document.getElementById("resim3").setAttribute("src","1.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim3").setAttribute("src","1_s.jpg");});
			break;
			}
			switch(liste[3]){
			case "sayi1":
			document.getElementById("resim4").setAttribute("src","e.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim4").setAttribute("src","e_s.jpg");});
			break;
			case "sayi2":
			document.getElementById("resim4").setAttribute("src","m.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim4").setAttribute("src","m_s.jpg");});
			break;
			case "sayi3":
			document.getElementById("resim4").setAttribute("src","i.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim4").setAttribute("src","i_s.jpg");});
			break;
			case "sayi4":
			document.getElementById("resim4").setAttribute("src","n.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim4").setAttribute("src","n_s.jpg");});
			break;
			case "sayi5":
			document.getElementById("resim4").setAttribute("src","1.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim4").setAttribute("src","1_s.jpg");});
			break;
			}
			switch(liste[4]){
			case "sayi1":
			document.getElementById("resim5").setAttribute("src","e.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim5").setAttribute("src","e_s.jpg");});
			break;
			case "sayi2":
			document.getElementById("resim5").setAttribute("src","m.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim5").setAttribute("src","m_s.jpg");});
			break;
			case "sayi3":
			document.getElementById("resim5").setAttribute("src","i.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim5").setAttribute("src","i_s.jpg");});
			break;
			case "sayi4":
			document.getElementById("resim5").setAttribute("src","n.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim5").setAttribute("src","n_s.jpg");});
			break;
			case "sayi5":
			document.getElementById("resim5").setAttribute("src","1.jpg"); 
			sleep(2000).then(() => {document.getElementById("resim5").setAttribute("src","1_s.jpg");});
			break;
			}
			}		
			function resim(resimid){
			var resimsec = document.getElementById(resimid).getAttribute("src");
			if(resimsec =='e_s.jpg'){
			skor += 20;
			document.getElementById("score").textContent = skor;
			document.getElementById(resimid).setAttribute("src","e.jpg");
			document.getElementById("resim1").setAttribute("onclick","secim2('resim1')");
			document.getElementById("resim2").setAttribute("onclick","secim2('resim2')");
			document.getElementById("resim3").setAttribute("onclick","secim2('resim3')");
			document.getElementById("resim4").setAttribute("onclick","secim2('resim4')");
			document.getElementById("resim5").setAttribute("onclick","secim2('resim5')");
			}
			else if(resimsec =='m_s.jpg' || resimsec =='i_s.jpg' || resimsec =='n_s.jpg' || resimsec =='1_s.jpg'){
			alert("You lose, score: " + skor);
		
			black();
			}
			}
			function secim2(resimid){
			var resimsec = document.getElementById(resimid).getAttribute("src");
			if(resimsec =='m_s.jpg'){
			skor += 20;
			document.getElementById("score").textContent = skor;
			document.getElementById(resimid).setAttribute("src","m.jpg");
			document.getElementById("resim1").setAttribute("onclick","secim3('resim1')");
			document.getElementById("resim2").setAttribute("onclick","secim3('resim2')");
			document.getElementById("resim3").setAttribute("onclick","secim3('resim3')");
			document.getElementById("resim4").setAttribute("onclick","secim3('resim4')");
			document.getElementById("resim5").setAttribute("onclick","secim3('resim5')");
			}
			else if(resimsec =='i_s.jpg' || resimsec =='n_s.jpg' || resimsec =='1_s.jpg'){
			alert("You lose, score: " + skor);
			black();
			}
			}	
			function secim3(resimid){
			var resimsec = document.getElementById(resimid).getAttribute("src");
			if(resimsec =='i_s.jpg'){
			skor += 20;
			document.getElementById("score").textContent = skor;
			document.getElementById(resimid).setAttribute("src","i.jpg");
			document.getElementById("resim1").setAttribute("onclick","secim4('resim1')");
			document.getElementById("resim2").setAttribute("onclick","secim4('resim2')");
			document.getElementById("resim3").setAttribute("onclick","secim4('resim3')");
			document.getElementById("resim4").setAttribute("onclick","secim4('resim4')");
			document.getElementById("resim5").setAttribute("onclick","secim4('resim5')");
			}
			else if((resimsec =='n_s.jpg' ) || (resimsec =='1_s.jpg')){
			alert("You lose, score: " + skor);

			black();
			}
			}
			function secim4(resimid){
			var resimsec = document.getElementById(resimid).getAttribute("src");
			if(resimsec =='n_s.jpg'){
			skor += 20;
			document.getElementById("score").textContent = skor;
			document.getElementById(resimid).setAttribute("src","n.jpg");
			document.getElementById("resim1").setAttribute("onclick","secim5('resim1')");
			document.getElementById("resim2").setAttribute("onclick","secim5('resim2')");
			document.getElementById("resim3").setAttribute("onclick","secim5('resim3')");
			document.getElementById("resim4").setAttribute("onclick","secim5('resim4')");
			document.getElementById("resim5").setAttribute("onclick","secim5('resim5')");
			}
			else if(resimsec =='1_s.jpg'){
			alert("You lose, score: " + skor);
			black();
			}
			}
			function secim5(resimid){
			var resimsec = document.getElementById(resimid).getAttribute("src");
			if(resimsec =='1_s.jpg'){
			skor += 20;
			document.getElementById("score").textContent = skor;
			document.getElementById(resimid).setAttribute("src","1.jpg");
			document.getElementById("resim1").setAttribute("onclick","resim('resim1')");
			document.getElementById("resim2").setAttribute("onclick","resim('resim2')");
			document.getElementById("resim3").setAttribute("onclick","resim('resim3')");
			document.getElementById("resim4").setAttribute("onclick","resim('resim4')");
			document.getElementById("resim5").setAttribute("onclick","resim('resim5')");
			document.getElementById("tus").setAttribute("value","Start Game");
			setTimeout(function () {
            alert("You won!");
			}, 100);
			}}