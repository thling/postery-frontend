var React = require('react');

class ProfileBadge extends React.Component {
    render() {
        return (
            <div id="creator">
                <section id="profileImg">
                    <img id="avatar" src={this.props.avatarUrl}></img>
                </section>
                <section id="userInfo">
                    <div id="username">{this.props.username}</div>
                    <div id="startDate">{this.props.startDate}</div>
                </section>
            </div>
        );
    }
}

module.exports = ProfileBadge;
