let galery = [

    {
        fname:"red.jpg",
        imgWidth: 300,
        title: "Красный костел",
        link: "https://msj.by/katolicheskie-xramy/krasnyj-kostel-v-minske",
        description: "В храме святого Симеона и святой Елены находится полномасштабная копия Туринской Плащаницы."
    },

    {
        fname:"troi.jpg",
        imgWidth: 300,
        title: "Троицкое предместье",
        link: "https://www.belarus.by/ru/travel/belarus-life/trinity-suburb",
        description: "Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь."
    },

    {
        fname:"mir.jpg",
        imgWidth: 300,
        title: "Мирский замок",
        link: "https://mirzamak.by/",
        description: "Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Белорусси."
    }

]

for (i=0; i<galery.length; i++)
picturesHere.innerHTML += `
<div>
    <img onclick="showImg('${galery[i].fname}','${galery[i].description}')" style="width: ${galery[i].imgWidth}px;" src="images/im/${galery[i].fname}" alt="">
    <p><a href="${galery[i].link}">${galery[i].title}</a></p>
</div>
`;

function showImg(f,d) {
    bigImg.innerHTML = `<img onclick="bigImg.innerHTML = ''" src="images/im/${f}" alt="" style="width: 1000px;">
    <p>${d}</p>`;
}