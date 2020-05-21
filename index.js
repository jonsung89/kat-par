$(document).ready(function() {
    $('#card').fadeOut();
    $('#balloon').fadeOut();
    $('#panning').delay(10000).fadeOut(2000);
    $('#balloon').delay(12000).fadeIn();
    $('#card').delay(13000).fadeIn(2000);



    if (('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch))) {
        console.log('touched')
        $(".touch")
            .bind("touchstart", function() {
                $(this)
                    .addClass("active")
                    .bind("touchend", function() {
                        $(this).removeClass("active");
                    });
            })
            .bind("touchenter", function() {
                $(this)
                    .addClass("hover")
                    .bind("touchleave", function() {
                        $(this).removeClass("hover active");
                    });
            });
    }



    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var cableImg = document.getElementById("cableCard");
    var ezraImg1 = document.getElementById("ezraImg");
    var ezraImg2 = document.getElementById("ezraImg2");

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    cableImg.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    ezraImg1.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    ezraImg2.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }




    var i =0;
    var images = ["/assets/bnb.png", "/assets/winniebg.png"];
    var image = $('.shape-block');

    setInterval(function(){  
        image.fadeOut(1000, function () {
            image.css('background-image', 'url(' + images[i] +')');
            
            image.fadeIn(1000);
        });
        if (i == (images.length - 1)){
            i = 0; 
        } else {
            i++;
        }
    }, 5000);


    insideImages = ["/assets/winnie.png", "/assets/stitch.png"];
    var centerImage = $('#centerImg');
    var j = 0
    setInterval(function(){  
        centerImage.fadeOut(1000, function () {
            // centerImage.css('background-image', 'url(' + insideImages[j] +')');
            centerImage.attr('src', insideImages[j]);
            centerImage.fadeIn(1000);
        });
        if (j == (insideImages.length - 1)){
            j = 0; 
        } else {
            j++;
        }
    }, 5000);

});