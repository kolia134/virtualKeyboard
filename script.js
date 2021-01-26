

var words = {

    // Перший рядок клавіш

    escape: { word: 'escape', shift: 'escape' },
    f1: { word: 'f1', shift: 'f1' },
    f2: { word: 'f2', shift: 'f2' },
    f3: { word: 'f3', shift: 'f3' },
    f4: { word: 'f4', shift: 'f4' },
    f5: { word: 'f5', shift: 'f5' },
    f6: { word: 'f6', shift: 'f6' },
    f7: { word: 'f7', shift: 'f7' },
    f8: { word: 'f8', shift: 'f8' },
    f9: { word: 'f9', shift: 'f9' },
    f10: { word: 'f10', shift: 'f10' },
    f11: { word: 'f11', shift: 'f11' },
    f12: { word: 'f12', shift: 'f12' },
    prtSc: { word: 'prtSc', shift: 'SysRq' },
    pause: { word: 'pause', shift: 'break' },
    insert: { word: 'insert', shift: 'scrLk' },
    delete: { word: 'delete', shift: 'delete' },
    division: { word: '/', shift: '/' },
    multiplication: { word: '*', shift: '*' },

     // Другий рядок клавіш

    backQoute: { word: '`', shift: '~' },
    one: { word: '1', shift: '!' },
    two: { word: '2', shift: '@' },
    three: { word: '3', shift: '#' },
    four: { word: '4', shift: '$' },
    five: { word: '5', shift: '%' },
    six: { word: '6', shift: '^' },
    seven: { word: '7', shift: '&' },
    eight: { word: '8', shift: '*' },
    nine: { word: '9', shift: '(' },
    zero: { word: '0', shift: ')' },
    minus: { word: '-', shift: '_' },
    equal: { word: '=', shift: '+' },
    backspace: { word: 'backspace', shift: 'backspace' },
    point2: { word: '.', shift: 'delete'},
    plus: { word: '+', shift: '+'},
    minus2: { word: '-', shift: '-'},

     // Третій рядок клавіш

    tab: { word: 'tab', shift: 'tab2' },
    q: { word: 'q', shift: 'Q' },
    w: { word: 'w', shift: 'W' },
    e: { word: 'e', shift: 'E' },
    r: { word: 'r', shift: 'R' },
    t: { word: 't', shift: 'T' },
    y: { word: 'y', shift: 'Y' },
    u: { word: 'u', shift: 'U' },
    i: { word: 'i', shift: 'I' },
    o: { word: 'o', shift: 'O' },
    p: { word: 'p', shift: 'P' },
    openSquareBracket: { word: '[', shift: '{' },
    closeSquareBracket: { word: ']', shift: '}' },
    backSlash: { word: "\u002F", shift: "|"},
    seven2: { word: '7', shift: 'home' },
    eight2: { word: '8', shift: 'up' },
    nine2: { word: '9', shift: 'PgUp' },

    // Четвертий рядок клавіш

    capsLk: { word: 'capsLk', shift: 'capsLk' },
    a: { word: 'a', shift: 'A' },
    s: { word: 's', shift: 'S' },
    d: { word: 'd', shift: 'D' },
    f: { word: 'f', shift: 'F' },
    g: { word: 'g', shift: 'G' },
    h: { word: 'h', shift: 'H' },
    j: { word: 'j', shift: 'J' },
    k: { word: 'k', shift: 'K' },
    l: { word: 'l', shift: 'L' },
    semicolon: { word: ';', shift: ':' },
    brackets: { word: `'`, shift: `"` },
    enter: { word: `enter`, shift: `enter` },
    four2: { word: '4', shift: 'left' },
    five2: { word: '5', shift: '' },
    six2: { word: '6', shift: 'right' },

    // П'ятий рядок клавіш

    leftShift: { word: 'shift', shift: '' },
    z: { word: 'z', shift: 'Z' },
    x: { word: 'x', shift: 'X' },
    c: { word: 'c', shift: 'C' },
    v: { word: 'v', shift: 'V' },
    b: { word: 'b', shift: 'B' },
    n: { word: 'n', shift: 'N' },
    m: { word: 'm', shift: 'M' },    
    coma: { word: ',', shift: '<' },
    point: { word: '.', shift: '>' },
    slash: { word: '/', shift: '?' },
    rightShift: { word: 'shift', shift: '' },
    up: { word: 'up', shift: 'up2' },
    one2: { word: '1', shift: 'end' },
    two2: { word: '2', shift: 'down' },
    three2: { word: '3', shift: 'PgDn' },

    // Шостий рядок клавіш

   leftCtrl: { word: 'ctrl', shift: 'ctrl' },
   fn: { word: 'fn', shift: 'fn' },
   window: { word: 'window', shift: 'window' },
   leftAlt: { word: 'alt', shift: 'alt2' },
   space: { word: ' ', shift: ' ' },
   rightAlt: { word: 'alt', shift: 'alt2' },
   menu: {word: 'menu', shift: 'menu'},
   rightCtrl: { word: 'ctrl', shift: 'ctrl' },
   left: { word: 'left', shift: 'left2' },
   down: { word: 'down', shift: 'down2' },
   right: { word: 'right', shift: 'right2' },
   zero2: {word: 0, shift: ''},
   enter2: { word: `enter`, shift: `enter` },

}




function init() {
    var newDiv = document.createElement("div");
    newDiv.className = 'keyboard';
    document.body.appendChild(newDiv);
       
    for (var key in words) {
        newDiv.innerHTML += `<div class="key" id="${key}"> ${words[key].word} </div>`;    
    }
    
}

init();

let script = document.createElement('script');
script.src = "functions.js";

document.head.append(script);