var React = require('react');
var Navbar = require('./components/NavbarComponents/Navbar.react.js');
var HorizontalEventCard = require('./components/HorizontalEventCard.react.js');
var VerticalEventCard = require('./components/VerticalEventCard.react.js');

React.render(
    <div>
        <Navbar/>
        <div id="wrap">
            <HorizontalEventCard />
            <HorizontalEventCard />
            <VerticalEventCard />
        </div>
    </div>,
    document.getElementById('react')
);
