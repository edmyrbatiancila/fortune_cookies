$(document).ready(function() {
    // Array to store alternate image paths
    var altImages = [
        "./assets/img/advice1.PNG",
        "./assets/img/advice2.PNG",
        "./assets/img/advice3.PNG",
        "./assets/img/advice4.PNG",
        "./assets/img/advice5.PNG",
        "./assets/img/advice6.PNG",
        "./assets/img/advice7.PNG",
        "./assets/img/advice8.PNG",
        "./assets/img/advice9.PNG",
        "./assets/img/advice10.PNG",
        "./assets/img/advice11.PNG",
        "./assets/img/advice12.PNG",
        "./assets/img/advice13.PNG",
        "./assets/img/advice14.PNG",
        "./assets/img/advice15.PNG",
        "./assets/img/advice16.PNG",
        "./assets/img/advice17.PNG",
        "./assets/img/advice18.PNG",
        "./assets/img/advice19.PNG",
        "./assets/img/advice20.PNG",
        "./assets/img/advice21.PNG",
        "./assets/img/advice22.PNG",
        "./assets/img/advice23.PNG",
        "./assets/img/advice24.PNG",
        "./assets/img/advice25.PNG",
        "./assets/img/advice26.PNG",
        "./assets/img/advice27.PNG",
        "./assets/img/advice28.PNG",
        "./assets/img/advice29.PNG",
        "./assets/img/advice30.PNG",
    ];

    // When mouse enters the image
    $('img').hover(function() {
        // Storage the original image source
        $(this).data('original-src', $(this).attr('src'));
        // Get the class of the parent div
        var parentClass = $(this).parent().attr('class');
        // Get the index of the hovered image within its parent
        var index = $(this).index();
        // Define the range of alternate images for the parent row
        var altRange = [];
        switch (parentClass) {
            case "first-row":
                altRange = [0, 5];
                break;
            case "second-row":
                altRange = [6, 11];
                break;
            case "third-row":
                altRange = [12, 17];
                break;
            case "fourth-row":
                altRange = [18, 23];
                break;
            case "fifth-row":
                altRange = [24, 29];
                break;
            default:
                altRange = [0, altImages.length - 1]; // Default to full range
        }
        // Calculate the correct index within the range
        var altIndex = index % (altRange[1] - altRange[0] + 1) + altRange[0];
        // Change the image source to the alternate image
        $(this).attr('src', altImages[altIndex]);
    }, function() {
        // When mouse leaves the image
        // Restore the original image source
        $(this).attr('src', $(this).data('original-src'));
    });
});