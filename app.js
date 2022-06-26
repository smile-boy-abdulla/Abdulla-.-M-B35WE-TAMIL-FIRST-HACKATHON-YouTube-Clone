const videoCardContainer =document.querySelector('.video-container');

let api_key =  "AIzaSyDVfUZXYucDibNJklYhiJU-OOGUf7oBzP4";
let video_http ="http://www.goggleapis.com/youtube/v3/videos?";
let channel_http = "https://youtube.googleapis.com/youtube/v3/channels?"

fetch(video_http + new URLSearchParams({
    key:api_key,
    part:'snippet',
    chart:mostPopular,
    maxresults:50,
    regioncode:'IN'
}))
.then(res => res.json())
.then(data =>{
    console.log(data);
    //console.log(data);
    data.items.forEach(item =>{
        getChannelIcom(item);

    })

})
.catch(err => console.log(err));

const getChannelIcon = (data) =>{
    fetch(channel_http + new URLSearchParams({
          key:api_key,
          part:'snippet',
          id:video_data.snippet.channelId
    }))
    .then(res =>res.json())
    .then(data =>{
        video_data.channelIdThumbinal = data.items[0].snippet.thumbnails.default.url;
         makeVideoCard(video_data);
    })

}
const makeVideoCard = (data) =>{
    videoCardContainer.innerHTML += `
    <div class="video onclick="lacation.href = 'http://youtube.com/watch?v=${data.id}'">
            <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
            <div class="content">
                <img src="" class="channel-icon" alt="">
                <div class="info">
                    <h4 class="title">${data.snippet.title}</h4>
                    <p class="channel-name"${data.snippet.channelTittle}></p>
                </div>
            </div>
        </div>
    `;
}

const serachInput = document.querySelector('.search-btn');
const serachBtn = document.querySelector('.search-btn');
let searchLink="https://www.youtube.com/results?search_query=html";
searchLink.addEventListener('click',() =>{
    if(serachInput.ValueMax.length){
        location.href =searchLink + serachInput.value;

    }
})