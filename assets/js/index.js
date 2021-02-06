$.getJSON('https://api.github.com/repos/maptalks/maptalks.three', function (data) {
    $('#star-content').html('<i class="fa fa-star"></i>stars :'+data.stargazers_count)
})