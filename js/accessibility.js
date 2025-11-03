/**
 * Módulo Accessibility
 * Responsável pela acessibilidade WCAG 2.1 AA
 * Inclui: navegação por teclado, modo escuro, alto contraste, suporte a leitores de tela
 */

const Accessibility = (() => {
    const state = {
        darkMode: localStorage.getItem('darkMode') === 'true',
        highContrast: localStorage.getItem('highContrast') === 'true',
        fontSize: localStorage.getItem('fontSize') || 'normal'
    };

    // Aplicar modo escuro
    const applyDarkMode = () => {
        const html = document.documentElement;
        if (state.darkMode) {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            html.removeAttribute('data-theme');
            localStorage.setItem('darkMode', 'false');
        }
    };

    // Aplicar alto contraste
    const applyHighContrast = () => {
        const html = document.documentElement;
        if (state.highContrast) {
            html.setAttribute('data-contrast', 'high');
            localStorage.setItem('highContrast', 'true');
        } else {
            html.removeAttribute('data-contrast');
            localStorage.setItem('highContrast', 'false');
        }
    };

    // Aplicar tamanho de fonte
    const applyFontSize = (size) => {
        const html = document.documentElement;
        html.setAttribute('data-font-size', size);
        localStorage.setItem('fontSize', size);
        state.fontSize = size;
    };

    // Criar painel de acessibilidade
    const createAccessibilityPanel = () => {
        const panel = document.createElement('div');
        panel.id = 'accessibility-panel';
        panel.setAttribute('role', 'region');
        panel.setAttribute('aria-label', 'Painel de Acessibilidade');
        panel.innerHTML = `
            <button id="accessibility-toggle" class="accessibility-toggle" aria-label="Abrir painel de acessibilidade" title="Acessibilidade">
                ♿
            </button>
            <div class="accessibility-menu" hidden>
                <h3>Opções de Acessibilidade</h3>
                
                <div class="accessibility-option">
                    <label for="dark-mode-toggle">
                        <input type="checkbox" id="dark-mode-toggle" aria-label="Ativar modo escuro">
                        Modo Escuro
                    </label>
                </div>

                <div class="accessibility-option">
                    <label for="high-contrast-toggle">
                        <input type="checkbox" id="high-contrast-toggle" aria-label="Ativar alto contraste">
                        Alto Contraste
                    </label>
                </div>

                <div class="accessibility-option">
                    <label for="font-size-select">Tamanho da Fonte:</label>
                    <select id="font-size-select" aria-label="Selecionar tamanho da fonte">
                        <option value="small">Pequeno</option>
                        <option value="normal" selected>Normal</option>
                        <option value="large">Grande</option>
                        <option value="xlarge">Muito Grande</option>
                    </select>
                </div>

                <button id="reset-accessibility" class="btn-reset" aria-label="Restaurar configurações padrão">
                    Restaurar Padrão
                </button>
            </div>
        `;
        document.body.appendChild(panel);
    };

    // Adicionar event listeners para acessibilidade
    const setupAccessibilityListeners = () => {
        const toggleBtn = document.getElementById('accessibility-toggle');
        const menu = document.querySelector('.accessibility-menu');
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const highContrastToggle = document.getElementById('high-contrast-toggle');
        const fontSizeSelect = document.getElementById('font-size-select');
        const resetBtn = document.getElementById('reset-accessibility');

        // Toggle do painel
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const isHidden = menu.hasAttribute('hidden');
                if (isHidden) {
                    menu.removeAttribute('hidden');
                    toggleBtn.setAttribute('aria-expanded', 'true');
                } else {
                    menu.setAttribute('hidden', '');
                    toggleBtn.setAttribute('aria-expanded', 'false');
                }
            });

            // Fechar painel ao clicar fora
            document.addEventListener('click', (e) => {
                if (!e.target.closest('#accessibility-panel')) {
                    menu.setAttribute('hidden', '');
                    toggleBtn.setAttribute('aria-expanded', 'false');
                }
            });
        }

        // Modo escuro
        if (darkModeToggle) {
            darkModeToggle.checked = state.darkMode;
            darkModeToggle.addEventListener('change', () => {
                state.darkMode = darkModeToggle.checked;
                applyDarkMode();
            });
        }

        // Alto contraste
        if (highContrastToggle) {
            highContrastToggle.checked = state.highContrast;
            highContrastToggle.addEventListener('change', () => {
                state.highContrast = highContrastToggle.checked;
                applyHighContrast();
            });
        }

        // Tamanho da fonte
        if (fontSizeSelect) {
            fontSizeSelect.value = state.fontSize;
            fontSizeSelect.addEventListener('change', (e) => {
                applyFontSize(e.target.value);
            });
        }

        // Restaurar padrão
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                state.darkMode = false;
                state.highContrast = false;
                state.fontSize = 'normal';
                applyDarkMode();
                applyHighContrast();
                applyFontSize('normal');
                if (darkModeToggle) darkModeToggle.checked = false;
                if (highContrastToggle) highContrastToggle.checked = false;
                if (fontSizeSelect) fontSizeSelect.value = 'normal';
            });
        }
    };

    // Navegação por teclado
    const setupKeyboardNavigation = () => {
        document.addEventListener('keydown', (e) => {
            // Pular para conteúdo principal (Alt + 1)
            if (e.altKey && e.key === '1') {
                e.preventDefault();
                const main = document.querySelector('main');
                if (main) {
                    main.focus();
                    main.scrollIntoView();
                }
            }

            // Pular para navegação (Alt + 2)
            if (e.altKey && e.key === '2') {
                e.preventDefault();
                const nav = document.querySelector('nav');
                if (nav) {
                    const firstLink = nav.querySelector('a');
                    if (firstLink) {
                        firstLink.focus();
                    }
                }
            }

            // Pular para rodapé (Alt + 3)
            if (e.altKey && e.key === '3') {
                e.preventDefault();
                const footer = document.querySelector('footer');
                if (footer) {
                    footer.focus();
                    footer.scrollIntoView();
                }
            }
        });

        // Adicionar atributos de acessibilidade aos elementos focáveis
        const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
        focusableElements.forEach((el) => {
            if (!el.hasAttribute('tabindex')) {
                el.setAttribute('tabindex', '0');
            }
        });
    };

    // Adicionar labels de skip
    const addSkipLinks = () => {
        const skipLinksContainer = document.createElement('div');
        skipLinksContainer.className = 'skip-links';
        skipLinksContainer.innerHTML = `
            <a href="#main-content" class="skip-link">Pular para conteúdo principal</a>
            <a href="#navigation" class="skip-link">Pular para navegação</a>
            <a href="#footer" class="skip-link">Pular para rodapé</a>
        `;
        document.body.insertBefore(skipLinksContainer, document.body.firstChild);

        // Adicionar IDs aos elementos
        const main = document.querySelector('main');
        const nav = document.querySelector('nav');
        const footer = document.querySelector('footer');

        if (main) main.id = 'main-content';
        if (nav) nav.id = 'navigation';
        if (footer) footer.id = 'footer';
    };

    // Melhorar contraste de cores
    const ensureContrast = () => {
        // Adicionar atributos ARIA aos elementos
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach((h, index) => {
            if (!h.hasAttribute('id')) {
                h.id = `heading-${index}`;
            }
        });

        // Adicionar role aos elementos de seção
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            if (!section.hasAttribute('role')) {
                section.setAttribute('role', 'region');
            }
            if (!section.hasAttribute('aria-label')) {
                const heading = section.querySelector('h2, h3');
                if (heading) {
                    section.setAttribute('aria-label', heading.textContent);
                }
            }
        });
    };

    // Métodos públicos
    return {
        init: () => {
            createAccessibilityPanel();
            setupAccessibilityListeners();
            setupKeyboardNavigation();
            addSkipLinks();
            ensureContrast();
            applyDarkMode();
            applyHighContrast();
            applyFontSize(state.fontSize);
        },

        toggleDarkMode: () => {
            state.darkMode = !state.darkMode;
            applyDarkMode();
        },

        toggleHighContrast: () => {
            state.highContrast = !state.highContrast;
            applyHighContrast();
        },

        setFontSize: (size) => {
            applyFontSize(size);
        }
    };
})();

// Inicializar acessibilidade quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    Accessibility.init();
});

