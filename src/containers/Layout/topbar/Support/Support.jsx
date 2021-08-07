import React, { Component } from 'react';
import { ContactSupport } from '@material-ui/icons';
import { Link} from 'react-router-dom';
// import DownIcon from 'mdi-react/ChevronDownIcon';
// import { Collapse } from 'reactstrap';
// import TopbarMenuLink from '../TopbarMenuLink';
// import { UserProps, AuthOProps } from '../../../../shared/prop-types/ReducerProps';
// import { hookAuth0 } from '../../../../shared/components/auth/withAuth0';

// const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

class TopbarTrainingVideo extends Component {

  constructor() {
    super();
    this.state = {
      collapse: false,
    };
  }

  toggle = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  };

  render() {
    // const { user, auth0 } = this.props;
    // const { collapse } = this.state;

    return (
        <div className="topbar__profile">
            <Link to="/contact-us">
            <button className="topbar__avatar" type="button" onClick={this.toggle}>
                <p className="topbar__avatar-name" style={{ margin: "auto", fontFamily: "'Roboto', sans-serif" }}>
                    <ContactSupport style={{ color:"rgb(100 103 119 / 44%)"}}/>
              Support
             </p>
                </button>
                </Link>
        {/* <Collapse isOpen={collapse} className="topbar__menu-wrap">
          <div className="topbar__menu">
                <TopbarMenuLink
              title="Payment invoices"
              icon="user"
              //path="/account/profile"
              onClick={this.toggle}
            />
           </div>
           <div className="topbar__menu">
                <TopbarMenuLink
              title="All-in-one POS Devices"
              icon="user"
              //path="/account/profile"
              onClick={this.toggle}
            />
           </div>
           <div className="topbar__menu">
                <TopbarMenuLink
              title="Payment-gateway"
              icon="user"
              //path="/account/profile"
              onClick={this.toggle}
            />
           </div>
        </Collapse> */}
      </div>
    );
  }
}

export default TopbarTrainingVideo;
