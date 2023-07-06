
// 헤더 스크립트
window.addEventListener('scroll', function () {
   if (this.window.pageYOffset !== 0) {
      document.querySelector('header').classList.add('header_on');
   } else {
      document.querySelector('header').classList.remove('header_on');
   }
})
window.addEventListener('scroll', function () {
   if (this.window.pageYOffset !== 0) {
      document.querySelector('.gnb').style.marginTop = "14px";
      document.querySelector('.gnb').style.transition = "all 0.5s";
      document.querySelector('.gnb .logo img').style.width = '62%';
      document.querySelector('.gnb .logo img').style.transition = "all 0.5s";
      document.querySelector('.lang').style.marginTop = '7px';
      document.querySelector('.lang').style.transition = "all 0.5s";

   } else {
      document.querySelector('.gnb').style.marginTop = "30px";
      document.querySelector('.gnb .logo img').style.width = '100%';
      document.querySelector('.lang').style.marginTop = '20px';
   }
})
// window.addEventListener('scroll', function() {
//    if (this.window.pageYOffset !== 0) {
//      document.querySelector('.gnb').classList.add('header_on');
//    } else {
//      document.querySelector('.gnb').classList.remove('header_on');
//    }
//  });



// gnb바 lnb
var gnb2 = document.querySelector('.gnb_2');
var lnb2 = document.querySelector('.lnb_2');

gnb2.addEventListener('mouseover', function () {
   lnb2.classList.add('lnb_2on');
});
lnb2.addEventListener('mouseleave', function () {
   lnb2.classList.remove('lnb_2on');
});
gnb2.addEventListener('mouseleave', function () {
   lnb2.classList.remove('lnb_2on');
});


/* 언어 변경 버튼 */
const lang_button = document.querySelector('.lang_button');

lang_button.addEventListener('click', function () {
   lang_button.classList.toggle('lang_button_on')
})

window.addEventListener('load', function () {
   var circle = document.querySelector('.circle');
   // circle.classList.add('on');
});

const circle = document.querySelector('.circle')

//원 줄어듦
setTimeout(function(){
   circle.classList.add('active')
}, 500);










// document.querySelector('.section2_img a').addEventListener('mouseover',function(){
//     document.querySelector('.section2_img1').classList.add('section2_img1_active')
// })

const section2Img1 = document.querySelector('.section2_img1');

section2Img1.addEventListener('mouseover', function () {
   section2Img1.classList.add('section2_img1_active');
});
section2Img1.addEventListener('mouseleave', function () {
   section2Img1.classList.remove('section2_img1_active');
});


const section2Img2 = document.querySelector('.section2_img2');

section2Img2.addEventListener('mouseover', function () {
   section2Img2.classList.add('section2_img2_active');
});
section2Img2.addEventListener('mouseleave', function () {
   section2Img2.classList.remove('section2_img2_active');
});

const section2Img3 = document.querySelector('.section2_img3');

section2Img3.addEventListener('mouseover', function () {
   section2Img3.classList.add('section2_img3_active');
});
section2Img3.addEventListener('mouseleave', function () {
   section2Img3.classList.remove('section2_img3_active');
});

const section2Img4 = document.querySelector('.section2_img4');

section2Img4.addEventListener('mouseover', function () {
   section2Img4.classList.add('section2_img4_active');
});
section2Img4.addEventListener('mouseleave', function () {
   section2Img4.classList.remove('section2_img4_active');
});

const section2Img5 = document.querySelector('.section2_img5');
section2Img5.addEventListener('mouseover', function () {
   section2Img5.classList.add('section2_img5_active');
});
section2Img5.addEventListener('mouseleave', function () {
   section2Img5.classList.remove('section2_img5_active');
});




//section3
// JavaScript 코드

const section3_bg1 = document.querySelector('.section3_bg1')
const section3_bg2 = document.querySelector('.section3_bg2')
const section3_bg3 = document.querySelector('.section3_bg3')
const section3_bg4 = document.querySelector('.section3_bg4')
const section3_bg5 = document.querySelector('.section3_bg5')

section3_bg1.addEventListener('mouseover', function () {
   section3_bg1.classList.add('section3_bg1_active');

});
section3_bg1.addEventListener('mouseleave', function () {
   section3_bg1.classList.remove('section3_bg1_active');
});

section3_bg2.addEventListener('mouseover', function () {
   section3_bg2.classList.add('section3_bg2_active');
})
section3_bg2.addEventListener('mouseleave', function () {
   section3_bg2.classList.remove('section3_bg2_active');
})

section3_bg3.addEventListener('mouseover', function () {
   section3_bg3.classList.add('section3_bg3_active');
});
section3_bg3.addEventListener('mouseleave', function () {
   section3_bg3.classList.remove('section3_bg3_active');
});

section3_bg4.addEventListener('mouseover', function () {
   section3_bg4.classList.add('section3_bg4_active');
});
section3_bg4.addEventListener('mouseleave', function () {
   section3_bg4.classList.remove('section3_bg4_active');
});

section3_bg5.addEventListener('mouseover', function () {
   section3_bg5.classList.add('section3_bg5_active');
});
section3_bg5.addEventListener('mouseleave', function () {
   section3_bg5.classList.remove('section3_bg5_active');
});


//content4
const boxes = document.querySelectorAll('.box1_1, .box1_2, .box1_3, .box2_1, .box2_2');

