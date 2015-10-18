'use strict';

import React from 'react';

let EventCard = React.createClass({
    getInitialState: function () {
        return {
            followed: false
        };
    },

    render: function () {
        return (
            <div className='eventCard' id={this.props.id}>
                <section className='eventImgSec'>
                    <img className='eventImg'></img>
                </section>
                <section className='eventDescSec'>
                    <p className='eventDesc'>{this.props.desc}</p>
                </section>
                <section className='profileBadgeSec'>
                </section>
                <section className='followerBadgeSec'>
                </section>
            </div>
        );
    }
});

module.exports = EventCard;
