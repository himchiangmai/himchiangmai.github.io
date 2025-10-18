// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');
    const navTabs = document.querySelectorAll('.nav-menu-tab');

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


});

function checkUser(x) {
    if (localStorage.getItem("username") !== x) {
      alert("Access is denied.");
      window.location.href = "/"; // or whatever your login page is
    }
}
