import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PointOfSale from 'mdi-react/PointOfSaleIcon';
import {switchFrontend } from '../../../../store/actions/panelSwitchActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const POSScreen = () => {
    const dispatch = useDispatch();
    const switched = () => {
        dispatch(switchFrontend());
    }

    return (
        <div>
            <Link to="/pos-landing">
                <Button className="ml-2 mb-0" style={{ marginTop: "13px", paddingInline: "5px"}} size="sm" color="primary" onClick={switched}>
                    <p className="topbar__avatar-name d-flex align-items-center" style={{ margin: "auto", fontFamily: "'Roboto', sans-serif", fontWeight: "400"  }}>
                        <PointOfSale style={{height:"18px", width:"18px"}}/> POS Screen
                    </p>
            </Button>
            </Link>
        </div>
    );
}

export default POSScreen;
