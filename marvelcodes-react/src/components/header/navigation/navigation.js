import React from 'react';
import NavigationItems from './navigationItem';
import HeaderBottom from '../HeaderBottom';

class Navigation extends React.Component {
    render() {

        return (
            <div className="site-header float-left">
                <div className="float-left w-100 mobileNavigationContainer">
                    <div className="site-header__top">
                        <NavigationItems />
                        <HeaderBottom />
                    </div>
                </div>
            </div>

        )
    }
}
export default Navigation;