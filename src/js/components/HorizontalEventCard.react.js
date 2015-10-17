var React = require('react');
var ProfileBadge = require('./ProfileBadge.react.js');
var FollowerBadge = require('./FollowerBadge.react.js');

class HorizontalEventCard extends React.Component {
    render() {
        return (
            <div className='horizontalEventCard'>
                <section id="posterImage">
                    <img id="poster" src="images/hposter.jpg"></img>
                </section>
                <section id="data">
                    <section id="desc">This is a crazy long description
                        that should not have been here I feel
                        and you should do something about it :P
                        and this is a long text please dontt kill me!!!!!</section>
                    <section id="miscData">
                        <FollowerBadge
                                followerCount="2389" />
                        <ProfileBadge
                                avatarUrl="images/avatar.jpg"
                                username="Bruce"
                                startDate="Oct 15, 2016"/>
                    </section>
                </section>
            </div>
        );
    }
}

module.exports = HorizontalEventCard;
