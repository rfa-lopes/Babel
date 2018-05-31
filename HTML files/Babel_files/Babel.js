/*

Babel.js - AMD/2018

    *** REESCREVA ESTE TEXTO! ***
    
Autores: Rodrigo Lopes (50435), André Jesus (51065)

O ficheiro "Babel.js" tem de incluir, logo nas primeiras linhas, um comentário
inicial contendo: o nome e número dos dois alunos que realizaram o projeto;
indicação de quais as partes do trabalho que foram feitas e das que não foram
feitas (para facilitar uma correção sem enganos); ainda possivelmente alertando
para alguns aspetos da implementação que possam ser menos óbvios para o avaliador.

01234567890123456789012345678901234567890123456789012345678901234567890123456789

*/

/* Global variables */

var xmlDoc, xmlSerializer, languageName;


/* Misc functions */

function play(sound) {
	const soundEnabled = true;
	const prefix = "http://ctp.di.fct.unl.pt/miei/lap/projs/proj2018-3/files/resources/sounds/";
	if( soundEnabled )
		new Audio(prefix + sound).play();
	else
		alert("SOUND: " + sound);
}
/*
function validate(answer, solution) {
	if( answer == solution )
		play("general/right_answer.mp3");
	else
		play("general/wrong_answer.mp3");
}
*/ 
function validate(answer, solution) {
	for (var i = 0; i < solution.length; i++) 
		if( answer == solution[i].childNodes[0].nodeValue ){
			play("general/right_answer.mp3");
			return true;
		}
		else if (i+1 == solution.length){
			play("general/wrong_answer.mp3");
			return false;
		}
	}

	/* XML */
	/*       https://www.w3schools.com/xml/default.asp  */

	function text2XML(text) {
		parser = new DOMParser();
		serializer = new XMLSerializer();
		xmlDoc = parser.parseFromString(text,"text/xml");
		return xmlDoc;
	}

	function XML2Text(xml) {
		return xmlSerializer.serializeToString(xml);
	}

	/* Local files */
	/*        https://www.javascripture.com/FileReader */

	function processLocalFile(e, processor) {
		var file = e.target.files[0];
		if (!file) {
			return;
		}
		var reader = new FileReader();
		reader.onload = function(e) {
			processor(e.target.result);
		};
		reader.readAsText(file, "UTF-8");
	}


	/* JavaScript HTML DOMhttps://www.w3schools.com/js/js_htmldom.asp */
	/*        https://www.w3schools.com/js/js_htmldom.asp */

	function eventHandler(a, kind, action) {
		a[kind] = new Function(action);
		return a;
	}

function eventHandler2(a, kind, action) { // funcao recomendada pelo prof no forum
	a[kind] = action;
	return a;
}

function h1(target, text) {
	var a = document.createElement("H1");
	var b = document.createTextNode(text);
	a.appendChild(b);
	target.appendChild(a);
	return a;
}

function hr(target) {
	var a = document.createElement("HR");
	target.appendChild(a);
	return a;
}

function p(target, style) {
	var a = document.createElement("P");
	a.style = style;
	target.appendChild(a);
	return a;
}

function br(target) {
	var a = document.createElement("BR");
	target.appendChild(a);
	return a;
}

function text(target, fsize, t) {
	var a = document.createElement('SPAN');
	var b = document.createTextNode(t);
	a.appendChild(b);
	a.style.fontSize = fsize + "px";
	target.appendChild(a);
	return a;
}

function img(target, url) {
	var a = document.createElement("IMG");
	a.src = url;
	target.appendChild(a);
	return a;
}

function inputActiveText(target, id, size, fsize, placeholder) {
	var a = document.createElement("INPUT");
	a.type = "text";
	a.id = id;
	a.value = "";
	a.placeholder = placeholder;
	a.style.fontSize = fsize + "px";
	a.size = size;
	target.appendChild(a);
	return a;
}    

function inpuButton(target, id, value, color) {
	var a = document.createElement("INPUT");
	a.type = "button";
	a.id = id;
	a.value = value;
	a.style.backgroundColor = color;
	target.appendChild(a);
	return a;
}

