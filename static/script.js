document.addEventListener('DOMContentLoaded', (event) => {
    console.log('JavaScript loaded');
});
// 페이지 간 이동 전 애니메이션 효과
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');
            // 페이드 아웃 효과 적용
            document.body.style.transition = 'opacity 0.5s';
            document.body.style.opacity = '0';

            setTimeout(() => {
                window.location.href = href;
            }, 500); // 페이드아웃 후 페이지 전환
        });
    });
});
