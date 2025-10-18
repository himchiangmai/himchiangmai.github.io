// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuClose = document.getElementById('menuClose');
    const overlay = document.getElementById('overlay');
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');
    const navTabs = document.querySelectorAll('.nav-tab');

    // Open mobile menu
    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close mobile menu
    function closeMenu() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    menuClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Menu item click handling
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');

            if (tabId) {
                // Update active menu item
                menuItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');

                // Show active section
                sections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === tabId) {
                        section.classList.add('active');
                    }
                });
            }

            closeMenu();
        });
    });

    // Desktop navigation (if visible)
    if (navTabs.length > 0) {
        navTabs.forEach(tab => {
            tab.addEventListener('click', function () {
                const tabId = this.getAttribute('data-tab');

                // Update active tab
                navTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                // Show active section
                sections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === tabId) {
                        section.classList.add('active');
                    }
                });
            });
        });
    }

    function login(link, x) {
        const password = prompt("Enter password:");
        if (password === x) {
            localStorage.setItem("username", x);
            window.location.href = link.dataset.src;
        } else {
            alert("Invalid password");
        }
    }

});
