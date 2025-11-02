/**
 * Módulo FormValidator
 * Responsável pela validação robusta de formulários com feedback ao usuário
 */

const FormValidator = (() => {
    // Regras de validação
    const rules = {
        nome: {
            required: true,
            minLength: 3,
            maxLength: 100,
            pattern: /^[a-zA-ZÀ-ÿ\s]+$/,
            messages: {
                required: 'Nome é obrigatório',
                minLength: 'Nome deve ter no mínimo 3 caracteres',
                maxLength: 'Nome deve ter no máximo 100 caracteres',
                pattern: 'Nome deve conter apenas letras'
            }
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            messages: {
                required: 'E-mail é obrigatório',
                pattern: 'E-mail inválido'
            }
        },
        cpf: {
            required: true,
            pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
            custom: validateCPF,
            messages: {
                required: 'CPF é obrigatório',
                pattern: 'CPF deve estar no formato 000.000.000-00',
                custom: 'CPF inválido'
            }
        },
        telefone: {
            required: true,
            pattern: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
            messages: {
                required: 'Telefone é obrigatório',
                pattern: 'Telefone deve estar no formato (11) 99999-9999'
            }
        },
        dataNascimento: {
            required: true,
            custom: validateAge,
            messages: {
                required: 'Data de nascimento é obrigatória',
                custom: 'Você deve ter no mínimo 18 anos'
            }
        },
        endereco: {
            required: true,
            minLength: 5,
            messages: {
                required: 'Endereço é obrigatório',
                minLength: 'Endereço deve ter no mínimo 5 caracteres'
            }
        },
        cep: {
            required: true,
            pattern: /^\d{5}-\d{3}$/,
            messages: {
                required: 'CEP é obrigatório',
                pattern: 'CEP deve estar no formato 00000-000'
            }
        },
        cidade: {
            required: true,
            minLength: 2,
            messages: {
                required: 'Cidade é obrigatória',
                minLength: 'Cidade deve ter no mínimo 2 caracteres'
            }
        },
        estado: {
            required: true,
            messages: {
                required: 'Estado é obrigatório'
            }
        }
    };

    // Funções de validação customizadas
    function validateCPF(value) {
        // Remove formatação
        const cpf = value.replace(/\D/g, '');
        
        // Verifica se tem 11 dígitos
        if (cpf.length !== 11) return false;
        
        // Verifica se todos os dígitos são iguais
        if (/^(\d)\1{10}$/.test(cpf)) return false;
        
        // Calcula primeiro dígito verificador
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf[i]) * (10 - i);
        }
        let remainder = sum % 11;
        let digit1 = remainder < 2 ? 0 : 11 - remainder;
        
        // Calcula segundo dígito verificador
        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf[i]) * (11 - i);
        }
        remainder = sum % 11;
        let digit2 = remainder < 2 ? 0 : 11 - remainder;
        
        return cpf[9] == digit1 && cpf[10] == digit2;
    }

    function validateAge(value) {
        const birthDate = new Date(value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age >= 18;
    }

    // Aplicar máscaras de input
    function applyMasks() {
        const cpfInput = document.getElementById('cpf');
        const telefoneInput = document.getElementById('telefone');
        const cepInput = document.getElementById('cep');

        if (cpfInput) {
            cpfInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 11) value = value.slice(0, 11);
                if (value.length > 6) {
                    value = value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6, 9) + '-' + value.slice(9);
                } else if (value.length > 3) {
                    value = value.slice(0, 3) + '.' + value.slice(3, 6) + (value.length > 6 ? '.' + value.slice(6) : '');
                } else if (value.length > 0) {
                    value = value.slice(0, 3);
                }
                e.target.value = value;
            });
        }

        if (telefoneInput) {
            telefoneInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 11) value = value.slice(0, 11);
                if (value.length > 7) {
                    value = '(' + value.slice(0, 2) + ') ' + value.slice(2, 7) + '-' + value.slice(7);
                } else if (value.length > 2) {
                    value = '(' + value.slice(0, 2) + ') ' + value.slice(2);
                } else if (value.length > 0) {
                    value = '(' + value;
                }
                e.target.value = value;
            });
        }

        if (cepInput) {
            cepInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 8) value = value.slice(0, 8);
                if (value.length > 5) {
                    value = value.slice(0, 5) + '-' + value.slice(5);
                }
                e.target.value = value;
            });
        }
    }

    // Validar campo individual
    function validateField(fieldName, value) {
        const rule = rules[fieldName];
        if (!rule) return { valid: true };

        // Validação obrigatória
        if (rule.required && !value.trim()) {
            return { valid: false, message: rule.messages.required };
        }

        // Se não é obrigatório e está vazio, é válido
        if (!rule.required && !value.trim()) {
            return { valid: true };
        }

        // Validação de comprimento mínimo
        if (rule.minLength && value.length < rule.minLength) {
            return { valid: false, message: rule.messages.minLength };
        }

        // Validação de comprimento máximo
        if (rule.maxLength && value.length > rule.maxLength) {
            return { valid: false, message: rule.messages.maxLength };
        }

        // Validação de padrão (regex)
        if (rule.pattern && !rule.pattern.test(value)) {
            return { valid: false, message: rule.messages.pattern };
        }

        // Validação customizada
        if (rule.custom && !rule.custom(value)) {
            return { valid: false, message: rule.messages.custom };
        }

        return { valid: true };
    }

    // Exibir erro no campo
    function showFieldError(fieldName, message) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(`erro-${fieldName}`);

        if (field) {
            field.classList.add('is-invalid');
            field.classList.remove('is-valid');
        }

        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    // Limpar erro do campo
    function clearFieldError(fieldName) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(`erro-${fieldName}`);

        if (field) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        }

        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
    }

    // Métodos públicos
    return {
        init: () => {
            const form = document.getElementById('formCadastro');
            if (!form) return;

            // Aplicar máscaras
            applyMasks();

            // Validação em tempo real
            Object.keys(rules).forEach(fieldName => {
                const field = document.getElementById(fieldName);
                if (field) {
                    field.addEventListener('blur', () => {
                        const result = validateField(fieldName, field.value);
                        if (result.valid) {
                            clearFieldError(fieldName);
                        } else {
                            showFieldError(fieldName, result.message);
                        }
                    });

                    field.addEventListener('input', () => {
                        const result = validateField(fieldName, field.value);
                        if (result.valid) {
                            clearFieldError(fieldName);
                        }
                    });
                }
            });

            // Submissão do formulário
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                FormValidator.validateForm();
            });
        },

        validateForm: () => {
            const form = document.getElementById('formCadastro');
            if (!form) return false;

            let isValid = true;
            const formData = new FormData(form);

            // Validar cada campo
            for (let [fieldName, value] of formData) {
                if (rules[fieldName]) {
                    const result = validateField(fieldName, value);
                    if (!result.valid) {
                        showFieldError(fieldName, result.message);
                        isValid = false;
                    } else {
                        clearFieldError(fieldName);
                    }
                }
            }

            // Validar se ao menos um tipo de participação foi selecionado
            const voluntario = document.getElementById('voluntario').checked;
            const doador = document.getElementById('doador').checked;

            if (!voluntario && !doador) {
                alert('Por favor, selecione pelo menos um tipo de participação (Voluntário ou Doador)');
                isValid = false;
            }

            // Exibir mensagem de sucesso ou erro
            const alertaSucesso = document.getElementById('alertaSucesso');
            const alertaErro = document.getElementById('alertaErro');

            if (isValid) {
                alertaSucesso.style.display = 'block';
                alertaErro.style.display = 'none';
                
                // Salvar dados no localStorage
                const dados = Object.fromEntries(formData);
                localStorage.setItem('cadastroONG', JSON.stringify(dados));
                
                // Limpar formulário após 2 segundos
                setTimeout(() => {
                    form.reset();
                    alertaSucesso.style.display = 'none';
                }, 2000);
            } else {
                alertaSucesso.style.display = 'none';
                alertaErro.style.display = 'block';
            }

            return isValid;
        },

        validateField: validateField
    };
})();

