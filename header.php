<div class="main-header">
    <div class="logo-area">
        <div class="container-fluid px-lg-5">
            <div class="row">
                <div class="col-lg-4 col-md-12 my-auto crac2">
                    <div class="logo">
                        <a href="index.php">
                            <h1 class="arial logo1 heading2 font-weight-bold text-light text-center text-lg-left">Demo
                                Calendarz
                            </h1>
                        </a>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="header-info-box">
                                <div class="header-info-icon text-main"><i class="bi bi-geo-alt-fill clr1"></i></div>
                                <div class="arial font-weight-bold">Address</div>
                                <p class="helvetica black smallfnt">000, demo road, Sivakasi - 626
                                    123</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="header-info-box ml-2">
                                <div class="header-info-icon text-main"><i class="bi bi-envelope-fill clr1"></i></div>
                                <div class="arial font-weight-bold">Mail Us</div>
                                <p class="helvetica black smallfnt">democalendarz@gmail.com</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="header-info-box">
                                <div class="header-info-icon text-main"><i class="bi bi-telephone-fill clr1"></i></div>
                                <div class="arial font-weight-bold">Call Us</div>
                                <p class="helvetica black smallfnt">(+91) 99999 99999 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<nav class="navbar navbar-expand-lg navbar-dark bg-main navbg shadow">
    <div class="container">
        <button type="button" class="navbar-toggler mx-auto collapsed" data-toggle="collapse" data-target="#myNavbar"
            id="togals">
            <span class="bi bi-list"> Menu </span>
        </button>
        <div id="myNavbar" class="navbar-collapse navfnt collapse">
            <ul class="navbar-nav text-center">
                <li class="nav-item px-2 <?php if ($page == "home") {
                    echo "active";
                } ?>">
                    <a class="nav-link " href="index.php">Home</a>
                </li>
                <li class="nav-item px-2 <?php if ($page == "about") {
                    echo "active";
                } ?>">
                    <a class="nav-link " href="about.php">About</a>
                </li>
                <!-- products dropdown -->
                <li class="nav-item px-2 dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Products
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="products.php#business-cards">Daily Calendars Printing</a>
                        <a class="dropdown-item" href="products.php#brouchures">Monthly Sheet</a>
                        <a class="dropdown-item" href="products.php">Yearly Planner Calendar</a>
                        <a class="dropdown-item" href="products.php">Desk Calendars</a>
                        <a class="dropdown-item" href="products.php">Personal Pocket Calendars</a>
                        <a class="dropdown-item" href="products.php">Magnetic Fridge Calendars</a>
                    </div>
                </li>

                <li class="nav-item px-2 <?php if ($page == "gallery") {
                    echo "active";
                } ?>">
                    <a class="nav-link " href="gallery.php">Gallery</a>
                </li>
                <li class="nav-item px-3 <?php if ($page == "contact") {
                    echo "active";
                } ?>">
                    <a class="nav-link " href="contact.php">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>