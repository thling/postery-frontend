var React = require('react');
var EventCard = require('./components/EventCard.react.js');

React.render(
    <div>
        <EventCard />
        <EventCard />
    </div>,
    document.getElementById('react')
);
