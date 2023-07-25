1.
$(document).ready(function () {
let headerElements = $('h2.head');
headerElements.css('background-color', 'green');
headerElements.has('.inner').css('font-size', '35px');
});
2.
let validA = /^https:\/\/$/
if (validA.test('aHref')) {
    $a.attr('target', '_blank')
}
3.
$(document).ready(function() {
    $('h3').each(function() {
        let h3 = $(this);
        let div = h3.next('div');
        if (div.length) {
            h3.before(div);
        }
    });
});
4.
$(document).ready(function(){
    let chekboxes = $('input[type="checkbox"]');
    chekboxes.change(function(){
    let checked = 
 chekboxes.filter(':checked').length;
        if (checked >= 3) {
            chekboxes.prop('disabled', true);
        }
    });
});