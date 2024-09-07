let dados = [
    {
        titulo: "Google Gemini",
        descricao: `
            <div class="descricao-item">
                <h3>Descrição:</h3>
                <p>Gemini é a nova linha de modelos de linguagem desenvolvida pelo Google DeepMind. Esses modelos são voltados para IA generativa, usados em várias aplicações, como compreensão e geração de texto, tradução automática, assistência em tarefas criativas e análise de dados.</p>
                <h3>Características:</h3>
                <ul>
                    <li>Multimodalidade: Processa texto, imagens, áudio e outros tipos de dados.</li>
                    <li>Treinamento avançado: Baseado em grandes conjuntos de dados e técnicas de aprendizado profundo.</li>
                    <li>Contexto e raciocínio: Realiza tarefas de raciocínio avançado e entendimento de interações complexas.</li>
                    <li>Integração com o Google: Usado para melhorar produtos como Google Search e Google Assistant.</li>
                </ul>
                <h3>Contexto Histórico:</h3>
                <p>Criado pelo Google DeepMind, anunciado em 2023 como sucessor do PaLM 2, com o objetivo de competir com modelos como o GPT-4.</p>
                <h3>Curiosidades:</h3>
                <p>Parte do movimento do Google em direção à IA multimodal para interações mais humanas e naturais.</p>
            </div>
        `,
        link: "https://gemini.google.com/app/4f0ea89d1b41ff31?utm_source=website&utm_medium=referral&utm_campaign=alura_aug24",
        tags: "ia, inteligencia artificial, generativa, google, alura"
    },
    {
        titulo: "ChatGPT",
        descricao: `
            <div class="descricao-item">
                <h3>Descrição:</h3>
                <p>ChatGPT é um modelo de linguagem da OpenAI, conhecido por sua capacidade de gerar texto de forma coerente e criativa, além de responder a perguntas e auxiliar em tarefas diversas com base no contexto fornecido.</p>
                <h3>Características:</h3>
                <ul>
                    <li>Geração de texto: Cria respostas e conteúdo com base em entradas fornecidas.</li>
                    <li>Contextualização: Entende e utiliza o contexto para fornecer respostas relevantes.</li>
                    <li>Versatilidade: Pode ser usado para uma variedade de aplicações, desde chatbots até assistentes virtuais.</li>
                </ul>
                <h3>Contexto Histórico:</h3>
                <p>Lançado pela OpenAI como uma continuação da série GPT, melhorando as capacidades de entendimento e geração de texto.</p>
                <h3>Curiosidades:</h3>
                <p>O ChatGPT é amplamente utilizado em empresas para suporte ao cliente e em ferramentas de produtividade.</p>
            </div>
        `,
        link: "https://openai.com/chatgpt",
        tags: "ia, inteligencia artificial, geração de texto, openai"
    },
    {
        titulo: "Alexa",
        descricao: `
            <div class="descricao-item">
                <h3>Descrição:</h3>
                <p>Alexa é a assistente virtual desenvolvida pela Amazon, projetada para responder a comandos de voz, controlar dispositivos domésticos inteligentes e fornecer informações em tempo real.</p>
                <h3>Características:</h3>
                <ul>
                    <li>Controle de voz: Permite o controle de dispositivos domésticos e execução de comandos por voz.</li>
                    <li>Integração com serviços: Pode fornecer informações sobre o clima, notícias e gerenciar tarefas diárias.</li>
                    <li>Personalização: Oferece habilidades e aplicativos adicionais para personalizar a experiência.</li>
                </ul>
                <h3>Contexto Histórico:</h3>
                <p>Lançada pela Amazon em 2014, Alexa revolucionou o mercado de assistentes virtuais e dispositivos inteligentes para casa.</p>
                <h3>Curiosidades:</h3>
                <p>Alexa é integrada em uma variedade de dispositivos, incluindo alto-falantes Echo e outros aparelhos domésticos inteligentes.</p>
            </div>
        `,
        link: "https://www.amazon.com/alexa",
        tags: "ia, inteligencia artificial, assistente virtual, amazon, voz"
    },
    {
        titulo: "Siri",
        descricao: `
            <div class="descricao-item">
                <h3>Descrição:</h3>
                <p>Siri é a assistente virtual da Apple, integrada em dispositivos iOS. É projetada para responder a comandos de voz, realizar tarefas e fornecer informações de maneira eficiente e intuitiva.</p>
                <h3>Características:</h3>
                <ul>
                    <li>Controle de voz: Realiza tarefas e responde a perguntas usando comandos de voz.</li>
                    <li>Integração com iOS: Trabalha perfeitamente com o ecossistema de dispositivos Apple.</li>
                    <li>Assistência contextual: Fornece respostas e sugestões com base no contexto e histórico do usuário.</li>
                </ul>
                <h3>Contexto Histórico:</h3>
                <p>Lançada em 2011 como parte do iPhone 4S, Siri foi uma das pioneiras em assistentes virtuais móveis.</p>
                <h3>Curiosidades:</h3>
                <p>Siri é conhecida por sua personalidade e por ter um conjunto de respostas divertidas para perguntas específicas.</p>
            </div>
        `,
        link: "https://www.apple.com/siri/",
        tags: "ia, inteligencia artificial, assistente virtual, apple, voz"
    },
    {
        titulo: "Tesla Autopilot",
        descricao: `
            <div class="descricao-item">
                <h3>Descrição:</h3>
                <p>O Tesla Autopilot é um sistema avançado de assistência ao motorista desenvolvido pela Tesla, projetado para ajudar na direção e tornar a experiência de condução mais segura e conveniente.</p>
                <h3>Características:</h3>
                <ul>
                    <li>Assistência na direção: Inclui recursos como controle de cruzeiro adaptativo e manutenção de faixa.</li>
                    <li>Detecção e resposta: Usa sensores e câmeras para detectar e responder a obstáculos e condições de trânsito.</li>
                    <li>Atualizações contínuas: Recebe melhorias e novos recursos através de atualizações de software over-the-air.</li>
                </ul>
                <h3>Contexto Histórico:</h3>
                <p>Lançado pela Tesla em 2015, o Autopilot tem evoluído para incluir recursos mais avançados com o tempo.</p>
                <h3>Curiosidades:</h3>
                <p>O Autopilot é uma parte crucial da visão da Tesla para um futuro com veículos totalmente autônomos.</p>
            </div>
        `,
        link: "https://www.tesla.com/autopilot",
        tags: "ia, inteligencia artificial, assistência ao motorista, tesla, condução"
    },
    {
        titulo: "Midjourney",
        descricao: `
            <div class="descricao-item">
                <h3>Descrição:</h3>
                <p>Midjourney é uma IA focada em gerar imagens de alta qualidade a partir de descrições textuais, oferecendo uma plataforma para criar visuais impressionantes com base em entradas criativas.</p>
                <h3>Características:</h3>
                <ul>
                    <li>Geração de imagens: Converte descrições textuais em imagens detalhadas e visualmente atraentes.</li>
                    <li>Personalização: Permite ajustar parâmetros para obter diferentes estilos e efeitos.</li>
                    <li>Integração com projetos: Utilizada em várias áreas, incluindo design gráfico e arte digital.</li>
                </ul>
                <h3>Contexto Histórico:</h3>
                <p>Desenvolvida para atender à crescente demanda por ferramentas de criação de imagens baseadas em IA.</p>
                <h3>Curiosidades:</h3>
                <p>Midjourney é conhecida por suas capacidades inovadoras e pela qualidade impressionante das imagens geradas.</p>
            </div>
        `,
        link: "https://www.midjourney.com",
        tags: "ia, inteligencia artificial, geração de imagens, criatividade, design"
    }
];
