$(document).ready(function(){
  
  var recursive = 0;
    var i = 0;
    var eea = 1;
    var names = ['London', 'Paris', 'Cape Town', 'Moscow', 'New York', 'Singapore', 'Rome', 'Istanbul', 'Sydney', 'Venice', 'Dubai', 'Honolulu', 'Prague', 'Taipei', 'Rio de Janeiro']; 
    setInterval(function () {
        i++;
        if (i <= 15) {
            $('#cornertext').text(names[i - 1]);
            $('#p' + i).fadeIn(500);
            $('#cornertext').fadeIn(500);
            setTimeout(function () {
                $('#p' + i).fadeOut(500);
                $('#cornertext').fadeOut(500);
            }, 2250);
        };
        if (i > 15) {
            $('#cornertext').css('display', 'none');
            $('#centertext').fadeIn(500);

        };
    }, 3250);

    $('#home-nav').click(function () {
        recursive++;
        $('#r' + recursive).slideDown(300);
        setTimeout(function () {
            $('#r' + recursive).slideUp(400)
        }, 1000);
        if (recursive === 6) {
            $('#home-nav').css('cursor', 'default');
        };
    });
})
