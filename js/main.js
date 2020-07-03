$(document).ready(function(){
    $("#myForm").submit(function(e){
        e.preventDefault()
        var username = $("#username").val()
        $.instagramFeed({
            'username': username,
            'container' : "#instagram-feed-demo",
            'display_profile':true,
            'display_biography':true,
            'items': 20,
            'display_igtv':false

        })
    })
})


$(window).on('load',function(){
      $.instagramFeed({
        'username':'g1alexander',
        'container':"#instagram-feed-demo",
        'display_profile':true,
        'display_biography':true,
        'items': 20,
        'display_igtv':false
      });
    });
    