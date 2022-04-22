import React, { Component } from "react"
import styled from "styled-components"

const LargeContainer = styled.section `
   background-color: #000000;
   min-height:100vh;
   height: auto;
`
const Container = styled.div`
   min-height:100vh;
   height: auto;
   width: 85%;
   display:flex;
   flex-wrap:wrap;
   margin-left: 7vw;
   justify-content: space-evenly;
`

const Info = styled.section`
   background-color: #000000;
   width: 24vw;
   height: auto;
   margin-top: 7vh;
`
const Image = styled.img`
   width: 100%; 
   height: 35vh;
`

const Title = styled.h3`
   font-family: 'Lato', sans-serif;
   font-size: 3vh;
   margin-top: 3vh;
   margin-bottom: 2vh;
`
const Text = styled.p`
   font-family: 'Lato', sans-serif;
   font-size: 2.5vh;
   width: 23.5vw;
   height: 15vh;
   text-align: justify;
   overflow: auto;
   cursor: pointer;
   
   ::-webkit-scrollbar {
     width: 2vh;
   }
   
   ::-webkit-scrollbar-track {
     background: #370617;
   }
   
   ::-webkit-scrollbar-thumb {
     
     background-color:#000000;
     border: 3px solid #370617;
   }

`

export default class Todos extends Component {
  state = {
    movies: [{
        title: 'Homem-Aranha: Longe de Casa',
        poster: 'https://s2.glbimg.com/doXKzznJNoS7Fn5wrmX7vd_4e_8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/15/mv5bndnizjk4ytitnmm4nc00zdbmlwiyymqtzdm0zthknjrmzjmxxkeyxkfqcgdeqxvyotyynjmxode._v1_.jpg',
        overview: 'Peter Parker está em uma viagem de duas semanas pela Europa, ao lado de seus amigos de colégio, quando é surpreendido pela visita de Nick Fury. Convocado para mais uma missão heroica, ele precisa enfrentar vários vilões que surgem em cidades-símbolo do continente, como Londres, Paris e Veneza, e também a aparição do enigmático Mysterio.'
    },
    {
        title: 'Vingadores: Ultimato',
        poster: 'https://s2.glbimg.com/2C0hMRuCY_7NfDPjby4_Bjmq8Nc=/e.glbimg.com/og/ed/f/original/2018/03/22/avengers-infinity-war-official-poster-2018-4o.jpg',
        overview: 'Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.'
    },
    {
        title: 'Homem de Ferro',
        poster: 'https://mundoffshore.com/wp-content/uploads/2019/07/hf1.jpg',
        overview: 'Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores. Ao voltar para os EUA, Stark aprimora a armadura e a utiliza para combater o crime.'
    },
    {
        title: 'Viúva Negra',
        poster: 'https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Viuva-Negra-cena-pos-creditos.jpg',
        overview: 'Ao nascer, a Viúva Negra, então conhecida como Natasha Romanova, é entregue à KGB, que a prepara para se tornar sua agente suprema. Porém, o seu próprio governo tenta matá-la quando a União Soviética se desfaz.'
    },
    {
        title: 'Doutor Estranho',
        poster: 'https://t.ctcdn.com.br/XefRjMEbSkQdM6gFFBWXrwKVXq0=/512x288/smart/filters:format(webp)/i337434.jpeg',
        overview: 'Após sua carreira ser destruída, um brilhante, porém arrogante, cirurgião ganha uma nova chance em sua vida quando um feiticeiro o treina para se tornar o Mago Supremo.'
    },
    {
        title: 'Capitão América: Guerra Civil',
        poster: 'https://br.web.img3.acsta.net/newsv7/21/10/29/20/46/3884082.jpg',
        overview: 'Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.'
    },
    {
      title: 'Guardiões da Galáxia Vol:2',
      poster: 'https://cdn.ome.lt/_zOBUa0__RRDt5x_Q0MJTU7nQWw=/1200x630/smart/extras/conteudos/guardians_HE2WIWu.jpg',
      overview: 'Os Guardiões da Galáxia lutam para manter sua nova família unida enquanto desvendam os mistérios sobre o verdadeiro pai de Peter Quill.'
    },
    {
        title: 'Thor: Ragnarok',
        poster: 'https://www.tocafita.com.br/wp-content/uploads/2017/11/poster_thor_ragnarok-e1507124111957.jpg',
        overview: 'Após anos afastado, Thor retorna para casa e descobre que seu pai, Odin, rei de Asgard, está desaparecido. Após encontrá-lo, ele toma conhecimento de sua irmã mais velha, Hela, a poderosa e implacável deusa da morte. Com o auxílio de Loki, ele enfrenta Hela.'
    },
    {
        title: 'Capitão América: O Primeiro Vingador',
        poster: 'https://quartaparede.com.br/wp-content/uploads/2022/03/26989f8755978913690c6c6623cb5dd1c2202715v2_00.jpg',
        overview: 'Steve Rogers é um jovem que participa de experiências visando a criação do supersoldado americano. Quando os oficiais militares conseguem transformá-lo em uma arma humana, eles percebem que não podem arriscar a vida do jovem nas batalhas de guerra.'
    },
    {
        title: 'O Incrível Hulk',
        poster: 'https://i0.wp.com/cinegrandiose.com/wp-content/uploads/Hulk-1-1.png?fit=960%2C540&ssl=1',
        overview: 'O cientista Bruce Banner se esconde no Brasil enquanto busca desesperadamente a cura da mutação que o transforma em um monstro incontrolável. Só assim ele poderá novamente levar uma vida normal e ficar ao lado da mulher que ama. Porém, durante este processo, ele precisa lutar contra o Abominável, um novo inimigo que quer capturá-lo.'
    },
    {
        title: 'Pantera Negra',
        poster: 'https://burnbook.b-cdn.net/wp-content/uploads/2022/03/uhdpaper.com-download-hd-7.2713-@9082647187720256697-1.jpg',
        overview: 'Conheça a história de T`Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados.'
    },
    {
        title: 'Homem-Formiga e a Vespa',
        poster: 'https://assets.b9.com.br/wp-content/uploads/2018/07/hederhfv8-1280x720.jpg',
        overview: 'Scott Lang lida com as consequências de suas escolhas tanto como super-herói quanto como pai. Enquanto tenta reequilibrar sua vida com suas responsabilidades como o Homem-Formiga, ele é confrontado por Hope van Dyne e Dr. Hank Pym com uma nova missão urgente. '
    },
    {
      title: 'Capitã Marvel',
      poster: 'https://www.felps.com.br/wp-content/uploads/2019/05/capit%C3%A3-marvel-7.jpg',
      overview: 'Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.'
    },
    {
      title: 'Venom',
      poster: 'https://epipoca.com.br/wp-content/uploads/2021/05/Venom-b-1.jpg',
      overview: 'O relacionamento entre Eddie e Venom está evoluindo. Buscando a melhor forma de lidar com a inevitável simbiose, esse dois lados descobrem como viver juntos e, de alguma forma, se tornarem melhores juntos do que separados.'     
    },
    {
      title: 'Shang-Chi e a Lenda dos Dez Anéis',
      poster: 'http://www.nerdsite.com.br/wp-content/uploads/2021/09/filme-shang-chi-e-a-lenda-dos-dez-aneis-595448-article.jpg',
      overview: 'Shang-Chi é o filho do líder de uma organização criminosa poderosa. O rapaz foi criado desde criança para ser um guerreiro, mas decidiu abandonar esse caminho e fugiu para viver uma vida pacífica. Porém, tudo isso muda quando ele é atacado por um grupo de assassinos e se vê forçado a enfrentar seu passado.'
    },
    ]
} 
  render() {
    return (
      <LargeContainer>
      <Container>
        {this.state.movies.map((item) => (
          <Info>
            <Image
              src={item.poster} alt={`Poster do filme ${item.title}`} />
            <Title>{item.title}</Title>
            <Text>{item.overview}</Text>
          </Info>
        ))}
      </Container>
      </LargeContainer>
    )
  }
}