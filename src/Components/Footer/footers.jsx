import './footerStyle.css'
const Footer = ()=>{

    return(
        <div    className="footerContainer">
           Footer(TBC)
            <footer class="footer">
    <div class="footer__addr">
      <h1 class="footer__logo">Unique Garments</h1>
          
      <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Singapore</h2>
      <br>

        <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
      </address>
    </div>
    
    <ul class="footer__nav">
      <li class="nav__item">
        <h2 class="nav__title">Quick Links</h2>
  
        <ul class="nav__ul">
          <li>
            <a href="#">My Account</a>
          </li>
  
          <li>
            <a href="#">Wishlist</a>
          </li>
              
          <li>
            <a href="#">Articles</a>
          </li>
        </ul>
      </li>
      
      <li class="nav__item nav__item--extra">
        <h2 class="nav__title">Relevant Links</h2>
        
        <ul class="nav__ul nav__ul--extra">
          <li>
            <a href="#">About the Website</a>
          </li>
          
          <li>
            <a href="#">Feedback</a>
          </li>
          
          <li>
            <a href="#">Customer Care</a>
          </li>
          
          <li>
            <a href="#">Careers</a>
          </li>
          
          <li>
            <a href="#">Newsletter Signup</a>
          </li>
          
          <li>
            <a href="#">Country / Region</a>
          </li>
        </ul>
      </li>
      
      <li class="nav__item">
        <h2 class="nav__title">Legal</h2>
        
        <ul class="nav__ul">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          
          <li>
            <a href="#">Terms of Use</a>
          </li>
          
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </li>
    </ul>
    

  </footer>
        </div>
    )
}


export default Footer;
