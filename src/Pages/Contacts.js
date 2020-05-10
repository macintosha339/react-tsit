import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

export default class Contacts extends Component {
    render() {
        return(
            <>
            <h2>Контакты</h2><hr></hr>
            <h3>г. Минск, ул. Восточная 133, каб.904</h3>
            <Container>
            <Row>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Станция метро</Card.Subtitle>
                    <Card.Text>
                        Якуба Коласа
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Режим работы</Card.Subtitle>
                    <Card.Text>
                        09:00 - 18:00
                    </Card.Text>
                </Card.Body>
            </Card>
            </Row>

            <Row>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">E-mail</Card.Subtitle>
                    <Card.Text>
                        pochta@example.com
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Телефон</Card.Subtitle>
                    <Card.Text>
                        +375 (29) 111-11-11
                    </Card.Text>
                </Card.Body>
            </Card>
            </Row>
            </Container>
            
            </>
        )
    }
}