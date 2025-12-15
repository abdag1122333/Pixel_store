// Translations
const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_features: "عن السيرفر",
        nav_store: "المتجر",
        nav_support: "الدعم",

        hero_subtitle: "أقوى سيرفر سرفايفل عربي",
        hero_title_1: "رحلتك تبدأ في",
        hero_title_span: "بكسل",
        hero_desc: "جهز نفسك لتجربة سرفايفل حقيقية. ابني بيتك، تاجر مع اللاعبين، وسيطر على السوق. السيرفر لسا في بدايته وبنطوره عشانكم.",
        btn_discord: "تعال الديسكورد",
        btn_ip: "الآي بي: قريباً",

        feat_title_1: "ليش تختار",
        feat_title_span: "بكسل؟",
        feat_desc: "بداية جديدة وسيرفر نظيف، بنضمن لك تجربة لعب ممتعة وعادلة.",

        feat_1_title: "تعبك محفوظ",
        feat_1_desc: "مفعلين نظام \"Keep Inventory\"، يعني لو متت أغراضك معك، وكليمات تحمي بيتك.",
        feat_2_title: "اقتصاد عادل",
        feat_2_desc: "ما في شي اسمه Pay to Win، الاقتصاد موزون والكل عنده فرصة يصير غني.",
        feat_3_title: "تطوير مستمر",
        feat_3_desc: "السيرفر تحت الإنشاء وبنسمع لاقتراحاتكم يومياً في الديسكورد.",

        store_title_1: "متجر",
        store_title_span: "السيرفر",
        store_desc: "المتجر قيد الافتتاح قريباً..",

        btn_buy: "شراء",
        footer_rights: "برمجة وتطوير: <span style='color: var(--primary);'>Abu Obaida (messi10best)</span> &copy; 2025"
    },
    en: {
        nav_home: "Home",
        nav_features: "About",
        nav_store: "Store",
        nav_support: "Support",

        hero_subtitle: "The Strongest Arab Survival Server",
        hero_title_1: "Your Journey Starts at",
        hero_title_span: "Pixel",
        hero_desc: "Get ready for a real survival experience. Build your home, trade with players, and dominate the market. The server is fresh and built for you.",
        btn_discord: "Join Discord",
        btn_ip: "IP: Coming Soon",

        feat_title_1: "Why",
        feat_title_span: "Pixel?",
        feat_desc: "A fresh start and a clean server, guaranteeing a fun and fair experience.",

        feat_1_title: "Your Effort is Safe",
        feat_1_desc: "\"Keep Inventory\" is on, so you don't lose items on death, plus land claims.",
        feat_2_title: "Fair Economy",
        feat_2_desc: "No Pay to Win here. The economy is balanced and everyone has a chance to be rich.",
        feat_3_title: "Constant Updates",
        feat_3_desc: "We are under construction and listening to your suggestions daily on Discord.",

        store_title_1: "Server",
        store_title_span: "Store",
        store_desc: "Store Opening Soon...",

        btn_buy: "Buy Now",
        footer_rights: "Developed by: <span style='color: var(--primary);'>Abu Obaida (messi10best)</span> &copy; 2025"
    }
};

// Language Handling
let currentLang = 'ar';
const langToggle = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update Dir and Lang attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update Toggle Button Content
    langText.textContent = lang === 'ar' ? 'EN' : 'عربي';

    // Flip features grid text alignment for LTR
    const features = document.querySelectorAll('.feature-card');
    features.forEach(card => {
        card.style.textAlign = lang === 'ar' ? 'right' : 'left';
    });
}

if (langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        updateContent(currentLang);
    });
}

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.insetInlineStart = '0'; // Logical
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(5, 5, 7, 0.95)';
        navLinks.style.padding = '20px';
        navLinks.style.backdropFilter = 'blur(15px)';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
    }
});

// Scroll Reveal
const revealElements = document.querySelectorAll('.feature-card, .section-header, .hero-content');
revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));
