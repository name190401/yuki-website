// ハンバーガーメニューの開閉
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

function toggleMenu() {
    mobileNav.classList.toggle('active');
    // アイコンのアニメーション用（簡易）
    if (mobileNav.classList.contains('active')) {
        hamburger.children[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        hamburger.children[1].style.opacity = "0";
        hamburger.children[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
        hamburger.children[0].style.transform = "none";
        hamburger.children[1].style.opacity = "1";
        hamburger.children[2].style.transform = "none";
    }
}

hamburger.addEventListener('click', toggleMenu);

// スクロール時のフェードインアニメーション
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// ===============================
// タイピングアニメーション
// ===============================
const heroTitle = document.getElementById('hero-title');
if (heroTitle) {
    const text = 'ゆきの部屋';
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 200);
        }
    }

    // ローディング後にタイピング開始
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 2000);
    });
}

// ===============================
// 桜の花びらエフェクト（控えめ版）
// ===============================
function createSakuraPetal() {
    const petal = document.createElement('div');
    petal.className = 'sakura-petal';

    // 繊細な花びらのSVG
    const hue = Math.random() * 20 - 10;
    const opacity = 0.4 + Math.random() * 0.2; // より控えめな透明度

    petal.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24">
            <defs>
                <radialGradient id="petalGrad${Date.now()}" cx="30%" cy="30%">
                    <stop offset="0%" style="stop-color:rgba(255,235,238,${opacity})"/>
                    <stop offset="50%" style="stop-color:rgba(212,175,185,${opacity * 0.8})"/>
                    <stop offset="100%" style="stop-color:rgba(183,141,149,${opacity * 0.6})"/>
                </radialGradient>
            </defs>
            <ellipse cx="12" cy="12" rx="10" ry="6"
                fill="url(#petalGrad${Date.now()})"
                transform="rotate(${45 + hue} 12 12)"/>
            <ellipse cx="14" cy="10" rx="3" ry="1.5"
                fill="rgba(255,255,255,0.3)"
                transform="rotate(${45 + hue} 12 12)"/>
        </svg>
    `;

    // ランダムな開始位置とサイズ
    const startX = Math.random() * window.innerWidth;
    const size = Math.random() * 10 + 12; // 少し小さめ
    const duration = Math.random() * 8 + 10; // よりゆっくり

    petal.style.left = startX + 'px';
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    petal.style.animationDuration = duration + 's';

    document.body.appendChild(petal);

    petal.addEventListener('animationend', () => {
        petal.remove();
    });
}

// 桜を控えめに生成（PC: 3000ms、スマホ: 5000ms）
const sakuraInterval = window.innerWidth > 768 ? 3000 : 5000;
setInterval(createSakuraPetal, sakuraInterval);

// 初期花びらを1枚だけ生成
setTimeout(createSakuraPetal, 1000);

// ===============================
// リップルクリックエフェクト
// ===============================
function createRipple(event) {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();

    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';

    element.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}

// リップル対象の要素にイベントを追加
document.querySelectorAll('.contact-btn, .service-btn, .pc-nav li a, .mobile-nav a').forEach(el => {
    el.addEventListener('click', createRipple);
});

// ===============================
// Lenis スムーススクロール
// ===============================
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ===============================
// オープニングローディング
// ===============================
window.addEventListener('load', () => {
    const curtain = document.getElementById('loading-curtain');

    // 少し待ってから幕を上げる（ロゴを見せる時間）
    setTimeout(() => {
        curtain.classList.add('loaded');
        // 幕が上がった後にDOMからも完全に見えなくする
        setTimeout(() => {
            curtain.style.display = 'none';
        }, 1200);
    }, 1500);
});
