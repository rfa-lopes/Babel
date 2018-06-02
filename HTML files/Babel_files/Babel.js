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
	for (var i = 0; i < solution.length; i++){
		if( answer == solution[i].childNodes[0].nodeValue ){
			play("general/right_answer.mp3");
			return true;
		}else if (i+1 == solution.length){
			play("general/wrong_answer.mp3");
			return false;
		}
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
	a.align = "center";
	a.style.color = "SaddleBrown";
	a.style.textShadow = "0.5px 0.5px Olive";
	return a;
}
function h2(target, text) {
	var a = document.createElement("H2");
	var b = document.createTextNode(text);
	a.appendChild(b);
	target.appendChild(a);
	a.align = "center";
	return a;
}

function h3(target, text) {
	var a = document.createElement("H3");
	var b = document.createTextNode(text);
	a.appendChild(b);
	target.appendChild(a);
	a.align = "center";
	return a;
}

function h4(target, text) {
	var a = document.createElement("H4");
	var b = document.createTextNode(text);
	a.appendChild(b);
	target.appendChild(a);
	a.style.color = "Tan";
	a.style.textShadow = "0.5px 0.5px Salmon";
	a.align = "center";
	return a;
}

function h5(target, text) {
	var a = document.createElement("H5");
	var b = document.createTextNode(text);
	a.appendChild(b);
	target.appendChild(a);
	a.align = "center";
	return a;
}

function h6(target, text) {
	var a = document.createElement("H6");
	var b = document.createTextNode(text);
	a.appendChild(b);
	target.appendChild(a);
	a.align = "center";
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
	a.style.cursor = "pointer";
	target.appendChild(a);
	return a;
}

function inpuButton2(target, id, value, color) {
	var a = document.createElement("INPUT");
	a.type = "button";
	a.id = id;
	a.value = value;
	a.style.cursor = "pointer";
	a.style.backgroundColor = color;
	a.style.border = "2px solid Tan";
	a.style.margin = "10px";
	a.style.padding = "15px 15px";
	a.style.borderRadius = "12px";
	target.appendChild(a);
	return a;
}

function inpuButton3(target, id, value, color, txtColor) {
	var a = document.createElement("INPUT");
	a.type = "button";
	a.id = id;
	a.value = value;
	a.style.backgroundColor = color;
	a.style.marginTop = "30px";
	a.style.cursor = "pointer";
	a.style.color = txtColor;
	a.style.padding = "20px 46px";
	target.appendChild(a);
	a.textAlign = "center";
	a.style.borderRadius = "12px";
	a.style.border = "2px solid Tan";
	return a;
}

function inpuButton4(target, id, value, color) {
	var a = document.createElement("INPUT");
	a.type = "button";
	a.id = id;
	a.style.cursor = "pointer";
	a.value = value;
	a.style.backgroundColor = color;
	a.style.border = "2px solid Brown";
	a.style.margin = "10px";
	a.style.padding = "15px 15px";
	a.style.borderRadius = "12px";
	target.appendChild(a);
	return a;
}

function inpuButton5(target, id, value, color,bordercolor) {
	var a = document.createElement("INPUT");
	a.type = "button";
	a.id = id;
	a.value = value;
	a.style.backgroundColor = color;
	a.style.border = "5px solid "+bordercolor;
	a.style.margin = "10px";
	a.style.padding = "15px 15px";
	a.style.borderRadius = "12px";
	target.appendChild(a);
	return a;
}

function inpuButton6(target, id, value, color,bordercolor) {
	var a = document.createElement("INPUT");
	a.type = "button";
	a.id = id;
	a.value = value;
	a.style.backgroundColor = color;
	a.style.border = "5px solid "+bordercolor;
	a.style.padding = "15px 15px";
	a.style.borderRadius = "12px";
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
	a.style.borderRadius = "30px";
	a.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
	return a;    
}

function div2(target, style) {
	var a = document.createElement("DIV");
	a.style = style;
	a.style.display = "table"; 
	a.style.padding = "20px"; 
	a.style.marginLeft = "40px";
	a.style.marginBottom = "2em";
	a.style.display = "inline-block";
	a.style.height = "200px";
	a.style.width = "200px";
	a.style.borderRadius = "50%";
	target.appendChild(a);
	a.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
	return a;    
}

