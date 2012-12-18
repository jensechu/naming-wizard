// namer.js, for those times when you're like 'Shit I need a character name.'

function name_randomizer(element, nameType) {
    
    // Grabs the names from the JSON file and assigns them to a variable.
    // Passes back a random name from the unpacked list.
    $.getJSON("data/names.json", function(data) {	
	var allNames = {}
	allNames["prefixes"] = data.prefixes;
	allNames["suffixes"] = data.suffixes;

	var randomName = allNames[nameType][Math.floor(Math.random() * allNames[nameType].length)];

	console.log(randomName);
	$(element).text(randomName);
	
    });
};

$(document).ready(function() {

    //Grab the class (prefix or suffix, but flexible for more types).
    // Run the randomizer with the name type.
    $("#generator-wrap h1").click(function() {
	var nameType = $(this).attr("class");
	name_randomizer(this, nameType);
    });

    //Click each name to run the name_randomizer() on 'em.
    function refresh_names() {
	$("#generator-wrap h1").each(function(index) {
	    $(this).click();
	});
    };

    //Refresh names onLoad
    refresh_names();

    //Refresh names on double click.
    $(".refresh").click(function() {
	refresh_names();
    });
    
});
