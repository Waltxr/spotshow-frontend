import React from 'react'
import { Button, Grid, Header } from 'semantic-ui-react';


const LoginForm = () => (

  <div className='login-form'>

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
        <Header as='h2' textAlign='center' className="header color">
          Connect your spotify account to spot some shows in NYC that you might like.
        </Header>
          <Button className="ui color1 button" fluid size='large' href='http://localhost:3000/api/v1/login'>Connect To Spotify</Button>
      </Grid.Column>
    </Grid>
  </div>
)



export default LoginForm
