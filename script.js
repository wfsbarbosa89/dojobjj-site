document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('notify-form');
    const emailInput = document.getElementById('email');
    const successMessage = document.getElementById('success-message');
    const submitButton = form.querySelector('button');

    form.addEventListener('submit', (e) => {
        // Evita que a página recarregue
        e.preventDefault();

        if (emailInput.value) {
            // Animação de "Enviando"
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            emailInput.disabled = true;

            // Simula um tempo de carregamento de API (1.5 segundos)
            setTimeout(() => {
                // Esconde o formulário e mostra a mensagem de sucesso
                form.style.display = 'none';
                successMessage.classList.remove('hidden');
            }, 1500);
        }
    });
});