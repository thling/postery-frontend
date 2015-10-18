'use strict';

import React from 'react';
import EventCard from './components/Cards/EventCard.react.js';
import $ from 'jquery';

let App = React.createClass({
    getInitialState: function () {
        let randId1 = Math.floor((Math.random() * 10) + 1),
            randId2 = Math.floor((Math.random() * 10) + 1);
        return {
            cards: [ <EventCard id={ randId1 } desc={ 'test' + randId1 } />,
                    <EventCard id={ randId2 } desc={ 'test' + randId2 } /> ],
            test: 'nosadsasaooo'
        };
    },

    addCard: function (desc) {
        let randId = Math.floor((Math.random() * 10) + 1);
        let newCards = this.state.cards.slice();
        newCards.push(<EventCard id={ randId } desc={ 'test' + randId }/>);

        this.setState({ cards: newCards });
    },

    componentDidMount: function () {
        let _self = this;
        $(window).click(function () {
            _self.addCard('test');
        });
    },

    render: function () {
        return (
            <div id="wrap">
            {
                this.state.cards.map(function (card, i) {
                    return (<div key={ i }> { card } </div>);
                })
            }
            </div>
        );
    }
});

React.render(<App />, document.getElementById('app'));
