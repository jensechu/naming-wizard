// namer.js, for those times when you're like 'Shit I need a character name.'

function name_randomizer(){
    console.log("Name randomizer is running.");
    
    $.getJSON("data/names.json", function(data) {
    
	var allPrefixes = data.prefixes;
	console.log(allPrefixes);

	var allSuffixes = data.suffixes;
	console.log(allSuffixes);
    });
};


	      

name_randomizer();
