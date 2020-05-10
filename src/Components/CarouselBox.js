import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import laptop from '../assets/laptop.jpg';
import ipadComputer from '../assets/ipad-computer.jpg';
import manLaptop from '../assets/manLaptop.jpg';
import './CarouselBox.css'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <Image
                    className="d-block w-100"
                    src={laptop}
                    fluid
                    />
                    <Carousel.Caption>
                        <h3>C нами компьютеры работают</h3>
                        <p>Абонентское обслуживание компьютерных сетей</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ipadComputer}
                    alt="ipad"
                    />
                    <Carousel.Caption>
                    <h3>Компьютер, купленный у нас настроим БЕСПЛАТНО</h3>
                    <p>Мы работаем - вы наслаждаетесь</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={manLaptop}
                    alt="manLaptop"
                    />
                    <Carousel.Caption>
                        <h3>Наши специалисты готовы провести консультацию</h3>
                        <p>Ответим на любые интересующие вас вопросы</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}