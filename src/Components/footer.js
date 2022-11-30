import React from "react";

function Footer() {
    return (
        <footer>
        <div class="content">
          <div class="top">
            <div class="logo-details">
              <i class="fab fa-slack"></i>
              <span class="logo_name">IPDC</span>
            </div>
           
          </div>
          <div class="link-boxes">
            <ul class="box">
              <li class="link_name">About us</li>
              <li><a href="#">ICT park started working in 2015, the main service of the park is to provide sublease land and office spaces to rent for the inversotrs who are involved in the ICT sector.</a></li>
              {/* <li><a href="#">Contact us</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Get started</a></li> */}
            </ul>
            <ul class="box">
              <li class="link_name">Address</li>
              <li><a href="#">you can reach us via: EMAIL</a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
            </ul>
            <ul class="box">
              <li class="link_name">Adress</li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#">Prefrences</a></li>
              <li><a href="#">Purchase</a></li>
            </ul>
           </div>
        </div>
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">Copyright © 2022 <a href="#">IPDC.</a>All rights reserved</span>
            <span class="policy_terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    )


}

export default Footer;