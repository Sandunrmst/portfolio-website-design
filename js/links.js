
$('.about-details ul li a').click(function (e) {

  e.preventDefault();

  $('.about-details ul li').removeClass('active'); /*remove all active class from all list*/

  const select_aTag = $(this); /*Get current selected 'a' Tag value*/
  console.log(select_aTag.parent());

  select_aTag.parent().addClass('active');
  /*add link active class to selected li tag*/
  

  const thisTab = $(this).attr("href");

  $('.about-details .about-links-tabs div:visible').fadeOut(200, function () {
    // This will fadeout current visibale tab and
    $(thisTab).fadeIn(200); // this will fadein user currenty clicked tab help with this keyword
  });
});

//   $(document).ready(function(){ way of select all li tag in document

//     const list = $('.about-details ul li a').parent();
//     console.log(list);

//   });
