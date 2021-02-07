$.getJSON('https://api.github.com/repos/maptalks/maptalks.three', function (data) {
    $('#star-content').html('<i class="fa fa-star"></i>stars :' + data.stargazers_count)
});

$('.video-panel').on('click', function () {
    var url = this.dataset.url;
    $('#video-player-container').show();
    player.start(url);
    // player.reload();
    player.play();
});


$('.video-close').on('click', function () {
    $('#video-player-container').hide();
    player.pause();
});

var player = new Player({
    id: 'video-player',
    width: '100%',
    height: '95%',
    url: 'https://deyihu-static-public-1300406971.cos.ap-shanghai.myqcloud.com/portfolio-video/20210207_094429.mp4'
});