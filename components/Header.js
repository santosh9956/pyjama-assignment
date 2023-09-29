import Image from 'next/image';
import React from 'react';

const Header = (props) => {
  return (
    <>
        <div className="header_wrapper">
            <Image width={90} height={40} priority src={'https://pyjamahr.com/images/logo2x.svg'} alt='site_logo' />
        </div>
        <style jsx>{`
            .header_wrapper{
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 60px;
                background-color: #fff;
                box-shadow: 0px 4px 6px 0px rgba(12,0,46,0.06);    
                padding: 0 4rem ;      
                display: flex;
                align-items: center;  
                z-index: 99999;
            }
        `}</style>
    </>
  )
}

export default Header;