function inpuFile(target, id, ) {
	var a = document.createElement("INPUT");
	a.type = "file";
	a.id = id;
	target.appendChild(a);
	return a;
}

function div(target, style) {
	var a = document.createElement("DIV");
	a.style = style;
	target.appendChild(a);
	return a;    
}

function screen0() {
	var body = document.body;
	// start with a blank page
	body.innerHTML = '';

	// load the language XML
	var f = inpuFile(body, "file-input");
	eventHandler(f, "onchange", "processLocalFile(event, runLanguage);");
}

function isLanguageExtraAlphabets(){
	return (xmlDoc.getElementsByTagName("CLASS")[0].childNodes[0].nodeValue == "LanguageExtraAlphabets"); 
}

class Language {
	constructor(xmlDocument){
		this.lessons = [];
		this.saveLanguageName(xmlDocument);
		this.saveSoundPrefix(xmlDocument);
		this.saveLessons(xmlDocument);
		this.HomePage = new HomePage(this.lessons.length, this);
		this.startHomepageScreen();
	}

	saveLanguageName(xmlDocument) {
		this.lName = xmlDoc.getElementsByTagName("LANGNAME")[0].childNodes[0].nodeValue;
	}

	saveSoundPrefix(xmlDocument) {
		this.soundPrefix = xmlDocument.getElementsByTagName("SOUNDSPREFIX")[0].childNodes[0].nodeValue;
	}

	saveLessons(xmlDocument) {
		var xmlLessons = xmlDocument.getElementsByTagName("LESSON");
		for(var i = 0; i < xmlLessons.length; i++){
			this.lessons[i] = new Lesson(xmlLessons[i].childNodes, this);
		}
	}

	startHomepageScreen() {
		return this.HomePage.pageRendering();
	}

	startLesson(lessonIndex) {
		this.lessons[lessonIndex].nextExercise();
	}

	//criar botao que permite sair da homepage e recomecar tudo de novo !
}

class LanguageExtraAlphabets extends Language {
	constructor(xmlDocument) {
		super(xmlDocument);
	}

	SymbolsScreen() {}
}
/*
class DynamicHTML {
    constructor() {}

    // para criar buttons com static functions
}
*/
class Lesson {
	constructor(xmlLessonInfo, parent) {
		this.parent = parent;
		this.exercises = [];
		this.exercisesIndex = 0;
		this.currentExercise = 0;
		this.saveExercisesInArray(xmlLessonInfo);
        // podemos criar outro array com os exercicios errados , que necessitamos de voltar a repetir ou ir eliminando há medida que acerta
    }

    getExerciseIndex(){
    	return this.currentExercise;
    }

    getNumberExercises(){
    	return this.exercisesIndex;
    }

    saveExercisesInArray(xmlLessonInfo) {
        //alert(xmlLessonInfo.length);
        for(var j = 0; j < xmlLessonInfo.length; j++){
        	if(xmlLessonInfo[j].nodeName == "KEYBOARD"){
        		var xmlKeyBoard = xmlLessonInfo[j];
                //alert(xmlLessonInfo[j]);
                this.exercises[this.exercisesIndex++] = new Keyboard(xmlKeyBoard, this);
                //alert(this.exercises[this.exercisesIndex-1]);
            }else if(xmlLessonInfo[j].nodeName == "PAIRS"){
            	var xmlPairs = xmlLessonInfo[j];
                //alert(xmlLessonInfo[j]);
                this.exercises[this.exercisesIndex++] = new Pairs(xmlPairs, this);
                //alert(this.exercises[this.exercisesIndex-1]);
            }else if(xmlLessonInfo[j].nodeName == "BLOCKS"){
            	var xmlBlocks = xmlLessonInfo[j];
                //alert(xmlLessonInfo[j]);
                this.exercises[this.exercisesIndex++] = new Blocks(xmlBlocks, this);
                //alert(this.exercises[this.exercisesIndex-1]);
            }
        }
    }

    nextExercise() {
    	if(this.currentExercise < this.exercisesIndex){
    		this.exercises[this.currentExercise++].pageRendering();
    	}else{ 
    		alert("FIM DA LIÇÃO");
    		this.currentExercise = 0;
    		const self = this;
    		self.parent.startHomepageScreen();
    	}
    }

