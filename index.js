function chooseColor() {
  var mycolor = document.getElementById("myColor").value;
  document.execCommand('foreColor', false, mycolor);
}

function choosehighlight() {
  var myHighlight = document.getElementById('myhighlight').value;
  document.execCommand('hiliteColor', false, myHighlight);
}


function changeFont() {
  var myFont = document.getElementById("input-font").value;
  document.execCommand('fontName', false, myFont);
}

function changeSize() {
  var mysize = document.getElementById("fontSize").value;
  document.execCommand('fontSize', false, mysize);
}

function checkDiv() {
  var editorText = document.getElementById("editor1").innerHTML;
  if (editorText === '') {
    document.getElementById("editor1").style.border = '5px solid red';
  }
}

function removeBorder() {
  document.getElementById("editor1").style.border = '1px solid transparent';
}

function changeAlign() {

}
var c = 1;

function makeBold(btn) {
  let property = document.getElementById(btn);
  document.execCommand('bold', false, null);
  
  if (c == 0) {
    property.style.backgroundColor = "#f2f2f2"
    c = 1;
  }
  else {
    property.style.backgroundColor = "#9c9c9c"
    c = 0;
  }

}

var c1 = 1;

function makeItalic(btn) {
  let property = document.getElementById(btn);
  document.execCommand('italic',false,null);
  
  if (c1 == 0) {
    property.style.backgroundColor = "#f2f2f2"
    c1 = 1;
  }
  else {
    property.style.backgroundColor = "#9c9c9c"
    c1 = 0;
  }

}

var c2 = 1;

function makeUnderline(btn) {
  let property = document.getElementById(btn);
  document.execCommand( 'underline',false,null);
  
  if (c2 == 0) {
    property.style.backgroundColor = "#f2f2f2"
    c2 = 1;
  }
  else {
    property.style.backgroundColor = "#9c9c9c"
    c2 = 0;
  }

}

var c3 = 1;

function makeStrikeThrough(btn) {
  let property = document.getElementById(btn);
  document.execCommand( 'strikethrough',false,null);
  
  if (c3 == 0) {
    property.style.backgroundColor = "#f2f2f2"
    c3 = 1;
  }
  else {
    property.style.backgroundColor = "#9c9c9c"
    c3 = 0;
  }

}


