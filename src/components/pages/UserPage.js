import React from "react";

class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        USER PAGE HERE
        <div class="ui card">
          <div class="image">
            <img src="/images/avatar/large/matthew.png" />
          </div>
          <div class="content">
            <div class="header">Matthew</div>
            <div class="meta">
              <span class="date">Joined in 2015</span>
            </div>
            <div class="description">
              Matthew is a musician living in Nashville.
            </div>
          </div>
          <div class="extra content">
            <a>
              <i aria-hidden="true" class="user icon"></i>
              22 Friends
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