    previousExercise(){
    	this.currentExercise--;
    	this.currentExercise--;
    	this.exercises[this.currentExercise++].pageRendering();
    }

    mainMenu(){
    	this.currentExercise = 0;
    	const self = this;
    	self.parent.startHomepageScreen();
    }
}

class Screen {
	constructor() {
		this.concluido = false;
	}

	pageRendering() {
		this.body = document.body;
		this.body.innerHTML = '';
	}
}

class HomePage extends Screen {
	constructor(numLessons, parent) {
		super();
		this.numLessons = numLessons;
		this.parent = parent;
	}

	pageRendering() {
		super.pageRendering();
		h1(this.body, "Escolha qual a lição que pretende realizar:");
		hr(this.body);

		var auxNodes;
		var buttons = [];
		for (var i = 0; i < this.numLessons;i++) {
			var d = div(this.body, "border:3px solid black; display:table; padding:20px; margin-left:40px");
			h1(d, "Esta lição é a Número "+(i+1)+":");

            // first line
            var p2 = p(d, "padding-left:20px;");
            buttons[i] = inpuButton(p2, "Check", "Escolha esta liçao", "lime");
            //eventHandler(b1, "onclick", "screen1();");
            const index = i;
            const self = this;
            eventHandler2(buttons[i], "onclick", function () {self.parent.startLesson(index);});
            hr(this.body);
        }
    }
}

class Keyboard extends Screen {
	constructor(xmlKeyInfo, lesson) {
		super();
		this.xmlKeyInfo = xmlKeyInfo;
		this.lesson = lesson;
		this.keyboardPrompt();
		this.keyboardOriginal();
		this.keyboardSound();
		this.keyboardTranslation();
	}

	keyboardPrompt() {
		this.prompt = this.xmlKeyInfo.getElementsByTagName("PROMPT")[0].childNodes[0].nodeValue;
	}

	keyboardOriginal() {
		this.original = this.xmlKeyInfo.getElementsByTagName("ORIGINAL")[0].childNodes[0].nodeValue;
	}

	keyboardSound() {
		if(this.xmlKeyInfo.getElementsByTagName("SOUND").length != 0)
			this.sound = this.xmlKeyInfo.getElementsByTagName("SOUND")[0].childNodes[0].nodeValue;
		else this.sound = null;
	}

	keyboardTranslation() {
		this.translations = this.xmlKeyInfo.getElementsByTagName("TRANSLATION");
	}

	pageRendering() {
		super.pageRendering();
        // a div, only because we want a border
        var d = div(this.body, "border:3px solid black; display:table; padding:20px; margin-left:40px");
        h1(d, this.prompt);

        const self = this;
        // first line
        var p1 = p(d, "padding-left:40px; word-spacing:50px;");
        var i = img(p1, "http://icons.iconarchive.com/icons/icons8/ios7/32/Media-Controls-High-Volume-icon.png");
        if(this.sound != null)
        	eventHandler2(i, "onclick", function() {play(self.sound);});
        else 
        	alert("It is not possible to listen the sound!");
        text(p1, 16, " ");
        text(p1, 32, this.original);

        // second line
        var p2 = p(d, "padding-left:20px;");
        var i = inputActiveText(p2, "answer", 40, 24, "Type this in English");
        eventHandler(i, "onkeydown", "if(event.keyCode == 13) document.getElementById('check').click();");
        text(p2, 16, " ");
        var b1 = inpuButton(p2, "check", "Check", "lime");
        eventHandler2(b1, "onclick", function() {
        	var v = validate(document.getElementById('answer').value, self.translations);
        	if(v){
        		i.disabled = true;
        		b1.disabled = true;
        		alert("BOA");
        	}
        });
        var p3 = p(d, "padding-left:270px;");
        
        if(self.lesson.getExerciseIndex()==0){
        	var b3 = inpuButton(p3, "check", "Go to Main Menu", "lime");
        	eventHandler2(b3, "onclick", function(){self.lesson.mainMenu();});
        }else{
        	var b3 = inpuButton(p3, "check", "<- Previous exercise", "lime");
        	eventHandler2(b3, "onclick", function(){self.lesson.previousExercise();});
        }

        var b2 = inpuButton(p3, "check", "Next exercise ->", "lime");
        eventHandler2(b2, "onclick", function(){self.lesson.nextExercise();});
        h1(d, "Exercicio: "+self.lesson.getExerciseIndex()+"/"+self.lesson.getNumberExercises());
        hr(this.body);
    }
}

