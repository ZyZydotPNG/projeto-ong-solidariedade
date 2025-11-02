/**
 * Módulo SPA (Single Page Application)
 * Responsável pela navegação dinâmica entre páginas sem recarregar
 */

const SPA = (() => {
    // Estado privado
    const state = {
        currentPage: 'index',
        pages: {
            index: {
                title: 'Início - ONG Solidariedade',
                content: `
                    <section class="hero">
                        <h2>Bem-vindo à ONG Solidariedade</h2>
                        <p>A <strong>ONG Solidariedade</strong> é uma organização sem fins lucrativos dedicada a transformar vidas através de projetos sociais inovadores e sustentáveis.</p>
                        <img src="images/voluntariado.jpg" alt="Voluntários trabalhando em projeto social" style="max-width: 100%; border-radius: 8px; margin: 20px 0;">
                        <h3>🎯 Nossa Visão</h3>
                        <p>Ser referência nacional em projetos sociais, reconhecida pela excelência, inovação e impacto positivo na vida das pessoas.</p>
                        <h3>💎 Nossos Valores</h3>
                        <ul>
                            <li><strong>Solidariedade:</strong> Comprometimento com o bem-estar coletivo</li>
                            <li><strong>Transparência:</strong> Ética e honestidade em todas as ações</li>
                            <li><strong>Inclusão:</strong> Respeito à diversidade e igualdade</li>
                            <li><strong>Sustentabilidade:</strong> Impacto duradouro</li>
                        </ul>
                        <h3>📞 Informações de Contato</h3>
                        <p><strong>Endereço:</strong> Rua da Solidariedade, 123, São Paulo - SP</p>
                        <p><strong>Telefone:</strong> (11) 3456-7890</p>
                        <p><strong>Horário:</strong> Segunda a Sexta, 9h às 17h</p>
                    </section>
                `
            },
            projetos: {
                title: 'Projetos Sociais - ONG Solidariedade',
                content: `
                    <section class="projetos">
                        <h2>🚀 Nossos Projetos Sociais</h2>
                        <p>Conheça os projetos que estamos desenvolvendo para transformar vidas e comunidades.</p>
                        
                        <article>
                            <h3>📚 Educação para Todos</h3>
                            <img src="images/educacao.jpg" alt="Aula de educação em comunidade carente" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
                            <p>Nosso programa de educação oferece aulas gratuitas de reforço escolar, cursos profissionalizantes e acesso a tecnologia.</p>
                            <p><strong>📊 Impacto:</strong> Mais de 500 alunos beneficiados anualmente.</p>
                        </article>

                        <article>
                            <h3>❤️ Saúde e Bem-estar</h3>
                            <img src="images/saude.jpg" alt="Profissional de saúde atendendo paciente" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
                            <p>Realizamos campanhas de saúde preventiva, oferecemos consultas médicas gratuitas e promovemos atividades de bem-estar.</p>
                            <p><strong>📊 Impacto:</strong> Mais de 1000 pessoas atendidas em campanhas.</p>
                        </article>

                        <article>
                            <h3>💼 Inclusão Econômica</h3>
                            <img src="images/economia.jpg" alt="Pessoas em treinamento de empreendedorismo" style="max-width: 100%; border-radius: 8px; margin: 15px 0;">
                            <p>Oferecemos treinamento em empreendedorismo, microcrédito e apoio para geração de renda.</p>
                            <p><strong>📊 Impacto:</strong> Mais de 200 empreendimentos iniciados.</p>
                        </article>

                        <h2>🤝 Como Você Pode Ajudar</h2>
                        <h3>🙋 Voluntariado</h3>
                        <p>Você pode fazer a diferença dedicando seu tempo e habilidades aos nossos projetos.</p>
                        <p><strong>✨ Benefícios:</strong> Fazer diferença, desenvolver habilidades, certificado de participação.</p>
                        
                        <h3>💝 Doações</h3>
                        <p>Suas doações são fundamentais para manter nossos projetos funcionando.</p>
                        <p><strong>📈 Como utilizamos:</strong> 40% Educação, 30% Saúde, 20% Inclusão Econômica, 10% Administrativo.</p>
                    </section>
                `
            },
            cadastro: {
                title: 'Cadastro - ONG Solidariedade',
                content: `
                    <section class="cadastro">
                        <h2>📋 Cadastro - Voluntários e Doadores</h2>
                        <p>Preencha o formulário abaixo para se cadastrar como voluntário ou doador.</p>
                        
                        <form id="formCadastro" class="form-cadastro">
                            <fieldset>
                                <legend>👤 Informações Pessoais</legend>
                                
                                <div class="form-group">
                                    <label for="nome" class="required">Nome Completo</label>
                                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required>
                                    <span class="form-error" id="erro-nome"></span>
                                </div>

                                <div class="form-group">
                                    <label for="email" class="required">E-mail</label>
                                    <input type="email" id="email" name="email" placeholder="seu.email@exemplo.com" required>
                                    <span class="form-error" id="erro-email"></span>
                                </div>

                                <div class="form-group">
                                    <label for="cpf" class="required">CPF</label>
                                    <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required>
                                    <span class="form-error" id="erro-cpf"></span>
                                </div>

                                <div class="form-group">
                                    <label for="telefone" class="required">Telefone</label>
                                    <input type="tel" id="telefone" name="telefone" placeholder="(11) 99999-9999" required>
                                    <span class="form-error" id="erro-telefone"></span>
                                </div>

                                <div class="form-group">
                                    <label for="dataNascimento" class="required">Data de Nascimento</label>
                                    <input type="date" id="dataNascimento" name="dataNascimento" required>
                                    <span class="form-error" id="erro-dataNascimento"></span>
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend>📍 Endereço</legend>
                                
                                <div class="form-group">
                                    <label for="endereco" class="required">Endereço</label>
                                    <input type="text" id="endereco" name="endereco" placeholder="Rua, número" required>
                                    <span class="form-error" id="erro-endereco"></span>
                                </div>

                                <div class="form-group">
                                    <label for="cep" class="required">CEP</label>
                                    <input type="text" id="cep" name="cep" placeholder="00000-000" required>
                                    <span class="form-error" id="erro-cep"></span>
                                </div>

                                <div class="form-group">
                                    <label for="cidade" class="required">Cidade</label>
                                    <input type="text" id="cidade" name="cidade" placeholder="São Paulo" required>
                                    <span class="form-error" id="erro-cidade"></span>
                                </div>

                                <div class="form-group">
                                    <label for="estado" class="required">Estado</label>
                                    <select id="estado" name="estado" required>
                                        <option value="">Selecione um estado</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="BA">Bahia</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="PR">Paraná</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="CE">Ceará</option>
                                        <option value="PA">Pará</option>
                                        <option value="SC">Santa Catarina</option>
                                    </select>
                                    <span class="form-error" id="erro-estado"></span>
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend>🎯 Tipo de Participação</legend>
                                
                                <div class="form-check">
                                    <input type="checkbox" id="voluntario" name="voluntario" value="voluntario">
                                    <label for="voluntario" class="form-check-label">Desejo ser voluntário</label>
                                </div>

                                <div class="form-check">
                                    <input type="checkbox" id="doador" name="doador" value="doador">
                                    <label for="doador" class="form-check-label">Desejo ser doador</label>
                                </div>
                            </fieldset>

                            <div id="alertaSucesso" class="alert alert-success" style="display: none;">
                                <strong>✓ Sucesso!</strong> Seu cadastro foi realizado com sucesso. Entraremos em contato em breve.
                            </div>

                            <div id="alertaErro" class="alert alert-danger" style="display: none;">
                                <strong>✗ Erro!</strong> Por favor, corrija os erros no formulário.
                            </div>

                            <button type="submit" class="btn btn-primary">Enviar Cadastro</button>
                            <button type="reset" class="btn btn-outline">Limpar Formulário</button>
                        </form>
                    </section>
                `
            }
        }
    };

    // Métodos privados
    const renderPage = (pageName) => {
        const page = state.pages[pageName];
        if (!page) return;

        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.innerHTML = page.content;
            document.title = page.title;
            
            // Atualizar links de navegação
            updateNavLinks(pageName);
            
            // Se for a página de cadastro, inicializar validação
            if (pageName === 'cadastro') {
                FormValidator.init();
            }
        }
    };

    const updateNavLinks = (currentPage) => {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            }
        });
    };

    // Métodos públicos
    return {
        init: () => {
            // Adicionar event listeners aos links de navegação
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const pageName = link.getAttribute('data-page');
                    if (pageName) {
                        SPA.navigate(pageName);
                    }
                });
            });

            // Renderizar página inicial
            renderPage('index');
        },

        navigate: (pageName) => {
            if (state.pages[pageName]) {
                state.currentPage = pageName;
                renderPage(pageName);
                window.scrollTo(0, 0);
            }
        },

        getCurrentPage: () => state.currentPage
    };
})();

// Inicializar SPA quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    SPA.init();
});

