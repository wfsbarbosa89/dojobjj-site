document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('waitlist-form');
    const emailInput = document.getElementById('email');
    const successMessage = document.getElementById('success-message');
    const submitButton = form.querySelector('button');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (emailInput.value.trim() !== '') {
            // Feedback de carregamento
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Adicionando...';
            submitButton.disabled = true;
            emailInput.disabled = true;

            // Simula um delay de requisição (1.5s)
            setTimeout(() => {
                form.style.display = 'none';
                successMessage.classList.remove('hidden');
                
                // Limpa o e-mail (caso a pessoa recarregue)
                emailInput.value = '';
            }, 1500);
        }
    });
});