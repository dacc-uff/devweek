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
    schedule: [
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
                description: " Conhecer a a filosofia por trás da ferramenta que você está aplicando para resolver um problema é tão importante quanto conhecer a ferramenta em si.<br /> No longo prazo será essa filosofia que guiará a comunidade e o desenvolvimento das próximas versões e entende-la fará com que você escreva código que seja facilmente atualizável.<br /> Nessa palestra trago os 9 pilares que guiam o desenvolvimento dessa framework que revolucionou a web.",
                time: "10h50"
            },
        },
        {
            name: "Everson Alcantara",
            photo: "https://avatars2.githubusercontent.com/u/1539610?v=3&s=466",
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
    ],

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
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/ic-uff.png",
        url: "http://www.ic.uff.br/"
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
