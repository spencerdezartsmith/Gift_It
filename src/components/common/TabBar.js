import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tabbar from 'react-native-tabbar';


class TabBar extends Component {
  renderTabs() {
    return (
      <View style={styles.tabView}>
        <TouchableOpacity style={styles.tabItem} onPress={() => Actions.history()}>
          <View>
            <Text><Icon name='history' color='white' size={35} /></Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => Actions.home()}>
          <View>
            <Text><Icon name='gift' color='white' size={40} /></Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <View>
            <Text><Icon name='cog' color='white' size={35} /></Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <Tabbar
        show={true}
        disable={false}
        style={styles.viewStyle}
        height={60}
      >
        {this.renderTabs()}
      </Tabbar>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#80ffbf',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container: {
  flex: 1,
  backgroundColor: 'white'
}
});

export { TabBar };
