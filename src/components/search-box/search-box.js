import React, {Component} from 'react';
import {Input} from 'semantic-ui-react'

import makeShake from '../../animations/shake'
import {makeTranslate} from '../../animations/move-up'
import {nospace} from '../../lib/textValidation'

class SearchBox extends Component {

  constructor(props) {
    super(props)
    this.selectAnimation = this.selectAnimation.bind(this)
  }

  handleKeyDown = (event) => {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault();
      this.selectAnimation()
    }
  };

  selectAnimation() {
    const text = document.getElementById("searchBox").value;

    if (!text || nospace(text) === "")
      this.props.shake()
    else
      this.props.onClick()

  }

  componentDidMount() {
    setTimeout(() => {
      this.props.onClick()
    }, 500)
  }

  render() {
    const frame = this.props.additionalStyles.frame;
    const frameClass = this.props.frameClass;
    return (
      <div className={frame} onKeyDown={this.handleKeyDown}>
        <div className={frameClass
          ? frameClass
          : ''}>
          <Input size='large' id="searchBox" icon='search' placeholder='Search...'/>
        </div>
      </div>
    )
  }
}

const LogoSearch = (props) => {
  const style = props.additionalStyles.frame;
  return <div className="logo" style={style} onClick={props.onClick}/>
}

export default makeTranslate(SearchBox, LogoSearch)
