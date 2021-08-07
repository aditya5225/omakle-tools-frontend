import React from 'react'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import LogoutIcon from "mdi-react/LogoutIcon";
import { useState } from 'react';
import { useHistory } from 'react-router';

export const Logout = () => {

    const [state, setState] = useState(false)
    const history = useHistory();

    const toggleLogoutModal = () => setState(!state)


    const renderLogoutModal = () => {
        return (
            <Modal isOpen={state} toggle={toggleLogoutModal} className="modal-body px-2 py-3" centered={true} >
                <form className="theme-form px-3" noValidate=""  >
                    <ModalHeader style={{justifyContent:'center'}} >Confirmation</ModalHeader>
                    <ModalBody style={{ textAlign: "center" }}>
                        <h5 className={'py-3'} >You will be returned to the login screen</h5>
                        <div style={{ marginTop: "1rem",display:'flex',justifyContent:'space-between' }}>
                            <Button color="secondary"  size="sm" style={{ margin: "0 0.7rem" }}>
                                Cancel
                          </Button>
                            <Button color="primary"  size="sm" style={{ margin: "0 0.7rem" }} onClick={() => history.push("/account/logout")}>
                                Logout
                          </Button>
                        </div>
                    </ModalBody>
                </form>
            </Modal>
        );
    }


    return (
        <>
            {state && renderLogoutModal()}
            <div className="topbar__collapse mr-0">
                <button className="topbar__btn" type="button" onClick={() => toggleLogoutModal()}>
                    <LogoutIcon size={24} />
                </button>
            </div>
        </>
    )
}