boxes.forEach(function (box) {
   box.addEventListener('mouseover', function () {
      this.classList.add('box1_1_active');
      this.style.paddingBottom = '300px';
      this.style.backgroundColor = "rgb(253, 241, 187)"
   });

   box.addEventListener('mouseleave', function () {
      this.classList.remove('box1_1_active');
      this.style.paddingBottom = '';
      this.style.background = ""
   });
});
function addMouseOverAndLeaveEvent(boxSelector, imgSelector, activeClass) {
   const boxElement = document.querySelector(boxSelector);
   const imgElement = document.querySelector(imgSelector);

   boxElement.addEventListener('mouseover', function () {
      imgElement.classList.add(activeClass);
   });

   boxElement.addEventListener('mouseleave', function () {
      imgElement.classList.remove(activeClass);
   });
}

addMouseOverAndLeaveEvent('.box1_1', '.img_box1', 'img_box1_active');
addMouseOverAndLeaveEvent('.box1_2', '.img_box2', 'img_box2_active');
addMouseOverAndLeaveEvent('.box1_3', '.img_box3', 'img_box3_active');
addMouseOverAndLeaveEvent('.box2_1', '.img_box4', 'img_box4_active');
addMouseOverAndLeaveEvent('.box2_2', '.img_box5', 'img_box5_active');



    // document.querySelector('.box1_1').addEventListener('mouseover', function(){
    //     document.querySelector('.img_box1').classList.add('img_box1_active')
    // });
    // document.querySelector('.box1_1').addEventListener('mouseleave', function(){
    //     document.querySelector('.img_box1').classList.remove('img_box1_active')
    // });


    // document.querySelector('.box1_2').addEventListener('mouseover', function(){
    //     document.querySelector('.img_box2').classList.add('img_box2_active')
    // });
    // document.querySelector('.box1_2').addEventListener('mouseleave', function(){
    //     document.querySelector('.img_box2').classList.remove('img_box2_active')
    // });

    // document.querySelector('.box1_3').addEventListener('mouseover', function(){
    //     document.querySelector('.img_box3').classList.add('img_box3_active')
    // });
    // document.querySelector('.box1_3').addEventListener('mouseleave', function(){
    //     document.querySelector('.img_box3').classList.remove('img_box3_active')
    // });

    // document.querySelector('.box2_1').addEventListener('mouseover', function(){
    //     document.querySelector('.img_box4').classList.add('img_box4_active')
    // });
    // document.querySelector('.box2_1').addEventListener('mouseleave', function(){
    //     document.querySelector('.img_box4').classList.remove('img_box4_active')
    // });


    // document.querySelector('.box2_2').addEventListener('mouseover', function(){
    //     document.querySelector('.img_box5').classList.add('img_box5_active')
    // });
    // document.querySelector('.box2_2').addEventListener('mouseleave', function(){
    //     document.querySelector('.img_box5').classList.remove('img_box5_active')
    // });








    // const box1_1 = document.querySelector('.box1_1');
    // const box1_2 = document.querySelector('.box1_2');
    // const box1_3 = document.querySelector('.box1_3');
    // const box2_1 = document.querySelector('.box2_1');
    // const box2_2 = document.querySelector('.box2_2');


    // box1_1.addEventListener('mouseover', function(){
    //     this.classList.add('box1_1_active');
    //     this.style.paddingBottom = '300px'; // padding-bottom 값은 여기에 지정하세요.
    // });
    // box1_1.addEventListener('mouseleave', function(){
    //     this.classList.remove('box1_1_active');
    //     this.style.paddingBottom = ''; // padding-bottom 값은 여기에 지정하세요.
    // });

    // box1_2.addEventListener('mouseover', function(){
    //     this.classList.add('box1_1_active');
    //     this.style.paddingBottom = '300px'; // padding-bottom 값은 여기에 지정하세요.
    // });
    // box1_2.addEventListener('mouseleave', function(){
    //     this.classList.remove('box1_1_active');
    //     this.style.paddingBottom = ''; // padding-bottom 값은 여기에 지정하세요.
    // });

    // box1_3.addEventListener('mouseover', function(){
    //     this.classList.add('box1_1_active');
    //     this.style.paddingBottom = '300px'; // padding-bottom 값은 여기에 지정하세요.
    // });
    // box1_3.addEventListener('mouseleave', function(){
    //     this.classList.remove('box1_1_active');
    //     this.style.paddingBottom = ''; // padding-bottom 값은 여기에 지정하세요.
    // });

    // box2_1.addEventListener('mouseover', function(){
    //     this.classList.add('box1_1_active');
    //     this.style.paddingBottom = '300px'; // padding-bottom 값은 여기에 지정하세요.
    // });
    // box2_1.addEventListener('mouseleave', function(){
    //     this.classList.remove('box1_1_active');
    //     this.style.paddingBottom = ''; // padding-bottom 값은 여기에 지정하세요.
    // });

    // box2_2.addEventListener('mouseover', function(){
    //     this.classList.add('box1_1_active');
    //     this.style.paddingBottom = '300px'; // padding-bottom 값은 여기에 지정하세요.
    // });
    // box2_2.addEventListener('mouseleave', function(){
    //     this.classList.remove('box1_1_active');
    //     this.style.paddingBottom = ''; // padding-bottom 값은 여기에 지정하세요.
    // });
