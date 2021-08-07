import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DeliveryPartnersPage from '../../../../pages/deliveryPartners/Deliverypartners';
import DeliverPartnerUi from "../../../../components/connectToSpeedfood/DeliveryPartnerUI/DeliveryPartenerUi";
import DeliveryPartnerRegister from "../../../../components/connectToSpeedfood/DeliveryRegisterFormUI/RegisterFormUI";
import FormContinue from "../../../../components/connectToSpeedfood/FormContinue/FormContinue";
import SettingStoreForm from "../../../../components/connectToSpeedfood/SettingStore/SettingStore";
import StoreDetails from "../../../../components/connectToSpeedfood/StoreDetails/StoreDetails";


export default () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/delivery-partners" component={DeliveryPartnersPage} />
                    <Route
                        path="/delivery-partners/speed-food-backend"
                        exact
                        component={DeliverPartnerUi}
                    />
                    <Route
                        path="/delivery-partners/speed-food-backend-register"
                        exact
                        component={DeliveryPartnerRegister}
                    />
                    <Route
                        path="/delivery-partners/speed-food-backend-register-continue"
                        exact
                        component={FormContinue}
                    />
                    <Route
                        path="/delivery-partners/speed-food-backend-register-continue-setting-store"
                        exact
                        component={SettingStoreForm}
                    />
                    <Route
                        path="/delivery-partners/speed-food-backend-register-continue-setting-store-details"
                        component={StoreDetails}
                    />
                </Switch>
            </Router>
        </div>
    );
};

