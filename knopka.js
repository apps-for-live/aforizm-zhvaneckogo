
//АНИМАЦИЯ

let mas = ['👾','🤖','😁'];




let myInterval = setInterval(myTimer, 1000);



function myTimer() {

    let ai3 = Math.floor(Math.random()*3)+0;

    console.log(ai3);
  
    let timer1 = document.getElementById("timer1").innerHTML = mas[`${ai3}`];

    console.log(timer1);
  
};

//ОСНОВНАЯ ЧАСТЬ


let div1 = document.getElementById("div1");

div1.innerHTML = `<div>
    <button id = "but1">▶️Play</button>  
    </div>`;

let but1 = document.getElementById("but1");

but1.onclick = function () {

    let div1 = document.getElementById("div1");

    div1.innerHTML =  `<div><p>Привет уважаемый друг! Я бот "Knopka", буду рассказывать вам афоризмы Михаила Жванецкого. Если хотите продолжить, то нажмите: "ДАЛЕЕ..."</p>

   <button  id = "dalee">ДАЛЕЕ...</button>
   <!--button  id = "net">НЕТ</button--> 
  
   </div>`;

window.speechSynthesis.cancel();

const text = `Привет уважаемый друг! Я бот "Кнопка", буду рассказывать вам афоризмы Михаила Жванецкого. Хи-хи-хи, ха-ха-ха. Если хотите продолжить, то нажмите: "ДАЛЕЕ..." Хи-хи-хи, ха-ха-ха!`; //textEl.value;

  const utterance = new SpeechSynthesisUtterance(text);

  window.speechSynthesis.speak(utterance);


let dalee = document.getElementById("dalee");

dalee.onclick = function () {

 let div1 = document.getElementById("div1");
 div1.innerHTML =`<p>Что такое афоризм? Афори́зм — оригинальная законченная мысль, изречённая и записанная в лаконичной запоминающейся текстовой форме и впоследствии неоднократно воспроизводимая другими людьми. Если вы хотите посмеяться вместе со мной, то нажмите: "Хочу..."</p>
    
     <button  id = "obRes">Хочу...</button>
     <hr> 
    <!--button  id = "redCoda">Редакторы <br> коды</button> 
  
    <button  id = "roboty">Программы <br>  Берлина А.</button--> 
    
    `;
 
 const text = `Что такое афоризм? Афори́зм — оригинальная законченная мысль, изречённая и записанная в лаконичной запоминающейся текстовой форме и впоследствии неоднократно воспроизводимая другими людьми. Если вы хотите посмеяться вместе со мной, то нажмите: "Хочу..." Ха-ха-ха, Хи-хи-хи!`; //textEl.value;



  const utterance = new SpeechSynthesisUtterance(text);

  window.speechSynthesis.speak(utterance);
  
let obRes = document.getElementById("obRes");

obRes.onclick = function () {

  let div1 = document.getElementById("div1");
 div1.innerHTML =`<p>Я знаю афоризмы разных сатириков на различные темы. Но в данном приложении я буду рассказывать афоризмы Михаила Жванецкого. Если хотите прослушать его афоризмы, то нажмите: "Прослушать". Каждый раз, когда вы будете нажимать: "Прослушать", я буду рассказывать вам новый афоризм.</p>
 
 <!--div class="radio_playlist"-->



 <!--div id="ul"-->
 <div class="tab">
 <hr> 
 <button id ="1" > ▶️ Прослушать </button>
 
 <button id ="2" >▶️ О приложении</button>
 <hr>          
 <!--button id ="3" > </button-->
  
 </div>
 <!--/div-->
 
 <!--/div-->
 
 
 
 
 
 <!--h2></h2-->
 <hr>
    
         <div id = "p">
         
 </div>`;

 /*------------------------------------------ */

let mas =['1','2','3','4','5','6','7','8','9',

'10','11','12','13','14','15','16','17',

'18','19','20','21','22','23','24',
'25','26','27','28'] //27 ячеек

let section = document.getElementById("section");

let click = section.getElementsByTagName('button');

for (let i = 0; i < click.length; i ++) {


click[i].onclick = function(){


let id = this.getAttribute("id");

if(id == mas[0]) {

document.getElementById('p').innerHTML = 
`<p id = "p1"></p>`


let mas_mamory = ['В молодости мы ищем красивое тело, а с годами родную душу.', 'Одно неловкое движение, и вы отец.', 'Никогда не преувеличивайте глупость врагов и верность друзей…','Ничего страшного если над тобой смеются… Гораздо хуже, когда над тобой плачут…','Всё идёт хорошо, но почему-то мимо','Не стоит ездить быстрее, чем летает твой ангел хранитель','Самое несчастное животное — это осьминог. У него и ноги от ушей, и руки из жопы, и сама жопа — с ушами, и мозги, собственно говоря, тоже в жопе…','Лучшее алиби — быть жеpтвой.','Лучше маленький доллар, чем большое спасибо','Лучше обед без аппетита, чем аппетит без обеда.','Лучше семь раз покрыться потом, чем один раз инеем!','Лучше длинная живая очеpедь, чем коpоткая автоматная.','Лучше с трудом заниматься любовью, чем с любовью заниматься трудом.','Главное — не перейти улицу на тот свет.','Красиво жить не запретишь. Но помешать можно…','Перебегал улицу на красный свет и был сбит встречным пешеходом.','Я слишком быстро вожу машину, чтобы переживать из-за холестерина!','Любого автомобиля хватит до конца жизни, если ездить достаточно лихо.','Чем удобряли, то и выросло.','Все люди братья, но не все по разуму.','Лучше пузо от пива, чем горб от работы.',"Лысина — это полянка, вытоптанная мыслями.",'Мысль только тогда мысль, когда ее головой думают.','Ученье — свет, а не ученье — приятный полумрак.','Мало знать себе цену — надо еще пользоваться спросом.','Если вам долго не звонят родственники или друзья, значит у них все хорошо.','В историю трудно войти, но легко вляпаться.','Как трудно ползти с гордо поднятой головой!','Одна голова — хоpошо, а с туловищем лучше.','Обидно, когда твои мечты сбываются у других!','На своих ошибках учатся, на чужих — делают карьеру.','Лотерея наиболее точный способ учета количества оптимистов.','Воспитанный мужчина не сделает замечания женщине, плохо несущей шпалу.','Высшая степень смущения — два взгляда, встретившиеся в замочной скважине.','Труднее всего человеку дается то, что дается не ему.','Мало найти свое место в жизни, надо найти его первым.','Если человек знает, чего он хочет, значит, он или много знает, или мало хочет.','И тогда он взял нож и застрелился.','Если человека нельзя купить, то его можно продать.','В любом из нас спит гений. И с каждым днем все кpепче…','Мыслить так трудно, — поэтому большинство людей судит.','Чем больше смотрю в зеркало, тем больше верю Дарвину.','Чтобы начать с нуля, до него ещё надо долго ползти вверх.','Ну пробил ты головой стену… И что ты будешь делать в соседней камере?'];  
   console.log(mas_mamory);
    
  let randomNumber = Math.floor(Math.random()*43)+0;
    console.log(randomNumber);

//window.speechSynthesis.cancel();

// speak text
  const text123 = mas_mamory[`${randomNumber}`]; 
  const utterance = new SpeechSynthesisUtterance(text123);
  window.speechSynthesis.speak(utterance);

let yes = document.getElementById("p1");
yes.innerHTML = mas_mamory[`${randomNumber}`];

} else if (id == mas[1]) {

document.getElementById('p').innerHTML = 

`<div class="radio_playlist1">

<ul>Я бот "Knopka". Я часть веб-проекта: "Knopka". Меня создал Берлин Андрей. Ниже есть ссылка на дополнительную информацию:



<li><a href = "https://button-knopka.github.io/" target="_blank">Веб-проект: "Knopka"</a></li>
<!--li><a href = "https://visualstudio.microsoft.com/ru/" target="_blank">Microsoft Visual Studio</a></li-->
</ul>

</div> `

const text = `Я бот "Кнопка". Я часть веб-проекта: "Кнопка". Меня создал Берлин Андрей. Ниже есть ссылка на дополнительную информацию.`; //textEl.value;

const utterance = new SpeechSynthesisUtterance(text);

window.speechSynthesis.speak(utterance); 


};/*else if(id == mas[2]){
        
document.getElementById("p").innerHTML = 

`<div class = "radio_playlist1">

<p>Здесь будут примеры программ...</p>

</div>`  

const text = `Здесь будут примеры программ... `; //textEl.value;

const utterance = new SpeechSynthesisUtterance(text);

window.speechSynthesis.speak(utterance); 
        
};*/
};
};

/*-------------- */

const text = `Я знаю афоризмы разных сатириков на различные темы. Но в данном приложении я буду рассказывать афоризмы Михаила Жванецкого. Если хотите прослушать его афоризмы, то нажмите: "Прослушать". Каждый раз, когда вы будете нажимать: "Прослушать", я буду рассказывать вам новый афоризм.`; //textEl.value;



const utterance = new SpeechSynthesisUtterance(text);

window.speechSynthesis.speak(utterance);




  
};
  
  
  
};

};



//ЧАСЫ

function timer() {

  

  const interval_time = setInterval(clock, 1000);
  
  function clock() {
    
    const clock = new Date ();
    
   let date = document.getElementById("date");
   date.innerHTML = clock.toLocaleDateString();
   let timer = document.getElementById('timer');
   timer.innerHTML = 
    clock.toLocaleTimeString();
    
    
  }
  
}
timer();




  