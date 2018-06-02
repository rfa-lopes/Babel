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

function h1(target, text, typeOf) {
	var a = document.createElement("H"+typeOf);
	var b = document.createTextNode(text);
	a.appendChild(b);
	target.appendChild(a);
	a.align = "center";
	if(typeOf == 1){
		a.style.color = "SaddleBrown";
		a.style.textShadow = "0.5px 0.5px Olive";
	}else{
		a.style.color = "Tan";
		a.style.textShadow = "0.5px 0.5px Salmon";
	}
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

function inpuButton(target, id, value, color, txtColor, bordercolor, typeOf) {
	var a = document.createElement("INPUT");
	a.type = "button";
	a.id = id;
	a.value = value;
	a.style.backgroundColor = color;
	if(typeOf == 2){
		a.style.cursor = "pointer";
		a.style.border = "2px solid Tan";
		a.style.margin = "10px";
		a.style.padding = "15px 15px";
		a.style.borderRadius = "12px";
	}else if (typeOf == 3){
		a.style.marginTop = "30px";
		a.style.cursor = "pointer";
		a.style.color = txtColor;
		a.style.padding = "20px 46px";
		a.textAlign = "center";
		a.style.borderRadius = "12px";
		a.style.border = "2px solid Tan";
	}else if (typeOf == 4){
		a.style.cursor = "pointer";
		a.style.border = "2px solid Brown";
		a.style.margin = "10px";
		a.style.padding = "15px 15px";
		a.style.borderRadius = "12px";
	}else if (typeOf == 5){
		a.style.border = "5px solid "+bordercolor;
		a.style.margin = "10px";
		a.style.padding = "15px 15px";
		a.style.borderRadius = "12px";
	}else{ //typeOf == 6
		a.style.border = "5px solid "+bordercolor;
		a.style.padding = "15px 15px";
		a.style.borderRadius = "12px";
	}
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

function div(target, style, typeOf) {
	var a = document.createElement("DIV");
	a.style = style;
	target.appendChild(a);
	if(typeOf == 1){
		a.style.borderRadius = "30px";
	}else if (typeOf == 2){ //Circle
		a.style.display = "table"; 
		a.style.padding = "20px"; 
		a.style.marginLeft = "40px";
		a.style.marginBottom = "2em";
		a.style.display = "inline-block";
		a.style.height = "200px";
		a.style.width = "200px";
		a.style.borderRadius = "50%";
	}else if(typeOf == 3) { //Square
		a.style = style;
		a.style.marginLeft = "20px";
		a.style.marginBottom = "1em";
		a.style.display = "inline-block";
		a.style.height = "20px"; 
  		a.style.width = "40px"; 
		a.style.borderRadius = "12px";
	}else{
		a.style.marginLeft = "20px"; 
  		a.style.marginBottom = "1em"; 
  		a.style.display = "inline-block"; 
  		a.style.height = "5px"; 
  		a.style.width = "5px"; 
  		a.style.borderRadius = "12px"; 
	}
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

class DynamicHTML {
	constructor() {}
	//DynamicHTML.isLanguageExtraAlphabets()
	static isLanguageExtraAlphabets(){
		return (xmlDoc.getElementsByTagName("CLASS")[0].childNodes[0].nodeValue == "LanguageExtraAlphabets"); 
	}
	//function(event) {DynamicHTML.onMouseOutWhite(event);};
	static onMouseOutWhite(event) {
		event.target.style.backgroundColor = 'white';
		event.target.style.color = "";
		event.target.style.boxShadow = "";
	}
	//function(event) {DynamicHTML.onMouseOutFireBrick(event);};
	static onMouseOutFireBrick (event) {
		event.target.style.backgroundColor = 'white';
		event.target.style.color = "FireBrick";
		event.target.style.boxShadow = "";
	}
	//function(event) {DynamicHTML.onMouseOverFireBrick(event);};
	static onMouseOverFireBrick (event) {
		event.target.style.backgroundColor = 'FireBrick';
		event.target.style.color = "white";
		event.target.style.boxShadow = " 0 2px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19)";
	}
	//function(event) {DynamicHTML.onMouseOverOlive(event);};
	static onMouseOverOlive (event) {
		event.target.style.backgroundColor = 'Olive';
		event.target.style.color = "white";
		event.target.style.boxShadow = " 0 2px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19)";
	}
	//function(event) {DynamicHTML.onMouseOverPeru(event);};
	static onMouseOverPeru (event) {
		event.target.style.backgroundColor = 'Peru';
		event.target.style.color = "white";
		event.target.style.boxShadow = " 0 2px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19)";
	}
	//function(event) {DynamicHTML.onMouseOverBoolean(event, );};
	static onMouseOverBoolean (event,boolean1) {
		if(boolean1)
			event.target.style.backgroundColor = 'Olive';
		else
			event.target.style.backgroundColor = 'Crimson';
		event.target.style.color = "white";
		event.target.style.boxShadow = " 0 2px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19)";
	}
	//DynamicHTML.drag(event)
	static drag(event){
		event.dataTransfer.setData("text", event.target.id);
	}
	//DynamicHTML.allowDrop(event)
	static allowDrop(event){
		event.preventDefault();
	}
	//DynamicHTML.drop(event)
	static drop(event){
		event.preventDefault();
		var data = event.dataTransfer.getData("text");
		event.target.appendChild(document.getElementById(data));
	}
}

class Language {
	constructor(xmlDocument){
		this.lessons = [];
		this.saveLanguageName(xmlDocument);
		this.saveSoundPrefix(xmlDocument);
		this.saveLessons(xmlDocument);
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
		this.HomePage = new HomePage(this.lessons.length, 0,this);
		return this.HomePage.pageRendering();
	}

	startLesson(lessonIndex) {
		this.lessons[lessonIndex].nextExercise();
	}

	getLesson(lessonIndex){
		return this.lessons[lessonIndex];
	}
}

class LanguageExtraAlphabets extends Language {
	constructor(xmlDocument) {
		super(xmlDocument);
	}

	saveLessons(xmlDocument){
		super.saveLessons(xmlDocument);
		this.symbolsLessons = [];
		var xmlSymbols = xmlDocument.getElementsByTagName("SYMBOLS");
		for(var w = 0; w < xmlSymbols.length; w++){
			this.symbolsLessons[w] = new SymbolsLesson(xmlSymbols[w],this);
		}
	}

	startHomepageScreen() {
		this.HomePage = new HomePage(this.lessons.length, this.symbolsLessons.length,this);
		return this.HomePage.pageRendering();
	}

	getSymbolsLesson(index) {
		return this.symbolsLessons[index];
	}
}

class Lesson {
	constructor(xmlLessonInfo, parent) {
		this.parent = parent;
		this.exercises = [];
		this.totalExercises = 0;
		this.currentExercise = 0;
		this.saveExercisesInArray(xmlLessonInfo);
	}

	getExerciseIndex(){ return this.currentExercise;} //Index do exercicio currente.

	getNumberExercises(){ return this.totalExercises-1;} //Get total exercises in the lesson.

	ExerciseEnded(lessonIndex){this.exercises[lessonIndex-1] = null;} //Make the exercise complete and disappear from the lesson.

	getfirstExercise(){ //Returns the first unfinished exercise.
		for (var i = 0; i < this.exercises.length; i++) {
			this.currentExercise = i+1;
			if(this.exercises[i] != null)
				return this.exercises[i].pageRendering();
		}
	}

	getConcludedExercises(){ //returns the number of completed exercises. 
		var concludedExercises = 0;
		for (var i = 0; i < this.exercises.length; i++) {
			if(this.exercises[i] == null)
				concludedExercises++;
		}
		return concludedExercises;
	}

	saveExercisesInArray(xmlLessonInfo) { //Creates all exercises depending on your screen type.
		for(var j = 0; j < xmlLessonInfo.length; j++){
			if(xmlLessonInfo[j].nodeName == "KEYBOARD"){
				var xmlKeyBoard = xmlLessonInfo[j];
				this.exercises[this.totalExercises++] = new Keyboard(xmlKeyBoard, this);
			}else if(xmlLessonInfo[j].nodeName == "PAIRS"){
				var xmlPairs = xmlLessonInfo[j];
				this.exercises[this.totalExercises++] = new Pairs(xmlPairs, this);
			}else if(xmlLessonInfo[j].nodeName == "BLOCKS"){
				var xmlBlocks = xmlLessonInfo[j];
				this.exercises[this.totalExercises++] = new Blocks(xmlBlocks, this);
			}
		}
		this.exercises[this.totalExercises++] = new endLessonScreen(this); //Last screen.
	}

	nextExercise() { //Get the next Exercise to do.
		while(this.exercises[this.currentExercise] == null && this.currentExercise < this.totalExercises){
			this.currentExercise++;
		}
		if(this.currentExercise < this.totalExercises){
			this.exercises[this.currentExercise++].pageRendering();
		}else{ 
			this.endLesson();
		}
	}

	endLesson() { //Finish the lesson and show the main page.
		this.currentExercise = 0;
		const self = this;
		self.parent.startHomepageScreen();
	}
}

class SymbolsLesson {
	constructor(xmlLessonInfo, parent) {
		this.parent = parent;
		this.saveExercises(xmlLessonInfo);
		this.lessonComplet = false;
	}

	saveExercises(xmlLessonInfo) {
		this.exercise = new Symbols(xmlLessonInfo, this);
	}

	isSymbolsLessonComplet(){
		return this.lessonComplet;
	}

	startExercise(){
		this.exercise.pageRendering();
	}

	endLesson(){ 
		const self = this; 
		self.parent.startHomepageScreen(); 
	  } 
}

/*Screen abstract class*/
class Screen {
	constructor() {}

	pageRendering() { //Page Rendering
		this.body = document.body;
		this.body.innerHTML = '';
	}
}

class HomePage extends Screen {
	constructor(numLessons, numSymbolsLessons, parent) {
		super();
		this.numLessons = numLessons;
		this.numSymbolsLessons = numSymbolsLessons;
		this.parent = parent;
	}

	pageRendering() {
		super.pageRendering();

		h1(this.body, "Choose the lesson you want to do:", 1);
		var buttons = [];

		for (var i = 0; i < this.numLessons;i++) {
			const self = this;
			const index = i;

			var concludedExercises = self.parent.getLesson(index).getConcludedExercises();
			var nrExercises = self.parent.getLesson(index).getNumberExercises();

			if(concludedExercises == nrExercises){
				var d = div(this.body, "border:8px solid Olive;", 2);
			}else if (concludedExercises > 0){
				var d = div(this.body, "border:8px solid Orange;", 2);
			}else{
				var d = div(this.body, "border:2px solid SaddleBrown;", 2);
			}

			var p2 = p(d, "padding-left:20px;");
			buttons[i] = inpuButton(p2, "Check", "Lesson: "+(i+1), "white", "FireBrick", null, 3);
			var h0 = h1(d, "Completed Exercises: "+concludedExercises+"/"+nrExercises, 4);	
			
			buttons[i].onmouseover = function(event) {DynamicHTML.onMouseOverPeru(event);};
			buttons[i].onmouseout = function(event) {DynamicHTML.onMouseOutFireBrick(event);};
			eventHandler2(buttons[i], "onclick", function () {self.parent.startLesson(index);});

			if(concludedExercises == nrExercises){
				buttons[index].disabled = true;
				buttons[index].value = "Completed";
			}else if (concludedExercises > 0){
				buttons[index].value = "Continues";
			}
		}

		var symButtons = [];
		for(var w = 0; w < this.numSymbolsLessons; w++){
			const self = this;
			var d = div(this.body, "border:2px solid SaddleBrown;", 2);
			var p3 = p(d, "padding-left:20px;");
			symButtons[w] = inpuButton(p3, "Check", "Symbols: "+(w+1), "white", "FireBrick", null, 3);
			const indexw = w;
			if(self.parent.getSymbolsLesson(indexw).isSymbolsLessonComplet()){
				var hs = h1(d, "Completed!", 4);
				hs.style.color = "Olive";
				symButtons[w].disabled = true;
				d.style.border = "8px solid Olive";
			}else{
				var hs = h1(d, "Not Completed!", 4);
				hs.style.color = "Peru";
			}

			symButtons[indexw].onmouseout = function(event) {DynamicHTML.onMouseOutFireBrick(event);};
			symButtons[indexw].onmouseover = function(event) {DynamicHTML.onMouseOverFireBrick(event);};
			eventHandler2(symButtons[indexw], "onclick", function () {self.parent.getSymbolsLesson(indexw).startExercise();})
		}
	}
}

class endLessonScreen extends Screen { //Last Screen
	constructor(lesson) {
		super();
		this.lesson = lesson;
	}
	pageRendering() {
		super.pageRendering();
		var d;
		var self = this;
		if(this.lesson.getConcludedExercises() == this.lesson.getNumberExercises()){
			d = div(this.body, "border:3px solid green; display:table; padding:20px; margin-left:30%;margin-top:10%", 1);
			h1(d,"Very well! Conclude this lesson successfully.", 1);
			var p1 = p(d, "padding-left:36%;");
			var b = inpuButton(p1, "check", "Go to Home page", "white", null, null, 4);
		}else{
			d = div(this.body, "border:3px solid Crimson; display:table; padding:20px 30px; margin-left:25%;margin-top:10%", 1);
			h1(d,"Not over yet! Want to repeat this lesson?", 1);
			var p1 = p(d, "padding-left:25%;");
			var b1 = inpuButton(p1, "check", "Yes!", "white", null, null, 4);
			eventHandler2(b1, "onclick", function(){self.lesson.getfirstExercise();});
			var b = inpuButton(p1, "check", "No! Go to Home page", "white", null, null, 4);
		}
		eventHandler2(b, "onclick", function(){self.lesson.nextExercise();});
		b1.onmouseout = function(event) {DynamicHTML.onMouseOutWhite(event)};
		b1.onmouseover = function(event) {DynamicHTML.onMouseOverOlive(event);};
		b.onmouseout = function(event) {DynamicHTML.onMouseOutWhite(event)};
		b.onmouseover = function(event) {DynamicHTML.onMouseOverPeru(event);};
	}
}

class Keyboard extends Screen { //Keybord Exercise
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
		var d = div(this.body, "border:5px solid SaddleBrown; display:table; padding:20px; margin-left:40px;", 1);
		h1(d, this.prompt, 1);

		const self = this;
		var p1 = p(d, "padding-left:40px; word-spacing:50px;");
		var i = img(p1, "http://icons.iconarchive.com/icons/icons8/ios7/32/Media-Controls-High-Volume-icon.png");

		if(this.sound != null)
			eventHandler2(i, "onclick", function() {play(self.sound);});
		else alert("It is not possible to listen the sound!");

		text(p1, 16, " ");
		text(p1, 32, this.original);

		var concludedExercise;
		var p2 = p(d, "padding-left:20px;");
		var p3 = p(d, "padding-left:20px;");
		var p5 = p(d, "padding-left:50%;");
		var i = inputActiveText(p2, "answer", 40, 24, "Type this in English");

		eventHandler(i, "onkeydown", "if(event.keyCode == 13) document.getElementById('check').click();");
		text(p2, 16, " ");
		var b1 = inpuButton(p2, "check", "Check", "white", null, null, 2);

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
		var b2 = inpuButton(p3, "check", "Next exercise ->", "white", null, null, 2);
		var b3 = inpuButton(p3, "check", "Give up of lesson", "white", null, null, 2);

		b2.onmouseover = function(event) {DynamicHTML.onMouseOverBoolean(event, b1.value == "Good!");};
		b2.onmouseout = function(event) {DynamicHTML.onMouseOutWhite(event)};
		b3.onmouseout = function(event) {DynamicHTML.onMouseOutWhite(event)};
		b3.onmouseover = function(event) {DynamicHTML.onMouseOverPeru(event);};
		b1.onmouseout = function(event) {DynamicHTML.onMouseOutWhite(event)};
		b1.onmouseout = function(event) {DynamicHTML.onMouseOutWhite(event)};

		var t = text(p5, 20, self.lesson.getExerciseIndex()+" in "+self.lesson.getNumberExercises());
		eventHandler2(b2, "onclick", function(){self.lesson.nextExercise();});
		eventHandler2(b3, "onclick", function(){self.lesson.endLesson();});
	}
}

class Pairs extends Screen { //Pairs Exercise
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
		var d = div(this.body, "border:5px solid SaddleBrown; display:table; padding:20px; margin-left:40px", 1);
		h1(d, this.prompt, 1);
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
			buttons[i] = inpuButton(p1, "Check",words[i], "white", null, null, 4);
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
					var b0 = inpuButton(p2, "check",sol , "white", null, "Olive", 5);
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
		var b2 = inpuButton(p2, "check", "Next exercise ->", "white", null, null, 2);
		var b3 = inpuButton(p2, "check", "Give up of lesson", "white", null, null, 2);
		var nt = inpuButton(p2, "check","Has "+(tentativas)+" attempts!" , "white", null, "Olive" ,5);

		b2.onmouseover = function(event) {DynamicHTML.onMouseOverBoolean(event, nt.value == "Good!");};
		b2.onmouseout = function(event) {DynamicHTML.onMouseOutWhite(event)};
		b3.onmouseout = function(event) {DynamicHTML.onMouseOutWhite(event)};
		b3.onmouseover = function(event) {DynamicHTML.onMouseOverPeru(event);};

		var t = text(p3, 15, self.lesson.getExerciseIndex()+" in "+self.lesson.getNumberExercises());
		eventHandler2(b2, "onclick", function(){self.lesson.nextExercise();});
		eventHandler2(b3, "onclick", function(){self.lesson.endLesson();});
		hr(this.body);
	}
}

class Blocks extends Screen { //Blocks exercise
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
		var d = div(this.body, "border:3px solid SaddleBrown; display:table; padding:20px; margin-left:40px;", 1);
		h1(d, this.prompt, 1);

		var blocks = this.block.split(" ");
		var solutions = this.solution.split(" ");

		var p1 = p(d, "padding-left:10px;");
		h1(p1,this.original, 1);

		var buttons = [];
		var divisions = [];
		var divisions2 = [];

		var p2 = p(d, "padding-left:20px;");
		for (var i = 0; i < solutions.length; i++) {
			divisions[i] = div(p2,"border:1px solid Tan;display:table; padding:15px 30px; margin: 10px;display: inline-block;", 3);
		}
		var p3 = p(d, "padding-left:20px;");
		hr(p3);
		for (var j = 0; j < blocks.length; j++) {
			const index = j;
			divisions2[index] = div(p3,"border:2px Tan;display:table; padding:15px 30px; margin: 10px;display: inline-block;", 3);
			buttons[index] =  inpuButton(divisions2[index], index, blocks[index], null,"", 6);
			buttons[index].draggable = "true";
			eventHandler2(buttons[index], "ondragstart", function () {DynamicHTML.drag(event);});
		}

		for (var i = 0; i < solutions.length; i++) {
			const index = i;
			divisions[index].isPossible = true;
			eventHandler2(divisions[index], "ondragstart", function () {DynamicHTML.drag(event);divisions[index].isPossible = true;});
			eventHandler2(divisions[index], "ondragover", function () {if(divisions[index].isPossible) DynamicHTML.allowDrop(event);});
			eventHandler2(divisions[index], "ondrop", function () {
				DynamicHTML.drop(event);divisions[index].isPossible = false;
				var indexToUse = event.dataTransfer.getData("text");
				divisions[index].sol = buttons[indexToUse].value;
			});
		}

		var p4 = p(d, "padding-left:20px;");
		var p5 = p(d, "padding-left:50%;");
		const self = this;
		var b4 = inpuButton(p4, "check", "Check", "white", null, null, 2);
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
				var b0 = inpuButton(p4, "check","This is the correct answer: "+self.solution , "white", null, 3);
				b0.style.border = "4px solid Olive ";
				d.style.border = "4px solid Crimson ";
				play("general/wrong_answer.mp3");
			}
			if(sucess){
				b4.style.backgroundColor = "ForestGreen";
				b4.style.color = "white";
				b4.value = "Good!";
				d.style.border = "4px solid Olive";
				play("general/right_answer.mp3");
				self.lesson.ExerciseEnded(self.lesson.getExerciseIndex());
			}
			b4.disabled = true;
		});

		var t = text(p5, 15, self.lesson.getExerciseIndex()+" in "+self.lesson.getNumberExercises());
		var b2 = inpuButton(p4, "check", "Next exercise ->", "white", null, null, 2);
		eventHandler2(b2, "onclick", function(){self.lesson.nextExercise();});
		var b3 = inpuButton(p4, "check", "Give up of lesson", "white", null, null, 2);
		eventHandler2(b3, "onclick", function(){self.lesson.endLesson();});

		b2.onmouseover = function(event) {DynamicHTML.onMouseOverBoolean(event, b4.value == "Good!");};
		b2.onmouseout = function(event) {DynamicHTML.onMouseOutWhite(event)};
		b3.onmouseout = function(event) {DynamicHTML.onMouseOutWhite(event)};
		b3.onmouseover = function(event) {DynamicHTML.onMouseOverPeru(event);};
	}
}

