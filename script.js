document.addEventListener('DOMContentLoaded', () => {
    // 1. Animação suave da barra de progresso
    const progressBar = document.getElementById('progressBar');
    
    // O setTimeout cria um leve atraso para a animação acontecer assim que a página renderizar
    setTimeout(() => {
        progressBar.style.width = '72%';
    }, 400);

    // 2. Interatividade do formulário
    const form = document.getElementById('notifyForm');
    const emailInput = document.getElementById('emailInput');
    const submitBtn = document.getElementById('notifyBtn');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita recarregar a página

        if (emailInput.value.trim() !== '') {
            // Efeito visual de carregamento
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = 'Adicionando...';
            submitBtn.style.opacity = '0.8';
            submitBtn.disabled = true;
            emailInput.disabled = true;

            // Simula o tempo de salvar no banco de dados
            setTimeout(() => {
                submitBtn.innerHTML = '✓ Na Lista VIP!';
                submitBtn.style.background = 'linear-gradient(135deg, #16a34a, #15803d)'; // Fica verde
                submitBtn.style.opacity = '1';
                
                // Retorna ao estado normal após 3 segundos
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    emailInput.disabled = false;
                    emailInput.value = ''; // Limpa o campo
                }, 3000);
                
            }, 1500);
        }
    });
});