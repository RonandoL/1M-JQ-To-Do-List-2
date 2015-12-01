$(document).ready(function() {
// 7b. get localStorage on refresh, place saved items on page
    $("#list-items").html(localStorage.getItem("listItems"));
// ADD INPUT TO PAGE
    $(".add-items").submit(function(event) {
        event.preventDefault();
  // 1. grab input: confirm w/console.log, make var of input value
        var item = $("#todo-list-item").val();
  // 6. stop blank <li> entries using (IF/else)
        if (item) {
  // 2. put input up on page w/checkbox, x & <hr>
            $("#list-items").append("<li><input class='checkbox' type='checkbox'>" + item + "<a class='remove'>x</a><hr></li>");
  // 7a. save to localStorage: .setItem("key", $("value")
            localStorage.setItem("listItems", $("#list-items").html());
  // 3. clear value out of input field
            $("#todo-list-item").val("");
        }

    });

// CHECKBOX TWEAKS
  // 4. make chackbox strikethrough text: .on("event", "selector", function() {
    $(document).on("change", ".checkbox", function() {
  // 8. keep checkbox checked/unchecked: if/else, "checked" is an attribute
        if ($(this).attr("checked")) { // IF attribute "checked" is present??
            $(this).removeAttr("checked")  // then remove the attribute from input
        } else {
          $(this).attr("checked", "checked");  // otherwise check the checked attrib.
        }

        $(this).parent().toggleClass("completed"); // each time clicked, it swaps completed 
  // 7c. save checkbox action to localStorage
        localStorage.setItem("listItems", $("#list-items").html());
    });

// DELETE LINE ITEM TWEAKS
  // 5. make x remove <li> item: .on("event", "selector", function() {
    $(document).on("click", ".remove", function() {
        $(this).parent().remove();
  // 7d. save deleted <li> to localStorage
        localStorage.setItem("listItems", $("#list-items").html());
    });






});
