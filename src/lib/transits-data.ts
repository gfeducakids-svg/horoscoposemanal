export type Sign =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export const transits = {
  aries: {
    card1: {
      title: 'MARTE EM LEÃO está ativando sua zona de impulso e risco',
      text: 'Você vai sentir vontade de agir RÁPIDO demais. Mas cuidado: decisões impulsivas agora custam caro depois.\nOs próximos 30 dias serão decisivos para não queimar pontes importantes.',
    },
    card2: {
      title: 'SATURNO EM PEIXES pode frear sua ansiedade de ação',
      text: 'Você vai sentir frustração e impaciência entre os dias 15 e 28.\nÉ o momento perfeito para planejar antes de agir, mas evite paralisar por excesso de cautela.',
    },
    card3: {
      title: 'PLUTÃO EM AQUÁRIO te convida a recomeçar com estratégia',
      text: 'Essa é sua janela para transformar impulso em poder direcionado.\nQuem aproveita esse portal consegue liderar sem se queimar.\nQuem ignora... repete os erros de 2015.',
    },
  },
  taurus: {
    card1: {
      title: 'URANO EM GÊMEOS está ativando sua zona de segurança',
      text: 'Mudanças chegam querendo ou não. Mas cuidado: resistir vai doer mais que aceitar.\nOs próximos 60 dias serão decisivos para soltar o controle sem perder o chão.',
    },
    card2: {
      title: 'JÚPITER EM CÂNCER pode expandir sua estabilidade emocional',
      text: 'Você vai sentir vontade de construir algo sólido entre os dias 10 e 25.\nÉ o momento perfeito para investir em você, mas evite gastar por conforto emocional.',
    },
    card3: {
      title: 'SATURNO EM PEIXES te convida a reorganizar sua base',
      text: 'Essa é sua janela para criar segurança interna, não externa.\nQuem aproveita esse portal consegue prosperar sem depender de ninguém.\nQuem ignora... fica presa no que já não serve.',
    },
  },
  gemini: {
    card1: {
      title: 'URANO EM GÊMEOS está ativando sua zona de mudança radical',
      text: 'Você está entrando num novo capítulo. Mas cuidado: dispersão vai te custar oportunidades.\nOs próximos 7 anos serão decisivos para focar no que importa de verdade.',
    },
    card2: {
      title: 'MERCÚRIO RETRÓGRADO pode embaralhar sua comunicação',
      text: 'Você vai sentir confusão mental e indecisão entre os dias 5 e 20.\nÉ o momento perfeito para revisar planos, mas evite tomar decisões grandes.',
    },
    card3: {
      title: 'NETUNO EM ÁRIES te convida a canalizar suas mil ideias',
      text: 'Essa é sua janela para transformar criatividade em realização.\nQuem aproveita esse portal consegue terminar o que começou.\nQuem ignora... acumula projetos inacabados pra sempre.',
    },
  },
  cancer: {
    card1: {
      title: 'JÚPITER EM CÂNCER está ativando sua zona de expansão emocional',
      text: 'Você vai crescer, mas precisa soltar mágoas antes. Cuidado: carregar o passado bloqueia o novo.\nOs próximos 12 meses serão decisivos para curar e renascer.',
    },
    card2: {
      title: 'LUA CHEIA EM CAPRICÓRNIO pode expor suas feridas emocionais',
      text: 'Você vai sentir dor de padrões antigos entre os dias 12 e 18.\nÉ o momento perfeito para liberar o que te prende, mas evite se fechar de novo.',
    },
    card3: {
      title: 'PLUTÃO EM AQUÁRIO te convida a perdoar (inclusive você mesma)',
      text: 'Essa é sua janela para transformar dor em sabedoria.\nQuem aproveita esse portal consegue amar sem medo de novo.\nQuem ignora... repete os mesmos relacionamentos tóxicos.',
    },
  },
  leo: {
    card1: {
      title: 'MARTE EM LEÃO está ativando sua zona de poder pessoal',
      text: 'Você vai brilhar como nunca. Mas cuidado: arrogância afasta quem você ama.\nOs próximos 45 dias serão decisivos para liderar com o coração, não com o ego.',
    },
    card2: {
      title: 'SOL EM AQUÁRIO pode te fazer buscar validação externa',
      text: 'Você vai sentir necessidade de aprovação entre os dias 8 e 22.\nÉ o momento perfeito para reconhecer seu próprio valor, mas evite depender de elogios.',
    },
    card3: {
      title: 'NETUNO EM ÁRIES te convida a brilhar por dentro primeiro',
      text: 'Essa é sua janela para liderar sendo autêntica, não perfeita.\nQuem aproveita esse portal consegue ser admirada sendo real.\nQuem ignora... vive uma vida que parece boa só por fora.',
    },
  },
  virgo: {
    card1: {
      title: 'SATURNO EM PEIXES está ativando sua zona de perfeccionismo',
      text: 'Você precisa parar de se cobrar tanto. Mas cuidado: exigência virou autossabotagem.\nOs próximos 90 dias serão decisivos para fazer sem ser perfeita.',
    },
    card2: {
      title: 'MERCÚRIO EM VIRGEM pode intensificar sua autocrítica',
      text: 'Você vai sentir pensamentos em loop entre os dias 14 e 28.\nÉ o momento perfeito para organizar com leveza, mas evite analisar tudo até travar.',
    },
    card3: {
      title: 'JÚPITER EM CÂNCER te convida a confiar no fluxo',
      text: 'Essa é sua janela para entregar o controle e ainda assim prosperar.\nQuem aproveita esse portal consegue fazer mais trabalhando menos.\nQuem ignora... se esgota tentando controlar tudo.',
    },
  },
  libra: {
    card1: {
      title: 'VÊNUS EM ESCORPIÃO está ativando sua zona de escolhas difíceis',
      text: 'Você precisa escolher POR VOCÊ. Mas cuidado: agradar todo mundo te afasta de você mesma.\nOs próximos 30 dias serão decisivos para colocar limites sem culpa.',
    },
    card2: {
      title: 'ECLIPSE EM ÁRIES pode forçar você a se posicionar',
      text: 'Você vai sentir pressão pra decidir entre os dias 10 e 17.\nÉ o momento perfeito para escolher seu lado, mas evite buscar consenso em tudo.',
    },
    card3: {
      title: 'PLUTÃO EM AQUÁRIO te convida a viver sua verdade, não a paz falsa',
      text: 'Essa é sua janela para ser amada sendo honesta, não conveniente.\nQuem aproveita esse portal consegue relacionamentos reais.\nQuem ignora... vive cercada de gente mas se sente sozinha.',
    },
  },
  scorpio: {
    card1: {
      title: 'PLUTÃO EM AQUÁRIO está ativando sua zona de morte e renascimento',
      text: 'Algo precisa morrer pra você renascer. Mas cuidado: segurar o velho impede o novo.\nOs próximos 3 meses serão decisivos para soltar o que te consome.',
    },
    card2: {
      title: 'LUA NOVA EM ESCORPIÃO pode intensificar suas emoções',
      text: 'Você vai sentir vontade de transformar tudo entre os dias 6 e 14.\nÉ o momento perfeito para recomeçar profundamente, mas evite destruir por impulso.',
    },
    card3: {
      title: 'MARTE EM CÂNCER te convida a curar antes de agir',
      text: 'Essa é sua janela para renascer mais forte, não mais amarga.\nQuem aproveita esse portal consegue se libertar do passado.\nQuem ignora... carrega peso que não é mais seu.',
    },
  },
  sagittarius: {
    card1: {
      title: 'JÚPITER EM GÊMEOS está ativando sua zona de expansão e dispersão',
      text: 'Oportunidades chegam de todos os lados. Mas cuidado: querer tudo é conseguir nada.\nOs próximos 6 meses serão decisivos para focar numa direção de verdade.',
    },
    card2: {
      title: 'SATURNO EM PEIXES pode limitar sua liberdade temporariamente',
      text: 'Você vai sentir sensação de prisão entre os dias 11 e 25.\nÉ o momento perfeito para construir bases sólidas, mas evite fugir de compromissos reais.',
    },
    card3: {
      title: 'NETUNO EM ÁRIES te convida a expandir com profundidade',
      text: 'Essa é sua janela para ir longe sem se perder.\nQuem aproveita esse portal consegue liberdade com propósito.\nQuem ignora... vive correndo mas nunca chega a lugar nenhum.',
    },
  },
  capricorn: {
    card1: {
      title: 'SATURNO EM PEIXES está ativando sua zona de descanso forçado',
      text: 'Você precisa parar antes que o corpo te obrigue. Mas cuidado: trabalhar até quebrar não é força.\nOs próximos 60 dias serão decisivos para reconstruir com equilíbrio.',
    },
    card2: {
      title: 'PLUTÃO EM AQUÁRIO pode transformar sua relação com sucesso',
      text: 'Você vai sentir questionamento sobre "o que eu quero de verdade" entre os dias 9 e 23.\nÉ o momento perfeito para redefinir suas metas, mas evite largar tudo por cansaço.',
    },
    card3: {
      title: 'JÚPITER EM CÂNCER te convida a prosperar sem sacrificar sua alma',
      text: 'Essa é sua janela para ter sucesso E paz.\nQuem aproveita esse portal consegue conquistar sendo humana.\nQuem ignora... chega no topo vazia por dentro.',
    },
  },
  aquarius: {
    card1: {
      title: 'PLUTÃO EM AQUÁRIO está ativando sua zona de reinvenção total',
      text: 'Você tá entrando numa nova era. Mas cuidado: fugir da emoção te desconecta da vida.\nOs próximos 20 anos serão decisivos para inovar SEM se isolar.',
    },
    card2: {
      title: 'LUA CHEIA EM LEÃO pode expor sua carência emocional escondida',
      text: 'Você vai sentir necessidade de conexão real entre os dias 7 e 15.\nÉ o momento perfeito para se abrir de verdade, mas evite intelectualizar o que é sentimento.',
    },
    card3: {
      title: 'NETUNO EM ÁRIES te convida a sentir sem perder sua essência',
      text: 'Essa é sua janela para ser única E conectada.\nQuem aproveita esse portal consegue relacionamentos profundos sendo autêntica.\nQuem ignora... vive livre mas emocionalmente sozinha.',
    },
  },
  pisces: {
    card1: {
      title: 'SATURNO EM PEIXES está ativando sua zona de limites necessários',
      text: 'Você precisa aprender a dizer não. Mas cuidado: absorver tudo dos outros te esgota.\nOs próximos 3 anos serão decisivos para se proteger sem se fechar.',
    },
    card2: {
      title: 'NETUNO EM ÁRIES pode te empurrar pra ação sem clareza',
      text: 'Você vai sentir confusão entre intuição e ilusão entre os dias 13 e 27.\nÉ o momento perfeito para criar limites energéticos, mas evite se perder tentando salvar todo mundo.',
    },
    card3: {
      title: 'JÚPITER EM CÂNCER te convida a cuidar de você como cuida dos outros',
      text: 'Essa é sua janela para ser sensível com fronteiras saudáveis.\nQuem aproveita esse portal consegue ajudar sem se drenar.\nQuem ignora... vive exausta sendo todo mundo menos você.',
    },
  },
};
