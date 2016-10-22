import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Root from './components/Root';
import Graph from './components/Graph';

const RouterComponent = () => {
  return (
    <Router
      sceneStyle={{ paddingTop: 60 }}
      navigationBarStyle={{ backgroundColor: '#8EFAB4' }}
    >
      <Scene
        key='root'
        component={Root}
        rightTitle='Home'
        onRight={() => Actions.home()}
        initial
      />
      <Scene key='home' component={Graph} />
      {/* <Scene
        key='history'
        component={History}
        title='History'
      /> */}
    </Router>
  );
};

export default RouterComponent;
