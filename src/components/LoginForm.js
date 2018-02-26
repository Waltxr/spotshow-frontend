import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';


const LoginForm = () => (

  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h4' color='blue' textAlign='center'>
          {' '}Connect your spotify account to check out what artists you're into are playing soon
        </Header>
        <Form size='large'>
          <Segment stacked>
          <Button color='blue' fluid size='large' href='http://localhost:3000/api/v1/login'>Connect To Spotify</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
)



export default LoginForm

// return (
//   <div>
//
//   </div>
// )
