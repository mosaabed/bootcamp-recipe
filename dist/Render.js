class Render
{
    constructor(){

    }
    render(data)
    {
        const source = $("#recipes-template").html()
        const template = Handlebars.compile(source)
        let newHtml = template(data)
        $("#mainDiv").empty().append(newHtml)
    }
}