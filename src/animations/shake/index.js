import React, {Component} from 'react';
import {headShake} from 'react-animations';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  headShake: {
    animationName: headShake,
    animationDuration: '1s'
  }
});

const makeShake = (Target) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        startShake: false
      };
      this.shake = this.shake.bind(this);
    }

    shake() {
      this.setState({startShake: true})
      setTimeout(() => {
        this.setState({startShake: false})
      }, 1000)
    }

    render() {
      return (<Target {...this.props} shake={this.shake} frameClass={this.state.startShake
        ? css(styles.headShake)
        : ""}/>)
    }
  }
}

export default makeShake;
