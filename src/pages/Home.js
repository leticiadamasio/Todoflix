import React, { Component } from "react"
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Vingadores from '../img/Vingadores.jpg'
import Heart from '../img/Heart.png'
import Carousel from 'nuka-carousel'


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style:none;
  text-decoration:none;
  color: white;
}
`

const info = {
    slidesToShow: 4,
    wrapAround: true,
    autoplay: true,
    keyCodeConfig: true,
    autoplayInterval: 1000,
    animation: 'zoom'
}

const LargeContainer = styled.section`
   background-color: #000000;
   min-height:100vh;
   height: auto;
`
const Container = styled.div`
   background-color: #000000;
   display:flex;
   padding-top: 15vh;
   padding-left: 5vh;
`
const Box = styled.div`
   margin-left: 8vh;
   display:flex;
   width: 25vw;
   flex-direction: column;
`
const Banner = styled.img`
    width:28vw; 
    height: 40vh;
`
const Movie = styled.h1`
   font-family: 'Lato', sans-serif;
   font-size: 4.5vh;
   margin-top: 0.5vh;
   margin-bottom: 0.5vh;
`
const Subtitle = styled.h2`
   font-family: 'Lato', sans-serif;
   font-size: 2.5vh;
   margin: 8vh 0vh 2vh 6.2vh;
`
const Movies = styled.h3`
   font-family: 'Lato', sans-serif;
   font-size: 2.8vh;
   width:85%;
`
const Overview = styled.p`
   font-family: 'Lato', sans-serif;
   font-size: 2.5vh;
   width: 24vw;
   text-align: justify;
`
const Note = styled.div`
    display:flex;
    margin-top: 1vh;
    width: 3.5vw;
    justify-content: space-between;

    p{
      font-family: 'Lato', sans-serif;
      font-size: 2.5vh; 
    }
