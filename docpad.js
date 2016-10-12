module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "III Dev Week",
      description: "3 dias de palestras e mini-cursos organizada pelo Diret�rio Acad�mico de Ci�ncia da Computa��o - UFF",
      date: "19-21 de Outubro",
      // If your event is free, just comment this line
      //price: "$100",
      venue: "Instituto de Computa��o UFF",
      address: "Rua Passo da P�tria 156, Instituto de Computa��o - UFF",
      city: "Niter�i",
      state: "RJ"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Participe!",
        link: "http://bit.ly/registro-devweek-2016"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    /*forkButton: {
        repository: "https://github.com/braziljs/conf-boilerplate"
    },*/

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://dacc.ic.uff.br/devweek/",
      googleanalytics: "UA-84262533-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Programa��o",
      sponsors: "Patroc�nio",
      partners: "Parceiros",
      contact: "Contato"
    },

    // The entire schedule
    schedule: {
        '2016-10-19': [
            {
                name: "Patricia Almeida Ashley",
                photo: "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4707835P6",
                bio: "Professora Associada III, vinculada ao Departamento de Análise Geoambiental do Instituto de Geociências, Uff, líder do Núcleo Girassol de Estudos em EcoPolíticas e EConsCiencias.  Atuação interdisciplinar articulando Ciências Sociais Aplicadas e Ciências Humanas, com foco em Política e Planejamento Governamental, Economia Política e Ciência da Informação aplicados ao estudo de políticas, estratégias, governança, economias e culturas orientadas por/para responsabilidade social e desenvolvimento sustentável, em uma perspectiva multiatores, multinível e territorializada. Possui Bacharelado em Ciências Econômicas pela Universidade Federal do Rio de Janeiro (Brasil, 1985), com ênfase em Políticas Públicas; Especialização em Análise e Projeto de Sistemas pelo IBAM (Brasil, 1991); Mestrado em Gestão de Serviços Públicos, como bolsista pelo The British Council, com pesquisa em políticas de desenvolvimento local por estratégias de service level agreement/acordo de serviços na Aston University (UK, 1993); Doutorado em Administração de Empresas, como bolsista pela CAPES, no IAG/PUC-Rio (Brasil, 2002) com tese sobre estratégias de responsabilidade social; Estágio Pós-Doutoral em responsabilidade social, desenvolvimento e equidade no International Institute of Social Studies - ISS/EUR (Holanda, 2011)",
                company: "Universidade Federal Fluminense",
                link: {
                  href: "http://www.ecopoliticas.uff.br",
                  text: "Ecopolíticas"
                },
                presentation: {
                  title: "Democracia, transparência e qualidade de processos de trabalho: Demandas por soluções em tecnologia de informação",
                  description: "Apresentarei os desafios atuais para avançarmos na cultura e processos democráticos, especialmente os participativos, na esfera pública, tanto em organizações do Estado, quanto em organizações empresariais e organizações sem fins lucrativos.  Nesse sentido, há uma relevância total da tecnologia de informação em conhecer os ambientes informacionais desses contextos que requerem, ao mesmo tempo, a promoção da transparência pública (inclusive em empresas e organizações sem fins lucrativos) e aprofundar a inteligência humana nos parâmetros de qualidade dos processos de trabalho.  Exemplificarei com alguns casos problemáticos e algumas situações inspiradoras de que estamos a caminho, mas temos muito a avançar.",
                  time: "10h00"
                },
            },
            {
                name: "Victor Lima Campos",
                photo: "https://avatars2.githubusercontent.com/u/1539610?v=3&s=466",
                bio: "Formado em ciência da computação na UFRJ, começou ainda na faculdade a empreender sendo co-fundador do Easyaula, startup que foi vencedora Best Consumer Startup Brazil em 2013. Foi moderador do grupo de Ruby on Rails Brasil por 3 anos no facebook e hoje é consultor da Visagio Tecnologia.",
                link: {
                    href: "http://github.com/victorlcampos",
                    text: "@victorlcampos"
                },
                presentation: {
                    title: "The Rails Doctrine - The Bigger Smile",
                    description: " Conhecer a a filosofia por trás da ferramenta que você está aplicando para resolver um problema é tão importante quanto conhecer a ferramenta em si. No longo prazo será essa filosofia que guiará a comunidade e o desenvolvimento das próximas versões e entende-la fará com que você escreva código que seja facilmente atualizável. Nessa palestra trago os 9 pilares que guiam o desenvolvimento dessa framework que revolucionou a web.",
                    time: "10h50"
                },
            },
            {
                name: "Everson Alcantara",
                photo: "https://media.licdn.com/media/AAEAAQAAAAAAAAaBAAAAJDQzNjllMTJkLTZhZTItNDA2Ni1iMDNjLWNiMjJkYzc1NWFkNA.jpg",
                bio: "Everson tem 22 anos. É natural de Niteroi e formando em comunicação Social pelo Ibmec RJ. É um dos fundadores do Programa ProLíder, que visa debater o cenário atual brasileiro junto a grandes referências, visando à criação de projetos de melhoria ou empreendimentos que contribuirão para o desenvolvimento do país. Foi um dos responsáveis pela criação da célula de empreendedorismo social no ibmec (Ibmec Social) e, ainda no ensino médio, foi premiado pelo PINCE 2010 por um projeto socioambiental inovador que consistia em utilizar subprodutos da indústria de laticínios como base na produção de pães altamente proteicos para merenda escolar infantil.",
                link: {
                    href: "http://facebook.com/eversonjunior ",
                    text: "Everson Alcantara"
                },
                presentation: {
                    title: "Brasil do amanhã, entre para o time dos que fazem!",
                    description: "O que precisamos para começar um Brasil melhor hoje mesmo? Entenda como jovens podem construir maneiras inteligentes e efetivas de transformar a sociedade.",
                    time: "11h40"
                },
            },
            {
                name: 'Almoço',
                time: '12h30'
            },
            {
                name: "Karina Mochetti",
                photo: "http://www2.ic.uff.br/~kmochetti/me.jpg",
                bio: "Eu terminei o meu mestrado em Marcas d'Água e Proteção de Direitos Autorais em 2009, e meu doutorado em Criptografia Pós-Quântica em 2014, ambos na UNICAMP. Eu me formei em Engenharia da Computação também pela UNICAMP em 2006, durante o qual eu fiz uma pesquisa de um ano sobre Visualização de Imagens Médicas. Meu campo de pesquisa principal é Computação Quântica, mas eu também tenho interesse por Criptografia, Complexidade e Teoria da Computação. Em 2012 tive a experiência incrível de fazer parte dos meus estudos de doutorado em Paris, na École Normale Supérieure (ENS) e em 2013 conquistei oportunidade de fazer um estágio no Google. Atualmente eu sou Professora Adjunta da Universidade Federal Fluminense (UFF) e eu sou uma das coordenadoras do Projeto #include <meninas.uff>, um grupo para motivar alunas do ensino médio e fundamental a tentar uma carreira em Ciência da Computação e emponderar as alunas já inscritas nos cursos de graduação e pós-graduação do Instituto de Computação da UFF.",
                presentation: {
                    title: "O Sistema Unix e a Ferramenta de Linha de Comando",
                    description: "O sistema Unix foi criado em 1965 e está por traz dos principais sistemas operacionais utilizados hoje em dia, desde as diversas distribuições de Linux até o Mac OS X, sistema proletário da Apple. A manipulação e realização de tarefas a partir de linha de comando, sem a utilização de uma interface ou do mouse é uma das características desse sistema, o que possibilita maior controle para usuários mais avançados. Esse mini curso pretende ensinar a utilização de linha de comando em Unix e é destinada para qualquer aluno mesmo que sem nenhuma experiência prévia com Unix.",
                    time: "14h00",
                    type: 'Minicurso'
                },
            },
            {
                name: 'Coffe-Break',
                time: '16h30'
            },
            {
                name: "Marcos Kalinowski",
                photo: "http://www2.ic.uff.br/~kalinowski/img/personal/personal-image.jpg",
                bio: "Professor e membro permanente do programa de Pós-graduação em Computação do Instituto de Computação da Universidade Federal Fluminense (UFF). Doutor e mestre em Engenharia de Software pela COPPE/UFRJ e graduado em Ciência da Computação pela UFRJ. Atua na linha de pesquisa Engenharia de Software, principalmente com pesquisas relacionadas a Engenharia de Software Experimental e Qualidade de Software. Tem publicado regularmente em conferências e periódicos renomados. Ao longo dos anos apresentou artigos e ministrou palestras em diferentes países, incluindo Alemanha, Áustria, Brasil, Canadá, Chile, China, Equador, Espanha, Estados Unidos, Inglaterra, Irlanda, Itália, México, Peru e Portugal. Possui ampla experiência em transferência de tecnologia para a indústria, tendo fornecido serviços especializados, consultorias e treinamentos para empresas públicas e privadas de diferentes portes, tanto dentro do país quanto fora. É membro da ISERN (International Software Engineering Research Network), principal comunidade de pesquisa internacional de Engenharia de Software Experimental, da ACM, IEEE e SBC.",
                // link: {
                //     href: "http://facebook.com/eversonjunior ",
                //     text: "Everson Alcantara"
                // },
                presentation: {
                    title: "Problemas Críticos da Engenharia de Requisitos e sua Manifestação na Prática",
                    description: "Problemas da Engenharia de Requisitos podem levar projetos de software a sérias consequências durante o ciclo de vida de desenvolvimento, incluindo o fracasso do projeto como um todo. Nesta palestra, a partir de dados provenientes de 228 organizações de 10 países (www.re-survey.org), serão apresentados os problemas que são percebidos como os mais críticos pela indústria de software e os contextos em que se manifestam. Este quadro é complementado com uma análise de causa e efeito, mostrando as causas e os efeitos que circundam os principais problemas. ",
                    time: "16h50"
                },
            },
            {
                name: "Guto",
                //photo: "https://avatars2.githubusercontent.com/u/1539610?v=3&s=466",
                //bio: "Everson tem 22 anos. É natural de Niteroi e formando em comunicação Social pelo Ibmec RJ. É um dos fundadores do Programa ProLíder, que visa debater o cenário atual brasileiro junto a grandes referências, visando à criação de projetos de melhoria ou empreendimentos que contribuirão para o desenvolvimento do país. Foi um dos responsáveis pela criação da célula de empreendedorismo social no ibmec (Ibmec Social) e, ainda no ensino médio, foi premiado pelo PINCE 2010 por um projeto socioambiental inovador que consistia em utilizar subprodutos da indústria de laticínios como base na produção de pães altamente proteicos para merenda escolar infantil.",
                // link: {
                //     href: "http://facebook.com/eversonjunior ",
                //     text: "Everson Alcantara"
                // },
                presentation: {
                    // title: "Brasil do amanhã, entre para o time dos que fazem!",
                    // description: "O que precisamos para começar um Brasil melhor hoje mesmo? Entenda como jovens podem construir maneiras inteligentes e efetivas de transformar a sociedade.",
                    time: "17h40"
                },
            }
        ],
        '2016-10-20': [
            {
                name: "Izaías Miguel",
                photo: "https://media.licdn.com/media/p/4/000/1b3/081/1f96176.jpg",
                bio: "Formado em ciência da computação pela UFRJ, pós-graduado em Gestão de Projetos pela Poli-UFRJ e sócio-diretor da Visagio Tecnologia.",
                company: "Visagio",
                // link: {
                //   href: "http://www.ecopoliticas.uff.br",
                //   text: "Ecopolíticas"
                // },
                presentation: {
                    description: "A apresentação irá explorar a trajetória de uma empresa internacional iniciada no Rio de Janeiro e a possibilidade de explorar uma carreira empreendedora em um ambiente corporativo",
                    title: "Opções de Carreira em TI",
                  time: "10h00"
                },
            },
            {
                name: "Luis Antônio Kowada",
                photo: "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/205669_1977906093557_7983147_n.jpg?oh=32fbc5579c3e18a9f7a1e6220c6b1798&oe=5861EF6B&__gda__=1483120733_c06296efc936d4e9f62d78d9453c0930",
                bio: "Possui graduação em Bacharelado em Ciência da Computação pela Universidade de Brasília, mestrado em Matemática Aplicada pela Universidade de São Paulo e doutorado em Engenharia de Sistemas e Computação pela Universidade Federal do Rio de Janeiro. Atualmente é professor Associado no Instituto de Computação da Universidade Federal Fluminense. Tem experiência nas áreas de Ciência da Computação e Matemática Aplicada, com ênfase em Teoria da Computação, Matemática Discreta e Combinatória, Computação Quântica, Computação Reversível, Criptografia e Bioinformática. ",
                // link: {
                //     href: "http://github.com/victorlcampos",
                //     text: "@victorlcampos"
                // },
                presentation: {
                    // description: "A apresentação irá explorar a trajetória de uma empresa internacional iniciada no Rio de Janeiro e a possibilidade de explorar uma carreira empreendedora em um ambiente corporativo",
                    title: "Como melhorar o próprio desempenho no curso de graduação",
                    time: "10h50"
                },
            },
            {
                name: "Andre Alves Garzia",
                photo: "https://avatars3.githubusercontent.com/u/23247?v=3&s=466",
                bio: "Andre é fundador da Amora Labs, uma nova escola de programação e ativista da Web. Faz parte da comunidade Mozilla onde atua como Mozilla TechSpeaker  sempre participando de eventos e iniciativas educacionais para desenvolvedores.",
                company: 'Amora Labs',
                link: {
                    href: "https://twitter.com/amoralabs",
                    text: "@amoralabs"
                },
                presentation: {
                    title: "Desenvolvimento de Jogos para a Web",
                    description: "Nesta palestra introdutória vamos aprender o caminho das pedras para desenvolver jogos 2D para a Web. Vamos aprender um pouco da teoria e da prática necessária para que vocês possam iniciar suas próprias criações.",
                    time: "11h40"
                },
            },
            {
                name: 'Almoço',
                time: '12h30'
            },
            {
                name: "Thiago Lopes Toledo",
                photo: "http://www.thiagotoledo.com/curriculo_2016/fotoperfil.jpg",
                bio: "Especialista em desenvolvimento de sistemas para internet e Gestão de equipes ágeis. Formado em Sistemas de Informação para Internet (CEFET) e Pós graduado em Gestão de Projetos pela PUC Rio, já trabalhou e prestou serviços para diversas empresas privadas e instituições de ensino governamentais. ",
                // company: 'Amora Labs',
                link: {
                    href: "https://twitter.com/thiagotoledo",
                    text: "@thiagotoledo"
                },
                presentation: {
                    title: "Programando PHP de maneira mais segura",
                    description: "Palestra sobre segurança no PHP baseado em recomendações presentes no projeto OWASP.",
                    time: "14h00"
                },
            },
            {
                name: "Roberto Ierusalimschy",
                photo: "https://i1.rgstatic.net/ii/profile.image/AS%3A272860702834692%401442066469526_l/Roberto_Ierusalimschy.png",
                bio: "Roberto é professor associado do Departamento de Informática da PUC-Rio e o projetista principal da linguagem Lua.",
                // company: 'Amora Labs',
                // link: {
                //     href: "https://twitter.com/thiagotoledo",
                //     text: "@thiagotoledo"
                // },
                presentation: {
                    title: "Linguagem de Programação Lua",
                    description: "O Projeto de Lua",
                    time: "14h50"
                },
            },
            {
                name: 'Coffe-Break',
                time: '16h30'
            },
            {
                name: "Lucas Roberto da Silva",
                photo: "https://media.licdn.com/media/AAEAAQAAAAAAAAluAAAAJDljMjA1N2QzLTgxYzQtNGEzMS1hNmQ0LWVmNTM3MDkxMTViMg.jpg",
                bio: "Estudante de Matemática na UFF, entusiasta de ciência de dados e Inteligencia artificial, participei do programa ciências sem fronteiras onde estudei Ciências da Computação na Hungria por um ano. Atualmente sou estagiário na Diretoria de Analise de Politicas publicas da FGV ( FGV-DAPP) onde desenvolvo soluções automatizadas para limpeza e coleta de dados.",
                // company: 'Amora Labs',
                link: {
                    href: "https://br.linkedin.com/in/lucas-roberto-da-silva-3543b2b7",
                    text: "LinkedIn"
                },
                presentation: {
                    title: "Analise de dados utilizando Pandas: Substituindo o excel por Python",
                    description: "Esse minicurso mostra como utilizar a biblioteca Pandas para realizar todas as tarefas de analise de dados comumente feitas no excel. Programa: Leitura de dados; Manipulação de dados; Visualização; Agrupamento; Series temporais.",
                    time: "16h50"
                },
            },
            {
                name: "Marcos Mattos",
                photo: "http://placehold.it/150x150",
                // bio: "Formado em ciência da computação na UFRJ, começou ainda na faculdade a empreender sendo co-fundador do Easyaula, startup que foi vencedora Best Consumer Startup Brazil em 2013. Foi moderador do grupo de Ruby on Rails Brasil por 3 anos no facebook e hoje é consultor da Visagio Tecnologia.",
                // link: {
                //     href: "http://github.com/victorlcampos",
                //     text: "@victorlcampos"
                // },
                presentation: {
                    // description: "A apresentação irá explorar a trajetória de uma empresa internacional iniciada no Rio de Janeiro e a possibilidade de explorar uma carreira empreendedora em um ambiente corporativo",
                    // title: "Opções de Carreira em TI",
                    time: "17h40"
                },
            },
            {
                name: "Fernando Severo",
                photo: "http://www.cos.ufrj.br/uploadfile/imagem_pessoas/severo.jpg",
                bio: "Sou engenheiro por formação acadêmica, educador por opção ética e política, mentor de jovens fantásticos por sorte e flamenguista por sina. Tenho mestrado em Engenharia de Sistemas e Computação pela COPPE/UFRJ, sou membro da REPOS  (Rede de Engenharia Popular Osvaldo Sevá) e pesquisador da linha de pesquisa Informática e Sociedade do PESC/COPPE.",
                company: 'PESC-UFRJ',
                // link: {
                //     href: "http://github.com/victorlcampos",
                //     text: "@victorlcampos"
                // },
                presentation: {
                    description: "Através de técnicas de escutatória a palestra replica de forma participativa com a audiência como estudantes da graduação em engenharia da UFRJ enxergam a vida acadêmica para a seguir descrever alguns casos de desenvolvimento de artefatos tecnológicos por uma abordagem das TICs e TACs.",
                    title: "TICs e TACs: refazendo engenheiros no limitar entre as ciências e os segredos. ",
                    time: "18h30"
                },
            },
        ],
        '2016-10-21': [
            // {
            //     name: "Izaías Miguel",
            //     photo: "http://placehold.it/150x150",
            //     bio: "Formado em ciência da computação pela UFRJ, pós-graduado em Gestão de Projetos pela Poli-UFRJ e sócio-diretor da Visagio Tecnologia.",
            //     company: "Visagio",
            //     // link: {
            //     //   href: "http://www.ecopoliticas.uff.br",
            //     //   text: "Ecopolíticas"
            //     // },
            //     presentation: {
            //         description: "A apresentação irá explorar a trajetória de uma empresa internacional iniciada no Rio de Janeiro e a possibilidade de explorar uma carreira empreendedora em um ambiente corporativo",
            //         title: "Opções de Carreira em TI",
            //       time: "10h00"
            //     },
            // },
            {
                name: "Wanderson Trindade",
                photo: "https://media.licdn.com/media/p/8/000/239/0c5/320aed6.jpg",
                bio: "Wanderson Trindade empreendedor digital, pesquisador, geek e nerd convicto. Graduando em Sistemas de Informação da Universidade Federal Fluminense. Representante Estudantil da Sociedade Brasileira de Computação na UFF. Colunista / Crítico de cinema no Blog Não Me Condene. Comunicador de Tecnologia e Inovação do Portal Mídia Criativa. Participa de eventos ao Brasil a fora e de projetos de tecnologia e educação. Veterano pleno do maior evento de tecnologia e inovação a Campus Party Brasil.",
                link: {
                    href: "http://www.twitter.com/trindadewander",
                    text: "@trindadewander"
                },
                presentation: {
                    description: "Na palestra será discutido como a hackathon pode ser um ambiente de troca, aprendizado, cooperação e inovação. E como trazer todas as experiências vividas no evento / competição para sua formação acadêmica e vida social.",
                    title: "Como a hackathon pode ser relevante no desenvolvimento de suas habilidades técnicas e sociais. E como pode ser de suma importância na formação de um estudante",
                    time: "10h50"
                },
            },
            // {
            //     name: "Andre Alves Garzia",
            //     photo: "https://avatars3.githubusercontent.com/u/23247?v=3&s=466",
            //     bio: "Andre é fundador da Amora Labs, uma nova escola de programação e ativista da Web. Faz parte da comunidade Mozilla onde atua como Mozilla TechSpeaker  sempre participando de eventos e iniciativas educacionais para desenvolvedores.",
            //     company: 'Amora Labs',
            //     link: {
            //         href: "https://twitter.com/amoralabs",
            //         text: "@amoralabs"
            //     },
            //     presentation: {
            //         title: "Desenvolvimento de Jogos para a Web",
            //         description: "Nesta palestra introdutória vamos aprender o caminho das pedras para desenvolver jogos 2D para a Web. Vamos aprender um pouco da teoria e da prática necessária para que vocês possam iniciar suas próprias criações.",
            //         time: "11h40"
            //     },
            // },
            {
                name: 'Almoço',
                time: '12h30'
            },
            {
                name: "Leonardo Araujo",
                photo: "http://placehold.it/150x150",
                // bio: "Formado em ciência da computação na UFRJ, começou ainda na faculdade a empreender sendo co-fundador do Easyaula, startup que foi vencedora Best Consumer Startup Brazil em 2013. Foi moderador do grupo de Ruby on Rails Brasil por 3 anos no facebook e hoje é consultor da Visagio Tecnologia.",
                // link: {
                //     href: "http://github.com/victorlcampos",
                //     text: "@victorlcampos"
                // },
                presentation: {
                    // description: "A apresentação irá explorar a trajetória de uma empresa internacional iniciada no Rio de Janeiro e a possibilidade de explorar uma carreira empreendedora em um ambiente corporativo",
                    // title: "Opções de Carreira em TI",
                    time: "14h00"
                },
            },
            {
                name: "Jean Souza",
                photo: "https://lh5.googleusercontent.com/-pHhyy5xYuvQ/AAAAAAAAAAI/AAAAAAAADyQ/G7td3z5cTeM/photo.jpg",
                bio: "Empreendedor Digital, Fundador e CEO do Portal Mídia Criativa - um veículo de comunicação, entretenimento e tecnologia, Fundador do Me Inspirando. Jean Souza mergulhou na comunicação há cerca de 9 anos e atualmente inspira milhares pessoas com marketing digital, assessoria e consultoria digital para empresas.",
                company: 'Me Inspirando',
                link: {
                    href: "http://twitter.com/meinspirando",
                    text: "@meinspirando"
                },
                presentation: {
                    title: "Me Inspirando: Os princípios do empreendedorismo digital, como começar do zero",
                    description: "“Começar do zero”. Esta simples frase é capaz de desmotivar e estagnar milhares de pessoas. No entanto, se você souber como se planejar, a mesma frase pode se tornar uma injeção de motivação. E se eu lhe disser que você terá uma motivação ainda maior, como receber dicas importantes sobre como evitar erros comuns, além de ser apresentado aos métodos que dão mais resultados. É algo sensacional e que, infelizmente, não acontece para todos. Eu vou te dizer como centenas de pessoas foram beneficiadas com isso, inclusive eu. Saiba quais sãos os Princípios para se tornar um empreendedor digital, e o ingrediente nº1 para começar do zero!",
                    time: "14h50"
                },
            },
            {
                name: 'Coffe-Break',
                time: '16h30'
            },
            {
                name: "Raul Sena Ferreira",
                photo: "https://fbcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-0/p206x206/11709560_1112095588805795_2367329567060846007_n.jpg?oh=ccd6b13b3fcc32dd259ae89dc8f450a0&oe=58ABD585&__gda__=1482880905_452ae792fa200783d0a731124b127cae",
                bio: "Sou coordenador técnico de TI dentro deste projeto e trabalhamos com bancos de dados geográficos, nosql, frameworks de teste, framework voltado para desenvolvimento de APIs REST, processamento e visualização intensiva de dados geográficos e etc. Me avise se esta opção for boa, caso não seja eu penso aqui em outra.",
                // company: 'Amora Labs',
                // link: {
                //     href: "https://br.linkedin.com/in/lucas-roberto-da-silva-3543b2b7",
                //     text: "LinkedIn"
                // },
                presentation: {
                    title: "Plataforma das OSCs: Arquitetura, técnicas, tecnologias e desafios na construção do sistema mais importante do IPEA",
                    description: "Esta palestra visa mostrar como o setor de tecnologia do Instituto de Pesquisa Econômica Aplicada (IPEA) está desenvolvendo uma API REST capaz de entregar informações de milhares ou até milhões de registros de forma eficiente. Também são mostradas as técnicas desenvolvidas, tecnologias utilizadas tanto no front-end quanto no back-end, arquitetura do sistema e os vários desafios encontrados no desenvolvimento do sistema mais importante do IPEA voltado para tornar aberto, os dados de todas as organizações da sociedade civil do país.",
                    time: "16h50"
                },
            },
            {
                name: "Karina Mochetti",
                photo: "http://www2.ic.uff.br/~kmochetti/me.jpg",
                bio: "Eu terminei o meu mestrado em Marcas d'Água e Proteção de Direitos Autorais em 2009, e meu doutorado em Criptografia Pós-Quântica em 2014, ambos na UNICAMP. Eu me formei em Engenharia da Computação também pela UNICAMP em 2006, durante o qual eu fiz uma pesquisa de um ano sobre Visualização de Imagens Médicas. Meu campo de pesquisa principal é Computação Quântica, mas eu também tenho interesse por Criptografia, Complexidade e Teoria da Computação. Em 2012 tive a experiência incrível de fazer parte dos meus estudos de doutorado em Paris, na École Normale Supérieure (ENS) e em 2013 conquistei oportunidade de fazer um estágio no Google. Atualmente eu sou Professora Adjunta da Universidade Federal Fluminense (UFF) e eu sou uma das coordenadoras do Projeto #include <meninas.uff>, um grupo para motivar alunas do ensino médio e fundamental a tentar uma carreira em Ciência da Computação e emponderar as alunas já inscritas nos cursos de graduação e pós-graduação do Instituto de Computação da UFF.",
                presentation: {
                    title: "Introdução à Computação Quântica",
                    description: "A utilização de bits quânticos (qubits), que possuem propriedades especiais como o entrelaçamento e a sobreposição de estados, possibilita resolver certos problemas de forma muito mais eficiente do que num sistema clássico. Nesta palestra os conceitos básicos de computação quântica serão apresentados, assim como a matemática necessária para a boa compreensão da área. O objetivo final é descrever o Código Superdenso, principal e mais simples protocolo quântico, que possibilita a transmissão de dois bits clássicos, utilizando somente um qubit. Nenhum conhecimento de física quântica é necessário para acompanhar a palestra.",
                    time: "16h50",
                    type: 'Palestra'
                },
            },
            {
                name: "Aline Carvalho",
                photo: "http://recife.campus-party.org/files/large/4868a1c4e22ae5d0774c85139664e22e.png",
                bio: "Graduada em Psicologia pela Universidad de Chile, Embaixadora da Campus Party, Ativista do For Women in Science projeto da L'Oréal em parceria com a UNESCO e Academia Brasileira de Ciências para promover mulheres na ciência. ",
                // company: 'PESC-UFRJ'
                link: {
                    href: "http://twitter.com/Campuseira",
                    text: "@Campuseira"
                },
                presentation: {
                    description: "Quais são as principais barreiras que impedem as mulheres de escolherem e exercerem carreiras em áreas de tecnologia e como algumas mulheres tem sido bem sucedidas em vencer essas barreiras e ser exemplo para as estudantes de hoje em dia que pretendem se graduar em áreas da tecnologia.",
                    title: "As conquistas e desafios das mulheres na tecnologia ",
                    time: "18h30"
                }
            }
        ]
    },

    // List of Sponsors
    sponsors: [
      // {
      //   name: "Eventick",
      //   logo: "themes/yellow-swan/img/sponsor.png",
      //   url: "http://eventick.com.br"
      // }
    ],

    // List of Partners
    partners: [
        {
            name: "Instituto de Computação - UFF",
            logo: "themes/yellow-swan/img/ic-uff.png",
            url: "http://www.ic.uff.br/"
        },
        {
            name: "Portal Mídia Criativa",
            logo: "http://portalmidiacriativa.com/wp-content/uploads/2016/07/PMC-Portal-M%C3%ADdia-Criativa.png",
            url: "http://portalmidiacriativa.com/"
        }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
