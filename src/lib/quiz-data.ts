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

export const zodiacSigns: { id: Sign; name: string; symbol: string }[] = [
  { id: 'aries', name: 'Áries', symbol: '♈' },
  { id: 'taurus', name: 'Touro', symbol: '♉' },
  { id: 'gemini', name: 'Gêmeos', symbol: '♊' },
  { id: 'cancer', name: 'Câncer', symbol: '♋' },
  { id: 'leo', name: 'Leão', symbol: '♌' },
  { id: 'virgo', name: 'Virgem', symbol: '♍' },
  { id: 'libra', name: 'Libra', symbol: '♎' },
  { id: 'scorpio', name: 'Escorpião', symbol: '♏' },
  { id: 'sagittarius', name: 'Sagitário', symbol: '♐' },
  { id: 'capricorn', name: 'Capricórnio', symbol: '♑' },
  { id: 'aquarius', name: 'Aquário', symbol: '♒' },
  { id: 'pisces', name: 'Peixes', symbol: '♓' },
];

export const questions = {
  2: {
    key: 'signQuestion1',
    aries: {
      question: 'Áries, você é puro fogo e coragem... mas me diz: Quantas vezes você já agiu rápido demais e depois pensou "puts, eu deveria ter esperado mais um pouco"?',
      options: [
        'Toda hora, é meu padrão 🔥',
        'Às vezes, mas não me arrependo muito',
        'Raramente, confio nos meus impulsos',
        'Tô tentando aprender a pausar antes de agir',
      ],
    },
    taurus: {
      question: 'Touro, você valoriza estabilidade... mas responde com sinceridade: Você já ficou em alguma situação (relacionamento, trabalho, rotina) mais tempo do que deveria só por medo de recomeçar?',
      options: ['Sim, e ainda tô nela', 'Sim, mas consegui sair', 'Não, eu sei quando é hora de ir', 'Tô nesse dilema agora'],
    },
    gemini: {
      question: 'Gêmeos, sua mente é brilhante... mas me conta: Quantas ideias/projetos/planos você começou nos últimos 6 meses e não terminou porque já pulou pra outro?',
      options: ['Umas 10, fácil 😅', 'Alguns, mas é meu processo criativo', 'Poucos, consigo focar quando quero', 'Não sei, perdi a conta'],
    },
    cancer: {
      question: 'Câncer, seu coração é profundo... Você ainda carrega alguma mágoa ou decepção que te impede de se abrir completamente de novo?',
      options: ['Sim, e dói até hoje', 'Sim, mas tô tentando curar', 'Não, consigo perdoar e seguir', 'Não sei se já curei de verdade'],
    },
    leo: {
      question: 'Leão, você brilha naturalmente... Mas quantas vezes você já fez algo MAIS pela aprovação dos outros do que por você mesma(o)?',
      options: ['Mais do que eu gostaria de admitir', 'Às vezes, mas tô trabalhando nisso', 'Raramente, sei meu valor', 'Tô percebendo que faço isso agora'],
    },
    virgo: {
      question: 'Virgem, você é detalhista e responsável... Quantas oportunidades você já deixou passar porque "ainda não estava pronta" ou "perfeita" o suficiente?',
      options: ['Várias, me cobro demais', 'Algumas, mas é pra fazer direito', 'Poucas, sei quando estou pronta', 'Tô travada nisso agora'],
    },
    libra: {
      question: 'Libra, você busca harmonia... Quantas vezes você já deixou de fazer o que queria pra não desagradar alguém ou causar conflito?',
      options: ['Sempre, é automático', 'Frequentemente, mas me incomoda', 'Raramente, sei me posicionar', 'Tô aprendendo a escolher por mim'],
    },
    scorpio: {
      question: 'Escorpião, você sente tudo profundamente... Existe algo (pessoa, situação, hábito) que você SABE que precisa deixar ir, mas ainda segura?',
      options: ['Sim, e tá me consumindo', 'Sim, mas tenho medo de soltar', 'Não, já liberei o que precisava', 'Tô no processo de soltar agora'],
    },
    sagittarius: {
      question: 'Sagitário, você ama liberdade e aventuras... Você já fugiu de algo importante (compromisso, profundidade, decisão) porque parecia "pesado demais" ou "limitante"?',
      options: ['Sim, várias vezes', 'Sim, mas foi pra me proteger', 'Não, sei me comprometer quando quero', 'Tô percebendo que faço isso'],
    },
    capricorn: {
      question: 'Capricórnio, você é a pessoa mais responsável que conheço... Quando foi a última vez que você fez algo SÓ porque queria, sem pensar em "resultado" ou "dever"?',
      options: ['Nem lembro', 'Raramente, me sinto culpada(o)', 'Consigo, mas é difícil', 'Tô tentando aprender isso agora'],
    },
    aquarius: {
      question: 'Aquário, você é única(o) e visionária(o)... Você já se sentiu tão "diferente" que se desconectou das próprias emoções pra se proteger?',
      options: ['Sim, é meu mecanismo de defesa', 'Sim, mas quero me reconectar', 'Não, consigo sentir profundamente', 'Tô aprendendo a equilibrar razão e emoção'],
    },
    pisces: {
      question: 'Peixes, você sente tudo... Quantas vezes você já absorveu a dor de alguém a ponto de esquecer onde você termina e o outro começa?',
      options: ['Sempre, é exaustivo', 'Frequentemente, mas tô aprendendo', 'Raramente, tenho limites claros', 'Tô tentando me proteger agora'],
    },
  },
  3: {
    key: 'signQuestion2',
    aries: {
      question: 'Quando você sente que precisa FAZER ALGO AGORA, o que mais te bloqueia?',
      options: ['Medo de estar agindo por impulso', 'Opinião dos outros me freando', 'Nada me bloqueia, eu vou mesmo assim', 'A dúvida se é intuição ou ansiedade'],
    },
    taurus: {
      question: 'O que você mais precisa sentir pra ter coragem de mudar?',
      options: ['Garantia de que vai dar certo', 'Segurança financeira/emocional antes', 'Alguém que me apoie na mudança', 'Clareza de que é o momento certo'],
    },
    gemini: {
      question: 'Se você pudesse ter UMA COISA agora, seria:',
      options: ['Foco pra terminar o que comecei', 'Clareza sobre qual caminho seguir', 'Paciência pra não me dispersar', 'Alguém que organize minhas ideias comigo'],
    },
    cancer: {
      question: 'O que você mais precisa pra se sentir segura(o) pra recomeçar emocionalmente?',
      options: ['Tempo pra processar sozinha(o)', 'Alguém que me entenda de verdade', 'Certeza de que não vou me machucar de novo', 'Clareza sobre o que eu realmente sinto'],
    },
    leo: {
      question: 'Se ninguém estivesse olhando, o que você faria diferente?',
      options: ['Mudaria totalmente de caminho', 'Me expressaria sem medo do julgamento', 'Priorizaria meu bem-estar acima de tudo', 'Seguiria meu coração sem duvidar'],
    },
    virgo: {
      question: 'Se você pudesse desligar a autocrítica por 1 dia, o que você faria?',
      options: ['Tomaria aquela decisão que tô adiando', 'Me permitiria errar sem culpa', 'Pararia de analisar tudo', 'Me daria um descanso merecido'],
    },
    libra: {
      question: 'Se você soubesse que TODO MUNDO vai entender e apoiar, qual decisão você tomaria HOJE?',
      options: ['Terminaria/começaria um relacionamento', 'Mudaria de área/carreira', 'Colocaria limites em alguém importante', 'Seguiria meu caminho sem pedir permissão'],
    },
    scorpio: {
      question: 'O que você mais precisa pra fazer as pazes com um recomeço doloroso?',
      options: ['Entender o "porquê" disso ter acontecido', 'Sentir que não perdi tempo', 'Vingança energética (renascer melhor que antes)', 'Perdoar a mim mesma(o) pelo que senti'],
    },
    sagittarius: {
      question: 'Se você pudesse ter expansão E profundidade ao mesmo tempo, o que você faria?',
      options: ['Me comprometeria com um caminho de verdade', 'Pararia de fugir de conversas difíceis', 'Construiria algo sólido sem perder minha essência', 'Me conectaria com alguém sem medo de me prender'],
    },
    capricorn: {
      question: 'Se você pudesse ter sucesso SEM sacrifício, o que você faria diferente?',
      options: ['Descansaria sem culpa', 'Priorizaria minha saúde emocional', 'Me permitiria ser "improdutiva" às vezes', 'Viveria mais o presente'],
    },
    aquarius: {
      question: 'Se você pudesse ter inovação E conexão emocional profunda, você escolheria:',
      options: ['Me abrir mais nas relações', 'Parar de intelectualizar tudo', 'Aceitar que preciso de pessoas', 'Criar algo que transforme E me realize emocionalmente'],
    },
    pisces: {
      question: 'O que você mais precisa pra se sentir segura(o) sem deixar de ser quem você é?',
      options: ['Limites emocionais saudáveis', 'Alguém que me proteja também', 'Clareza sobre o que é meu e o que é do outro', 'Permissão pra dizer "não" sem culpa'],
    },
  },
  4: {
    key: 'areaOfLife',
    question: 'Em qual área da vida você mais sente que precisa de um recomeço AGORA?',
    options: [
      '💗 Amor e relacionamentos',
      '💼 Carreira e propósito',
      '🧘 Autoconhecimento e paz interior',
      '🌀 Todas, minha vida tá um caos organizado',
    ],
  },
  5: {
    key: 'decisionPattern',
    question: 'Quando você precisa tomar uma decisão importante, o que mais acontece?',
    options: [
      'Fico paralisada com medo de errar',
      'Decido rápido e depois fico na dúvida',
      'Peço opinião de todo mundo e me perco',
      'Sigo minha intuição, mas às vezes desconfio dela',
    ],
  },
  6: {
    key: 'currentSensation',
    question: 'Você já teve a sensação de que tudo ao seu redor está mudando... mas você ainda não sabe pra onde ir?',
    options: [
      'Constantemente, parece que estou entre dois mundos',
      'Às vezes, mas não sei o que fazer com isso',
      'Raramente, mas quando sinto é muito forte',
      'Não agora, mas já senti muito isso antes',
    ],
  },
  7: {
    key: 'overloadMental',
    question: 'O que mais tem te deixado com a cabeça cheia ultimamente?',
    options: [
      '💔 Relacionamentos confusos ou que não andam',
      '🎯 Dúvidas sobre meu propósito e carreira',
      '😰 Ansiedade sobre o futuro e sensação de estar perdida',
      '🌀 Tudo isso ao mesmo tempo',
    ],
  },
  8: {
    key: 'relationshipChallenge',
    question: 'O que mais te desafia?',
    options: [
      'Repetir padrões que já sei que não funcionam',
      'Me doar demais e esquecer de mim',
      'Escolher mal por carência ou medo de ficar só',
      'Sentir que a energia nunca tá alinhada',
    ],
  },
  9: {
    key: 'deepestDesire',
    question: 'Quando você pensa no seu futuro próximo, o que mais deseja sentir?',
    options: [
      '✨ Clareza sobre o que fazer',
      '🕊️ Paz de espírito e leveza emocional',
      '🔥 Confiança para recomeçar',
      '🦋 Liberdade para seguir minha intuição',
    ],
  },
  10: {
    key: 'commitment',
    question: 'Você promete que vai usar essa clareza pra agir de verdade?',
    options: [
      '🔥 Sim! Eu preciso e vou usar',
      '💭 Vou tentar... mas tenho medo',
      '🌙 Só quero entender o que tá acontecendo',
    ],
  },
};
