document.addEventListener('DOMContentLoaded', () => {
    const services = [
        { id: 1, name: 'Servicio 1', category: 'categoria1', zone: 'zona1', description: 'Descripción breve del servicio 1' },
        { id: 2, name: 'Servicio 2', category: 'categoria2', zone: 'zona2', description: 'Descripción breve del servicio 2' },
        // Agrega más servicios según sea necesario
    ];

    const filterForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchText = document.getElementById('search-text');
    const servicesGrid = document.querySelector('.services-grid');

    function filterServices() {
        const filters = {
            category: Array.from(document.querySelectorAll('.category-filters input:checked')).map(input => input.value),
            zone: Array.from(document.querySelectorAll('.zone-filters input:checked')).map(input => input.value),
            text: searchText.value.toLowerCase()
        };

        servicesGrid.innerHTML = '';

        services.forEach(service => {
            if (
                (filters.category.length === 0 || filters.category.includes(service.category)) &&
                (filters.zone.length === 0 || filters.zone.includes(service.zone)) &&
                (filters.text === '' || service.name.toLowerCase().includes(filters.text))
            ) {
                const card = document.createElement('div');
                card.classList.add('service-card');
                card.innerHTML = `
                    <h3>${service.name}</h3>
                    <p>${service.description}</p>
                `;
                servicesGrid.appendChild(card);
            }
        });
    }

    filterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        filterServices();
    });

    searchInput.addEventListener('input', filterServices);
    searchText.addEventListener('input', filterServices);
});
