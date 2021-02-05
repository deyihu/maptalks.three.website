$.getJSON('https://api.github.com/repos/maptalks/maptalks.three', function (data) {
    $('#star-content').html('stars :'+data.stargazers_count)
})