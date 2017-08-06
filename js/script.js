var txt = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
console.log(txt.lenght);
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var txtCharsAfter = txt.replace('Velociraptor', dinosaurUpperCased);
console.log(txtCharsAfter.substr(0, txtCharsAfter.length / 2));