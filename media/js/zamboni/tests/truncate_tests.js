test('Truncation', function() {
    var $h = $('#truncate h3'),
        hellip = '&hellip;';
    $h.truncate();
    equals($h.html().substr(-hellip.length), hellip);
});
