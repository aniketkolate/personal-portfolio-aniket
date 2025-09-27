import React from 'react';
import Logo from '@/components/common/Logo/Logo';
import Navbar from '@/components/common/Navbar/Navbar';
import "./Header.scss"


const Header: React.FC = () => {
    return (
        <header>
            <Logo></Logo>
            <Navbar></Navbar>
        </header>
    );
};

export default Header;