function div3(target, style) {
	var a = document.createElement("DIV");
	a.style = style;
	a.style.marginLeft = "20px";
	a.style.marginBottom = "1em";
	a.style.display = "inline-block";
	a.style.height = "50px";
	a.style.width = "80px";
	a.style.borderRadius = "12px";
	target.appendChild(a);
	a.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
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

	getLesson(lessonIndex){
		return this.lessons[lessonIndex];
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
	}

	getExerciseIndex(){ return this.currentExercise;}

	getNumberExercises(){ return this.exercisesIndex-1;}

	ExerciseEnded(lessonIndex){this.exercises[lessonIndex-1] = null;}

	getfirstExercise(){
		for (var i = 0; i < this.exercises.length; i++) {
			this.currentExercise = i+1;
			if(this.exercises[i] != null)
				return this.exercises[i].pageRendering();
		}
	}

	getConcludedExercises(){
		var concludedExercises = 0;
		for (var i = 0; i < this.exercises.length; i++) {
			if(this.exercises[i] == null)
				concludedExercises++;
		}
		return concludedExercises;
	}

	saveExercisesInArray(xmlLessonInfo) {
		for(var j = 0; j < xmlLessonInfo.length; j++){
			if(xmlLessonInfo[j].nodeName == "KEYBOARD"){
				var xmlKeyBoard = xmlLessonInfo[j];
				this.exercises[this.exercisesIndex++] = new Keyboard(xmlKeyBoard, this);
			}else if(xmlLessonInfo[j].nodeName == "PAIRS"){
				var xmlPairs = xmlLessonInfo[j];
				this.exercises[this.exercisesIndex++] = new Pairs(xmlPairs, this);
			}else if(xmlLessonInfo[j].nodeName == "BLOCKS"){
				var xmlBlocks = xmlLessonInfo[j];
				this.exercises[this.exercisesIndex++] = new Blocks(xmlBlocks, this);
			}
		}
		this.exercises[this.exercisesIndex++] = new endLessonScreen(this);
	}

	nextExercise() {
		while(this.exercises[this.currentExercise] == null && this.currentExercise < this.exercisesIndex){
			this.currentExercise++;
		}
		if(this.currentExercise < this.exercisesIndex){
			this.exercises[this.currentExercise++].pageRendering();
		}else{ 
			this.endLesson();
		}
	}

	endLesson() {
		this.currentExercise = 0;
		const self = this;
		self.parent.startHomepageScreen();
	}

}

class Screen {
	constructor() {}

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
		h1(this.body, "Choose the lesson you want to do:");
		var buttons = [];
		for (var i = 0; i < this.numLessons;i++) {
			const index = i;
			const self = this;
			var concludedExercises = self.parent.getLesson(index).getConcludedExercises();
			var nrExercises = self.parent.getLesson(index).getNumberExercises();
			if(concludedExercises == nrExercises){
				var d = div2(this.body, "border:8px solid Olive;");
			}else if (concludedExercises > 0){
				var d = div2(this.body, "border:8px solid Orange;");
			}else{
				var d = div2(this.body, "border:2px solid SaddleBrown;");
			}
			var p2 = p(d, "padding-left:20px;");
			buttons[i] = inpuButton3(p2, "Check", "Lesson: "+(i+1), "white", "FireBrick");
			h4(d, "Completed Exercises: "+concludedExercises+"/"+nrExercises);				
			eventHandler2(buttons[i], "onclick", function () {self.parent.startLesson(index);});
			if(concludedExercises == nrExercises){
				buttons[index].disabled = true;
				buttons[index].value = "Completed";
			}else if (concludedExercises > 0){
				buttons[index].value = "Continues";
			}
		}
	}
}

