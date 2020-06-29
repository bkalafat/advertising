import React, { useState, useEffect } from 'react';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import InputBox from '../../components/common/input/index';
import Menu from '../menu/index';
import Image from '../../components/common/image/index';
import logo from '../../public/assets/images/Logo.png';
import Account from '../../public/assets/images/account.png';
import SearchImg from '../../public/assets/images/search.png';
import { X, search } from 'react-feather';
import { Title } from '../../components/common/title/index';
import Login from './login';
import { User, Search } from 'react-feather';
import '../../containers/navbar/navbar.scss';


function Navbar() {
    const [activeClass, setactiveClass] = useState(false);
    const [search, setSearch] = useState(false);
    const [login, setLogin] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                let scoll = null
                if (window.scrollY === 0) {
                    scoll = false
                } else {
                    scoll = true
                }
                setactiveClass(scoll)
            });
        }
    }, [])

    const searchClick = () => {
        setSearch(!search)
    }
    const loginClick = () => {
        setLogin(!login)
    }

    return (
        <div className="App-header">
            <header className={`header-sticky ${activeClass ? 'sticky' : ''}`}>
                <Container>
                    <Row>
                        <Col sm={6} className="left-block">
                            <div className="logo-wrapper">
                                <a href="/">
                                    <Image Path={logo} Class="logo-img" />
                                </a>
                            </div>
                        </Col>
                        <Col sm={6} className="right-block">
                            <div className="search-menu-account-wrapper">
                                <div className="menu-right-1">
                                    <div className="account-wrapper">
                                        <div className="account-icon" onClick={loginClick}>
                                            <User />
                                        </div>
                                        <div className={`login-register-wrapper ${login ? 'open' : ''}`}>
                                            <Login Click={loginClick} />
                                        </div>
                                    </div>
                                    <div className="search-wrapper">
                                        <div className="search-header" onClick={searchClick}>
                                            <Search />
                                        </div>

                                        <div className={`search-outer-wrapper ${search ? 'open' : ''}`}>
                                            <div className="search-close gradient-color" onClick={searchClick}>
                                                <X />
                                            </div>
                                            <div className="search-title-box">
                                                <Title Class="search-title" Name="Search Panel" />
                                                <div className="search-box">
                                                    <FormGroup>
                                                        <InputBox
                                                            Type="text"
                                                            Name="search"
                                                            PlaceHolder="Search items"
                                                        />
                                                    </FormGroup>
                                                    <span className="search-icon">
                                                        <Search />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Menu />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default Navbar;
