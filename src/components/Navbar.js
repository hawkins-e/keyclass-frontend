import React from "react"
import {Link} from "react-router-dom"
import {Header,Icon} from "semantic-ui-react"

const Navbar = props => {
  return (
    <div className={`ui sticky-top inverted ${props.color} menu`}>
      <Link to="/typingtest" className="item">
        <Header as="h2" size="medium"  icon>
          <Icon name="keyboard outline" />
          {/* <img size= "medium" src = "https://user-images.githubusercontent.com/46728814/74704744-25aaf200-51d7-11ea-8c1d-b1e6337bceee.png"/> */}
          <div className="content">{props.title}</div>
          <div className="sub header">{"Type with Us!"}</div>
        </Header>
      </Link>
    </div>
  );
};
 
export default Navbar 