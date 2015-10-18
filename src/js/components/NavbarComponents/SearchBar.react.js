var React = require('react');
var $ = require('jquery');

class SearchBar extends React.Component {
    render() {
        return (
            <input id="searchbox" type="text"></input>
        );
    }

    componentDidMount() {
        $('#searchbox').focusin(function () {
            $("#wrap").animate({
                opacity: 0.5
            }, 200);
        });

        $("#searchbox").focusout(function () {
            $("#wrap").animate({
                opacity: 1
            }, 200);
        });
    }
}

module.exports = SearchBar;