`
const Text = styled.p`
   font-family: 'Lato', sans-serif;
   font-size: 2.5vh;
   width: 28vw;
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
const Info = styled.div`
   margin-left: 6vh;
   width: 25vw;
   height: auto;
   display:flex;
   flex-wrap: wrap;
   justify-content: space-around;

   p{
    font-family: 'Lato', sans-serif;
    font-size: 2.5vh;
    margin-top: 0.5vh;
    margin-bottom: 1vh;  
    width: 100%;
   }
`
const Image = styled.img`
    width: 100%; 
    height: 35vh;
`
const Core = styled.img`
    cursor: pointer;
    width: 1.5vw; 
    margin-bottom: 1vh;
`
const Icon = styled.img`
    cursor: pointer;
    width: 1.5vw;
    position: absolute;
    margin-left: 23vw;
    margin-top: 1vh;
    margin-bottom: 1vh; 
`
const Inform = styled.div`
    display:flex;
    width: 100%;
    align-items: center;

    p{
      font-family: 'Lato', sans-serif;
      font-size: 2.5vh;
      margin-left: 4px;
      width: 2vw;
    }
`
export default class Main extends Component {
    state = {
        movies: [{
            title: 'Homem-Aranha: Longe de Casa',
            poster: 'https://s2.glbimg.com/doXKzznJNoS7Fn5wrmX7vd_4e_8=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/01/15/mv5bndnizjk4ytitnmm4nc00zdbmlwiyymqtzdm0zthknjrmzjmxxkeyxkfqcgdeqxvyotyynjmxode._v1_.jpg',
            overview: 'Peter Parker est?? em uma viagem de duas semanas pela Europa, ao lado de seus amigos de col??gio, quando ?? surpreendido pela visita de Nick Fury. Convocado para mais uma miss??o heroica, ele precisa enfrentar v??rios vil??es que surgem em cidades-s??mbolo do continente, como Londres, Paris e Veneza, e tamb??m a apari????o do enigm??tico Mysterio.',
            IsFavorito: false,
            IsVisto: true,
            vote_average: 5,
            id: 0
        },
        {
            title: 'Vingadores: Ultimato',
            poster: 'https://s2.glbimg.com/2C0hMRuCY_7NfDPjby4_Bjmq8Nc=/e.glbimg.com/og/ed/f/original/2018/03/22/avengers-infinity-war-official-poster-2018-4o.jpg',
            overview: 'Ap??s Thanos eliminar metade das criaturas vivas, os Vingadores t??m de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espa??o sem ??gua e comida, Steve Rogers e Natasha Romanov lideram a resist??ncia contra o tit?? louco.',
            IsFavorito: true,
            IsVisto: false,
            vote_average: 5,
            id: 1
        },
        {
            title: 'Homem de Ferro',
            poster: 'https://mundoffshore.com/wp-content/uploads/2019/07/hf1.jpg',
            overview: 'Tony Stark ?? um industrial bilion??rio e inventor brilhante que realiza testes b??licos no exterior, mas ?? sequestrado por terroristas que o for??am a construir uma arma devastadora. Em vez disso, ele constr??i uma armadura blindada e enfrenta seus sequestradores. Ao voltar para os EUA, Stark aprimora a armadura e a utiliza para combater o crime.',
            IsFavorito: true,
            IsVisto: true,
            vote_average: 5,
            id: 2
        },
        {
            title: 'Vi??va Negra',
            poster: 'https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Viuva-Negra-cena-pos-creditos.jpg',
            overview: 'Ao nascer, a Vi??va Negra, ent??o conhecida como Natasha Romanova, ?? entregue ?? KGB, que a prepara para se tornar sua agente suprema. Por??m, o seu pr??prio governo tenta mat??-la quando a Uni??o Sovi??tica se desfaz.',
            IsFavorito: false,
            IsVisto: false,
            vote_average: 5,
            id: 3
        },
        {
            title: 'Doutor Estranho',
            poster: 'https://t.ctcdn.com.br/XefRjMEbSkQdM6gFFBWXrwKVXq0=/512x288/smart/filters:format(webp)/i337434.jpeg',
            overview: 'Ap??s sua carreira ser destru??da, um brilhante, por??m arrogante, cirurgi??o ganha uma nova chance em sua vida quando um feiticeiro o treina para se tornar o Mago Supremo.',
            IsVisto: true,
            vote_average: 5,
            id: 4
        },
        {
            title: 'Capit??o Am??rica: Guerra Civil',
            poster: 'https://br.web.img3.acsta.net/newsv7/21/10/29/20/46/3884082.jpg',
            overview: 'Depois do ataque de Ultron, os pol??ticos decidem controlar os Vingadores, j?? que suas a????es afetam toda a humanidade. A decis??o coloca o Capit??o Am??rica em rota de colis??o com o Homem de Ferro.',
            IsFavorito: false,
            IsVisto: false,
            vote_average: 4,
            id: 5
        },
        {
            title: 'Guardi??es da Gal??xia Vol:2',
            poster: 'https://cdn.ome.lt/_zOBUa0__RRDt5x_Q0MJTU7nQWw=/1200x630/smart/extras/conteudos/guardians_HE2WIWu.jpg',
            overview: 'Os Guardi??es da Gal??xia lutam para manter sua nova fam??lia unida enquanto desvendam os mist??rios sobre o verdadeiro pai de Peter Quill.',
            IsFavorito: true,
            IsVisto: true,
            vote_average: 4,
            id: 6
        },
        {
            title: 'Thor: Ragnarok',
            poster: 'https://www.tocafita.com.br/wp-content/uploads/2017/11/poster_thor_ragnarok-e1507124111957.jpg',
            overview: 'Ap??s anos afastado, Thor retorna para casa e descobre que seu pai, Odin, rei de Asgard, est?? desaparecido. Ap??s encontr??-lo, ele toma conhecimento de sua irm?? mais velha, Hela, a poderosa e implac??vel deusa da morte. Com o aux??lio de Loki, ele enfrenta Hela.',
            IsFavorito: false,
            IsVisto: true,
            vote_average: 5,
            id: 7
        },
        {
            title: 'Capit??o Am??rica: O Primeiro Vingador',
            poster: 'https://quartaparede.com.br/wp-content/uploads/2022/03/26989f8755978913690c6c6623cb5dd1c2202715v2_00.jpg',
            overview: 'Steve Rogers ?? um jovem que participa de experi??ncias visando a cria????o do supersoldado americano. Quando os oficiais militares conseguem transform??-lo em uma arma humana, eles percebem que n??o podem arriscar a vida do jovem nas batalhas de guerra.',
            IsFavorito: true,
            IsVisto: true,
            vote_average: 5,
            id: 8
        },
        {
            title: 'O Incr??vel Hulk',
            poster: 'https://i0.wp.com/cinegrandiose.com/wp-content/uploads/Hulk-1-1.png?fit=960%2C540&ssl=1',
            overview: 'O cientista Bruce Banner se esconde no Brasil enquanto busca desesperadamente a cura da muta????o que o transforma em um monstro incontrol??vel. S?? assim ele poder?? novamente levar uma vida normal e ficar ao lado da mulher que ama. Por??m, durante este processo, ele precisa lutar contra o Abomin??vel, um novo inimigo que quer captur??-lo.',
            IsFavorito: false,
            IsVisto: false,
            vote_average: 3,
            id: 9
        },
        {
            title: 'Pantera Negra',
            poster: 'https://burnbook.b-cdn.net/wp-content/uploads/2022/03/uhdpaper.com-download-hd-7.2713-@9082647187720256697-1.jpg',
            overview: 'Conhe??a a hist??ria de T`Challa, pr??ncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades est??o a velocidade, intelig??ncia e os sentidos apurados.',
            IsFavorito: true,
            IsVisto: true,
            vote_average: 5,
            id: 10
        },
        {
            title: 'Homem-Formiga e a Vespa',
            poster: 'https://assets.b9.com.br/wp-content/uploads/2018/07/hederhfv8-1280x720.jpg',
            overview: 'Scott Lang lida com as consequ??ncias de suas escolhas tanto como super-her??i quanto como pai. Enquanto tenta reequilibrar sua vida com suas responsabilidades como o Homem-Formiga, ele ?? confrontado por Hope van Dyne e Dr. Hank Pym com uma nova miss??o urgente. ',
            IsFavorito: false,
            IsVisto: true,
            vote_average: 4,
            id: 11
        }
        ]
    }
    handleClick = (id) => {
        this.setState({
            isFavorito: !this.state.isFavorito,
        })
    }
    render() {
        return (
            <LargeContainer>
                <GlobalStyle />
                <Container>
                    <Banner src={Vingadores} alt='Poster do filme: Vingadores' />
                    <Box>
                        <Core onClick={this.handleClick} style={this.state.isFavorito === false ? { filter: "brightness(0.5)" } : { filter: "drop-shadow(1px 1px 10px rgba(255,255,255,0.5))" }} src={Heart} alt='heart Icon' />
                        <Overview>Visto recentemente</Overview>
                        <Movie>Os Vingadores</Movie>
                        <Overview>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civiliza????o, em uma r??gida rotina de aventuras. Ele ?? for??ado a deixar o isolamento e leva sua fam??lia para encarar o mundo, desafiando sua ideia do que significa ser pai.</Overview>
                        <Note>
                            <p>5/5</p><svg id="Icon_Thumbs_Up_Filled" data-name="Icon / Thumbs Up / Filled" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                <rect id="Box" width="17" height="17" fill="none" />
                                <path id="Path_1994" data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" fill="#0B3B0B" /></svg>
                        </Note>
                    </Box>
                </Container>
                <Subtitle>Destaques</Subtitle>
                <Carousel 
                    {...info}
                    renderBottomCenterControls={false}
                    defaultControlsConfig={{
                        nextButtonText: '>',
                        prevButtonText: '<',
                        pagingDotsStyle: {
                            fill: 'blue',
                        },
                    }}>
                    {this.state.movies.map((item) => (
                        <Info>
                            <Image
                                src={item.poster} alt={`Poster do filme ${item.title}`} />
                            <Icon onClick={this.handleClick} style={this.state.isFavorito === false ? { filter: "brightness(0.5)" } : { filter: "drop-shadow(1px 1px 10px rgba(255,255,255,0.5))" }} src={Heart} alt='heart Icon' />
                            <p>{item.IsVisto === false ? '' : 'Visto Recentemente'}</p>
                            <Inform>
                                <Movies>{item.title}</Movies>
                                <p>{item.vote_average}/5</p>
                                <svg id="Icon_Thumbs_Up_Filled" data-name="Icon / Thumbs Up / Filled" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                    <rect id="Box" width="17" height="17" fill="none" />
                                    <path id="Path_1994" data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" fill="white" style={item.vote_average >= 5 ? { fill: '#0B3B0B' } : item.vote_average === 4 ? { fill: '#64FE2E' } : item.vote_average === 3 ? { fill: 'yellow' } : { fill: 'red' }} />
                                </svg>
                            </Inform>
                            <Text>{item.overview}</Text>
                        </Info>
                    ))}
                </Carousel>
            </LargeContainer>
        )
    }
}