class Symbols extends Screen {
	constructor(xmlSymbols, lesson) {
		super();
		this.symbolsSymbName(xmlSymbols);
		this.symbolsPrompt(xmlSymbols);
		this.symbolsAlphabet(xmlSymbols);
		this.symbolsLatin(xmlSymbols);
		this.symbolsSoundDir(xmlSymbols);
		this.symbolsComment(xmlSymbols);
		this.lesson = lesson;
	}

	symbolsSymbName(xmlSymbols) {
		this.symbName = xmlSymbols.getElementsByTagName("SYMBNAME")[0].childNodes[0].nodeValue;
	}

	symbolsPrompt(xmlSymbols) {
		this.prompt = null;
		if (xmlSymbols.getElementsByTagName("PROMPT").length > 0)
			this.prompt = xmlSymbols.getElementsByTagName("PROMPT")[0].childNodes[0].nodeValue;
	}

	symbolsAlphabet(xmlSymbols) {
		this.alphabet = xmlSymbols.getElementsByTagName("ALPHABET")[0].childNodes[0].nodeValue;
	}

	symbolsLatin(xmlSymbols) {
		this.latin = xmlSymbols.getElementsByTagName("LATIN")[0].childNodes[0].nodeValue;
	}
	
	symbolsSoundDir(xmlSymbols) {
		this.soundDir = null;
		if (xmlSymbols.getElementsByTagName("SOUNDSDIR").length > 0)
			this.soundDir = xmlSymbols.getElementsByTagName("SOUNDSDIR")[0].childNodes[0].nodeValue;
	}

