
// store the currently selected tab in the hash value
$("ul.nav-tabs > li > a").on("shown.bs.tab", function(e) {
    var id = $(e.target).attr("href").substr(1);
    id = id.split("_")[1];
    window.location.hash = id;
});

// on load of the page: switch to the currently selected tab
var pt_hash = window.location.hash.substr(1);
var pt_page = window.location.pathname.split("/").pop().split(".")[0];

//console.log('[' + hash + ']');
$('#myTab a[href="#' + pt_page + '_' + pt_hash + '"]').tab('show');
