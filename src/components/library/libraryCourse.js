import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import Icon from "../icon";
import Arrow from "../arrow";
import Action from "../action";
import library from "./library";

class LibraryCourse extends Component {

  constructor(props) {
    super(props)

    this.state = {
      status: true
    }
  }

  renderDescription = function() {
    if(!this.state.status) {
      return (
      <div className="library-course__description">
          <label>Course Description</label>
          <p>
            { this.props.description }
          </p>
        </div>
      )
    }
  }.bind(this);

  handleCallback = function(status) {
    this.setState({ status })
  }.bind(this)

  render() {
    return (
      <div id="library_course" className="library-course">
        <div className="library-course__title-check">
          <div className="library-course__title">{this.props.title}</div>
          { this.props.enrolled ? Icon("fas fa-check", "library-course__icon") : ''}
        </div>
        <Arrow
          callback={status => this.handleCallback(status)}
          id={this.props.id}
          className="library-course__arrow"
        />
        <Action
          id={this.props.id}
          onClick={() => this.props.toggleEnrolled(this.props.id)}
          className={`library-course__action ${this.props.enrolled ? 'action-remove' : ''}`}
        />
        { this.renderDescription() }
      </div>
    );
  }
}

export default connect(null, actions)(LibraryCourse);