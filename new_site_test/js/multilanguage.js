$(".dropdown-menu > a").click(function(e) {
    var id = $(e.target).attr("id");
    if (typeof id === "undefined") {
        return;
    }
    var hash = window.location.hash;
    var path = window.location.pathname.split("/");
    var page = path.pop();
    var togo = "../" + id + "/" + page + hash;
    window.location = togo;
});