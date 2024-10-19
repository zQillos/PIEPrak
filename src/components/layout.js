import { NavLink, Outlet, Link } from 'react-router-dom';
import './header.css'
import './footer.css'
import '../reset.css'
import '../index.css'
import '../media.css'

function Layout() {
    return (
        <>
         <div className='header-up'>
            <NavLink to="/"><img src="/img/logo.png" alt="logo"/></NavLink>
            <div className='header-inner'>
                <div className='header-up-links'>
                    <NavLink className='header-up-link' to="/explore">Explore</NavLink>
                    <Link className='header-up-link' to="https://influencermarketinghub.com/top-nft-creators">Creators</Link>
                    <Link className='header-up-link' to="https://crowdcreate.us/top-nft-communities-to-join">Community</Link>
                </div>
                <NavLink to="/wallet"><button className='header-up-btn'>Connect Wallet</button></NavLink>
            </div>
            <div className="burg">
                <img src="/img/dashicons_menu.svg"/> 
            </div>
        </div>
        <main>
            <Outlet />
        </main>
        <footer className="end">
          <div className="footer-1">
              <NavLink to="/"><img className='footer-logo' src="/img/logo2.png" alt="logo"/></NavLink>
              <div className='footer-1-dec'>
                  <p>Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra gravida est. </p>
                  <div className='footer-imgs'>
                      <Link to="https://www.youtube.com/channel/UCv_Fztyrk3pL4R5P-lVNCJA"><img src="/img/footeryoutube.svg" alt="youtube"/></Link>
                      <NavLink to="/"><img src="/img/footertwitter.svg" alt="twitter"/></NavLink>
                      <NavLink to="/"><img src="/img/footerf.svg" alt="facebook"/></NavLink>
                      <NavLink to="/"><img src="/img/footerg.svg" alt="google"/></NavLink>
                  </div>
                  <p><span>All rights reserved@2024</span></p>
              </div>
          </div>
          <div className="footer-2">
              <h3>About Us</h3>
              <ul>
                  <li><NavLink to="/explore">About NFTs</NavLink></li>
                  <li><NavLink to="/liveauc">Live Auctions</NavLink></li>
                  <li><Link to="https://www.airnfts.com/blog">NFT Blog</Link></li>
                  <li><NavLink to="/activity">Activity</NavLink></li>
              </ul>
          </div>
          <div className="footer-3">
              <h3>Support</h3>
              <ul>
                  <li><NavLink to="/">Help & Support</NavLink></li>
                  <li><NavLink to="/">Item Details</NavLink></li>
                  <li><NavLink to="/">Author Profile</NavLink></li>
                  <li><NavLink to="/">Collection</NavLink></li>
              </ul>
          </div>
      </footer>
      <footer className="end1">
        <div className="footer-1">
            <img className='footer-logo' src="/img/logo2.png" alt="logo"/>
        </div>
        <div className="footer-2">
            <p>Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra gravida est. </p>
        </div>
        <div className="footer-3">
            <div>
                <h3>About Us</h3>
                <ul>
                <li><NavLink to="/explore">About NFTs</NavLink></li>
                  <li><NavLink to="/liveauc">Live Auctions</NavLink></li>
                  <li><Link to="https://www.airnfts.com/blog">NFT Blog</Link></li>
                  <li><NavLink to="/activity">Activity</NavLink></li>
                </ul>
            </div>
            <div>
                <h3>Support</h3>
                <ul>
                <li><NavLink to="/">Help & Support</NavLink></li>
                  <li><NavLink to="/">Item Details</NavLink></li>
                  <li><NavLink to="/">Author Profile</NavLink></li>
                  <li><NavLink to="/">Collection</NavLink></li>
                </ul>
            </div>
        </div>
        <div className='footer-imgs'>
                      <Link to="https://www.youtube.com/channel/UCv_Fztyrk3pL4R5P-lVNCJA"><img src="/img/footeryoutube.svg" alt="youtube"/></Link>
                      <NavLink to="/"><img src="/img/footertwitter.svg" alt="twitter"/></NavLink>
                      <NavLink to="/"><img src="/img/footerf.svg" alt="facebook"/></NavLink>
                      <NavLink to="/"><img src="/img/footerg.svg" alt="google"/></NavLink>
                  </div>
        <div className="spn">
            <p><span>All rights reserved@2021</span></p>
        </div>
        
    </footer>
        </>
    );
}
export { Layout }