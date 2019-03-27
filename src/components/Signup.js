import React, { Component } from 'react';
import { Button, Segment, Header, Form, Divider, Responsive } from 'semantic-ui-react';
import image from '../images/eatwise2c.png';


class Signup extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }

  handleChangeUsername = e => {
    this.setState({
      username: e.target.value
    })
  }

  handleChangeEmail = e => {
    this.setState({
      email: e.target.value
    })
  }

  handleChangePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
    	<div>
				<Responsive as={Segment}>
            <div textAlign='left' style={{ marginBottom:0}}>
              <img src={image} style={{borderRadius: "20%", width: "10%"}}/>
            </div>
            <Segment textAlign='center' style={{ marginBottom:0, marginLeft:"20%", marginRight:"20%"}}>
              <Divider horizontal>
                <Header as='h4'>SIGN UP</Header>
              </Divider>
              <Form size='large'>
                <Form.Input 
                  icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  id='username'
                  onChange={this.handleChangeUsername}
                  style={{width: "50%"}}/>
                <Form.Input
                  icon='at'
                  iconPosition='left'
                  placeholder='Email Address'
                  type='email'
                  id='email'
                  onChange={this.handleChangeEmail}
                  style={{width: "50%"}}
                />
                <Form.Input
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  id='password'
                  onChange={this.handleChangePassword}
                  style={{width: "50%"}}
                />
                <Button
                  type='submit'
                  color='red'
                  size='large'
                  a href="/login"
                  disabled={
                          !(this.state.username &&
                            this.state.password &&
                            this.state.email) ? true : false}
                  ButtonPositonClick={this.Signup}
                  style={{width: "20%"}}
                  >Sign up</Button>
              </Form>
            </Segment>
				</Responsive>
	    </div>
    );
  }
}

export default Signup;
