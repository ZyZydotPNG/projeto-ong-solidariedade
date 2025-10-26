# ONG Solidariedade (Fictício) - Projeto Web

## Descrição

Este projeto é um website para a ONG Solidariedade, uma organização sem fins lucrativos dedicada a projetos sociais e voluntariado. O site foi desenvolvido utilizando **HTML5 semântico**, **CSS3** e **JavaScript** para criar uma experiência de usuário moderna e responsiva.

## Objetivos

- Apresentar a organização e seus valores
- Informar sobre os projetos sociais desenvolvidos
- Facilitar o cadastro de voluntários e doadores
- Implementar formulários complexos com validação nativa HTML5
- Demonstrar domínio de estrutura semântica e boas práticas web

## Estrutura do Projeto

```
projeto_ong/
├── index.html          # Página inicial
├── projetos.html       # Página de projetos sociais
├── cadastro.html       # Página de cadastro
├── css/
│   └── style.css       # Estilos do projeto
├── js/
│   └── form-validation.js  # Validação e formatação de formulário
├── images/
│   ├── voluntariado.jpg    # Imagem de voluntários
│   ├── educacao.jpg        # Imagem de educação
│   ├── saude.jpg           # Imagem de saúde
│   └── economia.jpg        # Imagem de economia
└── README.md           # Este arquivo
```

## Páginas Desenvolvidas

### 1. **index.html** - Página Inicial
- Apresentação da organização
- Missão, visão e valores
- Informações de contato
- Navegação para outras páginas
- Imagem representativa de voluntariado

### 2. **projetos.html** - Projetos Sociais
- Descrição detalhada dos projetos
- Educação para Todos
- Saúde e Bem-estar
- Inclusão Econômica
- Informações sobre voluntariado e doações
- Múltiplas imagens ilustrativas

### 3. **cadastro.html** - Cadastro
- Formulário complexo com validação HTML5
- Campos obrigatórios: Nome, E-mail, CPF, Telefone, Data de Nascimento, Endereço, CEP, Cidade, Estado
- Máscaras de input para CPF, Telefone e CEP
- Validação de idade (maior de 18 anos)
- Validação de CPF com algoritmo
- Checkboxes para tipo de interesse (Voluntário, Doador, Parcerias)
- Campo de mensagem adicional

## Recursos Técnicos

### HTML5 Semântico
- Uso de tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Hierarquia de títulos apropriada
- Elementos `<fieldset>` e `<legend>` para agrupamento lógico de formulários
- Meta tags para responsividade e SEO

### CSS3
- Design responsivo com media queries
- Estilos modernos e profissionais
- Transições suaves e hover states
- Layout flexível e bem organizado

### JavaScript
- Formatação automática de CPF, Telefone e CEP
- Validação de CPF com algoritmo matemático
- Validação de idade
- Feedback ao usuário

### Validação HTML5
- Atributos `required`, `minlength`, `maxlength`
- Tipos de input específicos: `email`, `tel`, `date`
- Padrões regex para CPF, Telefone e CEP
- Validação nativa do navegador

## Como Usar

1. **Abrir o projeto**: Abra o arquivo `index.html` em um navegador web
2. **Navegar**: Use o menu de navegação para acessar as diferentes páginas
3. **Cadastro**: Preencha o formulário com dados válidos e clique em "Enviar Cadastro"
4. **Validação**: O formulário valida automaticamente os dados antes de enviar

## Validação W3C

Todos os arquivos HTML foram validados com o W3C Validator para garantir conformidade com os padrões web.

## Imagens

As imagens utilizadas no projeto são:
- **voluntariado.jpg**: Voluntários trabalhando em projeto social
- **educacao.jpg**: Aula de educação em comunidade carente
- **saude.jpg**: Campanha de saúde comunitária
- **economia.jpg**: Treinamento de empreendedorismo

Todas as imagens são otimizadas para web e responsivas.

## Navegadores Suportados

- Chrome (versão 90+)
- Firefox (versão 88+)
- Safari (versão 14+)
- Edge (versão 90+)

## Autor

**Matheus da Silva**

## Licença

Este projeto é fornecido como material educacional. Todos os direitos reservados à ZyZydotPNG.

