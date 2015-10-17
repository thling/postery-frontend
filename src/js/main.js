var React = require('react');
var HorizontalEventCard = require('./components/HorizontalEventCard.react.js');
var VerticalEventCard = require('./components/VerticalEventCard.react.js');

React.render(
    <div>
        <HorizontalEventCard />
        <HorizontalEventCard />
        <VerticalEventCard />
    </div>,
    document.getElementById('react')
);
