$(document).ready(function () {
  // // 'lg' screen size
  // function initializeSlickCarousel() {
  //   if ($(window).width() >= 300 && $(window).width() <= 992) {
  //     console.log("small");
  //     $("#latest-slider").slick({
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //       autoplay: false,
  //       autoplaySpeed: 2000,
  //       prevArrow: $(".left-arrow"), // Specify the left arrow element
  //       nextArrow: $(".right-arrow"), // Specify the right arrow element
  //     });
  //   } else if ($(window).width() > 992) {
  //     console.log("large");
  //     $("#latest-slider").slick({
  //       slidesToShow: 4,
  //       slidesToScroll: 1,
  //       autoplay: false,
  //       autoplaySpeed: 2000,
  //       prevArrow: $(".left-arrow"), // Specify the left arrow element
  //       nextArrow: $(".right-arrow"), // Specify the right arrow element
  //     });
  //   }
  // }
  // initializeSlickCarousel();
  // Call the function on page load and window resize
  // $(document).ready(function () {
  // initializeSlickCarousel();
  // $(window).resize(function () {
  //   initializeSlickCarousel();
  // });
  // });
  // console.log("hello world");
  $("#latest-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: $(".left-arrow"), // Specify the left arrow element
    nextArrow: $(".right-arrow"), // Specify the right arrow element
  });
  //   Pagination JS starts here
  //   Initialize current page and total number of pages
  // var currentPage = 1;
  // var totalPages = 2; // Assuming 3 pages in total
  // console.log("Hello World");
  // // Load the initial page (Page 1) on page load
  // // loadPage(currentPage);
  // // Function to load a page using AJAX
  // function loadPage(pageNumber) {
  //   $.ajax({
  //     url: "blogs-" + pageNumber + ".html",
  //     dataType: "html",
  //     success: function (data) {
  //       // Display the content of the loaded page
  //       $("#content").html(data);
  //       console.log("hello");
  //     },
  //   });
  // }
  // // Event handler for the "Next" button click
  // $("#nextBtn").on("click", function (e) {
  //   e.preventDefault();
  //   console.log(currentPage);
  //   if (currentPage <= totalPages) {
  //     currentPage++;
  //     console.log(currentPage);
  //     loadPage(currentPage);
  //   }
  // });
  // // Event handler for the "Previous" button click
  // $("#prevBtn").on("click", function (e) {
  //   e.preventDefault();
  //   if (currentPage > 1) {
  //     currentPage--;
  //     loadPage(currentPage);
  //   }
  // });
});

//   Pagination JS ends here
