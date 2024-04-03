import 'bulma/css/bulma.min.css';

function Navbar() {
    return (
        <nav class="navbar has-background-primary-10" role="navigation" aria-label="main navigation">
        <div class="navbar-menu">
          <div class="navbar-item">
            Home
          </div>
          <div class="navbar-item">
            Report
          </div>
        </div>
  
        <div class="navbar-end">
          <div class="navbar-item">
            Join us
          </div>
          <div class="navbar-item">
            Github
          </div>
        </div>
      </nav>
  
    )
}

export default Navbar;