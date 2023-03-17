var videoFrame = document.getElementById("trailer");
var descFrame = document.getElementById("description");



function showTrailer(videoID)
{
    videoFrame.innerHTML = "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/" + videoID + "' title='YouTube video player' frameborder='0' allowfullscreen></iframe>";
}

function showDesc(text){
    descFrame.innerHTML = "<p>" + text + "</p>";
}
// Selecting the movies from their posters
function selectPoster(poster) {
  
  // Remove the "selected" class from all posters
  const posters = document.getElementsByClassName("poster");
  for (const p of posters) {
    p.classList.remove("selected");
  }
  
  // Add the "selected" class to the selected poster
  poster.classList.add("selected");
}

function movie1Trailer()
{
    showTrailer("bK6ldnjE3Y0");
    showDesc("The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.");
    
}

function movie2Trailer()
{
    showTrailer("LBTFdCeP4Dw");
    showDesc("To live in Barbie Land is to be a perfect being in a perfect place. Unless you have a full-on existential crisis. Or you're a Ken.");
}

function movie3Trailer()
{
    showTrailer("0-wPm99PF9U");
    showDesc("A young mermaid makes a deal with a sea witch, to trade her beautiful voice for human legs so she can discover the world above water and impress a prince.");
}

function movie4Trailer()
{
    showTrailer("h74AXqw4Opc");
    showDesc("In the next installment, the survivors of the Ghostface killings leave Woodsboro behind and start a fresh chapter in New York City.");
}

function movie5Trailer()
{
    showTrailer("JqF6zlHRdL8");
    showDesc("John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.");
}

function movie6Trailer()
{
    showTrailer("cqGjhVJWtEg");
    showDesc("Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.");
}

function movie7Trailer()
{
    showTrailer("AIc671o9yCI");
    showDesc("The film continues the story of teenage Billy Batson who, upon reciting the magic word 'SHAZAM!' is transformed into his adult Super Hero alter ego, Shazam.");
}

function movie8Trailer()
{
    showTrailer("DuWEEKeJLMI");
    showDesc("An oddball group of cops, criminals, tourists, and teens converges in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.");
}

function movie9Trailer()
{
    showTrailer("TnGl01FkMMo");
    showDesc("The story of The Super Mario Bros. on their journey through the Mushroom Kingdom");
}