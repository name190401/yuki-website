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
            // 一度表示したら監視を解除する場合
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// ===============================
// 桜の花びらエフェクト（上品版）
// ===============================
function createSakuraPetal() {
    const petal = document.createElement('div');
    petal.className = 'sakura-petal';

    // より繊細な花びらのSVG（グラデーション付き）
    const hue = Math.random() * 20 - 10; // 色相を少しずらす
    const opacity = 0.5 + Math.random() * 0.3;

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
                fill="rgba(255,255,255,0.4)"
                transform="rotate(${45 + hue} 12 12)"/>
        </svg>
    `;

    // ランダムな開始位置とサイズ
    const startX = Math.random() * window.innerWidth;
    const size = Math.random() * 12 + 14; // 14-26px
    const duration = Math.random() * 6 + 8; // 8-14秒（ゆっくり）

    petal.style.left = startX + 'px';
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    petal.style.animationDuration = duration + 's';

    document.body.appendChild(petal);

    petal.addEventListener('animationend', () => {
        petal.remove();
    });
}

// キラキラパーティクル生成
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight * 0.7;
    const size = Math.random() * 4 + 2;

    sparkle.style.left = startX + 'px';
    sparkle.style.top = startY + 'px';
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';

    document.body.appendChild(sparkle);

    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

// 定期的に花びらを生成（PC: 1200ms、スマホ: 2000ms - より控えめに）
const sakuraInterval = window.innerWidth > 768 ? 1200 : 2000;
setInterval(createSakuraPetal, sakuraInterval);

// キラキラを時々生成（PC: 2000ms、スマホ: 3000ms）
const sparkleInterval = window.innerWidth > 768 ? 2000 : 3000;
setInterval(createSparkle, sparkleInterval);

// 初期花びらを数枚生成
for (let i = 0; i < 3; i++) {
    setTimeout(createSakuraPetal, i * 500);
}

// ===============================
// カーソルトレイルエフェクト（上品版）
// ===============================
let lastTrailTime = 0;
const trailThrottle = 40; // 40msごとに生成

// カーソルグロー要素を作成
let cursorGlow = null;
if (window.innerWidth > 768) {
    cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);
}

function createCursorTrail(x, y) {
    // スマホは無効
    if (window.innerWidth <= 768) return;

    const now = Date.now();
    if (now - lastTrailTime < trailThrottle) return;
    lastTrailTime = now;

    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = (x - 8) + 'px';
    trail.style.top = (y - 8) + 'px';

    document.body.appendChild(trail);

    trail.addEventListener('animationend', () => {
        trail.remove();
    });
}

document.addEventListener('mousemove', (e) => {
    createCursorTrail(e.clientX, e.clientY);

    // カーソルグローを追従
    if (cursorGlow) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    }
});

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
// Lenis スムーススクロール (Rich)
// ===============================
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false, // スマホではネイティブスクロールを優先したほうが自然な場合が多い
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ===============================
// オープニングローディング (Rich & Cute)
// ===============================
window.addEventListener('load', () => {
    const curtain = document.getElementById('loading-curtain');
    // 少し待ってから幕を上げる（ロゴを見せる時間）
    setTimeout(() => {
        curtain.classList.add('loaded');
        // 幕が上がった後にDOMからも完全に見えなくする（安全策）
        setTimeout(() => {
            curtain.style.display = 'none';
        }, 1200); // transition時間と合わせる
    }, 1500);
});

// ===============================
// パララックスエフェクト (無効化)
// ===============================
// ヒーローコンテンツは固定表示（パララックスなし）
