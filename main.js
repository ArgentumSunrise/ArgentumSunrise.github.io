$(document).ready(function () {
    var recursive = 0;
    var i = 0;
    var eea = 1;
    var lastScroll = 0;
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

    $(window).scroll(function(event){
    var st = $(this).scrollTop();
        if (st > lastScroll){
                $('#nav').slideUp(400)
            } else {
                $('#nav').slideDown(400);
            }
        ScrollTop = st;
});
    
    $('#scrolledUpNav').mouseenter(function(){
        setTimeout(function(){$('#nav').slideDown(400)}, 200);
    })
    
    $('#scrolledUpNav').mouseleave(function(){
        setTimeout(function(){$('#nav').slideUp(400)}, 200);
    })

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
    $('#contact-nav').click(function () {
        $('#contactbar').slideDown(600);
    });
    $('#contactexit').click(function () {
        $('#contactbar').slideUp(600);
    });

    $('#allahu-akbar').click(function () {
        $(this).css('color', '#ff5555');
        setTimeout(function () {
            $('#allah-e-egg').show(50);
            $('#a-e-i-1').show(50).delay(4000).hide(50);
            if (eea <= 5) {
                setInterval(function () {
                    eea++;
                    $('#a-e-i-' + eea).css('z-index','100+eea').show(50).delay(3000).hide(50);
               }, 2100);
           }
            setTimeout(function () {
                $('#allah-e-egg').hide(50);
            }, 16400);
        }, 3000);
    });

});
