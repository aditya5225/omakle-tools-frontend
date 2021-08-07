import React, { useState } from 'react';
import PosPassCode from '../../../../components/posSettings/PosPasscode/PosPassCode'

const TopBarPos = () => {
    const [posModal, setPosModal] = useState(false);

    const togglePosModal = () => {
        setPosModal(!posModal)
    }
    return (
        <div className="topbar__profile">
            {<PosPassCode posModal={posModal} togglePosModal={togglePosModal} />}
            <button className="topbar__avatar" type="button" onClick={togglePosModal}>
                <p className="topbar__avatar-name" style={{ margin: "auto", fontFamily: "'Roboto', sans-serif" }}>
                    POS
                 </p>
            </button>
        </div>
    );
}

export default TopBarPos;