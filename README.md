# 🌍 ONG Solidariedade - Website Profissional

**Versão:** 1.0.0  
**Status:** ✅ Produção  
**Última Atualização:** Novembro 2024

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Características](#características)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Uso](#instalação-e-uso)
- [Acessibilidade](#acessibilidade)
- [Funcionalidades](#funcionalidades)
- [Versionamento](#versionamento)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

---

## 🎯 Sobre o Projeto

O **ONG Solidariedade** é um website profissional desenvolvido para uma organização sem fins lucrativos dedicada a transformar vidas através de projetos sociais inovadores e sustentáveis. O projeto demonstra domínio completo de tecnologias web modernas, incluindo HTML5 semântico, CSS avançado com Design System, JavaScript modular, acessibilidade WCAG 2.1 AA e práticas profissionais de versionamento.

### Missão

Contribuir para uma sociedade mais justa e igualitária, onde todos tenham acesso a oportunidades de crescimento pessoal e profissional através do voluntariado e projetos sociais.

---

## ✨ Características

### 🎨 Design e UX
- ✅ **Design System Robusto:** Variáveis CSS customizadas com 8+ cores, tipografia hierárquica e espaçamento modular
- ✅ **Layouts Responsivos:** CSS Grid (12 colunas) e Flexbox com 5+ breakpoints
- ✅ **Modo Escuro:** Suporte completo para modo escuro com persistência em localStorage
- ✅ **Alto Contraste:** Versão de alto contraste acessível para usuários com baixa visão
- ✅ **Animações Suaves:** Transições elegantes e micro-interações

### 🔧 Funcionalidades Técnicas
- ✅ **Single Page Application (SPA):** Navegação dinâmica sem recarregar a página
- ✅ **Validação de Formulários:** Sistema robusto com feedback visual em tempo real
- ✅ **Acessibilidade WCAG 2.1 AA:** Navegação por teclado, leitores de tela, contraste 4.5:1
- ✅ **JavaScript Modular:** Código organizado em módulos reutilizáveis
- ✅ **Otimização para Produção:** Minificação de CSS, HTML e JavaScript

### 📱 Responsividade
- ✅ Mobile-first design
- ✅ Breakpoints: 320px, 576px, 768px, 992px, 1200px, 1400px
- ✅ Menu hambúrguer responsivo
- ✅ Imagens otimizadas em múltiplos formatos

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **HTML5** | 5 | Estrutura semântica e formulários |
| **CSS3** | 3 | Design System, Grid, Flexbox, Animações |
| **JavaScript** | ES6+ | Modular, SPA, Validação, Acessibilidade |
| **Git** | 2.x | Controle de versão com GitFlow |
| **GitHub** | - | Repositório e colaboração |

### Bibliotecas e Ferramentas
- **Sem dependências externas:** Projeto puro (vanilla) HTML/CSS/JavaScript
- **localStorage:** Persistência de preferências de acessibilidade
- **CSS Variables:** Customização dinâmica de temas

---

## 📁 Estrutura do Projeto

```
projeto-ong-solidariedade/
├── index.html                 # Página principal (SPA)
├── projetos.html             # Página de projetos (conteúdo)
├── cadastro.html             # Página de cadastro (conteúdo)
├── README.md                 # Documentação
├── css/
│   ├── style.css            # Estilos principais
│   └── accessibility.css    # Estilos de acessibilidade
├── js/
│   ├── spa.js               # Módulo de SPA
│   ├── form-validator.js    # Módulo de validação
│   └── accessibility.js     # Módulo de acessibilidade
└── images/
    ├── voluntariado.jpg     # Imagem de voluntários
    ├── educacao.jpg         # Imagem de educação
    ├── saude.jpg            # Imagem de saúde
    └── economia.jpg         # Imagem de economia
```

---

## 🚀 Instalação e Uso

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Git (para clonar o repositório)
- Servidor web local (opcional, para desenvolvimento)

### Passos de Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ZyZydotPNG/projeto-ong-solidariedade.git
   cd projeto-ong-solidariedade
   ```

2. **Abra o arquivo `index.html` no navegador:**
   ```bash
   # Opção 1: Abrir diretamente
   open index.html

   # Opção 2: Usar um servidor local (Python)
   python3 -m http.server 8000
   # Acesse: http://localhost:8000
   ```

3. **Explore as funcionalidades:**
   - Navegue entre as páginas usando o menu
   - Teste o modo escuro e alto contraste (ícone ♿ no canto inferior direito)
   - Preencha o formulário de cadastro e veja a validação em tempo real
   - Use as teclas Alt+1, Alt+2, Alt+3 para pular para seções principais

---

## ♿ Acessibilidade

O projeto está em conformidade com **WCAG 2.1 Nível AA**, incluindo:

### Navegação por Teclado
- ✅ Todos os elementos são acessíveis via teclado
- ✅ Ordem de tabulação lógica
- ✅ Atalhos de teclado (Alt+1, Alt+2, Alt+3)
- ✅ Skip links para pular para seções principais

### Leitores de Tela
- ✅ Estrutura semântica com roles ARIA apropriados
- ✅ Labels associados aos inputs
- ✅ Descrições alternativas em imagens
- ✅ Mensagens de erro acessíveis

### Contraste e Cores
- ✅ Contraste mínimo de 4.5:1 para texto normal
- ✅ Contraste mínimo de 3:1 para texto grande
- ✅ Modo de alto contraste (preto e branco)
- ✅ Modo escuro com contraste adequado

### Modo Escuro e Alto Contraste
- Clique no ícone ♿ no canto inferior direito
- Selecione as opções desejadas
- As preferências são salvas automaticamente

### Redução de Movimento
- ✅ Respeita `prefers-reduced-motion`
- ✅ Desabilita animações para usuários que preferem

---

## 🎮 Funcionalidades

### 1. Single Page Application (SPA)
- Navegação dinâmica sem recarregar a página
- Transições suaves entre páginas
- Histórico de navegação mantido

### 2. Validação de Formulários
- **Campos validados:**
  - Nome Completo (obrigatório, mínimo 3 caracteres)
  - E-mail (obrigatório, formato válido)
  - CPF (obrigatório, formato com máscara)
  - Telefone (obrigatório, formato com máscara)
  - Data de Nascimento (obrigatório, maior de 18 anos)
  - Endereço (obrigatório)
  - CEP (obrigatório, formato com máscara)
  - Cidade e Estado (obrigatório)

- **Feedback Visual:**
  - Campo válido: borda verde
  - Campo inválido: borda vermelha
  - Mensagens de erro específicas
  - Indicador de campo obrigatório (*)

### 3. Acessibilidade Avançada
- Painel de acessibilidade com opções de:
  - Modo escuro
  - Alto contraste
  - Tamanho de fonte (pequeno, normal, grande, muito grande)
- Persistência de preferências em localStorage

### 4. Design System
- **Cores:** 8+ cores primárias, secundárias e neutras
- **Tipografia:** 5+ tamanhos de fonte com escala modular
- **Espaçamento:** Sistema modular (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- **Componentes:** Botões, cards, badges, alerts, formulários

---

## 📊 Versionamento

O projeto segue **Versionamento Semântico (SemVer)** com a estratégia **GitFlow**:

### Versão Atual: 1.0.0

```
MAJOR.MINOR.PATCH
  1  .  0   .  0
```

- **MAJOR (1):** Mudanças incompatíveis com versões anteriores
- **MINOR (0):** Novas funcionalidades compatíveis
- **PATCH (0):** Correções de bugs

### Branches
- **main:** Código em produção (releases)
- **develop:** Desenvolvimento ativo
- **feature/*:** Novas funcionalidades
- **bugfix/*:** Correções de bugs
- **release/*:** Preparação de releases

### Histórico de Commits
Commits semânticos seguindo o padrão:
```
feat: Adiciona nova funcionalidade
fix: Corrige bug
docs: Atualiza documentação
style: Altera formatação
refactor: Refatora código
perf: Melhora performance
test: Adiciona testes
chore: Tarefas de manutenção
```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork o repositório**
2. **Crie uma branch para sua feature:**
   ```bash
   git checkout -b feature/minha-feature
   ```
3. **Commit suas mudanças:**
   ```bash
   git commit -m "feat: Adiciona minha feature"
   ```
4. **Push para a branch:**
   ```bash
   git push origin feature/minha-feature
   ```
5. **Abra um Pull Request**

### Diretrizes
- Mantenha o código limpo e bem documentado
- Respeite as convenções de naming
- Teste suas mudanças
- Atualize a documentação conforme necessário

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---

## 📞 Contato

**ONG Solidariedade**

- **Endereço:** Rua da Solidariedade, 123, São Paulo - SP
- **Telefone:** (11) 3456-7890
- **Email:** [contato@ongsolidariedade.org.br](mailto:contato@ongsolidariedade.org.br)
- **Website:** [https://github.com/ZyZydotPNG/projeto-ong-solidariedade](https://github.com/ZyZydotPNG/projeto-ong-solidariedade)
- **Horário de Funcionamento:** Segunda a Sexta, 9h às 17h

---

## 🏆 Créditos

**Desenvolvido por:** Matheus da Silva  
**Data:** Novembro 2024  
**Instituição:** Desenvolvimento Web Profissional

---

## 📚 Recursos Adicionais

### Documentação Técnica
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Git Documentation](https://git-scm.com/doc)

### Ferramentas Recomendadas
- **Dev Tools:** Chrome DevTools, Firefox Developer Edition
- **Validação:** W3C HTML Validator, W3C CSS Validator
- **Acessibilidade:** WAVE, Axe DevTools, Lighthouse
- **Performance:** Google PageSpeed Insights, WebPageTest

---

## 🎓 Aprendizados e Melhores Práticas

Este projeto demonstra:

1. **HTML5 Semântico:** Uso correto de tags semânticas para melhor estrutura
2. **CSS Avançado:** Design System, Grid, Flexbox, Variáveis CSS
3. **JavaScript Modular:** Código organizado em módulos reutilizáveis
4. **Acessibilidade:** WCAG 2.1 AA com modo escuro e alto contraste
5. **Responsividade:** Mobile-first com múltiplos breakpoints
6. **Versionamento:** GitFlow com commits semânticos
7. **Documentação:** README profissional e código bem comentado
8. **Performance:** Otimização de imagens e minificação de código

---

**Obrigado por visitar o projeto ONG Solidariedade! 🙏**

*Desenvolvido com dedicação para transformar vidas através da solidariedade.*

---

**Última atualização:** Novembro 2024  
**Versão:** 1.0.0  
**Status:** ✅ Pronto para Produção

