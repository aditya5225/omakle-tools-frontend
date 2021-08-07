import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AnalyticsPage from '../../../../pages/analytics/AnalyticsPage';


// import ECommerceDashboard from '../../../Dashboards/ECommerce/index';
import ECommerceDashboardEdit from '../../../Dashboards/ECommerceTableEdit/index';

export default () => (
  <Switch>
    <Route exact path="/analytics" component={AnalyticsPage} />
    <Route path="/dashboard_e_commerce/edit/:index" component={ECommerceDashboardEdit} />
  </Switch>
);
