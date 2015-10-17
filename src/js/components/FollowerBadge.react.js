var React = require('react');

class FollowerBadge extends React.Component {
    render() {
        return (
            <div id="followerStats">
                <section id="followerIcon">
                    <img src="images/follower.jpg"></img>
                </section>
                <section id="followerData">
                    <div id="label">Followers</div>
                    <div id="count">{this.props.followerCount}</div>
                </section>
            </div>
        );
    }
}

module.exports = FollowerBadge;
