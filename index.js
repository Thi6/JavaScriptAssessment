function getMovies(movieName) {

    let request = new XMLHttpRequest();
    let movie = movieName.value;
    // let resultJSON =
    console.log(movie);
    request.onload = function() {
    // document.getElementById('movieResults').innerText = request.responseText;
    const searchArray = JSON.parse(request.responseText);
    console.log(searchArray);
    let title = searchArray.Search[0].Title;
    document.getElementById('theTitle').innerText = title;
    let year = searchArray.Search[0].Year;
    document.getElementById('theYear').innerText = year;
    let type = searchArray.Search[0].Type;
    document.getElementById('theType').innerText = type;

    console.log(searchArray.Search[0].Title);
    // console.log(searchArray);
  }
  request.open("GET", "http://www.omdbapi.com/?s=" + movie + "&apikey=2e60af51");
  request.send();

}
