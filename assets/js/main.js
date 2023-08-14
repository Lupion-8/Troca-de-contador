document.getElementById("particles-1") && particlesJS("particles-1", {
    particles: {
        number: {
            value: 40,
            density: {
                enable: !0,
                value_area: 4e3
            }
        },
        color: {
            value: ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
        },
        shape: {
            type: "image",
            stroke: {
                width: 0,
                color: "#fff"
            },
            polygon: {
                nb_sides: 6
            },
            image: {
                src: "assets/images/logot_opacity_10.webp",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: .15,
            random: !0,
            anim: {
                enable: !0,
                speed: .2,
                opacity_min: .15,
                sync: !1
            }
        },
        size: {
            value: 50,
            random: !0,
            anim: {
                enable: !0,
                speed: 2,
                size_min: 5,
                sync: !1
            }
        },
        line_linked: {
            enable: !1,
            distance: 150,
            color: "#ffffff",
            opacity: .4,
            width: 1
        },
        move: {
            enable: !0,
            speed: 1,
            direction: "top",
            random: !0,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: {
                enable: !1,
                rotateX: 0,
                rotateY: 0
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !1,
                mode: "bubble"
            },
            onclick: {
                enable: !1,
                mode: "repulse"
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
            },
            repulse: {
                distance: 400,
                duration: .4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: !0
});
const carouselItems = document.querySelector(".carousel-items")
  , prevButton = document.querySelector(".carousel-prev")
  , nextButton = document.querySelector(".carousel-next");
let currentIndex = 0;
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
function scrollToDiv(e) {
    const t = document.getElementById(e);
    t && setTimeout((()=>{
        t.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
            duration: 2e3
        })
    }
    ), 100)
}
prevButton.addEventListener("click", (()=>{
    currentIndex > 0 && (currentIndex--,
    carouselItems.style.transform = `translateX(-${100 * currentIndex / 1.5}%)`)
}
)),
nextButton.addEventListener("click", (()=>{
    currentIndex < 3 && (currentIndex++,
    carouselItems.style.transform = `translateX(-${100 * currentIndex / 1.5}%)`)
}
)),
document.addEventListener("DOMContentLoaded", (function() {
    for (var e = document.getElementsByClassName("accordion-item"), t = 0; t < e.length; t++)
        e[t].querySelector(".accordion-header").addEventListener("click", n);
    function n(e) {
        this.parentNode.classList.toggle("expanded"),
        "rotate(180deg)" == this.parentNode.querySelector(".accordion-icon").style.webkitTransform ? this.parentNode.querySelector(".accordion-icon").style.transform = "rotate(0deg)" : this.parentNode.querySelector(".accordion-icon").style.transform = "rotate(180deg)"
    }
    document.getElementById("telefone").addEventListener("input", (function() {
        const e = function(e) {
            return e.length <= 10 ? e.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3") : e.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")
        }(this.value.replace(/\D/g, ""));
        this.value = e
    }
    ));

    document.getElementById("telefone2").addEventListener("input", (function() {
        const e = function(e) {
            return e.length <= 10 ? e.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3") : e.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")
        }(this.value.replace(/\D/g, ""));
        this.value = e
    }
    ));

    const o = document.querySelector(".inputs");
    o.addEventListener("submit", (function(e) {
        e.preventDefault(),
        o.checkValidity() ? (window.open(window.origin + "/trocadecontador/thank.html", "_blank"),
        setTimeout((()=>{
            document.querySelector(".inputs").innerHTML = '<span style="color: green;text-align: center;">Recebemos o seu Formulário.</span>'
        }
        ), 2e3)) : alert("Por favor, preencha todos os campos obrigatórios.")
    }
    ));

    const x = document.querySelector(".inputs_pop");
    x.addEventListener("submit", (function(e) {
        if (e.preventDefault(),
        x.checkValidity()) {
            setTimeout(() => {
                window.location.assign("https://wa.me/5587981025310?text=Ol%C3%A1%2C+gostaria+de+falar+com+um+especialista+cont%C3%A1bil.+");
            }, 1000);
        } else
            alert("Por favor, preencha todos os campos obrigatórios.")
    }
    ));
}
));
$(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (isMobileDevice() == false) {
        if (scroll < 20) {
            document.querySelector(".logo").style.width = '14.688vw';
            document.querySelector(".logo").style.height = '8.069vw';
        } else {
            document.querySelector(".logo").style.width = '9.992vw';
            document.querySelector(".logo").style.height = '5.49vw';
        }
    }
});
const services = document.querySelectorAll(".serv")
  , popop = document.createElement("div");
popop.classList.add("popop"),
services.forEach((e=>{
    e.addEventListener("mouseenter", (t=>{
        e.querySelector("i").style.fontSize = "2vw",
        e.querySelector("i").style.marginBottom = "1vw",
        e.querySelector("i").style.transition = "1s",
        e.querySelector("span").textContent = e.dataset.description
    }
    )),
    e.addEventListener("mouseleave", (t=>{
        e.querySelector("i").style.fontSize = "3vw",
        e.querySelector("i").style.transition = "1s",
        e.querySelector("i").style.marginBottom = "2vw",
        e.querySelector("span").textContent = e.dataset.orige
    }
    ))
}
));

//pop whatsApp

document.querySelector('.wapp').addEventListener('click', ()=>{
    document.querySelector('.pop').style.visibility = 'visible';
})
document.querySelector('.fa-times').addEventListener('click', ()=>{
    document.querySelector('.pop').style.visibility = 'hidden';
});
document.querySelector('.country-image').src = 'https://dk9suync0k2va.cloudfront.net/js/rd/stable/flags/4x3/br.svg';
document.getElementById('countrySelect').addEventListener('change', function() {
    var selectElement = document.getElementById("countrySelect");
    var selectedOption = selectElement.options[selectElement.selectedIndex];

    var codigoDiscagem = selectedOption.dataset.code;

    if (codigoDiscagem) {
        document.querySelector('.code').textContent = codigoDiscagem;
        console.log("Código de discagem:", codigoDiscagem);
    } else {
        console.log("Código de discagem não encontrado.");
    }
    document.querySelector('.country-image').src = 'https://dk9suync0k2va.cloudfront.net/js/rd/stable/flags/4x3/'+this.value+'.svg'
});
