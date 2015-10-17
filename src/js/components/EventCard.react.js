var React = require('react');

class EventCard extends React.Component {
    render() {
        return (
            <div className='horizontalEventCard'>
                <section id="title">New Event</section>
                <hr/>
                <section id="desc">This is a crazy long description
                    that should not have been here I feel
                    and you should do something about it :P</section>
                <section id="miscData">
                    <div id="creator">
                        <img id="avatar" src="images/avatar.jpg"></img>
                        <div id="username">Bruce</div>
                        <div id="startDate">2016 Oct 15</div>
                    </div>
                    <div id="followerCount">
                        <img id="follower_icon" src="images/follower.jpg"></img>
                        <div id="follower_label">Followers</div>
                        <div id="count">2839</div>
                    </div>
                </section>
            </div>
        );
    }
};


module.exports = EventCard;
