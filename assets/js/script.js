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

const socialicon = [
    {
        name: 'facebook',
        link: 'https://www.facebook.com/adryan.clb',
    },
    {
        name: 'linkedin',
        link: '',
    },
    {
        name: 'github',
        link: 'https://github.com/Adryan-Clb',
    },
    {
        name: 'envelope',
        link: 'mailto:adryancolombo@gmail.com'
    },
];
const socialHtml = document.querySelector('.social-icon')
for (let i = 0; i < socialicon.length; i++) {

    const a = document.createElement('a');
    a.href = socialicon[i].link;
    socialHtml.appendChild(a);

    const logo = document.createElement('i');
    logo.classList = `fa fa-${socialicon[i].name}`

    a.appendChild(logo)
    if (i === socialicon.length - 1) {
        a.id = 'myBtn';
    }
}
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function (event) {
    event.preventDefault();
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function sendEmail() {
    var subject = document.getElementById("emailSubject").value;
    window.location.href = "mailto:adryancolombo@gmail.com?subject=" + subject;
    modal.style.display = "none";
}
