document.getElementById("playGame").onclick = function () {
    window.location.href = "https://luckykumar.itch.io/the-woods-vr";
};

(function () {
    const playBtn = document.getElementById('playGame');
    const modal = document.getElementById('embedModal');
    const iframe = document.getElementById('embedIframe');
    const closeBtn = document.getElementById('embedClose');
    const openExternal = document.getElementById('openExternal');

    function openModal(url) {
        iframe.src = url;
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (openExternal) openExternal.href = url;
    }

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        iframe.src = '';
        document.body.style.overflow = '';
    }

    if (playBtn) {
        playBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const url = this.dataset.embed || this.href;
            openModal(url);
        });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') {
            closeModal();
        }
    });
    
})();
