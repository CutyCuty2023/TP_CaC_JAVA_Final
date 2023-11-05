const ticketPrice = 200;
const discountOption = new Map();
discountOption.set('student', 0.8);
discountOption.set('trainee', 0.5);
discountOption.set('junior', 0.15);

const qtyElement = document.getElementById('qty');
const categoryElement = document.getElementById('category');
const priceElement = document.getElementById('price');
const buyTicketsFormElement = document.getElementById('form-buy-tickets');

buyTicketsFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!buyTicketsFormElement.checkValidity()) {
        event.stopPropagation();
        buyTicketsFormElement.classList.add('was-validated');
    } else if (discountOption.has(categoryElement.value)) {
        const priceWithDiscount = ticketPrice * (1 - discountOption.get(categoryElement.value));
        priceElement.value = "Total a Pagar: $ " + (qtyElement.value * priceWithDiscount);
    }
});

buyTicketsFormElement.addEventListener('reset', () => {
    buyTicketsFormElement.classList.remove('was-validated');
});

const alertPlaceholder = document.getElementById('alert');
const contactFormElement = document.getElementById('form-contact');

contactFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (alertPlaceholder.childElementCount < 1) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <div class="alert alert-warning d-flex align-items-center" role="alert">
                <div class="w-auto h-auto me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                        <!-- Contenido del icono -->
                    </svg>
                </div>
                <div>
                    Por el momento no aceptamos más oradores. Disculpe la molestia. Gracias.
                </div>
            </div>
        `;
        alertPlaceholder.append(wrapper);
    }
});
