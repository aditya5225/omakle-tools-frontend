import React, { Component } from 'react';
// import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from '../TopbarMenuLink';
// import { UserProps, AuthOProps } from '../../../../shared/prop-types/ReducerProps';
// import { hookAuth0 } from '../../../../shared/components/auth/withAuth0';

// const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

class TopbarProducts extends Component {

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
    const { collapse } = this.state;

    return (
      <div className="topbar__profile">
        <button className="topbar__avatar" type="button" onClick={this.toggle}>
          <p className="topbar__avatar-name" style={{margin:"auto",fontFamily:"'Roboto', sans-serif"}}>
            PRODUCTS
          </p>
        </button>
        {collapse && <button className="topbar__back" type="button" onClick={this.toggle} />}
        <Collapse isOpen={collapse} className="topbar__menu-wrap" style={{width:"320px"}}>
          <div className="topbar__menu" style={{padding:"10px"}}>
                <TopbarMenuLink
              title="Payment invoices"
              subtitle="Create invoices to collect online payments"
              icon="user"
              //path="/account/profile"
              onClick={this.toggle}
            />
           </div>
           <div className="topbar__menu" style={{padding:"10px"}}>
                <TopbarMenuLink
              title="All-in-one POS Devices"
              subtitle="Devices for billings and payments needs"
              icon="user"
              //path="/account/profile"
              onClick={this.toggle}
            />
           </div>
           <div className="topbar__menu" style={{padding:"10px"}}>
                <TopbarMenuLink
              title="Payment-gateway"
              subtitle="Accept payments in your app or website"
              icon="user"
              //path="/account/profile"
              onClick={this.toggle}
            />
           </div>
        </Collapse>
      </div>
    );
  }
}

export default TopbarProducts;
