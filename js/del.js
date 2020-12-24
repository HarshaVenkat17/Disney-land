$(".form-check-input").on("click",function(){
    if($(this).val() == "first")
       {$('#box').show();
        $('#hi').hide()
       }
    else
    {
        $('#box').hide();
        $('#hi').show()
        }
});