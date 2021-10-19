$("#hamburger").click(function(){
    $(".hamburger").toggleClass("change");
    $(".menu").toggleClass("open");
})

let tabHeader = document.getElementsByClassName("tabs-header")[0];
let tabIndicator = document.getElementsByClassName("scrollbar")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByClassName("mytab");

for(let i = 0;i < tabsPane.length; i++){
    tabsPane[i].addEventListener("click", function(){
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");

        tabIndicator.style.top = `calc(calc(100% / 3) * ${i} + 10%)`;
    });
}

//checkboxes

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const  optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", ()  =>{
    optionsContainer.classList.toggle("active");
})


optionsList.forEach( o => {
    o.addEventListener("click", () =>{
       selected.innerHTML = o.innerHTML;
       optionsContainer.classList.remove("active");
       
    })
    selected.innerHTML = "";
})

$('.options-container .option').on('click', function () {
  
    $('.options-container .option').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');   
    }
    
  });
  

  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });