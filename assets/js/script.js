$(window).scroll(function () {
    if ($(document).scrollTop() > 10) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
})
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

const icon = [
    {
        name: 'HTML',
        logo: 'html',
        link: 'https://fr.wikipedia.org/wiki/Hypertext_Markup_Language',
    },
    {
        name: 'CSS',
        logo: 'css',
        link: 'https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade',
    },
    {
        name: 'Boot strap',
        logo: 'bootstrap',
        link: 'https://fr.wikipedia.org/wiki/Bootstrap_(framework)',
    },
    {
        name: 'Figma',
        logo: 'figma',
        link: 'https://fr.wikipedia.org/wiki/Figma',
    },
    {
        name: 'Word Press',
        logo: 'wordpress',
        link: 'https://fr.wikipedia.org/wiki/WordPress',
    },
    {
        name: 'Java Script',
        logo: 'javascript',
        link: 'https://fr.wikipedia.org/wiki/JavaScript'
    },
    {
        name: 'My SQL',
        logo: 'mysql',
        link: 'https://fr.wikipedia.org/wiki/MySQL',
    },
];
const AffIcon = document.querySelector('.listicon');

for (i = 0; i < icon.length; i++) {
    const textHtml2 = document.createElement('div');
    AffIcon.appendChild(textHtml2).classList.add('test2');
    const textHtml = document.createElement('div');
    textHtml2.appendChild(textHtml).classList.add('test');

    const imgHtml = document.createElement('img')
    imgHtml.src = `assets/img/logo/${icon[i].logo}.png`
    imgHtml.alt = `logo de ${icon[i].name}`
    textHtml.appendChild(imgHtml).classList.add('img');

    const textest = document.createElement('a')
    textest.href = icon[i].link
    textest.textContent = icon[i].name
    textHtml.appendChild(textest).classList.add('auto');

}