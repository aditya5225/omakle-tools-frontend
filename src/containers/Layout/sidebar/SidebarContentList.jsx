import React from "react";
import { Sidebar } from "react-feather";
import { useSelector } from "react-redux";
import SidebarCategory from "./SidebarCategory";
import SidebarLink from "./SidebarLink";

const SidebarContentList = ({ sidebarCollapse, hideSidebar }) => {
    const currentPanel = useSelector((state) => state.panelSwitchReducer.backendPanel);
    const merchant = JSON.parse(localStorage.getItem("merchant"));
    const reservationSettingsSteps = useSelector((state) => state.auth.registeredUser);

    return (
        <div>
            {currentPanel ? (
                <div>
                    <SidebarLink title="Dashboard" icon="chart-bars" route="/dashboard" onClick={hideSidebar} />
                    <SidebarLink title="Store" icon="store" route={`/store/${merchant._id}`} onClick={hideSidebar} />
                    <SidebarLink
                        title="Order Online"
                        icon="cart"
                        route={reservationSettingsSteps.reservation_settings_steps >= 6 ? "/reservation-list" : "/reservation-settings"}
                        onClick={hideSidebar}
                    />
                    <SidebarLink title="Product" icon="list" route="/pos-settings" onClick={hideSidebar} />
                    <SidebarLink title="People" customIcon="People" route="/people" onClick={hideSidebar} />
                    {/* <SidebarLink title="Orders & Sales" icon="cart" route="/payment-invoices" onClick={hideSidebar} /> */}
                    <SidebarLink
                        title="Features"
                        icon="diamond"
                        route="/features"
                        onClick={hideSidebar}
                    />
                    {/* <SidebarLink title="Analytics" icon="chart-bars" route="/analytics" onClick={hideSidebar} /> */}
                    <SidebarLink title="Company Settings" customIcon="Setting" route="/company-setting" onClick={hideSidebar} />
                    <SidebarLink title="Hardwares" icon="printer" onClick={hideSidebar} route="/Hardwares" />

                    {/*  <SidebarLink title="Analytics"
                        icon="chart-bars"
                        route="/analytics"
                        onClick={hideSidebar}
                    />
                    <SidebarLink
                        title="My QR Code"
                        icon="smartphone"
                        route="/qr-details"
                        onClick={hideSidebar}
                    />
                    <SidebarLink
                        title="Transactions"
                        icon="undo"
                        route="/transactions"
                        onClick={hideSidebar}
                    />
                    <SidebarLink
                        title="Payment Invoices"
                        icon="file-empty"
                        route="/payment-invoices"
                        onClick={hideSidebar}
                    />
                    <SidebarCategory
                        title="Settings"
                        icon="cog"
                        sidebarCollapse={sidebarCollapse}>
                        <SidebarLink
                            title="Profile"
                            //icon="store"
                            route="/profile"
                            onClick={hideSidebar}
                        />
                        <SidebarLink
                            title="Manage Users & Roles"
                            //icon="store"
                            route="/manage-users-roles"
                            onClick={hideSidebar}
                        />
                    </SidebarCategory>

                    <SidebarCategory
                        title="Developer Settings"
                        icon="code"
                        sidebarCollapse={sidebarCollapse}>
                        <SidebarLink
                            title="API Keys"
                            //icon="store"
                            route="/dashboard_default"
                            onClick={hideSidebar}
                        />
                        <SidebarLink
                            title="API Documents"
                            //icon="store"
                            route="/dashboard_default"
                            onClick={hideSidebar}
                        />
                    </SidebarCategory>

                    <SidebarLink title="iPayPro Business App"
                        icon="smartphone"
                        route="/download-app"
                        onClick={hideSidebar}
                    />

                    <SidebarLink
                        title="Table Reservations"
                        icon="calendar-full"
                        newLink={true}
                        route={reservationSettingsSteps >= 6 ? '/reservation-list' : '/reservation-settings'}
                        onClick={hideSidebar}
                    />
                    <SidebarLink 
                        title="POS Setting"
                        icon="calendar-full"
                        route="/pos-settings"
                        onClick={hideSidebar}
                    />*/}

                    {/*<SidebarCategory
                        title="POS"
                        icon="calendar-full"
                        sidebarCollapse={sidebarCollapse}>
                        <SidebarLink
                            title="POS Settings"
                            //icon="store"
                            // newLink={true}
                            route="/pos-products"
                            onClick={hideSidebar}
                        />   
                       <SidebarLink
                            title="Products"
                            //icon="store"
                            // newLink={true}
                            route="/pos-products"
                            onClick={hideSidebar}
                        />
                         <SidebarLink
                            title="Orders"
                            //icon="checkmark-circle"
                            // newLink={true}
                            route="/pos-orders"
                            onClick={hideSidebar}
                        />
                        <SidebarLink
                            title="Customers"
                            //icon="checkmark-circle"
                            // newLink={true}
                            route="/pos-customers"
                            onClick={hideSidebar}
                        />
                        <SidebarLink
                            title="Staff"
                            //icon="checkmark-circle"
                            // newLink={true}
                            route="/pos-staff"
                            onClick={hideSidebar}
                        />
                        <SidebarLink
                            title="Settings"
                            //icon="store"
                            // newLink={true}
                            route="/pos-settings"
                            onClick={hideSidebar}
                        /> 
                    </SidebarCategory>*/}
                </div>
            ) : (
                <div>
                    <SidebarLink
                        title="Checkout"
                        //icon="cart"
                        // newLink={true}
                        route="/pos-chekouts"
                        onClick={hideSidebar}
                    />
                </div>
            )}
        </div>
    );
};

export default SidebarContentList;
