document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const menuItems = document.querySelectorAll('#menu li a');

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Paris France",
            location: "Paris, France",
            dedicated: "2017, May, 21",
            area: 44000,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/320%2C/0/default"
        },
        {
            templeName: "Arequipa Peru",
            location: "Arequipa, Peru",
            dedicated: "2019, December, 15",
            area: 10800,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/55f6c59ce8f9c093a9c689067f8674335de544e2/full/320%2C/0/default"
        },
        {
            templeName: "Tokyo Japan",
            location: "Tokyo, Japan",
            dedicated: "1980, October, 27",
            area: 52432,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/df6b96801c9f11ec99eeeeeeac1ea2207e7c517b/full/250%2C/0/default"
        },
        {
            templeName: "Madrid Spain",
            location: "Madrid, Spain",
            dedicated: "2000, August, 20",
            area: 88217,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/93fe327ea5a8f82b20a48e283e51dc32f57ba148/full/320%2C/0/default"
        },
        {
            templeName: "Kyiv Ukraine",
            location: "Kyiv, Ukraine",
            dedicated: "1999, September, 10",
            area: 39900,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/d0508e0ecf1c6d995baee78f23989e4871b613e6/full/320%2C/0/default"
        }
    ];

    function createTempleCard(temple) {
        const figure = document.createElement('figure');

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;

        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `<strong>${temple.templeName}</strong><br>${temple.location}<br>Dedicated: ${temple.dedicated}<br>Area: ${temple.area} sq ft`;

        figure.appendChild(img);
        figure.appendChild(figcaption);

        return figure;
    }

    function displayTemples(filter) {
        gallery.innerHTML = '';

        const filteredTemples = temples.filter(temple => {
            if (filter === 'old') {
                return new Date(temple.dedicated).getFullYear() < 2000;
            } else if (filter === 'new') {
                return new Date(temple.dedicated).getFullYear() >= 2000;
            } else if (filter === 'large') {
                return temple.area >= 50000;
            } else if (filter === 'small') {
                return temple.area < 50000;
            }
            return true;
        });

        filteredTemples.forEach(temple => {
            const templeCard = createTempleCard(temple);
            gallery.appendChild(templeCard);
        });
    }

    function updateFooter() {
        const yearSpan = document.getElementById('year');
        yearSpan.textContent = new Date().getFullYear();

        const lastModifiedSpan = document.getElementById('last-modified');
        lastModifiedSpan.textContent = document.lastModified;
    }

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = menuItem.dataset.filter;
            displayTemples(filter);
        });
    });

    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('open');
    });

    displayTemples('all');
    updateFooter();
});
