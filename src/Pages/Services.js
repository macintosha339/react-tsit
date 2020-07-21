import React, { Component } from 'react';
import { Nav, Row, Col, Tab, Container, Image } from 'react-bootstrap';

export default class Services extends Component {
    render() {
        return(
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Обслуживание компьютеров</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Электронная почта</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">IP телефония</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Компьютерная техника</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Защита от шифровальщика</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <h2>Обслуживание компьютеров</h2>
                                    <Image src="https://beladmin.by/upload/iblock/571/571a92d2ffa20b480ff26e172a665a02.png" fluid />
                                    <h3>C нами компьютеры работают</h3>
                                    <p>Бесперебойное функционирование корпоративной компьютерной сети - важный фактор эффективной работы офиса организации. Комплексное абонентское обслуживание компьютеров в Минске от команды Топ Суппорт – это надежно, практично, оперативно!<br/>
                                    Осуществляя компьютерный аутсорсинг, мы не торгуем нормо-часами. Все предлагаемые пользователям тарифные планы безлимитные. Наша цель заключается в обеспечении бесперебойной работы компьютерной системы клиента в целом. Специалисты всегда находят первопричину неисправностей и оперативно устраняют ее.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>электронная почта</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <h2>IP-телефония</h2>
                                <Image src="https://beladmin.by/upload/iblock/0a6/0a631e38e2eaa43621669a53172f4299.jpg" fluid/>
                                    <h3>IP-ТЕЛЕФОНИЯ МОЖЕТ БЫТЬ ДОСТУПНОЙ</h3>
                                    <p>Буквально вчера, единственным способом голосовой коммуникации на расстоянии был телефон, однако сегодня появились всевозможные «цифровые решения», позволяющее выстроить систему голосового общения по IP-протоколу в том числе через интернет. В частности, одним из таких «решений» является установка ip телефонии – технологии объединившей в себе удобство обычной традиционной «трубки» и преимущества всемирной сети.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                <h2>Компьютерная техника</h2>
                                <Image src="https://beladmin.by/upload/iblock/199/19949974ea6ae9d44130f8cbfc51200f.jpg" fluid/>
                                    <h3>КОМПЬЮТЕР КУПЛЕННЫЙ У НАС, НАСТРОИМ БЕСПЛАТНО</h3>
                                    <p>К офисной технике относятся около двух десятков видов оборудования. В модельном ряду каждого из них - множество устройств с различными техническими параметрами. Специалисты компании Топ Суппорт помогут купить компьютер для офиса в Минске и дополнительное периферийное оборудование, функционал которых идеально соответствует специфике вашей работы.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <p>Антивирусная защита</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}