function youtubeGETCall(searchTerm, callback){
    const youTubeUrl = "https://www.googleapis.com/youtube/v3/search";

    let query = {
        part: 'snippet',
        key: 'AIzaSyDc_DZSbtDwMCvRJAw0LoYJD_XlrXduBh0',
        q: `${searchTerm}`
    }

    $.getJSON(youTubeUrl, query, callback);
}

function displayVideos(data){
    console.log(data);

    let videoItems = data['items'];
    console.log(videoItems);

    for(i = 0; i < videoItems.length; i++){
        let videoThumbnail = videoItems[i]['snippet']['thumbnails']['medium']['url'];
        let videoID = videoItems[i]['id']['videoId'];
        $('.js-results').append(`<a href= "https://www.youtube.com/watch?v=${videoID}"><img src ="${videoThumbnail}"></a>`);
    }


}

function watchForSubmit(){
    $(".js-submit-button").on('click', function(){
        let searchQuery = $(this).prev().val();
        console.log(searchQuery);

        youtubeGETCall(searchQuery, displayVideos);
    });
}

$(watchForSubmit);
