
if (document.getElementById("particles-1")) particlesJS("particles-1", {
    "particles": {
        "number": {
            "value": 40,
            "density": {
                "enable": !0,
                "value_area": 4000
            }
        },
        "color": {
            "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 6
            },
            "image": {
                "src": "assets/images/logot_opacity_10.webp",
                "width": 100,
                "height": 100

            }
        },
        "opacity": {
            "value": 0.15,
            "random": !0,
            "anim": {
                "enable": !0,
                "speed": 0.2,
                "opacity_min": 0.15,
                "sync": !1
            }
        },
        "size": {
            "value": 50,
            "random": !0,
            "anim": {
                "enable": !0,
                "speed": 2,
                "size_min": 5,
                "sync": !1
            }
        },
        "line_linked": {
            "enable": !1,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": !0,
            "speed": 1,
            "direction": "top",
            "random": !0,
            "straight": !1,
            "out_mode": "out",
            "bounce": !1,
            "attract": {
                "enable": !1,
                "rotateX": 0,
                "rotateY": 0
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": !1,
                "mode": "bubble"
            },
            "onclick": {
                "enable": !1,
                "mode": "repulse"
            },
            "resize": !0
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1,
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": !0
});

const carouselItems = document.querySelector('.carousel-items');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        carouselItems.style.transform = `translateX(-${currentIndex * 100 / 1.5}%)`;
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < 3) {
        currentIndex++;
        carouselItems.style.transform = `translateX(-${currentIndex * 100 / 1.5}%)`;
    }
});


function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    console.log('Olá dispositivo móvel.');
} else {
    VanillaTilt.init(document.querySelectorAll(".ng"), {
        speed: 200,
        glare: true
    });

    //It also supports NodeList
    VanillaTilt.init(document.querySelectorAll(".ng"));
}


//Acordeam
document.addEventListener("DOMContentLoaded", function () {
    var accordionItems = document.getElementsByClassName("accordion-item");

    for (var i = 0; i < accordionItems.length; i++) {
        var accordionHeader = accordionItems[i].querySelector(".accordion-header");
        accordionHeader.addEventListener("click", toggleAccordion);
    }

    function toggleAccordion(event) {
        var accordionItem = this.parentNode;
        accordionItem.classList.toggle("expanded");
        if (this.parentNode.querySelector('.accordion-icon').style.webkitTransform == 'rotate(180deg)') {
            this.parentNode.querySelector('.accordion-icon').style.transform = 'rotate(0deg)';
        } else {
            this.parentNode.querySelector('.accordion-icon').style.transform = 'rotate(180deg)';
        }
    }

    //mascara
    const telefoneInput = document.getElementById("telefone");

    telefoneInput.addEventListener("input", function () {
        const value = this.value.replace(/\D/g, ""); // Remove todos os caracteres que não são dígitos
        const formattedValue = formatTelefone(value);
        this.value = formattedValue;
    });

    function formatTelefone(value) {
        // Verifica o tamanho do número para aplicar a máscara correta
        if (value.length <= 10) {
            return value.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
        } else {
            return value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
        }
    }


    //redi
    const formulario = document.querySelector(".inputs");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que o formulário seja enviado normalmente
        // Verifica se os campos obrigatórios estão preenchidos
        if (formulario.checkValidity()) {
            // Aqui você pode adicionar a lógica para processar os dados do formulário, se necessário

            // Redireciona para a página desejada após o envio do formulário
            const novaJanela = window.open(window.origin + '/trocadecontador/thank.html', '_blank');

            // Verifica se a nova janela foi aberta com sucesso
            if (novaJanela) {
                document.querySelector('.inputs').innerHTML = '<span style="color: green;text-align: center;">Recebemos o seu Formulário.</span>';
            } else {
            console.log("Erro ao enviar o formulário.");
            }
        } else {
            // Se os campos obrigatórios não estiverem preenchidos, exibe uma mensagem de erro
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    });
});



function scrollToDiv(divId) {
    const element = document.getElementById(divId);
    if (element) {
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 2000 });
        }, 100);
    }
}


//===== Section Menu Active
var scrollLink = $('.page-scroll');
// Active link switching
$(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

        var sectionOffset = $(this.hash).offset().top - 73;
        if (sectionOffset <= scrollbarLocation) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
    });
});


const services = document.querySelectorAll('.serv');
const popop = document.createElement('div');
popop.classList.add('popop');
services.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        element.querySelector('i').style.fontSize = '2vw';
        element.querySelector('i').style.marginBottom = '1vw';
        element.querySelector('i').style.transition = '1s';
        element.querySelector('span').textContent = element.dataset.description;
    });

    element.addEventListener('mouseleave', (e) => {
        element.querySelector('i').style.fontSize = '3vw';
        element.querySelector('i').style.transition = '1s';
        element.querySelector('i').style.marginBottom = '2vw';
        element.querySelector('span').textContent = element.dataset.orige;
    });
});
