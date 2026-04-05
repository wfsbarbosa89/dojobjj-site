document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progressBar');
    
    // Anima a barra para a posição de 72% após o carregamento da página
    setTimeout(() => {
        progressBar.style.width = '72%';
    }, 300);

    // Comportamento do botão de aviso
    const notifyBtn = document.getElementById('notifyBtn');
    
    notifyBtn.addEventListener('click', () => {
        const emailInput = document.getElementById('emailInput');
        
        // Validação simples do e-mail
        if (emailInput.value && emailInput.checkValidity()) {
            alert(`Oss! Avisaremos você no e-mail: ${emailInput.value}`);
            emailInput.value = ''; // Limpa o campo após o envio
        } else {
            alert('Por favor, insira um e-mail válido.');
        }
    });
});