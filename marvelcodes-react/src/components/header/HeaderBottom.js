import React from 'react';
import UpworkLogo from '../../components/upwork-logo.svg';

class HeaderBottom extends React.Component {
    render() {
        var UpworkLogoStyle = {
            height : 14 + 'px',
            marginTop: 3 + 'px',
        }
        var UpworkProfileLink = {
            href: 'https://www.upwork.com'
        }
        return (
            <div className="site-header__bottom mt-2 float-left w-100">
                <ul className="block-utilitynavigationmenu nav-support">
                    <li className="nav-support__list-item">
                          
                        <a className="d-inline-block text-white p-1" href=""><i className="fas fa-phone-volume"></i></a>
                        <a className="d-inline-block text-white p-1" href=""><i className="fas fa-at"></i></a>
                        <a className="d-inline-block text-white p-1" href={UpworkProfileLink}><embed type="image/svg+xml" src={UpworkLogo} style={UpworkLogoStyle} /></a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HeaderBottom;