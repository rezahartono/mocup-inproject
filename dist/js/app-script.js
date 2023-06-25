$("a[role='button']").on('click', function (event) {
    event.preventDefault()
})
$("a[data-toggler='dropdown']").on('click', function (event) {
    event.preventDefault()
    var parent = $(this).parent()
    var dropdownContainer = parent.find('.dropdown-container')

    if (dropdownContainer.hasClass('h-0')) {
        dropdownContainer.removeClass('scale-y-0')
        dropdownContainer.addClass('scale-y-1')
        dropdownContainer.removeClass('h-0')
        dropdownContainer.addClass('h-auto')
    } else {
        dropdownContainer.removeClass('scale-y-1')
        dropdownContainer.addClass('scale-y-0')
        dropdownContainer.removeClass('h-auto')
        dropdownContainer.addClass('h-0')
    }

    var icon = $(this).find('.nav-icon-toggler')
    if (icon.hasClass('fa-angle-down')) {
        icon.removeClass('fa-angle-down')
        icon.addClass('fa-angle-up')
    } else {
        icon.removeClass('fa-angle-up')
        icon.addClass('fa-angle-down')
    }

})

$("[data-toggler='sidebar']").on('click', function (event) {
    $('.sidebar').toggleClass('left-0')
    $('.sidebar').toggleClass('left-[-350px] scale-x-1')
    $('.content-wrapper').toggleClass('pl-[300px]')
    $('.content-wrapper').toggleClass('pl-[20px]')
    var expand = $(this).attr('aria-expanded')
    if (expand == 'true') {
        $(this).attr('aria-expanded', false)
        $(this).empty()
        $(this).append('<i class="fa-solid fa-arrow-right text-purple text-2xl cursor-pointer"></i>')
    } else {
        $(this).attr('aria-expanded', true)
        $(this).empty()
        $(this).append('<i class="fa-solid fa-arrow-left text-purple text-2xl cursor-pointer"></i>')
    }
})

$("[data-toggler='combobox']").on('focus', function (event) {
    $('.combobox').removeClass('scale-y-0')
    $('.combobox').addClass('scale-y-1')
})
$("[data-toggler='combobox']").on('blur', function (event) {
    $('.combobox').removeClass('scale-y-1')
    $('.combobox').addClass('scale-y-0')
})

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
    });
    calendar.updateSize()
    calendar.render();
});