RenderObj = new Render()

$("#searchButton").on("click",function ()
{
    let ingredient = $("#inputId").val()
    $("#inputId").val("")
    $.get(`/recipes/${ingredient}` , function(res)
    {
        RenderObj.render(res)
    })
})


$(document).on("click" , ".imgClick" , function()
{
    alert($(this).parent().find("li").find("span")[0].innerHTML)
})

