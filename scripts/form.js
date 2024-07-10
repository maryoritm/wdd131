document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById('year');
    const currentDateTimeSpan = document.getElementById('current-datetime');
    const lastModifiedSpan = document.getElementById('last-modified');
    const productSelect = document.getElementById('product');
  
    // Set the year in the footer
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  
    // Get current date and time
    const now = new Date();
    const formattedDateTime = now.toLocaleString(); // Adjust formatting as needed
  
    // Display current date and time in the footer
    currentDateTimeSpan.textContent = formattedDateTime;
  
    // Set the last modified date in the footer
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedSpan.textContent = lastModifiedDate.toLocaleDateString();
  
    const products = [
      { id: 'fc-1888', name: "flux capacitor", avgRating: 4.5 },
      { id: 'fc-2050', name: "power laces", avgRating: 4.7 },
      { id: 'fs-1987', name: "time circuits", avgRating: 3.5 },
      { id: 'ac-2000', name: "low voltage reactor", avgRating: 3.9 },
      { id: 'jj-1969', name: "warp equalizer", avgRating: 5.0 }
    ];
  
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  });
  