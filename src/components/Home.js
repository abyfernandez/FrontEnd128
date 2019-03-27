import React, { Component } from 'react';
import { Button, Segment, Header, Form, Divider, Responsive } from 'semantic-ui-react';
import image from '../images/eatwise1b.jpg';


class Home extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div id="header a.logo">
				<Responsive as={Segment}>
            <Segment textAlign='left' style={{margin: "15%", marginBottom:0}}>
            <img src={image} style={{borderRadius: "50%", width: 150}}/>


            </Segment>
				</Responsive>
	   </div>
    );
  }
}

export default Home;