class endLessonScreen extends Screen {
	constructor(lesson) {
		super();
		this.lesson = lesson;
	}
	pageRendering() {
		super.pageRendering();
		var d;
		var self = this;
		if(this.lesson.getConcludedExercises() == this.lesson.getNumberExercises()){
			d = div(this.body, "border:3px solid green; display:table; padding:20px; margin-left:30%;margin-top:10%");
			h1(d,"Very well! Conclude this lesson successfully.");
			var p1 = p(d, "padding-left:36%;");
			var b = inpuButton4(p1, "check", "Go to Home page", "white");
		}else{
			d = div(this.body, "border:3px solid Crimson; display:table; padding:20px 30px; margin-left:25%;margin-top:10%");
			h1(d,"Not over yet! Want to repeat this lesson?");
			var p1 = p(d, "padding-left:25%;");
			var b1 = inpuButton4(p1, "check", "Yes!", "white");
			eventHandler2(b1, "onclick", function(){self.lesson.getfirstExercise();});
			var b = inpuButton4(p1, "check", "No! Go to Home page", "white");
		}
		eventHandler2(b, "onclick", function(){self.lesson.nextExercise();});
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
        var d = div(this.body, "border:5px solid SaddleBrown; display:table; padding:20px; margin-left:40px;");
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
        var concludedExercise;
        var p2 = p(d, "padding-left:20px;");
        var p3 = p(d, "padding-left:20px;");
        var p5 = p(d, "padding-left:50%;");
        var i = inputActiveText(p2, "answer", 40, 24, "Type this in English");
        eventHandler(i, "onkeydown", "if(event.keyCode == 13) document.getElementById('check').click();");
        text(p2, 16, " ");
        var b1 = inpuButton2(p2, "check", "Check", "white");
        eventHandler2(b1, "onclick", function() {
        	concludedExercise = validate(document.getElementById('answer').value, self.translations);
        	if(concludedExercise){
        		i.disabled = true;
        		b1.disabled = true;
        		b1.value = "Good!";
        		b1.style.backgroundColor = "Olive";
        		d.style.border = "5px solid Olive";
        		self.lesson.ExerciseEnded(self.lesson.getExerciseIndex());
        	}else{
        		i.disabled = true;
        		b1.disabled = true;
        		b1.value = "Failed!";
        		b1.style.backgroundColor = "Crimson";
        		d.style.border = "5px solid Crimson";
        		i.value = self.translations[0].childNodes[0].nodeValue;
        	}
        	b1.style.color = "white";
        });
        var b2 = inpuButton2(p3, "check", "Next exercise ->", "white");
        var b3 = inpuButton2(p3, "check", "Give up of lesson", "white");
        var t = text(p5, 20, self.lesson.getExerciseIndex()+" in "+self.lesson.getNumberExercises());
        eventHandler2(b2, "onclick", function(){self.lesson.nextExercise();});
        eventHandler2(b3, "onclick", function(){self.lesson.endLesson();});
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
		var d = div(this.body, "border:5px solid SaddleBrown; display:table; padding:20px; margin-left:40px");
		h1(d, this.prompt);
		const self = this;
		var words = this.original.split(" ");
		var solutions = this.solution.split(" ");
		var aux;
		var auxb;
		var buttons = [];
		var p1 = p(d, "padding-left:20px;");
		var failsCount = 0;
		var tentativas = 3;
		for (var i = 0; i < words.length; i++) {
			buttons[i] = inpuButton4(p1, "Check",words[i], "white");
			const index = i;
			eventHandler2(buttons[i], "onclick", function () {
				if (aux == undefined){
					aux = words[index];
					auxb = buttons[index];
					buttons[index].style.backgroundColor = "PaleGoldenRod";
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
					failsCount++;
					tentativas--;
					nt.value = "Has "+tentativas+" attempts!";
					if(tentativas == 2){
						nt.style.border = "5px solid DarkOrange";
					}else if(tentativas == 1){
						nt.style.border = "5px solid Tomato";
					}else if(tentativas == 0){
						nt.style.border = "5px solid Crimson";
						nt.style.backgroundColor = "Crimson";
						nt.style.color = "white";
						nt.value = "Failed!";
						d.style.border = "5px solid Crimson";
						play("general/wrong_answer.mp3");
					}
				}

				function acertou(){
					buttons[index].style.backgroundColor = "Olive";
					auxb.style.backgroundColor = "Olive";
					buttons[index].style.color = "white";
					auxb.style.color = "white";
					buttons[index].disabled = true;
					auxb.disabled = true;
				}

				if(failsCount == 3){
					for (var i = 0; i < buttons.length; i++) {
						buttons[i].disabled = true;
						buttons[i].style.backgroundColor = "Crimson";
						buttons[i].style.color = "white";
					}
					var sol = "";
					for (var i = 0; i < solutions.length; i++) {
						if(i%2 == 0)
							sol += solutions[i]+" -> "+solutions[i+1]+"  /  ";
					}
					var b0 = inpuButton5(p2, "check",sol , "white", "Olive");
				}else{
					var concludedExercise = true;
					for (var i = 0; i < buttons.length; i++) {
						if(buttons[i].style.color != "white")
							concludedExercise = false;
					}
					if(concludedExercise){
						self.lesson.ExerciseEnded(self.lesson.getExerciseIndex());
						for (var i = 0; i < buttons.length; i++) {
							buttons[i].style.backgroundColor = "GoldenRod";
						}
						nt.value = "Good!";
						nt.style.backgroundColor = "Olive";
						d.style.border = "5px solid Olive";
						nt.style.color = "white";
						play("general/right_answer.mp3");
					}
				}
			});
		}
		var p2 = p(d, "padding-left:20px;");
		var p3 = p(d, "padding-left:50%;");
		var b2 = inpuButton2(p2, "check", "Next exercise ->", "white");
		var b3 = inpuButton2(p2, "check", "Give up of lesson", "white");
		var nt = inpuButton5(p2, "check","Has "+(tentativas)+" attempts!" , "white","Olive");
		var t = text(p3, 15, self.lesson.getExerciseIndex()+" in "+self.lesson.getNumberExercises());
		eventHandler2(b2, "onclick", function(){self.lesson.nextExercise();});
		eventHandler2(b3, "onclick", function(){self.lesson.endLesson();});
		hr(this.body);
	}
}

