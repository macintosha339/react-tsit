import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

export default class Contacts extends Component {
    render() {
        return(
            <>
            <h2>Контакты</h2><hr></hr>
            <h3>г. Минск, ул.Нововиленская, д.48, пом.17</h3>
            <Container>
            <Row>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Станция метро</Card.Subtitle>
                    <Card.Text>
                        Академия наук
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
                        info@tsit.by
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Телефон</Card.Subtitle>
                    <Card.Text>
                        +375 (17) 294-99-98
                    </Card.Text>
                </Card.Body>
            </Card>
            </Row>
            </Container>
            
            </>
        )
    }
}