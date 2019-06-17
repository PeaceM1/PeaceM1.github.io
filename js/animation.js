document.addEventListener('DOMContentLoaded', () => {

    console.log('works')
    anime.timeline({
            easing: 'easeOutExpo',
        })
        .add({
            targets: '.nav-wrapper',
            translateX: ['-100vh', '0vh'],
        })
        .add({
            targets: '.logo',
            translateX: ['-100vh', '0vh'],
            offset: '-=500',
        })
        .add({
            targets: '.logo, .navbar .nav-item',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: (el, i) => 100 * i,
            offset: '-=700'
        })
        .add({
            targets: '.name, .bio, .icon',
            translateY: [100, 0],
            opacity: [0, 1],
            offset: '-=1000',
        })

})