import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public urlApi =
    'https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=f8210f01cbef4d8e95d9e09a9229793d';
  constructor(private http: HttpClient) {}

  getApi() {
    return this.http.get(this.urlApi);
  }

  public ofertas = [
    {
      id: 1,
      title: 'Super Burger',
      description: 'Rodízio de Mini-hambúrger com opção de entrada.',
    },
    {
      id: 2,
      title:
        'Cozinha Mexicana almoço ou Jantar com Rodízio Mexicano delicioso.',
      description: ` A culinária
         mexicana tem uma base milenar Pré-Colombiana, com evidências da cultura
          selectiva de plantas de milho cerca de 8.000 a.C., com uma forte influência
           colonial espanhola e das transformações que ocorreram no mundo nos séculos 
           XIX e XX.`,
    },
    {
      id: 3,
      title: 'Estância das águas',
      description: 'Diversão garantida com piscinas, trilhas e muito mais.',
    },
    {
      id: 4,
      title: 'Super Cachorro Quente',
      description: 'Rodízio de cachorro quente com opção de entrada.',
    },
    {
      id: 5,
      title: 'Cozinha Brasileira almoço ou Jantar com Rodízio  delicioso.',
      description: ` A culinária do Brasil é fruto de uma mistura de ingredientes europeus,
       indígenas e africanos. Muitos dos componentes das receitas e técnicas de preparo são 
       de origem indígena, tendo sofrido modificações por parte dos portugueses e dos escravos
        oriundos da África`,
    },
    {
      id: 6,
      title: 'Praia Rio de Janeiro diversão garantidade',
      description: `O Rio de Janeiro é um estado no sudeste do Brasil. 
      A sua capital, com o mesmo nome, é conhecida pelas praias, o Pão de Açúcar e a 
      estátua do Cristo Redentor no cimo do morro do Corcovado. O ponto de referência do
       arquiteto Oscar Niemeyer, o Museu de Arte Contemporânea de Niterói, fica do lado 
       oposto da Baía de Guanabara, em Niterói. Ao longo da costa atlântica do estado, 
       encontra-se Ilha Grande, uma ilha arborizada rodeada de praias.`,
    },
  ];

  public getOfertas() {
    return this.ofertas;
  }
}
