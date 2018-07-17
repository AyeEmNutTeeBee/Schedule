import React, { Component } from 'react';
import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-check">
                    <label className="library-course__title">
                        Course Name
                    </label>
                    <div className="check"></div>
                    { Icon("fas fa-check", "library-course__icon") }
                </div>
                <Arrow className="library-course__arrow"/>
                <Action className="library-course__action"/>
                <div className="library-course__description">
                    <label>Description:</label>
                    <p>
                        This course is good, and you're a fool if you defy my opinion.
                    </p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;