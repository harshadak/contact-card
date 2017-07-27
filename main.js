$(document).ready(function () {


    $(document).on("submit", "form", function () {

        var first_name = $("#firstName").val();
        var last_name = $("#lastName").val();

        $(".contact-info").append("<div class='contact-card'><div class='basic-info'><h2>" + first_name + " " + last_name + "</h2><p>Click for description!</p></div></div>");

        $("#firstName").val("");
        $("#lastName").val("");

        return false;
    });

    $(document).on("click", "p", function () {
        var more_info = $("#description").val();
        $(".basic-info").hide();
        $(".contact-card").append(more_info);

        $("#description").val("");
    });
});
