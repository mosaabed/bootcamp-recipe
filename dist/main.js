RenderObj = new Render()

$("#searchButton").on("click",function ()
{
    let ingredient = $("#inputId").val()
    $.get(`/recipes/${ingredient}` , function(res)
    {
        RenderObj.render(res)
    })
})