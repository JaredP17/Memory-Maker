$(document).ready(() => {
    const logoutButton = $('#logoutButton');
    $(logoutButton).on('click', function(event) {
        event.preventDefault();
        localStorage.clear();
        document.cookie = 'sessionToken=; expires=Thu, 20 Aug 2016 00:00:00 UTC; path=/;'
        window.location.href = '/';
    });
    const createButton = $('#createButton');
    $(createButton).on('click', function(event) {
        event.preventDefault();
        window.location.href = '/memories/newMemory';
    });
    const viewButton = $('.viewButton');
    $(viewButton).on('click', function(event) {
        event.preventDefault();
        const memoryId = $(this).attr('data-id');
        window.location.href = `/memories/id/${memoryId}`;
    });
    const arrayOfDates = [];
    $(".datetime").each(function (index) {
      console.log(
        index + ": " + $(this).text().split(/\s+/).slice(1, 4).join(" ")
      );
      arrayOfDates.push($(this).text().split(/\s+/).slice(1, 4).join(" "));
    });
    console.log(arrayOfDates);
    let timeDisplayed = document.querySelectorAll(".datetime");
    for (i = 0; i < arrayOfDates.length; i++) {
      timeDisplayed[i].innerHTML = arrayOfDates[i];
    }
});