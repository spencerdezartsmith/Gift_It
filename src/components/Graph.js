import React, { Component } from 'react';
import axios from 'axios';
import { View, ART, Dimensions, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import { Container } from './common';
import { scaleBand, scaleLinear } from 'd3-scale';
import { max, ticks } from 'd3-array';
import { line } from 'd3-shape';
import { path } from 'd3-path';
import Svg, {
  G,
  Line,
  Path,
  Rect,
  Text
} from 'react-native-svg'

class Graph extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Container>
          <BarChart/>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 10
  },
  cardStyle: {
    shadowColor: '#000000',
    borderColor: 'white'
  },
  imageStyle: {
    flex: 1,
    width: 350,
    height: 300,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

class BarChart extends Component {

  state = {
    data: [
      {
        amount: 0,
        team: 'Packers',
        teamColor: '#0e7f31',
        barColor: '#ff60bd',
        staticBarColor: '#ff60bd',
        labelColor: 'white'
      },
      {
        amount: 0,
        team: '49ers',
        teamColor: '#dba71a',
        barColor: 'pink',
        staticBarColor: 'pink',
        labelColor: 'white'
      }
    ]}

    componentWillMount() {
      axios.get('https://gift-it-rails.herokuapp.com/totals')
        .then(response => {
          this.state.data[0].amount = response.data[1],
          this.forceUpdate(),
          this.state.data[1].amount = response.data[0],
          this.forceUpdate()
        });
    }

    formatNumbers(num){
      var formattedNum = ""
      formattedNum += (num.toString().slice(0,2))
      formattedNum += ","
      formattedNum += (num.toString().slice(2))
      return formattedNum
    }


    toggleHighlight(d, i) {
        this.state.data[i].barColor = (this.state.data[i].barColor === this.state.data[i].staticBarColor ? this.state.data[i].teamColor : this.state.data[i].staticBarColor)
        this.forceUpdate()
        this.state.data[i].labelColor = (this.state.data[i].labelColor === "white" ? this.state.data[i].teamColor : "white")
        this.forceUpdate()
    }

  render() {

    const screen = Dimensions.get('window')
    const margin = {top: 20, right: 25, bottom: 250, left: 25}
    const width = screen.width - margin.left - margin.right
    const height = screen.height - margin.top - margin.bottom
    const x = scaleBand()
      .rangeRound([0, width])
      .padding(0.17)
      .domain(this.state.data.map(d => d.team))

    const maxFrequency = max(this.state.data, d => d.amount)
    const y = scaleLinear()
      .rangeRound([height, 0])
      .domain([0, maxFrequency])

    //plugged into x to determine start point of bands
    const firstTeamX = x(this.state.data[0].team)
    const secondTeamX = x(this.state.data[1].team)
    const lastTeamX = x(this.state.data[this.state.data.length - 1].team)
    const labelDx = (secondTeamX - firstTeamX) / 2

    const bottomAxis = [firstTeamX - labelDx, lastTeamX + labelDx -24]
    const bottomAxisD = line()
      .x(d => d + labelDx)
      .y(() => 0)
      (bottomAxis)

    const leftAxis = ticks(0, maxFrequency, 5)
    const leftAxisD = line()
      .x(() => bottomAxis[0] + labelDx)
      .y(d => y(d) - (height -1))
      (leftAxis)

    const notch = 10
    const labelDistance = 10


    const svg = (
      <Svg width={screen.width} height={screen.height}>
        <G translate={margin.left + "," + margin.top}>
          <G translate={"0," + height}>
            <G key={-1}>
              <Path stroke={"white"} strokeWidth="3" d={bottomAxisD.toString()} key="-1"/>
              {
                this.state.data.map((d,i) => (
                  <G key={i + 1} translate={x(d.team) + labelDx + ",0"}>
                    <Line stroke={"white"} x1={-10} x2={-10} y2={notch}/>
                    <Text fill={d.teamColor} fontWeight="bold" fontSize="24" x={(d.team === "Packers") ? -60 : -45} y={3}>{d.team}</Text>
                  </G>
                ))
              }
            </G>

            <G key={-2}>
              <Path stroke={"white"} strokeWidth="3" d={(leftAxisD + 100).toString()} key="-1" />
              {
                leftAxis.map((d, i) => (
                  <G key={i + 1} translate={"0," + (y(d) - height)}>
                    <Line stroke={"black"} x1={notch} x2={labelDistance}/>
                    <Text fill={"#515051"} fontWeight="bold" x={(d === 0) ? 0 : -labelDistance} y={-notch}>{d}</Text>
                  </G>
                ))
              }
            </G>
            {console.log(this.state.data)}
            {
              this.state.data.map((d, i) => (
                <G key={i + 1}>
                <TouchableWithoutFeedback key={i} onPress={()=>this.toggleHighlight(d, i)}>
                    <Rect x={(x(d.team)) + 1}
                          y={y(d.amount) - (height + 1)}
                          width={x.bandwidth()}
                          height={height - y(d.amount)}
                          fill={d.barColor}>
                    </Rect>
                  </TouchableWithoutFeedback>
                  <Text fill={d.labelColor} fontWeight={"bold"} fontSize="20" x={(x(d.team)) + 34} y={y(d.amount) - (height + 25)}>{this.formatNumbers(d.amount)}</Text>

                </G>
              ))
            }
          </G>
        </G>
      </Svg>
    )

    return svg;
  }
}

export default Graph;
