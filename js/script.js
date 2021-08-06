// 1. Grab the input
document.querySelector(".js-go").addEventListener('click',function(){

    var inputValue = document.querySelector("input").value;
    pushToDOM(inputValue);
  
});
  
 document.querySelector(".js-userinput").addEventListener('keyup',function(e){ 

    // if the key ENTER is pressed...
    if(e.which === 13) {
        var inputValue = document.querySelector("input").value;
        callGiphy(inputValue);
    }
  
});


// 2. Do the data stuff with the API
function callGiphy(inputValue) {
    console.log(inputValue);
    inputValue = inputValue.replaceAll(" ", "+");
    var url = "http://api.giphy.com/v1/gifs/search?q=" + inputValue + "&api_key=dc6zaTOxFJmzC";
    console.log(url);

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', function(e) {
    var data = e.target.response;
    pushToDOM(data);
});
}

// 3. Show me the GIFs
function pushToDOM(input) {

    var container = document.querySelector('.js-container');
    container.innerHTML = "";

    var response = JSON.parse(input);
    var imageURLs = response.data;

    imageURLs.forEach(function(image) {
        var src = image.images.fixed_height.url;
        // console.log(src);
        // container.innerHTML +=  "<img src = '" + src + "' style='margin: 8px;'>";
        container.innerHTML +=  "<img src = '" + src + "' class='container-image'>";
    });

}