class Pairs extends Screen {
	constructor(xmlPairs, lesson) {
		super();
		this.xmlPairs = xmlPairs;
		this.lesson = lesson;
		this.pairsPrompt();
		this.pairsOriginal();
		this.pairsSolution();
	}

	pairsPrompt() {
		this.prompt = this.xmlPairs.getElementsByTagName("PROMPT")[0].childNodes[0].nodeValue;
	}

	pairsOriginal() {
		this.original = this.xmlPairs.getElementsByTagName("ORIGINAL")[0].childNodes[0].nodeValue;
	}

	pairsSolution() {
		this.solution = this.xmlPairs.getElementsByTagName("SOLUTION")[0].childNodes[0].nodeValue;
	}

	pageRendering() {
		super.pageRendering();
        // a div, only because we want a border
        var d = div(this.body, "border:3px solid black; display:table; padding:20px; margin-left:40px");
        h1(d, this.prompt);

        var words = this.original.split(" ");
        var solutions = this.solution.split(" ");
        var aux;
        var auxb;
        var buttons = [];
        var p1 = p(d, "padding-left:20px;");
        for (var i = 0; i < words.length; i++) {
        	buttons[i] = inpuButton(p1, "Check",words[i], "white");
        	const index = i;
        	eventHandler2(buttons[i], "onclick", function () {
        		if (aux == undefined){
        			aux = words[index];
        			auxb = buttons[index];
        			buttons[index].style.backgroundColor = "lime";
        		}else{
        			var x = solutions.indexOf(aux);
        			if(x % 2 == 0){
        				if(solutions[x+1] == words[index])
        					acertou();
        				else 
        					falhou();
        			}else{
        				if(solutions[x-1] == words[index])
        					acertou();
        				else 
        					falhou();
        			}
        			aux = undefined;
        		}
        		function falhou(){
        			buttons[index].style.backgroundColor = "white";
        			auxb.style.backgroundColor = "white";
        		}
        		function acertou(){
        			buttons[index].style.backgroundColor = "lime";
        			auxb.style.backgroundColor = "lime";
        			buttons[index].disabled = true;
        			auxb.disabled = true;
        		}
        	});
        }

        var p3 = p(d, "padding-left:270px;");
        const self = this;
        if(self.lesson.getExerciseIndex()==0){
        	var b3 = inpuButton(p3, "check", "Go to Main Menu", "lime");
        	eventHandler2(b3, "onclick", function(){self.lesson.mainMenu();});
        }else{
        	var b3 = inpuButton(p3, "check", "<- Previous exercise", "lime");
        	eventHandler2(b3, "onclick", function(){self.lesson.previousExercise();});
        }

        var b2 = inpuButton(p3, "check", "Next exercise ->", "lime");
        eventHandler2(b2, "onclick", function(){self.lesson.nextExercise();});
        h1(d,"Exercicio: "+self.lesson.getExerciseIndex()+"/"+self.lesson.getNumberExercises());
        hr(this.body);

    }
}

class Blocks extends Screen {
	constructor(xmlBlocks, lesson) {
		super();
		this.xmlBlocks = xmlBlocks;
		this.lesson = lesson;
		this.blocksPrompt();
		this.blocksOriginal();
		this.blocksBlocks();
		this.blocksSolution();
	}

	blocksPrompt() {
		this.prompt = this.xmlBlocks.getElementsByTagName("PROMPT")[0].childNodes[0].nodeValue;
	}

	blocksOriginal() {
		this.original = this.xmlBlocks.getElementsByTagName("ORIGINAL")[0].childNodes[0].nodeValue;
	}

