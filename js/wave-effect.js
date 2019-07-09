$(function() {
    function RippleStyle(width, height, posX, posY) {
        this.width = (width <= height) ? height : width;
        this.height = (width <= height) ? height : width;
        this.top = posY - (this.height * .5);
        this.left = posX - (this.width * .5);
    }

    $('.wave-effect').click(function(e) {
        var rippleEl = $('<span class="ripple"></span>').appendTo(this);

        var pos = $(this).offset();

        var width = $(this).outerWidth();
        var height = $(this).outerHeight();

        var posX = e.pageX - pos.left;
        var posY = e.pageY - pos.top;

        var rippleStyle = new RippleStyle(width, height, posX, posY);

        rippleEl.css(rippleStyle);
    });

    $('.wave-effect').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.ripple', function() {
        $(this).remove();
    });
});