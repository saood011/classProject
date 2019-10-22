var lib1 = {
    books: [
        {
        titles: "Javascript",
        author: "Saood",
        publisher:"Akhtar's Publication",
        year: 2050,
        cover: "./java.png",
        price: {
            India: "20 euros",
            Germany: '40 euros',
            USA: '30 euros'
        }
    },
    {
        titles: "HTML",
        author: "Saood",
        year: 2050,
        cover: "./html.png"
    },
    {
        titles: "Node JS",
        author: "Saood",
        publisher:"Akhtar's Publication",
        year: 2050,
        cover: "./node.png"
    },
    {
        titles: "Node JS",
        author: "Saood",
        publisher:"SA7 Publication",
        year: 2050,
        cover: "./node.png"
    },
    {
        titles: "Javascript",
        author: "Saood",
        publisher:"SA7 Publication",
        year: 2050,
        cover: "./java.png"
    },
    {
        titles: "HTML",
        author: "Saood",
        publisher:"Akhtar's Publication",
        year: 2050,
        cover: "./html.png"
    },

        ]
};
$(document).ready(function(){
    var libTemp = $("#myTemplate").html();
    var temple = Handlebars.compile(libTemp);
    
    $("#content").html(temple(lib1));
});

