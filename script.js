document.addEventListener("DOMContentLoaded", function() {
    const flags = document.querySelectorAll('.flag');
    
    flags.forEach(flag => {
        flag.addEventListener('click', () => {
            const lang = flag.id;
            changeLanguage(lang);
        });
    });

    function changeLanguage(lang) {
        document.querySelectorAll('[data-en]').forEach(element => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });
    }
});
const body = document.body;
    const switch_mode = document.querySelector('#switch-mode i');

    // Load chế độ từ localStorage
    let mode = localStorage.getItem('darkmode');
    if (mode == 'true') {
        body.classList.add('dark');
        switch_mode.className = "bi bi-brightness-high-fill";
    }

    // Sự kiện khi người dùng nhấn nút chuyển đổi
    switch_mode.addEventListener('click', () => {
        switch_mode.classList.toggle('bi-moon-stars-fill');
        switch_mode.classList.toggle('bi-brightness-high-fill');
        let mode = body.classList.toggle('dark');
        
        // Lưu chế độ vào localStorage
        localStorage.setItem('darkmode', mode);
    });