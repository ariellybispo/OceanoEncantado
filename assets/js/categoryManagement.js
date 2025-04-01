document.addEventListener("DOMContentLoaded", function () {
    const categoryList = document.querySelectorAll(".categorym_list");

    let draggedItem = null;

    categoryList.forEach((item) => {
        item.addEventListener("dragstart", (event) => {
            draggedItem = item; 
            event.target.style.opacity = "0.5"; 
            
           
            const categoryName = item.querySelector("span").innerText;
            event.dataTransfer.setData("text/plain", categoryName);
        
            
            const dragGhost = document.createElement("div");
            dragGhost.textContent = categoryName;
            dragGhost.style.position = "absolute";
            dragGhost.style.padding = "5px 10px";
            dragGhost.style.background = "#fff";
            dragGhost.style.border = "1px solid #ccc";
            dragGhost.style.boxShadow = "2px 2px 5px rgba(0,0,0,0.2)";
            dragGhost.style.fontSize = "14px";
            dragGhost.style.pointerEvents = "none";
        
            document.body.appendChild(dragGhost);
            event.dataTransfer.setDragImage(dragGhost, 10, 10);
        
            setTimeout(() => document.body.removeChild(dragGhost), 0); 
        });
        

        item.addEventListener("dragend", (event) => {
            event.target.style.opacity = "0.4"; 
            draggedItem = null;
        });


        item.addEventListener("dragover", (event) => {
            event.preventDefault(); // Permite o drop
        });

        item.addEventListener("drop", (event) => {
            event.preventDefault();
            if (draggedItem && draggedItem !== item) {
                const parent = item.parentNode;
                const items = [...parent.children];
                const draggedIndex = items.indexOf(draggedItem);
                const targetIndex = items.indexOf(item);

                // Reordenando os elementos
                if (draggedIndex < targetIndex) {
                    parent.insertBefore(draggedItem, item.nextSibling);
                } else {
                    parent.insertBefore(draggedItem, item);
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sidebarLinks = document.querySelectorAll(".sidebar a");

    // Verifica a URL salva no localStorage e aplica a classe active
    const currentPage = localStorage.getItem("activePage");
    if (currentPage) {
        const activeLink = document.querySelector(`.sidebar a[href='${currentPage}']`);
        if (activeLink) {
            activeLink.classList.add("active");

            // Ativa o submenu se for um item dentro de um submenu
            const parentSubmenu = activeLink.closest(".submenu_Products");
            if (parentSubmenu) {
                parentSubmenu.classList.add("active");
            }
        }
    }

    sidebarLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove a classe active de todos os links
            sidebarLinks.forEach((l) => l.classList.remove("active"));

            // Remove a classe active de todos os submenus
            document.querySelectorAll(".submenu_Products").forEach((submenu) => {
                submenu.classList.remove("active");
            });

            // Adiciona a classe active ao link clicado
            this.classList.add("active");

            // Ativa o submenu pai, se for o caso
            const parentSubmenu = this.closest(".submenu_Products");
            if (parentSubmenu) {
                parentSubmenu.classList.add("active");
            }

            // Salva a página ativa no localStorage
            localStorage.setItem("activePage", this.getAttribute("href"));

            // Redireciona para a página
            window.location.href = this.href;
        });
    });
});