var wish_list_done="0";

$('#wish_list_button').on('click', function () {
        if(wish_list_done=="0"){
            wish_list_done="1";
        
                var cart = $('#wish_list_img');
                var imgtodrag = $("#wish_list_button").eq(0);
                
                if (imgtodrag) {
                    var imgclone = imgtodrag.clone()
                        .offset({
                        top: imgtodrag.offset().top,
                        left: imgtodrag.offset().left
                    })
                        .css({
                        'opacity': '0.5',
                            'position': 'absolute',
                            'height': '150px',
                            'width': '150px',
                            'z-index': '100'
                    })
                        .appendTo($('body'))
                        .animate({
                        'top': cart.offset().top,
                            'left': cart.offset().left,
                            'width': 75,
                            'height': 75
                    }, 1000, 'easeInQuad');
                    
                    setTimeout(function () {
                        cart.effect("shake", {
                            times: 2
                        }, 200);
                    }, 1500);

                    imgclone.animate({
                        'width': 0,
                            'height': 0
                    }, function () {
                        $(this).detach()
                    });
                }
                $("#wish_list_button").text("Added to Wish list");

            // add to details to database
            var flag=1;
            var user_id=$("#id_u_id").val();
            var user_email=$("#id_u_email").val();
            var user_mobile=$("#id_u_mobile").val();
            var user_location=$("#id_u_location").val();
            alert("Location : "+user_location);
            if(user_location.length<1){
                alert("Please Enter Location");
                flag=0;
            }
            var car_id=$("#id_c_id").val();
            var p_from=$("#id_pfrom").val();
            var p_to=$("#id_pto").val();
            var d_from=$("#id_dfrom").val();
            var d_to=$("#id_dto").val();
            var t_count=$("#id_c_id").val();
            var payment_method=$("#pm").val();
            console.log(user_id+" "+user_email+" "+user_mobile+" "+user_location+" "+car_id+" "+p_from+" "+p_to+" "+d_from+" "+d_to+" "+t_count+" "+payment_method);
            if(flag==1){
                $.ajax({
                    type:"POST",
                    url:"../controllers/wishListHandler.php",
                    data:{
                        user_id:user_id,
                        user_email:user_email,
                        user_mobile:user_mobile,
                        user_location:user_location,
                        car_id:car_id,
                        p_from:p_from,
                        p_to:p_to,
                        d_from:d_from,
                        d_to:d_to,
                        t_count:t_count,
                        payment_method:payment_method
                    },
                    success:function(data){
                        data=JSON.parse(data);
                        console.log(data);
                        alert(data['status']);
                    }
                });
            }
            
    }
    else{
        $("#exist").slideDown(200);
        setTimeout(function(){
            $("#exist").slideUp(200);
                $(that).html(text);
            }, 2000);
    }

});