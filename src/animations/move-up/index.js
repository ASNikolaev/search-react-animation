import React, {Component} from 'react';
import {Motion, spring, presets} from 'react-motion'

import makeShake from '../../animations/shake'

const makeMoveTranslateY = (Target) => {
  return class extends Component {
    render() {
      const additionalStyles = {
        frame: this.props.move
          ? 'animationStyleMoveUp'
          : 'animationStyleMoveDown'
      };
      return (<Target onClick={this.props.onClick} additionalStyles={additionalStyles}/>)
    }
  }
};

const makeMoveTranslateLogo = (Logo) => {
  return class extends Component {
    render() {
      const style = {
        translateY: this.props.move
          ? spring(-250, presets.wobbly, {damping: 30})
          : spring(250, presets.wobbly)
      }
      return (
        <Motion style={style}>
          {({translateY}) => (<Logo {...this.props} onClick={this.props.onClick} additionalStyles={{
            frame: {
              transform: `translateY(${translateY}px)`
            }
          }}/>)}
        </Motion>
      )
    }
  }
}

const makeMove = (Target, Logo) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        move: true
      };
      this.onClick = this.onClick.bind(this)
    }

    onClick = () => {
      this.setState({
        move: !this.state.move
      })
    }

    render() {
      return (
        <div>
          <Logo {...this.props} move={this.state.move} onClick={this.onClick}/>
          <Target {...this.props} move={this.state.move} onClick={this.onClick}/>
        </div>
      )
    }
  }
};

export const makeTranslate = (Target, logo) => makeMove(makeMoveTranslateY(makeShake(Target)), makeMoveTranslateLogo(logo))
