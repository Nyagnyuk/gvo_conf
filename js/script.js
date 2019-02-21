
$(document).ready(function () {


    var pathname = window.location.pathname;
    $('#navbarsconf a').each(function () {
        var attr = $(this).attr('href');
        var entry = pathname.indexOf(attr);
        if (entry > 0) {
            $(this).parents('li').addClass('active');
        }
    });


    $('#imageModal').on('show.bs.modal', function (e) {
        var image = $(e.relatedTarget).attr('data-src'),
            title = $(e.relatedTarget).attr('data-title');
        $('.img-modal').attr('src', image);
        $('.modal-title').text(title);
    });


});