var React = require('react');
var SearchBar = require('./SearchBar.react.js');

class Navbar extends React.Component {
    render() {
        return (
            <section id="navbar">
                <SearchBar />
            </section>
        );
    };
}

module.exports = Navbar;
