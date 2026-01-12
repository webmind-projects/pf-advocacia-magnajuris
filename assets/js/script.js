/**
 * Backend Connector Logic
 * Service: EmailJS (Mocked for demonstration as per prompt instructions to generate script)
 */

// Configuration (Replace with actual keys in production)
const EMAILJS_SERVICE_ID = 'service_mock_id';
const EMAILJS_TEMPLATE_ID = 'template_mock_id';
const EMAILJS_PUBLIC_KEY = 'user_mock_key';

// Initialize EmailJS (Mock)
// emailjs.init(EMAILJS_PUBLIC_KEY); 

document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if(mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Form Handling
    const contactForm = document.getElementById('contact-form');
    const feedbackDiv = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Validation: Phone 11 digits
            const phoneClean = data.phone.replace(/\D/g, ''); // Remove non-digits
            
            if (phoneClean.length < 10 || phoneClean.length > 11) {
                showFeedback('Por favor, insira um telefone válido com DDD (10 ou 11 dígitos).', 'error');
                return;
            }

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Enviando...';
            submitBtn.disabled = true;

            try {
                // Simulate API Call (Replace with actual EmailJS call)
                // await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data);
                
                // Simulating network delay
                await new Promise(resolve => setTimeout(resolve, 1500));

                showFeedback('Solicitação enviada com sucesso! Entraremos em contato em breve.', 'success');
                contactForm.reset();

            } catch (error) {
                console.error('Erro ao enviar:', error);
                showFeedback('Ocorreu um erro ao enviar. Tente novamente mais tarde.', 'error');
            } finally {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

    function showFeedback(message, type) {
        feedbackDiv.innerText = message;
        feedbackDiv.classList.remove('hidden', 'text-green-600', 'text-red-600');
        
        if (type === 'success') {
            feedbackDiv.classList.add('text-green-600');
        } else {
            feedbackDiv.classList.add('text-red-600');
        }
        
        feedbackDiv.classList.remove('hidden');
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            feedbackDiv.classList.add('hidden');
        }, 5000);
    }
});
