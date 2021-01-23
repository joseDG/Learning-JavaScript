//imr => importa React 
import React, { Fragment } from 'react';

//aplicario destructing en vez de poner props
function Header({titulo}) {
    
    return(
        <Fragment>
            <h1>{ titulo }</h1>
        </Fragment>
    )
}

//Implicitamente | esta solo funciona cuando no se va poner codigo JS
/*
const Header = ({titulo}) =>(
    <h1>{ titulo }</h1>
);*/

export default Header;