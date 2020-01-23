import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login/Login';
import Registration from './Registration/Registration'

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    Container,
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route

} from 'react-router-dom'
//react naivigation // react native 
// react-router-dom
class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            xyz: 10
        }
    }


    Footer = () => {
        return (
                  <Row>
                      <Col sm={4}>
                      Contact US : 
                      Ph. No: 
                      email: test@test.com
                      </Col>
                        <Col sm={4}>
                        Copyright@2019
                      </Col>
                        <Col sm={4}>
                        Map
                      </Col>
                  </Row>


            )
    }

    Notfound = () => {

        return (

            <h1>The page you are looking for diesnot exist 404 !!!</h1>

            )

    }
    

    render() {
        // jsx wrap error 
        return (
            <Router>

                <Container>
                  <Row style={{marginBottom:'50px'}}>
                    <Col sm={8}>

                    <Card style={{ width: '18rem' }}>
                      {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                      <Card.Body>
                        <Card.Title>My Assigment</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>

                    
                    </Col>
                    <Col sm={4}>

                    <h1>Welcome </h1>

                    </Col>
                  </Row>
                  <Row>
                <div> 
                <Nav variant="pills" >
                      <Nav.Item>
                        <Nav.Link as={Link} to="/home" active={true} >Home</Nav.Link>
                      </Nav.Item>
                     <Nav.Item>
                        <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                      </Nav.Item>
                     <Nav.Item>
                        <Nav.Link as={Link} to="/registration" >Registration</Nav.Link>
                      </Nav.Item>
                    </Nav>
                </div>
                  </Row>
                  <Row>
                  </Row>
                    < this.Footer /> // because this is in this class 
            </Container>

            






            <Switch>
            {/*    <Route path="/"> // all paths having / in their urls
                    < Login />
                </Route>
            */}


                <Route exact path="/login" component={Login} />

                <Route exact path="/registration">
                    < Registration />
                </Route>

                <Route  component={this.Notfound} />

                

            </Switch>


              </Router>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById('root'))