function drag(event1){
	event1.dataTransfer.setData("text", event1.target.id);
}

function drop(event1){
	event1.preventDefault();
	var data = event1.dataTransfer.getData("text");
	event1.target.appendChild(document.getElementById(data));
}

function allowDrop(event1){
	event1.preventDefault();
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
		var d = div(this.body, "border:3px solid SaddleBrown; display:table; padding:20px; margin-left:40px;");
		h1(d, this.prompt);

		var blocks = this.block.split(" ");
		var solutions = this.solution.split(" ");

		var p1 = p(d, "padding-left:10px;");
		h1(p1,this.original);

		var buttons = [];
		var divisions = [];
		var divisions2 = [];

		var p2 = p(d, "padding-left:20px;");
		for (var i = 0; i < solutions.length; i++) {
			divisions[i] = div3(p2,"border:1px solid Tan;display:table; padding:15px 30px; margin: 10px;display: inline-block;");
		}
		var p3 = p(d, "padding-left:20px;");
		hr(p3);
		for (var j = 0; j < blocks.length; j++) {
			const index = j;
			divisions2[index] = div3(p3,"border:2px Tan;display:table; padding:15px 30px; margin: 10px;display: inline-block;");
			buttons[index] =  inpuButton6(divisions2[index], index, blocks[index], "");
			buttons[index].draggable = "true";
			eventHandler2(buttons[index], "ondragstart", function () {drag(event);});
		}

		for (var i = 0; i < solutions.length; i++) {
			const index = i;
			divisions[index].isPossible = true;
			//TODO complete
			eventHandler2(divisions[index], "ondragstart", function () {drag(event);divisions[index].isPossible = true;});
			eventHandler2(divisions[index], "ondragover", function () {if(divisions[index].isPossible) allowDrop(event);});
			eventHandler2(divisions[index], "ondrop", function () {
				drop(event);divisions[index].isPossible = false;
				var indexToUse = event.dataTransfer.getData("text");
				divisions[index].sol = buttons[indexToUse].value;
			});
		}

		var p4 = p(d, "padding-left:20px;");
		var p5 = p(d, "padding-left:50%;");
		const self = this;
		var b4 = inpuButton2(p4, "check", "Check", "white");
		eventHandler2(b4, "onclick", function(){
			var sucess = true;
			for (var i = 0; i < solutions.length; i++) {
				if(divisions[i].sol == undefined){
					falhou();
					break;
				}else if(solutions[i]!=divisions[i].sol){
					falhou();
					break;
				}
			}
			function falhou(){
				b4.style.backgroundColor = "Crimson";
				b4.style.color = "white";
				b4.value = "Failed";
				sucess = false;
				var b0 = inpuButton3(p4, "check","This is the correct answer: "+self.solution , "white");
				b0.style.border = "4px solid Olive ";
			}
			if(sucess){
				b4.style.backgroundColor = "ForestGreen";
				b4.style.color = "white";
				b4.value = "Good!";
				self.lesson.ExerciseEnded(self.lesson.getExerciseIndex());
			}
			b4.disabled = true;
		});

		var t = text(p5, 15, self.lesson.getExerciseIndex()+" in "+self.lesson.getNumberExercises());
		var b2 = inpuButton2(p4, "check", "Next exercise ->", "white");
		eventHandler2(b2, "onclick", function(){self.lesson.nextExercise();});
		var b3 = inpuButton2(p4, "check", "Give up of lesson", "white");
		eventHandler2(b3, "onclick", function(){self.lesson.endLesson();});
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
        if(isLanguageExtraAlphabets())
        	languageToUse = new LanguageExtraAlphabets(xmlDoc);
        else   
        	languageToUse = new Language(xmlDoc);
    }
    else {
    	alert('ERROR: Not a language file!\nPLEASE, TRY AGAIN!');
    	screen0();
    }
}

function onLoad() {
	screen0();
}