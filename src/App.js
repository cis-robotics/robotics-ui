import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import Camera from './components/Camera'
import SensorDisplay from './components/SensorDisplay'
import PositionDisplay from './components/PositionDisplay'

class App extends Component {

  render() {
    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={6}>
            <PositionDisplay/>
          </Grid.Column>
          <Grid.Column width={10}>
            <Camera/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <SensorDisplay/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