	symbolsComment(xmlSymbols) {
		this.commentToShow = null;
		if (xmlSymbols.getElementsByTagName("COMMENT").length > 0)
			this.commentToShow = xmlSymbols.getElementsByTagName("COMMENT")[0].childNodes[0].nodeValue;
	}

	pageRendering() {
		super.pageRendering();
		var self = this;
		var d = div(this.body, "border:3px solid SaddleBrown; display:table; padding:20px; margin-left:40px;", 1);
		h1(d, this.symbName+"  - Practice", 1);
		if(this.prompt != null)
			h1(d, this.prompt, 1);
		 
		var latin = this.latin.split(" "); 
		var alphabet = this.alphabet.split(" ");  
		
		var buttons = []; 
		var divisions = []; 
		var divisions2 = []; 
		var headers = []; 
		
		var p2 = p(d, "padding-left:20px;"); 
		for (var i = 0; i < alphabet.length; i++) { 
			divisions[i] = div(p2,"border:1px solid Tan;display:table; padding:15px 30px; margin: 10px;display: inline-block;", 4); 
			headers[i] = h1(divisions[i],latin[i], 2); 
		} 
		var p3 = p(d, "padding-left:20px;"); 
		hr(p3); 
		for (var j = 0; j < latin.length; j++) { 
			const index = j; 
			divisions2[index] = div(p3,"border:2px Tan;display:table; padding:15px 30px; margin: 10px;display: inline-block;" ,4); 
			buttons[index] =  inpuButton(divisions2[index], index, alphabet[index], null, "", 6); 
			buttons[index].draggable = "true"; 
			eventHandler2(buttons[index], "ondragstart", function () {DynamicHTML.drag(event);}); 
		} 
		
		for (var i = 0; i < latin.length; i++) { 
			const index = i; 
			divisions[index].isPossible = true; 
			//TODO complete 
			eventHandler2(divisions[index], "ondragstart", function () {DynamicHTML.drag(event); divisions[index].isPossible = true;}); 
			eventHandler2(divisions[index], "ondragover", function () {if(divisions[index].isPossible) DynamicHTML.allowDrop(event);}); 
			eventHandler2(divisions[index], "ondrop", function () { 
			DynamicHTML.drop(event);divisions[index].isPossible = false; 
			var indexToUse = event.dataTransfer.getData("text"); 
			divisions[index].sol = buttons[indexToUse].value; 
			}); 
		} 
		var p4 = p(d, "padding-left:20px;"); 
		
		if(this.soundDir != null){
			var i = img(p4, "http://icons.iconarchive.com/icons/icons8/ios7/32/Media-Controls-High-Volume-icon.png");
			eventHandler2(i, "onclick", function() {play(self.soundDir);});
		}else alert(this.commentToShow);
		
		var b4 = inpuButton(p4, "check", "Check", "white", null, null, 2);
		eventHandler2(b4, "onclick", function(){alert("This is not the complete solution.");});
		var p5 = p(d, "padding-left:20px;"); 
		var b5 = inpuButton(p5, "check", "Give up of lesson", "white", 2); 
		eventHandler2(b5, "onclick", function(){self.lesson.endLesson();});  
	}
}

function runLanguage(text) {
	var table="<tr><th>Title</th><th>Artist</th></tr>";
    xmlDoc = text2XML(text);  // assignement to global
    xmlSerializer = new XMLSerializer();  // assignement to global
	// https://www.w3schools.com/xml/dom_nodes_get.asp
	var nodes = xmlDoc.getElementsByTagName("LANGNAME");
	if( nodes.length == 1 ) {
		languageName = nodes[0].childNodes[0].nodeValue;  // assignement to global
		var languageToUse;
		if(DynamicHTML.isLanguageExtraAlphabets())
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