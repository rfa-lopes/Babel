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
    if( answer == solution )
        play("general/right_answer.mp3");
    else
        play("general/wrong_answer.mp3");
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
    return (xmlDoc.getElementsByTagName("CLASS")[0].nodeValue == "LanguageExtraAlphabets"); 
}

class Language {
    constructor(lName,xmlDocument){
        this.lName = lName;
        this.xmlDocument = xmlDocument;
        this.lessons = xmlDocument.getElementsByTagName("LESSON");
    }

    languageName() {return this.lName;}

    numberOfLessons() {return this.lessons.length;}

    HomepageScreen() {
        var homePage = new HomePage(this.lessons);
        return homePage.defineHomePage();
    }

    KeyboardScreen() {}

    PairsScreen() {}

    BlocksScreen() {}
}

class LanguageExtraAlphabets extends Language {
    constructor(lName,xmlDocument) {
        super(lName,xmlDocument);
    }

    SymbolsScreen() {}
}

class DynamicHTML {
    constructor() {
        this.body = document.body;
    }

    createBlankHTMLPage () {
        this.body.innerHTML = '';
        return this.body;
    }

}

class HomePage {
    constructor(xmlLessons) {
        this.xmlLessons = xmlLessons;
    }

    defineHomePage(){
        var htmlPage = new DynamicHTML();
        var body = htmlPage.createBlankHTMLPage();

        var body = document.body;
        // start with a blank page
        body.innerHTML = '';

        h1(body, "Escolha qual a lição que pretende realizar:");
        hr(body);
        for (var i = 0; i < this.xmlLessons.length ;i++) {
            var d = div(body, "border:3px solid black; display:table; padding:20px; margin-left:40px");
            h1(d, "Esta lição é a Número "+(i+1)+":");
            var nodesKPB = this.xmlLessons[i].childNodes;
            h1(d,nodesKPB.length+"\n");
            // first line
            var p2 = p(d, "padding-left:20px;");
            var b1 = inpuButton(p2, "Check", "Escolha esta liçao", "lime");
            eventHandler(b1, "onclick", "screen1();");
            hr(body);
        }
    }
}

class Screen {
    constructor(xmlDocument) {
        this.xmlDocument = xmlDocument;
    }
}

class Keyboard extends Screen {
    constructor(xmlDocument) {
        super(xmlDocument);
        this.keyboardPrompt();
        this.keyboardOriginal();
        this.keyboardSound();
    }

    keyboardPrompt() {
        this.prompt = this.xmlDocument.getElementsByTagName("PROMPT")[0].nodeValue;
    }

    keyboardOriginal() {
        this.original = this.xmlDocument.getElementsByTagName("ORIGINAL")[0].nodeValue;
    }

    keyboardSound() {
        this.sound = this.xmlDocument.getElementsByTagName("SOUND")[0].nodeValue;
    }

    defineKeyboardPage(){
        var htmlPage = new DynamicHTML();
        var body = htmlPage.createBlankHTMLPage();
        
        // a div, only because we want a border
        var d = div(body, "border:3px solid black; display:table; padding:20px; margin-left:40px");
        h1(d, this.prompt);

        // first line
        var p1 = p(d, "padding-left:40px; word-spacing:50px;");
        var i = img(p1, "http://icons.iconarchive.com/icons/icons8/ios7/32/Media-Controls-High-Volume-icon.png");
        eventHandler(i, "onclick", "play(this.sound);");
        text(p1, 16, " ");
        text(p1, 32, this.original);

        // second line
        var p2 = p(d, "padding-left:20px;");
        var i = inputActiveText(p2, "answer", 40, 24, "Type this in English");
        eventHandler(i, "onkeydown", "if(event.keyCode == 13) document.getElementById('check').click();");
        text(p2, 16, " ");
        var b1 = inpuButton(p2, "check", "Check", "lime");
        eventHandler(b1, "onclick", "validate(document.getElementById('answer').value, 'What time is it?');");

        hr(body);
    }
}

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
            languageToUse = new LanguageExtraAlphabets(languageName,xmlDoc);
        else        
            languageToUse = new Language(languageName,xmlDoc);
        languageToUse.HomepageScreen();
    }
    else {
        alert('ERROR: Not a language file!\nPLEASE, TRY AGAIN!');
        screen0();
    }
}

function onLoad() {
    screen0();
}

