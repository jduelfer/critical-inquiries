$(document).ready(function() {
    var postTitleElement = document.getElementById('postTitle');
    var postTitle;
    if (postTitleElement) {
        postTitle = postTitleElement.textContent;
    }
    $.ajax({
        type: 'GET',
        url: 'https://criticalinquiries-developer-edition.na85.force.com/services/apexrest/v1/tracking?referrer=' + document.referrer + '&title=' + postTitle,
        jsonp: "callback",
        dataType: "jsonp",
        success: function(response) {
            // Personalize page dependent on referrer
        }
    });
});