	blocksBlocks() {
		this.block = this.xmlBlocks.getElementsByTagName("BLOCKS")[0].childNodes[0].nodeValue;
	}

	blocksSolution() {
		this.solution = this.xmlBlocks.getElementsByTagName("SOLUTION")[0].childNodes[0].nodeValue;
	}

	pageRendering() {
		super.pageRendering();
		var d = div(this.body, "border:3px solid black; display:table; padding:20px; margin-left:40px");
		h1(d, this.prompt);
		
		var p1 = p(d, "padding-left:00px;");

		var blocks = this.block.split(" ");
		var solutions = this.solution.split(" ");

		h1(p1,this.original);

		hr(p1); //é mesmo para criar aquelas linhas?
		hr(p1);

		var buttons = [];
		var divisoes = [];
		for (var i = 0; i < blocks.length; i++) {
			buttons[i] = inpuButton(p1, "Check",blocks[i], "white");
			divisoes[i] = div(p1,"padding-left:500px;");
			const index = i;
			eventHandler2(buttons[i], "onclick", function () {alert("BBBBBB")});
			eventHandler2(divisoes[i], "ondrop", function () {alert("AAAAAAAAAAAA!")}); //NÃO CONSIGO FAZER O ONDROP
		} //ver on drop aqui:   https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop2

		var p3 = p(d, "padding-left:270px;");
		const self = this;
		if(self.lesson.getExerciseIndex()==0){
			var b3 = inpuButton(p3, "check", "Go to Main Menu", "lime");
			eventHandler2(b3, "onclick", function(){self.lesson.mainMenu();});
		}else{
			var b3 = inpuButton(p3, "check", "<- Previous exercise", "lime");
			eventHandler2(b3, "onclick", function(){self.lesson.previousExercise();});
		}

		var b2 = inpuButton(p3, "check", "Next exercise ->", "lime");
		eventHandler2(b2, "onclick", function(){self.lesson.nextExercise();});
		h1(d,"Exercicio: "+self.lesson.getExerciseIndex()+"/"+self.lesson.getNumberExercises());
		hr(this.body);
	}
}
/*
function screen1() {
	var body = document.body;
	// start with a blank page
	body.innerHTML = '';

	h1(body, "Babel   (" + languageName + ")");
	hr(body);

	// a div, only because we want a border
	var d = div(body, "border:3px solid black; display:table; padding:20px; margin-left:40px");
	h1(d, "Write this in English");

	// first line
	var p1 = p(d, "padding-left:40px; word-spacing:50px;");
	var i = img(p1, "http://icons.iconarchive.com/icons/icons8/ios7/32/Media-Controls-High-Volume-icon.png");
	eventHandler(i, "onclick", "play('japanese/sentences/何時ですか.mp3');");
	text(p1, 16, " ");
	text(p1, 32, "何時ですか");

	// second line
	var p2 = p(d, "padding-left:20px;");
	var i = inputActiveText(p2, "answer", 40, 24, "Type this in English");
	eventHandler(i, "onkeydown", "if(event.keyCode == 13) document.getElementById('check').click();");
	text(p2, 16, " ");
	var b1 = inpuButton(p2, "check", "Check", "lime");
	eventHandler(b1, "onclick", "validate(document.getElementById('answer').value, 'What time is it?');");

	hr(body);
}
*/
function runLanguage(text) {
	var table="<tr><th>Title</th><th>Artist</th></tr>";
    xmlDoc = text2XML(text);  // assignement to global
    xmlSerializer = new XMLSerializer();  // assignement to global
        // https://www.w3schools.com/xml/dom_nodes_get.asp
        var nodes = xmlDoc.getElementsByTagName("LANGNAME");
        if( nodes.length == 1 ) {
        languageName = nodes[0].childNodes[0].nodeValue;  // assignement to global
        var languageToUse;
        if(isLanguageExtraAlphabets()){
        	languageToUse = new LanguageExtraAlphabets(xmlDoc);
        }else{     
        	languageToUse = new Language(xmlDoc);
        }
    }
    else {
    	alert('ERROR: Not a language file!\nPLEASE, TRY AGAIN!');
    	screen0();
    }
}

function onLoad() {
	screen0();
}