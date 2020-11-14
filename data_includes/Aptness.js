
//EXPERIMENTO DE LEITURA AUTOMONITORADA - FRASES METAFÓRICAS - APTNESS


var shuffleSequence = seq("setcounter", "intro99", "tcle", "demografia", "intro1", "pratica1", "intro2", "pratica2", "sep", "intro3", sepWith("sep", rshuffle(startsWith("exp"), startsWith("F"))), "hiddenCompletionCode");

// Define valores default a serem usados em todo o experimento

var defaults = [
  "Question", {as: ["Sim", "Não"], randomOrder: false} // randomOrder em false indica que as questoes sao sempre apresentadas em uma ordem fixa (primeiro sim, depois nao)
  ];

var progressBarText = "progresso"; 

var sendingResultsMessage = "Aguarde enquanto salvamos suas respostas. Isso pode levar alguns segundos - por favor, não feche a janela ainda.";

var completionMessage = "Muito obrigado por sua participação, você já pode fechar esta janela em seu navegador!";

var items = [
  
  // separator: mensagem mostrada entre os itens 
  
  ["sep", "Separator", {transfer: "keypress", normalMessage: "Correto! Pressione qualquer tecla para continuar", errorMessage: "Errado - Pressione qualquer tecla para continuar"}],
  
  // formularios apresentados como tcle, demografia e instrucoes

  ["intro99", "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "intro99.html" }} ],
  
  ["tcle", "Form", {consentRequired: true, continueMessage: "Clique aqui para continuar", html: {include: "tcle.html"}}],  

  ["demografia", "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "demografia.html"}}],
  
  ["intro1", "Form", {consentRequired: false, continueMessage: "Clique aqui para ver um exemplo", html: {include: "intro1.html" }} ],
  
  ["intro2", "Form", {consentRequired: false, continueMessage: "Clique aqui para ver um exemplo", html: {include: "intro2.html" }} ],
  
  ["intro3", "Form", {consentRequired: false, continueMessage: "Clique aqui para começar o experimento", html: {include: "intro3.html" }} ],
  
// itens para pratica 

  ["pratica1", "DashedSentence", {s: "Essa sentença é apenas um exemplo simples. \n Você lerá sentenças como essas no experimento."}, "Question", {hasCorrect:"Sim", q: "Essa sentença foi um exemplo?"}],          
  
  ["pratica2", "DashedSentence", {s: "João adorava contar uma boa fofoca para seus amigos. \n Foi por isso que ele ficou chateado por Maria já ter contado tudo a Pedro."},
   "Question", {hasCorrect: "Não", q: "João contou a fofoca a Pedro?"}],

  
// itens distratores
  
  ["F-1filler", "DashedSentence", {s: "Harry Potter era um dos meus livros preferidos. \n Assim, dei a coleção ao sobrinho."},
   "Question", {hasCorrect: "Sim", q: "Meu sobrinho ganhou uma coleção do Harry Potter?"}],
  ["F-2filler", "DashedSentence", {s: "Nosso herói entrou na mata. \n Lá, lutou com seu inimigo por sua honra."}, 
   "Question", {hasCorrect: "Não", q: "O herói desistiu da luta?"}],
  ["F-3filler", "DashedSentence", {s: "Perto da cachoeira havia flores e plantas centenárias. \n Viviam na floresta encantada."},
   "Question", {hasCorrect: "Sim", q: "As flores e plantas estavam ali havia muito tempo?"}],
  ["F-4filler", "DashedSentence", {s: "Meu queixo tremia com o frio naquela noite. \n Precisei de cobertas para me aquecer."},
   "Question", {hasCorrect: "Não", q: "Precisei de lençóis para me aquecer?"}],
  ["F-5filler", "DashedSentence", {s: "Jonas se preparou muito para a prova. \n Ele precisava de um dez."},
   "Question", {hasCorrect: "Sim", q: "Jonas estudou bastante?"}],
  ["F-6filler", "DashedSentence", {s: "Há programas espaciais em alguns países. \n O programa Apollo lançou foguetes à Lua."},
   "Question", {hasCorrect: "Sim", q: "Foguetes foram lançados para a Lua?"}],
  ["F-7filler", "DashedSentence", {s: "Alguns animais vivem isolados. \n Ursos brancos moram no Ártico e são caçadores ferozes."},
   "Question", {hasCorrect: "Não", q: "Os ursos brancos habitam regiões quentes?"}],
  ["F-8filler", "DashedSentence", {s: "Haverá missões tripuladas para Marte. \n Astronautas ficarão sós no planeta vermelho."},
   "Question", {hasCorrect: "Sim", q: "O planeta Marte poderá ser alcançado?"}],
  ["F-9filler", "DashedSentence", {s: "Chuvas fortes são alívio em shows musicais. \n Aplacam o calor da estação mais quente do ano."},
   "Question", {hasCorrect: "Não", q: "As chuvas aumentam o calor do verão?"}],
  ["F-10filler", "DashedSentence", {s: "Televisores são baratos e fáceis de adquirir. \n Contudo, defeitos são caros para serem sanados."},
   "Question", {hasCorrect: "Não", q: "Aparelhos de TV são caros?"}],
  ["F-11filler", "DashedSentence", {s: "Robôs gigantes aparecem em filmes. \n Um duelo com robôs ocorreu entre Japão e Estados Unidos."},
   "Question", {hasCorrect: "Sim", q: "Os robôs duelaram?"}],
  ["F-12filler", "DashedSentence", {s: "Torneios de surf podem acabar mau. \n Um tubarão atacou um surfista e acabou com a competição."},
   "Question", {hasCorrect: "Sim", q: "O surfista foi atacado?"}],
  ["F-13filler", "DashedSentence", {s: "Regras turísticas vêm sofrendo mudanças. \n Isso provocou uma abertura para outros países."},
   "Question", {hasCorrect: "Sim", q: "Houve abertura para outros países?"}],
  ["F-14filler", "DashedSentence", {s: "Um rapaz saltou de um penhasco. \n Alguns meninos viram a morte do paraquedista."},
   "Question", {hasCorrect: "Não", q: "Os meninos saltaram?"}],
  ["F-15filler", "DashedSentence", {s: "Um padre de Londres fez previsões para 2021. \n Os fiéis ouviram o sacerdote pessimista."},
   "Question", {hasCorrect: "Não", q: "O padre era do Brasil?"}],
  ["F-16filler", "DashedSentence", {s: "Gertrudes atropelou um cachorro. \n O animal brincava com um velho osso."},
   "Question", {hasCorrect: "Sim", q: "O osso era velho?"}],
    
   
// itens experimentais
 
  [["exp.afc", 1], "DashedSentence", {s: "Suzana é uma cobra. \n Ela é muito traiçoeira."}, "Question", {hasCorrect: "Não", q: "Suzana é confiável?"}],
  [["exp.anfnc", 1], "DashedSentence", {s: "Suzana é uma ilha.  \n Nunca se mistura conosco."}, "Question", {hasCorrect: "Sim", q: "Suzana é reservada?"}],
  [["exp.ctrl", 1], "DashedSentence", {s: "Suzana é uma jovem. \n Ela deve ter uns dez anos."}, "Question", {hasCorrect: "Não", q: "Suzana é velha?"}],
  
  [["exp.afc", 2], "DashedSentence", {s: "Amarildo é um touro. \n Ele é forte e invencível."}, "Question", {hasCorrect: "Sim", q: "Amarildo tem muita força?"}],
  [["exp.anfnc", 2], "DashedSentence", {s: "Miguelito é um santo. \n Faz tudo que os netos querem."}, "Question", {hasCorrect: "Não", q: "Miguelito é uma criança?"}],
  [["exp.ctrl", 2], "DashedSentence", {s: "Ferdinando é um touro. \n Figurou num filme da Disney."}, "Question", {hasCorrect: "Sim", q: "Ferdinando é personagem do cinema? "}],
  
  [["exp.afc", 3], "DashedSentence", {s: "Soraia é uma gata. \n Chama a atenção de todos."}, "Question", {hasCorrect: "Sim", q: "Soraia é bonita?"}],
  [["exp.anfnc", 3], "DashedSentence", {s: "Frederico é um urso. \n Tem pelos por todo o corpo."}, "Question", {hasCorrect: "Sim", q: "Frederico é peludo?"}],
  [["exp.ctrl", 3], "DashedSentence", {s: "Jujuba é uma gata. \n Extremamente meiga, sempre."}, "Question", {hasCorrect: "Sim", q: "Jujuba é dócil?"}],
  
  [["exp.afc", 4], "DashedSentence", {s: "Luíza é uma lesma. \n Só atravanca o tráfego."}, "Question", {hasCorrect: "Sim", q: "Luíza é lenta no trânsito?"}],
  [["exp.anfnc", 4], "DashedSentence", {s: "Antonino é um pato. \n Quase sempre é enganado."}, "Question", {hasCorrect: "Não", q: "Antonino é esperto?"}],
  [["exp.ctrl", 4], "DashedSentence", {s: "Luíza é uma atriz. \n Atua na TV francesa."}, "Question", {hasCorrect: "Não", q: "Luíza trabalha na polícia?"}],
  
  [["exp.afc", 5], "DashedSentence", {s: "Helena é uma mala. \n Chata igual é impossível."}, "Question", {hasCorrect: "Não", q: "Helena é uma marca de malas?"}],
  [["exp.anfnc", 5], "DashedSentence", {s: "Rosana é uma rocha. \n Sempre firme e decidida."}, "Question", {hasCorrect: "Não", q: "Rosana é indecisa?"}],
  [["exp.ctrl", 5], "DashedSentence", {s: "Helena é uma chata. \n Chata igual é impossível."}, "Question", {hasCorrect: "Não", q: "Helena é agradável?"}],
  
  [["exp.afc", 6], "DashedSentence", {s: "Marilu é uma porca. \n Sua cozinha é imunda."}, "Question", {hasCorrect: "Não", q: "Marilu é asseada?"}],
  [["exp.anfnc", 6], "DashedSentence", {s: "Elisandro é um zumbi. \n Triste, a vida do drogado."}, "Question", {hasCorrect: "Sim", q: "Elisandro é viciado em drogas?"}],
  [["exp.ctrl", 6], "DashedSentence", {s: "Paçoca é uma porca. \n Sempre limpa e arrumada."}, "Question", {hasCorrect: "Não", q: "Paçoca é suja?"}],
  
  [["exp.afc", 7], "DashedSentence", {s: "Alexandre é um lobo. \n Não se pode confiar nele."}, "Question", {hasCorrect: "Não", q: "Alexandre é de boa índole?"}],
  [["exp.anfnc", 7], "DashedSentence", {s: "Alexandre é um monstro. \n Conhece tudo de física."}, "Question", {hasCorrect: "Sim", q: "O conhecimento de Alexandre é reconhecido?"}],
  [["exp.ctrl", 7], "DashedSentence", {s: "Alexandre é um lobo. \n Ele vem da Floresta Negra."}, "Question", {hasCorrect: "Não", q: "O lobo é do Cerrado brasileiro?"}],
  
  [["exp.afc", 8], "DashedSentence", {s: "Aurora é uma fera. \n Toca piano como ninguém."}, "Question", {hasCorrect: "Sim", q: "Aurora toca bem?"}],
  [["exp.anfnc", 8], "DashedSentence", {s: "Leonardo é um pavão. \n É de uma vaidade sem par."}, "Question", {hasCorrect: "Não", q: "Leonardo é humilde?"}],
  [["exp.ctrl", 8], "DashedSentence", {s: "Aurora é uma fera. \n É uma tigresa da Ásia."}, "Question", {hasCorrect: "Sim", q: "Aurora é perigosa?"}],
  
  ];
