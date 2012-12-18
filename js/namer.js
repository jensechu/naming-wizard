// namer.js, for those times when you're like 'Shit I need a character name.'

function name_randomizer(nameType){
    
    // Grabs the names from the JSON file and assigns them to a variable.
    $.getJSON("data/names.json", function(data) {	
	var allNames = {}
	allNames["prefixes"] = data.prefixes;
	allNames["suffixes"] = data.suffixes;

	var randomName = allNames[nameType][Math.floor(Math.random() * allNames[nameType].length)];

<<<<<<< HEAD
	var allSuffixes = data.suffixes;
	console.log(allSuffixes);
=======
	console.log(randomName);
	
>>>>>>> randomizer
    });
};

$(document).ready(function() {

    //Grab the class (prefix or suffix, but flexible for more types).
    // Run the randomizer with the name type.
    $("#generator-wrap h1").click(function() {
	var nameType = $(this).attr("class");
	name_randomizer(nameType);
    });

    $(".refresh").click(function() {
	$("#generator-wrap h1").each(function(index) {
	    $(this).click();
	});
    });
});
