$(document).ready(function () {

    $("form").submit(submitRank);
    $("body").css("background-color", "Bisque");

    function submitRank(event) {
        event.preventDefault();


        // find all the checked boxes

        var position = $("input[name=rank]:checked");

        var rank = position.data("rank");

        var colorSelect = position.data("color")

        var firstName = $("input[name=firstName]");

        var fullName = rank + " " + $("#firstName").val() + " " + $("#lastName").val();

        $("body").css("background-color", "");

        // change text color

        $("#output").css ("color", colorSelect);


        $("#salutations").text(fullName);
    }
});