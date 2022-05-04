$(window).ready(function() {
    $('button:first').on('click', function() {
        $('div').addClass('batin')
    })
    $('button:last').on('click',function() {
        $('div').removeClass('batin')
    })
})  