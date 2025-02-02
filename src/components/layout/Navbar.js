import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({icon, title}) => {

        return (
            <navbar className="navbar bg-primary">
               <h1><i className={icon} />  {title}
                </h1> 
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            
            </navbar>
        );
    }



Navbar.defaultProps = {
    title: 'Github User finder',
    icon: 'fab fa-github'
  };

  Navbar.propTypes ={
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
  };


export default Navbar;
