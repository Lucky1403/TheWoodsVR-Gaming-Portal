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
        // set iframe src (use itch.io page url; itch.io page should present playable embed)
        iframe.src = url;
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        // ensure external link points to the same url
        if (openExternal) openExternal.href = url;
    }

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        // remove iframe src to stop any media
        iframe.src = '';
        document.body.style.overflow = '';
    }

    if (playBtn) {
        playBtn.addEventListener('click', function (e) {
            // Prefer opening in modal; prevent default navigation
            e.preventDefault();
            const url = this.dataset.embed || this.href;
            // open modal
            openModal(url);
        });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // close when clicking outside content
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') {
            closeModal();
        }
    });

    // fallback: if embed blocked, user can click external link in fallback manually.
})();