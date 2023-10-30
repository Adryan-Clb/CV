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
        logo: 'html-5',
    },
    {
        name: 'CSS',
        logo: 'css3'
    },
    {
        name: 'Bootstrap',
        logo: 'bootstrap',
    },
    {
        name: 'WordPress',
        logo: 'wordpress',
    },
    {
        name: 'JS',
        logo: 'javascript'
    }
];
const AffIcon = document.querySelector('.listicon');

for (i = 0; i < icon.length; i++) {
const textHtml = document.createElement('div')
AffIcon.appendChild(textHtml)

const imgHtml = document.createElement('img')
imgHtml.src = `assets/img/logo/${icon[i].logo}.png`
textHtml.appendChild(imgHtml)
}
