import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
    return (
        <div className="App" style={{ background: "#141414" }}>
            <Menu />

            <BannerMain
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
                videoDescription={"Na primeira aula do nosso Curso de Inglês Online - Módulo Elementary, iremos trabalhar de forma prática com as introductions (apresentações), greetings (cumprimentos), farewell (despedidas), numbers (números) e o verb to be (verbo ser/estar)."}
            />

            <Carousel
                //ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
            />

            <Carousel
                category={dadosIniciais.categorias[1]}
            />

            <Carousel
                category={dadosIniciais.categorias[2]}
            />      

            <Carousel
                category={dadosIniciais.categorias[3]}
            />      

            <Carousel
                category={dadosIniciais.categorias[4]}
            />      

            <Carousel
                category={dadosIniciais.categorias[5]}
            />      

            <Footer />
        </div>
    );
}

export default Home;
