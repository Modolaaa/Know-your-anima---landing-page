const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_btn.next');
const prevButton = document.querySelector('.carousel_btn.prev');

let currentIndex = 0;

function updateCarousel(index) {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

nextButton.addEventListener('click', () => {
  let nextIndex = currentIndex + 1;
  if (nextIndex >= slides.length) nextIndex = 0; // vuelve al inicio
  updateCarousel(nextIndex);
});

prevButton.addEventListener('click', () => {
  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) prevIndex = slides.length - 1; // vuelve al final
  updateCarousel(prevIndex);
});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    // cerrar otros abiertos
    document.querySelectorAll(".faq-answer").forEach((faq) => {
      if (faq !== answer) faq.style.maxHeight = null;
    });

    // toggle actual
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});


const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


/* =========================================
   TRADUCCIÓN / LOCALIZATION
   ========================================= */

const translations = {
    es: {
        nav_home: "Inicio",
        nav_about_game: "Sobre el juego",
        nav_about_us: "Sobre nosotros",
        nav_gallery: "Galería",
        nav_faq: "FAQ",
        nav_contact: "Contacto",
        btn_lang: "🇬🇧 EN",
        
        hero_title: "¡Bienvenido a Know your Ánima!",
        hero_subtitle: "Descubre algo nuevo sobre ti mientras cuidas de tu jardín interior...",
        
        tag_spiritual: "Spiritual",
        tag_farming: "Farming Sim",
        tag_cozy: "Cozy",
        
        btn_trailer: "¡Ver el trailer ahora!",
        
        section_about_game_title: "Sobre el juego",
        section_about_game_desc: "Know Your Anima es una experiencia introspectiva y de simulación de granjas donde explorarás diferentes aspectos de tu personalidad mientras cuidas de tu propio jardín interior. Sumérgete en un mundo mágico lleno de maravillas, crecimiento personal y autodescubrimiento.",
        
        section_about_us_title: "Sobre Nosotros",
        section_about_us_desc: "Somos un pequeño equipo de tres soñadores que buscan darle vida a un proyecto de calidad nacido del amor por el arte y los videojuegos, con los recursos que tenemos al alcance. <br><br> Know Your Anima es el fruto de nuestra pasión compartida, de largas noches de creatividad y de la convicción de que incluso los proyectos más humildes pueden florecer cuando se hacen con el corazón. 🌱✨",
        
        role_programmer: "Programador",
        desc_programmer: "Jim es el encargado de dar vida a las mecánicas, la lógica y el mundo interactivo de Know Your Ánima.",
        role_artist: "Artista Digital",
        desc_artist: "Layla es la diseñadora de los escenarios, personajes y atmósferas mágicas que destacan a nuestro jardín interior.",
        role_composer: "Compositor",
        desc_composer: "Hikki es el creador de la banda sonora original, que acompaña la experiencia con melodías emotivas y mágicas.",
        
        section_gallery_title: "Galería",
        section_gallery_desc: "Un vistazo a lo que estamos creando. Próximamente podrás ver imágenes del juego acabado.",
        
        section_faq_title: "Preguntas Frecuentes",
        faq_q1: "¿En qué plataformas estará disponible?",
        faq_a1: "El juego se lanzará inicialmente en Steam (PC) y eventualmente llegará también a la Google Play Store.",
        faq_q2: "¿El juego tendrá varios idiomas?",
        faq_a2: "Sí, tras su lanzamiento estará disponible en español e inglés. Con el tiempo existe la posibilidad de ampliar esta cantidad inicial.",
        faq_q3: "¿Se podrá jugar en cooperativo o multijugador?",
        faq_a3: "La experiencia de Know Your Ánima es principalmente introspectiva, por lo que un modo multijugador va en contra del propósito principal del juego.",
        faq_q4: "¿Cuándo será lanzado?",
        faq_a4: "Por ahora no daremos una fecha confirmada, sin embargo todas las novedades sobre el juego se publican en redes sociales y nuestro servidor de Discord.",
        
        section_contact_title: "Contacto",
        section_contact_desc: "¡Síguenos en nuestras redes o forma parte de nuestro servidor de Discord para enterarte de las últimas novedades sobre Know Your Ánima!",
        
        footer_made_with: "Hecho con ❤️ por un pequeño equipo indie"
    },
    en: {
        nav_home: "Home",
        nav_about_game: "About the game",
        nav_about_us: "About us",
        nav_gallery: "Gallery",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        btn_lang: "🇪🇸 ES",
        
        hero_title: "Welcome to Know Your Anima!",
        hero_subtitle: "Discover something new about yourself while tending to your inner garden...",
        
        tag_spiritual: "Spiritual",
        tag_farming: "Farming Sim",
        tag_cozy: "Cozy",
        
        btn_trailer: "Watch trailer now!",
        
        section_about_game_title: "About the game",
        section_about_game_desc: "Know Your Anima is an introspective farming simulation experience where you will explore different aspects of your personality while taking care of your own inner garden. Immerse yourself in a magical world full of wonders, personal growth, and self-discovery.",
        
        section_about_us_title: "About Us",
        section_about_us_desc: "We are a small team of three dreamers looking to bring to life a quality project born from the love of art and video games, with the resources we have at hand. <br><br> Know Your Anima is the fruit of our shared passion, long nights of creativity, and the conviction that even the humblest projects can bloom when done with heart. 🌱✨",
        
        role_programmer: "Programmer",
        desc_programmer: "Jim is in charge of bringing life to the mechanics, logic, and interactive world of Know Your Anima.",
        role_artist: "Digital Artist",
        desc_artist: "Layla is the designer of the scenarios, characters, and magical atmospheres that distinguish our inner garden.",
        role_composer: "Composer",
        desc_composer: "Hikki is the creator of the original soundtrack, accompanying the experience with emotional and magical melodies.",
        
        section_gallery_title: "Gallery",
        section_gallery_desc: "A glimpse of what we are creating. Soon you will be able to see images of the finished game.",
        
        section_faq_title: "Frequently Asked Questions",
        faq_q1: "What platforms will it be available on?",
        faq_a1: "The game will initially launch on Steam (PC) and eventually come to the Google Play Store.",
        faq_q2: "Will the game support multiple languages?",
        faq_a2: "Yes, upon release it will be available in Spanish and English. Over time, there is a possibility of expanding this initial list.",
        faq_q3: "Will there be coop or multiplayer?",
        faq_a3: "The experience of Know Your Anima is mainly introspective, so a multiplayer mode goes against the main purpose of the game.",
        faq_q4: "When will it be released?",
        faq_a4: "For now, we are not giving a confirmed date; however, all news about the game is published on social media and our Discord server.",
        
        section_contact_title: "Contact",
        section_contact_desc: "Follow us on our socials or join our Discord server to find out the latest news about Know Your Anima!",
        
        footer_made_with: "Made with ❤️ by a small indie team"
    }
};

// Lógica para cambiar el idioma
const langToggleBtn = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('language') || 'es';

function updateContent(lang) {
    // Texto plano
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            // Si el elemento tiene HTML interno (como los <br>), usa innerHTML
            if (element.innerHTML.includes('<br>')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Guardar preferencia
    localStorage.setItem('language', lang);
    currentLang = lang;
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    updateContent(currentLang);
    
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            updateContent(newLang);
        });
    }
});