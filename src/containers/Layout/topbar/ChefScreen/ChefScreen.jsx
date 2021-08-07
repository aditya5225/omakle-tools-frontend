import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ChefHat from 'mdi-react/ChefHatIcon'

class ChefScreen extends Component {

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

        return (
            <div>
                {/* <Button className="ml-2 mb-0" style={{ marginTop: "13px", paddingInline: "5px"}} size="sm" color="danger" onClick={this.toggle}>
                    <p className="topbar__avatar-name  d-flex align-items-center" style={{ margin: "auto", fontFamily: "'Roboto', sans-serif", fontWeight: "400" }}>
                        <ChefHat style={{ height: "18px", width: "18px" }}/>
                        Chef's Screen
                        </p>
                </Button> */}
            </div>
        );
    }
}

export default ChefScreen;
