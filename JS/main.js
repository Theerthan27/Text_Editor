
function bold() {
    document.execCommand('bold', false, null);
}
function italic() {
    document.execCommand('italic', false, null);
}
function underline() {
    document.execCommand('underline', false, null);
}
function strikethrough(){
    document.execCommand('strikethrough', false, null);
}
function justtifyLeft() {
    document.execCommand('justtifyLeft', false, null);
}
function justifyCenter() {
    document.execCommand('justifyCenter', false, null);
}
function justifyRight() {
    document.execCommand('justifyRight', false, null);
}
function changeSize(){
    var mysize = document.getElementById("fontSize").value;
    document.execCommand('fontSize', false , mysize);
}

function redo(){
    document.execCommand('redo', false, null);
}
function undo(){
    document.execCommand('undo',false , null);
}
function changeColor(){
    let myColor = document.getElementById("mycolor").value;
    document.execCommand('foreColor',false ,myColor);
}

