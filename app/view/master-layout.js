import View from 'paykhom-fw/container/view';

export default class MasterLayout extends View /* TODO: Theme*/
{
    constructor(config) {
        super(config)
    }


    *head()
    {
yield html`
        <title>${this.meta["title"] ?? "Paykhom Limited"}</title>

    `;    }
    
    *style() {
        yield html``;

    }
    
    *script() {
        yield html``;

    }
    
    *header() {
        yield html``;

    }

    *content() {
        yield html``;
    }

    *template($params)
    {
    yield html`

<!DOCTYPE html>
<html lang="en" data-layout-mode="light_mode" data-layout-style="default" data-nav-color="light">

    <head>
        <!-- page meta -->
        ${this.render(this.head())}
        <!-- /page meta -->

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
        <meta name="description" content="POS - Bootstrap Admin Template">
        <meta name="keywords"
            content="admin, estimates, bootstrap, business, corporate, creative, invoice, html5, responsive, Projects">
        <meta name="author" content="Dreamguys - Bootstrap Admin Template">
        <meta name="robots" content="noindex, nofollow">


        <script src="/pwa-manager.js" async></script> 
     

        <!-- Favicon -->
        <link rel="shortcut icon" type="image/x-icon" href="/theme/dp/assets/img/favicon.png">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="/theme/dp/assets/css/bootstrap.min.css">
        

        <!-- Bootstrap Icons CSS -->
        <link rel="stylesheet" href="/theme/dp/assets/libs/bootstrap-icons/font/bootstrap-icons.min.css">
        
        <!-- animation CSS -->
        <link rel="stylesheet" href="/theme/dp/assets/css/animate.css">

        <!-- Select2 CSS -->
        <link rel="stylesheet" href="/theme/dp/assets/plugins/select2/css/select2.min.css">

        <!-- Summernote CSS -->
        <link rel="stylesheet" href="/theme/dp/assets/plugins/summernote/summernote-bs4.min.css">

        <!-- Datetimepicker CSS -->
        <link rel="stylesheet" href="/theme/dp/assets/css/bootstrap-datetimepicker.min.css">

        <!-- Mobile CSS-->
        <link rel="stylesheet" href="/theme/dp/assets/plugins/intltelinput/css/intlTelInput.css">
        <link rel="stylesheet" href="/theme/dp/assets/plugins/intltelinput/css/demo.css">


        <!-- Fontawesome CSS -->
        <link rel="stylesheet" href="/theme/dp/assets/plugins/fontawesome/css/fontawesome.min.css"> <!-- WHY DOUBLE?? -->
        <link rel="stylesheet" href="/theme/dp/assets/plugins/fontawesome/css/all.min.css">


        <!-- EKN: Datatables 2.2.0 for Bootstrap 5 -->

        <link href="/_assets/pkg/tabulator/dist/css/tabulator_bootstrap5.min.css" rel="stylesheet">
                    
        <!-- <link rel="stylesheet" href="/theme/dp/assets/packages/datatable-bootstrap5/datatables.min.css"> -->

        <!-- WHY?? -->
            <link rel="stylesheet" href="/theme/dp/assets/css/swal2.css"> 
        <!-- /WHY?? -->

        <link rel="stylesheet" href="/theme/dp/assets/css/dataTables.bootstrap5.min.css">            
        <!-- /EKN: Datatables 2.2.0 for Bootstrap 5 -->

        <!-- Main CSS -->
        <link rel="stylesheet" href="/theme/dp/assets/css/style.css">

        <style>
            /* EKN */
            body {
                overflow:scroll !important; /* amazing! */
            }
            /* /EKN */

        </style>
                


    </head>

    <body>

        <div id="global-loader" style="display: none;">
            <div class="whirly-loader"> </div>
        </div>

        <!-- Main Wrapper -->
        <div class="main-wrapper">

            <!-- Header -->
            <div class="header">

                <!-- Logo -->
                <div class="header-left active">
                    <a href="/" class="logo logo-normal">
                        <img  loading="lazy" data-src="/paykhom-nobg.png" alt="Paykhom" style="height:64px; width:auto;">
                    </a>
                    <a href="/" class="logo logo-white">
                        <img  loading="lazy" data-src="/paykhom-nobg.png" alt="Paykhom" style="height:64px; width:auto;">
                    </a>
                    <a href="/" class="logo-small">
                        <img  loading="lazy" data-src="/paykhom-nobg.png" alt="Paykhom" style="height:64px; width:auto;">
                    </a>
                    <a id="toggle_btn" href="javascript:void(0);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-chevrons-left feather-16">
                            <polyline points="11 17 6 12 11 7"></polyline>
                            <polyline points="18 17 13 12 18 7"></polyline>
                        </svg>
                    </a>
                </div>
                <!-- /Logo -->

                <a id="mobile_btn" class="mobile_btn" href="#sidebar">
                    <span class="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>

                <!-- Header Menu -->
                <ul class="nav user-menu">
                    <li class="nav-item nav-item-box">
                        <a href="/" id="btnFullscreen">
                            <i class="bi bi-house"></i>
                        </a>
                    </li>
                    <li class="nav-item nav-item-box">
                        <a href="/admin" id="btnFullscreen">
                            <i class="bi bi-houses"></i>
                        </a>
                    </li>

                    <!-- Search -->
                    <li class="nav-item nav-searchinputs">
                        <div class="top-nav-search d-none">
                            <a href="javascript:void(0);" class="responsive-search">
                                <i class="fa fa-search"></i>
                            </a>
                            <form action="#" class="dropdown">
                                <div class="searchinputs dropdown-toggle" id="dropdownMenuClickable"
                                    data-bs-toggle="dropdown" data-bs-auto-close="false">
                                    <input type="text" placeholder="Search">
                                    <div class="search-addon">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-x-circle feather-14">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="15" y1="9" x2="9" y2="15"></line>
                                                <line x1="9" y1="9" x2="15" y2="15"></line>
                                            </svg></span>
                                    </div>
                                </div>
                                <div class="dropdown-menu search-dropdown" aria-labelledby="dropdownMenuClickable">
                                    <div class="search-info">
                                        <h6><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-search feather-16">
                                                    <circle cx="11" cy="11" r="8"></circle>
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                </svg></span>Recent Searches
                                        </h6>
                                        <ul class="search-tags">
                                            <li><a href="javascript:void(0);">Products</a></li>
                                            <li><a href="javascript:void(0);">Sales</a></li>
                                            <li><a href="javascript:void(0);">Applications</a></li>
                                        </ul>
                                    </div>
                                    <div class="search-info">
                                        <h6><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-help-circle feather-16">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                </svg></span>Help</h6>
                                        <p>How to Change Product Volume from 0 to 200 on Inventory management</p>
                                        <p>Change Product Name</p>
                                    </div>
                                    <div class="search-info">
                                        <h6><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-user feather-16">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg></span>Customers</h6>
                                        <ul class="customers">
                                            <li><a href="javascript:void(0);">Aron Varu<img
                                                        src="/theme/dp/assets/img/user.webp" alt="" class="img-fluid"></a>
                                            </li>
                                            <li><a href="javascript:void(0);">Jonita<img
                                                        src="/theme/dp/assets/img/profiles/avatar-01.jpg" alt=""
                                                        class="img-fluid"></a></li>
                                            <li><a href="javascript:void(0);">Aaron<img
                                                        src="/theme/dp/assets/img/profiles/avatar-10.jpg" alt=""
                                                        class="img-fluid"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <!-- /Search -->


                    <!-- Select Store -->
                    <li class="nav-item dropdown has-arrow main-drop select-store-dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle nav-link select-store"
                            data-bs-toggle="dropdown">
                            <span class="user-info">
                                <span class="user-letter">
                                    <img  loading="lazy" data-src="/theme/dp/assets/img/store/store-01.png" alt="Store Logo" class="img-fluid">
                                </span>
                                <span class="user-detail">
                                    <span class="user-name">Select Shop</span>
                                </span>
                            </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a href="javascript:void(0);" class="dropdown-item">
                                <img  loading="lazy" data-src="/theme/dp/assets/img/store/store-01.png" alt="Paykhom" class="img-fluid"> Paykhom
                            </a>
                            <!-- 
                            <a href="javascript:void(0);" class="dropdown-item">
                                <img  loading="lazy" data-src="/theme/dp/assets/img/store/store-02.png" alt="Store Logo" class="img-fluid"> Grocery Apex
                            </a>
                            <a href="javascript:void(0);" class="dropdown-item">
                                <img  loading="lazy" data-src="/theme/dp/assets/img/store/store-03.png" alt="Store Logo" class="img-fluid"> Grocery Bevy
                            </a>
                            <a href="javascript:void(0);" class="dropdown-item">
                                <img  loading="lazy" data-src="/theme/dp/assets/img/store/store-04.png" alt="Store Logo" class="img-fluid"> Grocery Eden
                            </a> 
                            -->
                        </div>
                    </li>
                    <!-- /Select Store -->

                    <!-- Flag -->
                    <li class="nav-item dropdown has-arrow flag-nav nav-item-box">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);"
                            role="button">
                            <img  loading="lazy" data-src="/theme/dp/assets/img/flags/us.png" alt="Language" class="img-fluid">
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a href="javascript:void(0);" class="dropdown-item active">
                                <img  loading="lazy" data-src="/theme/dp/assets/img/flags/us.png" alt="" height="16"> English
                            </a>
                            <!-- <a href="javascript:void(0);" class="dropdown-item">
                                <img  loading="lazy" data-src="/theme/dp/assets/img/flags/fr.png" alt="" height="16"> French
                            </a>
                            <a href="javascript:void(0);" class="dropdown-item">
                                <img  loading="lazy" data-src="/theme/dp/assets/img/flags/es.png" alt="" height="16"> Spanish
                            </a>
                            <a href="javascript:void(0);" class="dropdown-item">
                                <img  loading="lazy" data-src="/theme/dp/assets/img/flags/de.png" alt="" height="16"> German
                            </a> -->
                        </div>
                    </li>
                    <!-- /Flag -->

                    <li class="nav-item nav-item-box">
                        <a href="javascript:void(0);" id="btnFullscreen">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-maximize">
                                <path
                                    d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3">
                                </path>
                            </svg>
                        </a>
                    </li>
                    <!-- <li class="nav-item nav-item-box">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-mail">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                </path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <span class="badge rounded-pill">1</span>
                        </a>
                    </li> -->
                    <!-- Notifications -->
                    <li class="nav-item dropdown nav-item-box">
                        <a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-bell">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg><span class="badge rounded-pill">0</span>
                        </a>
                        <div class="dropdown-menu notifications">
                            <div class="topnav-dropdown-header">
                                <span class="notification-title">Notifications</span>
                                <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
                            </div>
                            <div class="noti-content">
                                <ul class="notification-list">
                                    <li class="notification-message">
                                        <a href="#">
                                            <div class="media d-flex">
                                                <span class="avatar flex-shrink-0">
                                                    <img alt=""  loading="lazy" data-src="/paykhom.png">
                                                </span>
                                                <div class="media-body flex-grow-1">
                                                    <p class="noti-details">No new <span class="noti-title">notification</span> for you.
                                                        
                                                    </p>
                                                    <!-- <p class="noti-time"><span class="notification-time">1 mins ago</span>
                                                    </p> -->
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="topnav-dropdown-footer">
                                <a href="/user/account/notification">View all Notifications</a>
                            </div>
                        </div>
                    </li>
                    <!-- /Notifications -->

                    <!-- <li class="nav-item nav-item-box">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path
                                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                                </path>
                            </svg>
                        </a>
                    </li> -->
                    <li class="nav-item dropdown has-arrow main-drop">
                        <a href="javascript:void(0);" class="dropdown-toggle nav-link userset" data-bs-toggle="dropdown">
                            <span class="user-info">
                                <span class="user-letter">
                                    <img  loading="lazy" data-src="/theme/dp/assets/img/user.webp" alt="" class="img-fluid">
                                </span>
                                <span class="user-detail">
                                    <span class="user-name">User</span>
                                    <span class="user-role">Admin Mode</span>
                                </span>
                            </span>
                        </a>
                        <div class="dropdown-menu menu-drop-user">
                            <div class="profilename">
                                <div class="profileset">
                                    <span class="user-img"><img  loading="lazy" data-src="/theme/dp/assets/img/user.webp" alt="">
                                        <span class="status online"></span></span>
                                    <div class="profilesets">
                                        <h6>User</h6>
                                        <h5>Admin Mode</h5>
                                    </div>
                                </div>
                                <hr class="m-0">
                                <a class="dropdown-item" href="/user/account/profile"> <svg xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-user me-2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg> My
                                    Profile</a>
                                <a class="dropdown-item" href="/user/account/notification"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-settings me-2">
                                        <circle cx="12" cy="12" r="3"></circle>
                                        <path
                                            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                                        </path>
                                    </svg>Notification</a>
                                <hr class="m-0">
                                <a class="dropdown-item logout pb-0" href="/logout"><img
                                        src="/theme/dp/assets/img/icons/log-out.svg" class="me-2" alt="img">Logout</a>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- /Header Menu -->

                <!-- Mobile Menu -->
                <div class="dropdown mobile-user-menu">
                    <a href="javascript:void(0);" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#">My Profile</a>
                        <a class="dropdown-item" href="#">Settings</a>
                        <a class="dropdown-item" href="#">Logout</a>
                    </div>
                </div>
                <!-- /Mobile Menu -->
            </div>
            <!-- /Header -->

            ${this.render(this.sidebar())}

            <div class="page-wrapper" style="min-height: 523px;">
                <!-- page content -->
                <div id="content"  class="content">
                    ${this.render(this.content())}
                </div>  
                <!-- /page content -->
                

            </div>

            <div class="sidebar-settings nav-toggle" id="layoutDiv">
                <div class="sidebar-content sticky-sidebar-one">
                    <div class="sidebar-header">
                        <div class="sidebar-theme-title">
                            <h5>Theme Customizer</h5>
                            <p>Customize &amp; Preview in Real Time</p>
                        </div>
                        <div class="close-sidebar-icon d-flex">
                            <a class="sidebar-refresh me-2" onclick="resetData()">⟳</a>
                            <a class="sidebar-close" href="#">X</a>
                        </div>
                    </div>
                    <div class="sidebar-body p-0">
                        <div class="theme-mode mb-0">
                            <div class="theme-body-main">
                                <div class="theme-head">
                                    <h6>Theme Mode</h6>
                                    <p>Enjoy Dark &amp; Light modes.</p>
                                </div>
                                <div class="row">
                                    <div class="col-xl-6 ">
                                        <div class="layout-wrap">
                                            <div class="d-flex align-items-center">
                                                <div class="status-toggle d-flex align-items-center me-2">
                                                    <input type="radio" name="themes" id="lighttheme" class="check"
                                                        value="light_mode" checked="">
                                                    <label for="lighttheme" class="checktoggles">
                                                        <img  loading="lazy" data-src="/theme/dp/assets/img/theme/theme-img-01.jpg" alt="">
                                                        <span class="theme-name">Light Mode</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="layout-wrap">
                                            <div class="d-flex align-items-center">
                                                <div class="status-toggle d-flex align-items-center me-2">
                                                    <input type="radio" name="themes" id="darktheme" class="check"
                                                        value="dark_mode">
                                                    <label for="darktheme" class="checktoggles">
                                                        <img  loading="lazy" data-src="/theme/dp/assets/img/theme/theme-img-02.jpg" alt="">
                                                        <span class="theme-name">Dark Mode</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="theme-mode border-0">
                                    <div class="theme-head">
                                        <h6>Direction</h6>
                                        <p>Select the direction for your app.</p>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-6 ere">
                                            <div class="layout-wrap">
                                                <div class="d-flex align-items-center">
                                                    <div class="status-toggle d-flex align-items-center me-2">
                                                        <input type="radio" name="direction" id="ltr"
                                                            class="check direction" value="ltr" checked="">
                                                        <label for="ltr" class="checktoggles">
                                                            <a href="#"><img
                                                                    src="/theme/dp/assets/img/theme/theme-img-01.jpg" alt=""></a>
                                                            <span class="theme-name">LTR</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 ere">
                                            <div class="layout-wrap">
                                                <div class="d-flex align-items-center">
                                                    <div class="status-toggle d-flex align-items-center me-2">
                                                        <input type="radio" name="direction" id="rtl"
                                                            class="check direction" value="rtl">
                                                        <label for="rtl" class="checktoggles">
                                                            <a href="#" target="_blank"><img
                                                                    src="/theme/dp/assets/img/theme/theme-img-03.jpg" alt=""></a>
                                                            <span class="theme-name">RTL</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="theme-mode border-0 mb-0">
                                    <div class="theme-head">
                                        <h6>Layout Mode</h6>
                                        <p>Select the primary layout style for your app.</p>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-6 ere">
                                            <div class="layout-wrap">
                                                <div class="d-flex align-items-center">
                                                    <div class="status-toggle d-flex align-items-center me-2">
                                                        <input type="radio" name="layout" id="default_layout"
                                                            class="check layout-mode" value="default" checked="">
                                                        <label for="default_layout" class="checktoggles">
                                                            <img  loading="lazy" data-src="/theme/dp/assets/img/theme/theme-img-01.jpg" alt="">
                                                            <span class="theme-name">Default</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 ere">
                                            <div class="layout-wrap">
                                                <div class="d-flex align-items-center">
                                                    <div class="status-toggle d-flex align-items-center me-2">
                                                        <input type="radio" name="layout" id="box_layout"
                                                            class="check layout-mode" value="box">
                                                        <label for="box_layout" class="checktoggles">
                                                            <img  loading="lazy" data-src="/theme/dp/assets/img/theme/theme-img-07.jpg" alt="">
                                                            <span class="theme-name">Box</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 ere">
                                            <div class="layout-wrap">
                                                <div class="d-flex align-items-center">
                                                    <div class="status-toggle d-flex align-items-center me-2">
                                                        <input type="radio" name="layout" id="collapse_layout"
                                                            class="check layout-mode" value="collapsed">
                                                        <label for="collapse_layout" class="checktoggles">
                                                            <img  loading="lazy" data-src="/theme/dp/assets/img/theme/theme-img-05.jpg" alt="">
                                                            <span class="theme-name">Collapsed</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 ere">
                                            <div class="layout-wrap">
                                                <div class="d-flex align-items-center">
                                                    <div class="status-toggle d-flex align-items-center me-2">
                                                        <input type="radio" name="layout" id="horizontal_layout"
                                                            class="check layout-mode" value="horizontal">
                                                        <label for="horizontal_layout" class="checktoggles">
                                                            <img  loading="lazy" data-src="/theme/dp/assets/img/theme/theme-img-06.jpg" alt="">
                                                            <span class="theme-name">Horizontal</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 ere">
                                            <div class="layout-wrap">
                                                <div class="d-flex align-items-center">
                                                    <div class="status-toggle d-flex align-items-center me-2">
                                                        <input type="radio" name="layout" id="modern_layout"
                                                            class="check layout-mode" value="modern">
                                                        <label for="modern_layout" class="checktoggles">
                                                            <img  loading="lazy" data-src="/theme/dp/assets/img/theme/theme-img-04.jpg" alt="">
                                                            <span class="theme-name">Modern</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="theme-mode">
                                    <div class="theme-head">
                                        <h6>Navigation Colors</h6>
                                        <p>Setup the color for the Navigation</p>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-4 ere">
                                            <div class="layout-wrap">
                                                <div class="d-flex align-items-center">
                                                    <div class="status-toggle d-flex align-items-center me-2">
                                                        <input type="radio" name="nav_color" id="light_color"
                                                            class="check nav-color" value="light">
                                                        <label for="light_color" class="checktoggles">
                                                            <span class="theme-name">Light</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 ere">
                                            <div class="layout-wrap">
                                                <div class="d-flex align-items-center">
                                                    <div class="status-toggle d-flex align-items-center me-2">
                                                        <input type="radio" name="nav_color" id="grey_color"
                                                            class="check nav-color" value="grey">
                                                        <label for="grey_color" class="checktoggles">
                                                            <span class="theme-name">Grey</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 ere">
                                            <div class="layout-wrap">
                                                <div class="d-flex align-items-center">
                                                    <div class="status-toggle d-flex align-items-center me-2">
                                                        <input type="radio" name="nav_color" id="dark_color"
                                                            class="check nav-color" value="dark">
                                                        <label for="dark_color" class="checktoggles">
                                                            <span class="theme-name">Dark</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-footer">
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="footer-preview-btn">
                                        <a href="#" class="btn btn-secondary w-100" id="resetbutton">Reset</a>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="footer-reset-btn">
                                        <a href="#" class="btn btn-primary w-100">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Main Wrapper -->

        <!-- Add PDF -->
        <div class="modal fade" id="add-units">
            <div class="modal-dialog modal-dialog-centered custom-modal-two">
                <div class="modal-content">
                    <div class="page-wrapper-new p-0">
                        <div class="content">
                            <div class="modal-header border-0 custom-modal-header">
                                <div class="page-title">
                                    <h4>Export Report as PDF</h4>
                                </div>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body custom-modal-body">
                                <form action="expired-products.html">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="input-blocks">
                                                <label>Choose Manufacturer Date</label>
                                                <div class="input-groupicon calender-input">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-calendar info-img">
                                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                                    </svg>
                                                    <input type="text" class="datetimepicker"
                                                        placeholder="Manufacturer Date">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="input-blocks">
                                                <label>Choose Expiry Date</label>
                                                <div class="input-groupicon calender-input">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-calendar info-img">
                                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                                    </svg>
                                                    <input type="text" class="datetimepicker" placeholder="Expiry Date">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer-btn">
                                        <button type="button" class="btn btn-cancel me-2"
                                            data-bs-dismiss="modal">Cancel</button>
                                        <button type="submit" class="btn btn-submit">Download Report</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Add PDF -->
        <div class="customizer-links d-none" id="setdata">
            <ul class="sticky-sidebar">
                <li class="sidebar-icons">
                    <a href="#" class="navigation-add" data-bs-toggle="tooltip" data-bs-placement="left"
                        data-bs-original-title="Theme">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-settings feather-five">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                            </path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>

        <div class="sidebar-overlay"></div>
        <div class="sidebar-filter"></div>

        <div id="body-footer-js-container">
        </div>
            <!-- Theme Script -->
            <script src="/theme/dp/assets/js/theme-script.js" type="text/javascript"></script>


            <!-- jQuery -->
            <script src="/theme/dp/assets/js/jquery-3.7.1.min.js" type="text/javascript"></script>

            <!-- Feather Icon JS -->
            <script src="/theme/dp/assets/js/feather.min.js" type="text/javascript"></script>

            <!-- Slimscroll JS -->
            <script src="/theme/dp/assets/js/jquery.slimscroll.min.js" type="text/javascript"></script>

            

            <!-- Bootstrap Core JS -->
            <script src="/theme/dp/assets/js/bootstrap.bundle.min.js" type="text/javascript"></script>

            <!-- Datetimepicker JS -->
            <script src="/theme/dp/assets/js/moment.min.js" type="text/javascript"></script>
            <script src="/theme/dp/assets/js/bootstrap-datetimepicker.min.js" type="text/javascript"></script>

            <!-- Summernote JS -->
            <script src="/theme/dp/assets/plugins/summernote/summernote-bs4.min.js" type="text/javascript"></script>

            <!-- Mobile Input -->
            <script src="/theme/dp/assets/plugins/intltelinput/js/intlTelInput.js" type="text/javascript"></script>

            <!-- Select2 JS -->
            <script src="/theme/dp/assets/plugins/select2/js/select2.min.js" type="text/javascript"></script>

            <!-- Sweetalert 2 -->
            <script src="/theme/dp/assets/plugins/sweetalert/sweetalert2.all.min.js" type="text/javascript"></script>
            <script src="/theme/dp/assets/plugins/sweetalert/sweetalerts.min.js" type="text/javascript"></script>


            <!-- Custom JS -->
            <script src="/theme/dp/assets/js/script.js" type="text/javascript"></script>


            <!-- EKN: Datatables 2.2.0 for Bootstrap 5 -->
            <script type="text/javascript" src="/_assets/pkg/tabulator/dist/js/tabulator.min.js"></script>

            <script src="/theme/dp/assets/packages/datatable-bootstrap5/datatables.min.js" type="text/javascript"></script>
            <!-- /EKN: Datatables 2.2.0 for Bootstrap 5 -->


            <script src="/micro-frontend-slim.js" type="text/javascript"></script>


            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    return;

                    //const submenuHeaders = document.querySelectorAll('.sidebar .sidebar-menu > ul > li.submenu-open > h6.submenu-hdr');
                    const submenuHeaders = document.querySelectorAll('.sidebar .sidebar-menu > ul > li.submenu-open > h6.submenu-hdr');

                    submenuHeaders.forEach(header => {
                        const parentLi = header.closest('li.submenu-open');

                        if (parentLi) {
                            header.style.cursor = 'pointer'; // Make the header look clickable
                            //header._listenerObject = {added: false};
                            //if ((header._listenerObject.added === false)) {
                            header.addEventListener('click', function() {
                                //debugger;
                                //header._listenerObject.added = true;

                                parentLi.classList.toggle('collapsed');
                                const ul = parentLi.querySelector('ul');

                                if (ul) {
                                    ul.style.display = parentLi.classList.contains('collapsed') ? 'none' : 'block';
                                }
                            });

                            //}

                            // Initially collapse all ul's within collapsed lis
                            if (parentLi.classList.contains('collapsed')) {
                                const ul = parentLi.querySelector('ul');
                                if (ul) {
                                    ul.style.display = 'none';
                                }
                            }

                        }
                    });
                });

            </script>

            <!-- page script -->
            ${this.render(this.script())}
            <!-- /page script -->



    </body>
</html>



`;    }

    *sidebar() {
yield html`
                <!-- Sidebar -->
                <div class="sidebar" id="sidebar">
                    <div class="sidebar-inner slimscroll">
                        <div id="sidebar-menu" class="sidebar-menu">
                            <ul>
                                <li class="submenu xd-none">
                                    <!-- <h6 class="submenu-hdr">Main</h6> -->
                                    <a href="javascript:void(0);">
                                                <i data-feather="grid"></i>
                                                <span>Oh! My Paykhom</span>
                                                <span class="menu-arrow"></span>
                                    </a>

                                    <ul>
                                        <li class="submenu">
                                            <a href="javascript:void(0);">
                                                <i data-feather="grid"></i>
                                                <span>My Shopping</span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <ul>
                                                <!-- <li><a href="/user/shopping/cart"><i data-feather="shopping-cart"></i>Cart</a></li> -->
                                                <!-- <li><a href="/user/shopping/checkout"><i data-feather="check-circle"></i>Checkout</a></li> -->
                                                <li><a href="/user/shopping/order"><i data-feather="shopping-bag"></i>Orders</a></li>
                                                <!-- <li><a href="#"><i data-feather="grid"></i>Invoices</a></li> -->
                                                <li><a href="/user/shopping/payment"><i data-feather="credit-card"></i>Payments</a></li>
                                                <li><a href="/user/shopping/return"><i data-feather="corner-down-left"></i>Returns</a></li>
                                                <li><a href="/user/shopping/refund"><i data-feather="wind"></i>Refunds</a></li>

                                            </ul>
                                        </li>
                                        <li class="submenu">
                                            <a href="javascript:void(0);">
                                                <i data-feather="smartphone"></i>
                                                <span>My Account</span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <ul>
                                                <li><a href="/user/account/profile"><i data-feather="user"></i>Profile</a></li>
                                                <!-- <li><a href="/user/email-verification"><i data-feather="grid"></i>Email Verifications</a></li> -->
                                                <!-- <li><a href="/user/mobile-verification"><i data-feather="grid"></i>Mobile Verifications</a></li> -->
                                                <li><a href="/user/account/notification"><i data-feather="bell"></i>Notifications</a></li>
                                                <li><a href="/user/account/payment-method"><i data-feather="credit-card"></i>Payment Methods</a></li>
                                                <!-- <li><a href="/user/change-password"><i data-feather="grid"></i>Change Password</a></li> -->
                                                <li><a href="/logout"><i data-feather="log-out"></i>Logout</a></li>
                                            </ul>
                                        </li>
                                        <li class="submenu">
                                            <a href="javascript:void(0);">
                                                <i data-feather="smartphone"></i>
                                                <span>My CRM</span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <ul>
                                                <li><a href="/user/shopping/ticket"><i data-feather="book-open"></i>Tickets</a></li>
                                                <li><a href="/user/shopping/product-review"><i data-feather="shopping-bag"></i>Product Reviews</a></li>
                                                <li><a href="/user/shopping/shop-review"><i data-feather="shopping-cart"></i>Shop Reviews</a></li>

                                            </ul>
                                        </li>
                                        <li class="submenu">
                                            <a href="javascript:void(0);">
                                                <i data-feather="smartphone"></i>
                                                <span>My Stores</span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <ul>
                                                <li><a href="/admin/catalog/shop"><i data-feather="shopping-bag"></i>Online Stores</a></li>
                                            </ul>
                                        </li>
                                        <!-- <li class="submenu">
                                            <a href="javascript:void(0);">
                                                <i data-feather="smartphone"></i>
                                                <span>My Dropshipping</span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <ul>
                                                <li><a href="/admin/catalog/dropship"><i data-feather="droplet"></i>Dropships</a></li>
                                            </ul>
                                        </li> -->
                                        <!-- <li class="submenu">
                                            <a href="javascript:void(0);">
                                                <i data-feather="smartphone"></i>
                                                <span>My Affiliates</span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <ul>
                                                <li><a href="/user/business/affiliation"><i data-feather="activity"></i>Affiliations</a></li>
                                            </ul>
                                        </li> -->

                                    </ul>
                                </li>
                                <li class="submenu d-none">
                                    <!-- <h6 class="submenu-hdr">Main</h6> -->
                                    <a href="javascript:void(0);">
                                                <i data-feather="grid"></i>
                                                <span>Main</span>
                                                <span class="menu-arrow"></span>
                                    </a>

                                    <ul>
                                        <li class="submenu">
                                            <a href="javascript:void(0);">
                                                <i data-feather="grid"></i>
                                                <span>Dashboard</span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <ul>
                                                <li><a href="#"><i data-feather="grid"></i>Admin Dashboard</a></li>
                                                <li><a href="#"><i data-feather="grid"></i>Sales Dashboard</a></li>
                                            </ul>
                                        </li>
                                        <li class="submenu">
                                            <a href="javascript:void(0);"><i data-feather="smartphone"></i><span>Application</span><span class="menu-arrow"></span></a>
                                            <ul>
                                                <li><a href="#">Chat</a></li>
                                                <li class="submenu submenu-two"><a href="javascript:void(0);">Call<span class="menu-arrow inside-submenu"></span></a>
                                                    <ul>
                                                        <li><a href="#"><i data-feather="grid"></i>Video Call</a></li>
                                                        <li><a href="#"><i data-feather="grid"></i>Audio Call</a></li>
                                                        <li><a href="#"><i data-feather="grid"></i>Call History</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#"><i data-feather="grid"></i>Calendar</a></li>
                                                <li><a href="#"><i data-feather="grid"></i>Email</a></li>
                                                <li><a href="#"><i data-feather="grid"></i>To Do</a></li>
                                                <li><a href="#"><i data-feather="grid"></i>Notes</a></li>
                                                <li><a href="#"><i data-feather="grid"></i>File Manager</a></li>
                                                <li><a href="#"><i data-feather="grid"></i>Social Feed</a></li>
                                                <li><a href="#"><i data-feather="grid"></i>Kanban</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <!-- <h6 class="submenu-hdr">Inventory</h6> -->
                                    <a href="javascript:void(0);">
                                                <i data-feather="box"></i>
                                                <span>Catalog</span>
                                                <span class="menu-arrow"></span>
                                    </a>
 
                                    <ul>
                                        <li class="active"><a href="/admin/catalog/product"><i data-feather="box"></i><span>Products</span></a></li>
                                        <li><a href="/admin/catalog/product-variant"><i data-feather="plus-square"></i><span>Product Variants</span></a></li>
                                        <!-- 
                                        <li><a href="#"><i data-feather="codesandbox"></i><span>Expired Products</span></a></li>
                                        <li><a href="#"><i data-feather="trending-down"></i><span>Low Stocks</span></a></li> 
                                        -->
`; 
if(this.session_state["is_saas_admin"]) { 
    yield html`
                                        <li><a href="/saas/catalog/category"><i data-feather="codepen"></i><span>Categories</span></a></li>
                                        <li><a href="/saas/catalog/department"><i data-feather="codepen"></i><span>Departments</span></a></li>
                                        <!-- <li><a href="#"><i data-feather="speaker"></i><span>Sub Category</span></a></li> -->
                                        <li><a href="/saas/catalog/brand"><i data-feather="tag"></i><span>Brands</span></a></li>
                                        <li><a href="/saas/catalog/uom"><i data-feather="speaker"></i><span>Units</span></a></li>
                                        <li><a href="/saas/catalog/currency"><i data-feather="speaker"></i><span>Currencies</span></a></li>
                                        <li><a href="/saas/catalog/attrib"><i data-feather="layers"></i><span>Attributes</span></a></li>
`; 
} 
yield html`
                                        <li><a href="/admin/catalog/shop"><i data-feather="home"></i><span>Shops</span></a></li>

                                        <!-- <li><a href="/admin/catalog/product-warranty"><i data-feather="bookmark"></i><span>Warranties</span></a></li> -->
                                        <!-- <li><a href="/admin/module/product-barcode"><i data-feather="align-justify"></i><span>Print Barcode</span></a></li> -->
                                        <!-- <li><a href="/admin/module/product-qr-code"><i data-feather="maximize"></i><span>Print QR Code</span></a></li> -->
                                    </ul>
                                </li>
                                

                                <li class="submenu">
                                    <!-- <h6 class="submenu-hdr">Stock</h6> -->
                                    <a href="javascript:void(0);">
                                                <i data-feather="package"></i>
                                                <span>Inventory Stocks</span>
                                                <span class="menu-arrow"></span>
                                    </a>

                                    <ul>
                                        <li><a href="/admin/stock/inventory"><i data-feather="package"></i><span>Stock</span></a></li>
                                        <li><a href="/admin/stock/location"><i data-feather="archive"></i><span>Stock Locations</span></a></li>
                                        <!-- <li><a href="/admin/inventory/stock-adjustment"><i data-feather="clipboard"></i><span>Stock Adjustments</span></a></li> -->
                                        <!-- <li><a href="/admin/inventory/stock-transfer"><i data-feather="truck"></i><span>Stock Transfers</span></a></li> -->

                                    </ul>
                                </li>
                                <li class="submenu">
                                    <!-- <h6 class="submenu-hdr">Sales</h6> -->
                                    <a href="javascript:void(0);">
                                                <i data-feather="shopping-cart"></i>
                                                <span>Sales</span>
                                                <span class="menu-arrow"></span>
                                    </a>

                                    <ul>
                                        <li><a href="/admin/sales/order"><i data-feather="shopping-cart"></i><span>Orders</span></a></li>
                                        <li><a href="/admin/sales/sales"><i data-feather="file-text"></i><span>Sales</span></a></li>
                                        <li><a href="/admin/sales/return"><i data-feather="copy"></i><span>Sales Returns</span></a></li>
                                        <li><a href="/admin/sales/quotation-in"><i data-feather="save"></i><span>Quotations</span></a></li>
                                        <li><a href="/admin/sales/rfq-in"><i data-feather="save"></i><span>RFQs</span></a></li>

                                        <!-- <li><a href="/admin/sales/pos"><i data-feather="hard-drive"></i><span>POS</span></a></li> -->


                                    </ul>
                                </li>

                                <li class="submenu xd-none">
                                    <!-- <h6 class="submenu-hdr">Main</h6> -->
                                    <a href="javascript:void(0);">
                                                <i data-feather="grid"></i>
                                                <span>CRM</span>
                                                <span class="menu-arrow"></span>
                                    </a>

                                    <ul>
                                        <!-- <li class="submenu">
                                            <a href="javascript:void(0);">
                                                <i data-feather="grid"></i>
                                                <span>Customers</span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <ul>
                                                <li><a href="/admin/sales/customer"><i data-feather="user"></i><span>Customers</span></a></li>

                                                <li><a href="/admin/module/customer-segment">Customer Segments</a></li>
                                                <li><a href="/admin/module/customer-key-account-manager">Key Account Managers</a></li>
                                            </ul>
                                        </li> -->
                                        <li class="submenu">
                                            <a href="javascript:void(0);">
                                                <i data-feather="smartphone"></i>
                                                <span>Support Services</span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <ul>
                                                <li><a href="/admin/support/ticket"><i data-feather="book-open"></i>Tickets</a></li>
                                                <!-- <li><a href="/admin/module/chat">Chats</a></li>
                                                <li><a href="/admin/module/email">Emails</a></li> -->
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                
                                <li class="submenu">
                                    <!-- <h6 class="submenu-hdr">Promo</h6> -->
                                    <a href="javascript:void(0);">
                                                <i data-feather="file-text"></i>
                                                <span>Marketing</span>
                                                <span class="menu-arrow"></span>
                                    </a>

                                    <ul>
                                    <li><a href="/admin/marketing/campaign"><i data-feather="cast"></i><span>Campaigns</span></a></li>
                                    <li><a href="/admin/marketing/coupon"><i data-feather="package"></i><span>Coupons</span></a></li>
                                        <li><a href="/admin/marketing/promotion"><i data-feather="sliders"></i><span>Promotions</span></a></li>
                                        <li><a href="/admin/marketing/discount"><i data-feather="zap-off"></i><span>Discounts</span></a></li>
                                        <li><a href="/admin/marketing/subscriber"><i data-feather="rss"></i><span>Subscribers</span></a></li>
                                        <li><a href="/admin/marketing/audience"><i data-feather="meh"></i><span>Audiences</span></a></li>
                                        <li><a href="/admin/marketing/lead"><i data-feather="filter"></i><span>Leads</span></a></li>
                                        <li><a href="/admin/marketing/prospect"><i data-feather="eye"></i><span>Prospects</span></a></li>
                                        
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <!-- <h6 class="submenu-hdr">Purchases</h6> -->
                                    <a href="javascript:void(0);">
                                                <i data-feather="shopping-bag"></i>
                                                <span>Purchase</span>
                                                <span class="menu-arrow"></span>
                                    </a>

                                    <ul>
                                        <li><a href="/admin/purchase/order"><i data-feather="shopping-bag"></i><span>Order</span></a></li>
                                        <li><a href="/admin/purchase/purchase"><i data-feather="file-minus"></i><span>Purchases</span></a></li>
                                        <li><a href="/admin/purchase/return"><i data-feather="refresh-cw"></i><span>Purchase Returns</span></a></li>
                                        <li><a href="/admin/purchase/vendor"><i data-feather="users"></i><span>Vendors</span></a></li>

                                    </ul>
                                </li>
                                <li class="submenu d-none">
                                    <!-- <h6 class="submenu-hdr">Finance & Accounts</h6> -->
                                    <a href="javascript:void(0);">
                                                <i data-feather="file-text"></i>
                                                <span>Accounting</span>
                                                <span class="menu-arrow"></span>
                                    </a>

                                    <ul>
                                        <li class="submenu">
                                            <a href="javascript:void(0);"><i data-feather="file-text"></i><span>Expenses</span><span class="menu-arrow"></span></a>
                                            <ul>
                                                <li><a href="/admin/module/expense">Expenses</a></li>
                                                <li><a href="/admin/module/expense-category">Expense Category</a></li>
                                                <li><a href="/admin/module/income-report"><i data-feather="bar-chart"></i><span>Income Report</span></a></li>
                                                <li><a href="/admin/module/tax-report"><i data-feather="database"></i><span>Tax Report</span></a></li>
                                                <li><a href="/admin/module/profit-and-loss"><i data-feather="pie-chart"></i><span>Profit & Loss</span></a></li>
                                                <li><a href="/admin/module/expense-report"><i data-feather="file"></i><span>Expense Report</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="submenu d-none">
                                    <!-- <h6 class="submenu-hdr">HRM</h6> -->
                                    <a href="javascript:void(0);">
                                                <i data-feather="users"></i>
                                                <span>HRM</span>
                                                <span class="menu-arrow"></span>
                                    </a>

                                    <ul>
                                        <li><a href="#"><i data-feather="user"></i><span>Employees</span></a></li>
                                        <li><a href="#"><i data-feather="users"></i><span>Departments</span></a></li>
                                        <li><a href="#"><i data-feather="git-merge"></i><span>Designation</span></a></li>
                                        <li><a href="#"><i data-feather="shuffle"></i><span>Shifts</span></a></li>
                                        <li class="submenu">
                                            <a href="javascript:void(0);"><i data-feather="book-open"></i><span>Attendence</span><span class="menu-arrow"></span></a>
                                            <ul>
                                                <li><a href="#"><i data-feather="grid"></i>Employee</a></li>
                                                <li><a href="#"><i data-feather="grid"></i>Admin</a></li>
                                            </ul>
                                        </li>
                                        <li class="submenu">
                                            <a href="javascript:void(0);"><i data-feather="calendar"></i><span>Leaves</span><span class="menu-arrow"></span></a>
                                            <ul>
                                                <li><a href="#"><i data-feather="grid"></i>Admin Leaves</a></li>
                                                <li><a href="#"><i data-feather="grid"></i>Employee Leaves</a></li>
                                                <li><a href="#"><i data-feather="grid"></i>Leave Types</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#"><i data-feather="credit-card"></i><span>Holidays</span></a></li>
                                        <li class="submenu">
                                            <a href="#"><i data-feather="dollar-sign"></i><span>Payroll</span><span class="menu-arrow"></span></a>
                                            <ul>
                                                <li><a href="#"><i data-feather="grid"></i>Employee Salary</a></li>
                                                <li><a href="#"><i data-feather="grid"></i>Payslip</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <!-- <h6 class="submenu-hdr">User Management</h6> -->
                                    <a href="javascript:void(0);">
                                                <i data-feather="user-check"></i>
                                                <span>User Management</span>
                                                <span class="menu-arrow"></span>
                                    </a>

                                    <ul>
`; 
if(this.session_state["is_saas_admin"]) { 
    yield html`

                                        <li><a href="/saas/catalog/user"><i data-feather="user-check"></i><span>Users</span></a></li>
                                        <li><a href="/saas/catalog/role"><i data-feather="shield"></i><span>Roles & Permissions</span></a></li>
                                        <!-- <li><a href="/saas/account-deletion"><i data-feather="lock"></i><span>Delete Account Request</span></a></li> -->
`; 
} 
yield html`
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- /Sidebar -->

                <!-- Sidebar -->
                <div class="sidebar collapsed-sidebar" id="collapsed-sidebar">
                    <div class="sidebar-inner slimscroll">
                        <div id="sidebar-menu-2" class="sidebar-menu sidebar-menu-three">
                            <aside id="aside" class="ui-aside">
                                <ul class="tab nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <a class="tablinks nav-link" href="product-list.html#home" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" role="tab" aria-selected="true">
                                            <img  loading="lazy" data-src="/theme/dp/assets/img/icons/menu-icon.svg" alt="">
                                        </a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="tablinks nav-link active" href="product-list.html#messages" id="messages-tab" data-bs-toggle="tab" data-bs-target="#product" role="tab" aria-selected="false">
                                            <img  loading="lazy" data-src="/theme/dp/assets/img/icons/product.svg" alt="">
                                        </a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="tablinks nav-link" href="product-list.html#profile" id="profile-tab" data-bs-toggle="tab" data-bs-target="#sales" role="tab" aria-selected="false">
                                            <img  loading="lazy" data-src="/theme/dp/assets/img/icons/sales1.svg" alt="">
                                        </a>
                                    </li>

                                    <li class="nav-item" role="presentation">
                                        <a class="tablinks nav-link" href="product-list.html#report" id="report-tab" data-bs-toggle="tab" data-bs-target="#purchase" role="tab" aria-selected="true">
                                            <img  loading="lazy" data-src="/theme/dp/assets/img/icons/purchase1.svg" alt="">
                                        </a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="tablinks nav-link" href="product-list.html#set" id="set-tab" data-bs-toggle="tab" data-bs-target="#user" role="tab" aria-selected="true">
                                            <img  loading="lazy" data-src="/theme/dp/assets/img/icons/users1.svg" alt="">
                                        </a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="tablinks nav-link" href="product-list.html#set2" id="set-tab2" data-bs-toggle="tab" data-bs-target="#employee" role="tab" aria-selected="true">
                                            <img  loading="lazy" data-src="/theme/dp/assets/img/icons/calendars.svg" alt="">
                                        </a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="tablinks nav-link" href="product-list.html#set3" id="set-tab3" data-bs-toggle="tab" data-bs-target="#report" role="tab" aria-selected="true">
                                            <img  loading="lazy" data-src="/theme/dp/assets/img/icons/printer.svg" alt="">
                                        </a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="tablinks nav-link" href="product-list.html#set4" id="set-tab4" data-bs-toggle="tab" data-bs-target="#document" role="tab" aria-selected="true">
                                            <i data-feather="user"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="tablinks nav-link" href="product-list.html#set5" id="set-tab6" data-bs-toggle="tab" data-bs-target="#permission" role="tab" aria-selected="true">
                                            <i data-feather="file-text"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="tablinks nav-link" href="product-list.html#set6" id="set-tab5" data-bs-toggle="tab" data-bs-target="#settings" role="tab" aria-selected="true">
                                            <i data-feather="settings"></i>
                                        </a>
                                    </li>
                                    <!-- <li class="nav-item" role="presentation">
                            <a class="tablinks nav-link" href="#help" id="set-tab7" data-bs-toggle="tab" data-bs-target="#permission"  role="tab" aria-controls="set" aria-selected="true">
                            <img  loading="lazy" data-src="/theme/dp/assets/img/icons/menu-icon-05.svg" alt="">
                            </a>
                        </li>                           -->
                                </ul>
                            </aside>
                            <div class="tab-content tab-content-four pt-2">
                                <ul class="tab-pane" id="home" aria-labelledby="home-tab">
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Dashboard</span> <span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Admin Dashboard</a></li>
                                            <li><a href="#">Sales Dashboard</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Application</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Chat</a></li>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);"><span>Call</span><span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Video Call</a></li>
                                                    <li><a href="#">Audio Call</a></li>
                                                    <li><a href="#">Call History</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Calendar</a></li>
                                            <li><a href="#">Email</a></li>
                                            <li><a href="#">To Do</a></li>
                                            <li><a href="#">Notes</a></li>
                                            <li><a href="#">File Manager</a></li>
                                            <li><a href="#">Social Feed</a></li>
                                            <li><a href="#">Kanban</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul class="tab-pane active" id="product" aria-labelledby="messages-tab">
                                    <li><a href="#" class="active"><span>Products</span></a></li>
                                    <li><a href="#"><span>Create Product</span></a></li>
                                    <li><a href="#"><span>Expired Products</span></a></li>
                                    <li><a href="#"><span>Low Stocks</span></a></li>
                                    <li><a href="#"><span>Category</span></a></li>
                                    <li><a href="#"><span>Sub Category</span></a></li>
                                    <li><a href="#"><span>Brands</span></a></li>
                                    <li><a href="#"><span>Units</span></a></li>
                                    <li><a href="#"><span>Variant Attributes</span></a></li>
                                    <li><a href="#"><span>Warranties</span></a></li>
                                    <li><a href="#"><span>Print Barcode</span></a></li>
                                    <li><a href="#"><span>Print QR Code</span></a></li>
                                </ul>
                                <ul class="tab-pane" id="sales" aria-labelledby="profile-tab">
                                    <li><a href="#"><span>Sales</span></a></li>
                                    <li><a href="#"><span>Invoices</span></a></li>
                                    <li><a href="#"><span>Sales Return</span></a></li>
                                    <li><a href="#"><span>Quotation</span></a></li>
                                    <li><a href="#"><span>POS</span></a></li>
                                    <li><a href="#"><span>Coupons</span></a></li>
                                </ul>
                                <ul class="tab-pane" id="purchase" aria-labelledby="report-tab">
                                    <li><a href="#"><span>Purchases</span></a></li>
                                    <li><a href="#"><span>Purchase Order</span></a></li>
                                    <li><a href="#"><span>Purchase Return</span></a></li>
                                    <li><a href="#"><span>Manage Stock</span></a></li>
                                    <li><a href="#"><span>Stock Adjustment</span></a></li>
                                    <li><a href="#"><span>Stock Transfer</span></a></li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Expenses</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Expenses</a></li>
                                            <li><a href="#">Expense Category</a></li>
                                        </ul>
                                    </li>

                                </ul>
                                <ul class="tab-pane" id="user" aria-labelledby="set-tab">

                                    <li><a href="#"><span>Customers</span></a></li>
                                    <li><a href="#"><span>Suppliers</span></a></li>
                                    <li><a href="#"><span>Stores</span></a></li>
                                    <li><a href="#"><span>Warehouses</span></a></li>

                                </ul>
                                <ul class="tab-pane" id="employee" aria-labelledby="set-tab2">
                                    <li><a href="#"><span>Employees</span></a></li>
                                    <li><a href="#"><span>Departments</span></a></li>
                                    <li><a href="#"><span>Designation</span></a></li>
                                    <li><a href="#"><span>Shifts</span></a></li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Attendence</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Employee Attendence</a></li>
                                            <li><a href="#">Admin Attendence</a></li>
                                        </ul>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Leaves</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Admin Leaves</a></li>
                                            <li><a href="#">Employee Leaves</a></li>
                                            <li><a href="#">Leave Types</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><span>Holidays</span></a></li>
                                    <li class="submenu">
                                        <a href="#"><span>Payroll</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Employee Salary</a></li>
                                            <li><a href="#">Payslip</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul class="tab-pane" id="report" aria-labelledby="set-tab3">
                                    <li><a href="#"><span>Sales Report</span></a></li>
                                    <li><a href="#"><span>Purchase report</span></a></li>
                                    <li><a href="#"><span>Inventory Report</span></a></li>
                                    <li><a href="#"><span>Invoice Report</span></a></li>
                                    <li><a href="#"><span>Supplier Report</span></a></li>
                                    <li><a href="#"><span>Customer Report</span></a></li>
                                    <li><a href="#"><span>Expense Report</span></a></li>
                                    <li><a href="#"><span>Income Report</span></a></li>
                                    <li><a href="#"><span>Tax Report</span></a></li>
                                    <li><a href="#"><span>Profit & Loss</span></a></li>
                                </ul>
                                <ul class="tab-pane" id="permission" aria-labelledby="set-tab4">
                                    <li><a href="#"><span>Users</span></a></li>
                                    <li><a href="#"><span>Roles & Permissions</span></a></li>
                                    <li><a href="#"><span>Delete Account Request</span></a></li>

                                    <li class="submenu">
                                        <a href="javascript:void(0);">
                                            <span>Base UI</span><span class="menu-arrow"></span>
                                        </a>
                                        <ul>
                                            <li><a href="#">Alerts</a></li>
                                            <li><a href="#">Accordion</a></li>
                                            <li><a href="#">Avatar</a></li>
                                            <li><a href="#">Badges</a></li>
                                            <li><a href="#">Border</a></li>
                                            <li><a href="#">Buttons</a></li>
                                            <li><a href="#">Button Group</a></li>
                                            <li><a href="#">Breadcrumb</a></li>
                                            <li><a href="#">Card</a></li>
                                            <li><a href="#">Carousel</a></li>
                                            <li><a href="#">Colors</a></li>
                                            <li><a href="#">Dropdowns</a></li>
                                            <li><a href="#">Grid</a></li>
                                            <li><a href="#">Images</a></li>
                                            <li><a href="#">Lightbox</a></li>
                                            <li><a href="#">Media</a></li>
                                            <li><a href="#">Modals</a></li>
                                            <li><a href="#">Offcanvas</a></li>
                                            <li><a href="#">Pagination</a></li>
                                            <li><a href="#">Popovers</a></li>
                                            <li><a href="#">Progress</a></li>
                                            <li><a href="#">Placeholders</a></li>
                                            <li><a href="#">Range Slider</a></li>
                                            <li><a href="#">Spinner</a></li>
                                            <li><a href="#">Sweet Alerts</a></li>
                                            <li><a href="#">Tabs</a></li>
                                            <li><a href="#">Toasts</a></li>
                                            <li><a href="#">Tooltips</a></li>
                                            <li><a href="#">Typography</a></li>
                                            <li><a href="#">Video</a></li>
                                            <li><a href="#">Sortable</a></li>
                                            <li><a href="#">Swiperjs</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);">
                                            <span>Advanced UI</span><span class="menu-arrow"></span>
                                        </a>
                                        <ul>
                                            <li><a href="#">Ribbon</a></li>
                                            <li><a href="#">Clipboard</a></li>
                                            <li><a href="#">Drag & Drop</a></li>
                                            <li><a href="#">Range Slider</a></li>
                                            <li><a href="#">Rating</a></li>
                                            <li><a href="#">Text Editor</a></li>
                                            <li><a href="#">Counter</a></li>
                                            <li><a href="#">Scrollbar</a></li>
                                            <li><a href="#">Sticky Note</a></li>
                                            <li><a href="#">Timeline</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Charts</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Apex Charts</a></li>
                                            <li><a href="#">Chart C3</a></li>
                                            <li><a href="#">Chart Js</a></li>
                                            <li><a href="#">Morris Charts</a></li>
                                            <li><a href="#">Flot Charts</a></li>
                                            <li><a href="#">Peity Charts</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Icons</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Fontawesome Icons</a></li>
                                            <li><a href="#">Feather Icons</a></li>
                                            <li><a href="#">Ionic Icons</a></li>
                                            <li><a href="#">Material Icons</a></li>
                                            <li><a href="#">Pe7 Icons</a></li>
                                            <li><a href="#">Simpleline Icons</a></li>
                                            <li><a href="#">Themify Icons</a></li>
                                            <li><a href="#">Weather Icons</a></li>
                                            <li><a href="#">Typicon Icons</a></li>
                                            <li><a href="#">Flag Icons</a></li>
                                            <li><a href="#">Tabler Icons</a></li>
                                            <li><a href="#">Bootstrap Icons</a></li>
                                            <li><a href="#">Remix Icons</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);">
                                            <span>Forms</span><span class="menu-arrow"></span>
                                        </a>
                                        <ul>
                                            <li class="submenu submenu-two">
                                                <a href="javascript:void(0);">Form Elements<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Basic Inputs</a></li>
                                                    <li><a href="#">Checkbox & Radios</a></li>
                                                    <li><a href="#">Input Groups</a></li>
                                                    <li><a href="#">Grid & Gutters</a></li>
                                                    <li><a href="#">Form Select</a></li>
                                                    <li><a href="#">Input Masks</a></li>
                                                    <li><a href="#">File Uploads</a></li>
                                                </ul>
                                            </li>
                                            <li class="submenu submenu-two">
                                                <a href="javascript:void(0);">Layouts<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Horizontal Form</a></li>
                                                    <li><a href="#">Vertical Form</a></li>
                                                    <li><a href="#">Floating Labels</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Form Validation</a></li>
                                            <li><a href="#">Select2</a></li>
                                            <li><a href="#">Form Wizard</a></li>
                                            <li><a href="#">Form Picker</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Tables</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Basic Tables </a></li>
                                            <li><a href="#">Data Table </a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Maps</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Vector</a></li>
                                            <li><a href="#">Leaflet</a></li>
                                        </ul>
                                    </li>

                                </ul>
                                <ul class="tab-pane" id="document" aria-labelledby="set-tab5">
                                    <li><a href="#"><span>Profile</span></a></li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Authentication</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);">Login<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Cover</a></li>
                                                    <li><a href="#">Illustration</a></li>
                                                    <li><a href="#">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);">Register<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Cover</a></li>
                                                    <li><a href="#">Illustration</a></li>
                                                    <li><a href="#">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);">Forgot Password<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Cover</a></li>
                                                    <li><a href="#">Illustration</a></li>
                                                    <li><a href="#">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);">Reset Password<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Cover</a></li>
                                                    <li><a href="#">Illustration</a></li>
                                                    <li><a href="#">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);">Email Verification<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Cover</a></li>
                                                    <li><a href="#">Illustration</a></li>
                                                    <li><a href="#">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);">2 Step Verification<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Cover</a></li>
                                                    <li><a href="#">Illustration</a></li>
                                                    <li><a href="#">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Lock Screen</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Error Pages</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">404 Error </a></li>
                                            <li><a href="#">500 Error </a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Places</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Countries</a></li>
                                            <li><a href="#">States</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#"><span>Blank Page</span> </a>
                                    </li>
                                    <li>
                                        <a href="#"><span>Coming Soon</span> </a>
                                    </li>
                                    <li>
                                        <a href="#"><span>Under Maintenance</span> </a>
                                    </li>
                                </ul>
                                <ul class="tab-pane" id="settings" aria-labelledby="set-tab6">
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>General Settings</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Profile</a></li>
                                            <li><a href="#">Security</a></li>
                                            <li><a href="#">Notifications</a></li>
                                            <li><a href="#">Connected Apps</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Website Settings</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">System Settings</a></li>
                                            <li><a href="#">Company Settings </a></li>
                                            <li><a href="#">Localization</a></li>
                                            <li><a href="#">Prefixes</a></li>
                                            <li><a href="#">Preference</a></li>
                                            <li><a href="#">Appearance</a></li>
                                            <li><a href="#">Social Authentication</a></li>
                                            <li><a href="#">Language</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>App Settings</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Invoice</a></li>
                                            <li><a href="#">Printer</a></li>
                                            <li><a href="#">POS</a></li>
                                            <li><a href="#">Custom Fields</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>System Settings</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Email</a></li>
                                            <li><a href="#">SMS Gateways</a></li>
                                            <li><a href="#">OTP</a></li>
                                            <li><a href="#">GDPR Cookies</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Financial Settings</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Payment Gateway</a></li>
                                            <li><a href="#">Bank Accounts</a></li>
                                            <li><a href="#">Tax Rates</a></li>
                                            <li><a href="#">Currencies</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Other Settings</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Storage</a></li>
                                            <li><a href="#">Ban IP Address</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0);"><span>Documentation</span></a></li>
                                    <li><a href="javascript:void(0);"><span>Changelog v2.0.8</span></a></li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Multi Level</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="javascript:void(0);">Level 1.1</a></li>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);">Level 1.2<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="javascript:void(0);">Level 2.1</a></li>
                                                    <li class="submenu submenu-two submenu-three"><a href="javascript:void(0);">Level 2.2<span class="menu-arrow inside-submenu inside-submenu-two"></span></a>
                                                        <ul>
                                                            <li><a href="javascript:void(0);">Level 3.1</a></li>
                                                            <li><a href="javascript:void(0);">Level 3.2</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Sidebar -->

                <!-- Sidebar -->
                <div class="sidebar horizontal-sidebar">
                    <div id="sidebar-menu-3" class="sidebar-menu">
                        <ul class="nav">
                            <li class="submenu">
                                <a href="#"><i data-feather="grid"></i><span> Main Menu</span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Dashboard</span> <span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Admin Dashboard</a></li>
                                            <li><a href="#">Sales Dashboard</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Application</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Chat</a></li>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);"><span>Call</span><span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Video Call</a></li>
                                                    <li><a href="#">Audio Call</a></li>
                                                    <li><a href="#">Call History</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Calendar</a></li>
                                            <li><a href="#">Email</a></li>
                                            <li><a href="#">To Do</a></li>
                                            <li><a href="#">Notes</a></li>
                                            <li><a href="#">File Manager</a></li>
                                            <li><a href="#">Social Feed</a></li>
                                            <li><a href="#">Kanban</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);" class="active subdrop"><img  loading="lazy" data-src="/theme/dp/assets/img/icons/product.svg" alt="img"><span> Inventory </span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="#" class="active"><span>Products</span></a></li>
                                    <li><a href="#"><span>Create Product</span></a></li>
                                    <li><a href="#"><span>Expired Products</span></a></li>
                                    <li><a href="#"><span>Low Stocks</span></a></li>
                                    <li><a href="#"><span>Category</span></a></li>
                                    <li><a href="#"><span>Sub Category</span></a></li>
                                    <li><a href="#"><span>Brands</span></a></li>
                                    <li><a href="#"><span>Units</span></a></li>
                                    <li><a href="#"><span>Variant Attributes</span></a></li>
                                    <li><a href="#"><span>Warranties</span></a></li>
                                    <li><a href="#"><span>Print Barcode</span></a></li>
                                    <li><a href="#"><span>Print QR Code</span></a></li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);"><img  loading="lazy" data-src="/theme/dp/assets/img/icons/purchase1.svg" alt="img"><span>Sales &amp; Purchase</span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Sales</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#"><span>Sales</span></a></li>
                                            <li><a href="#"><span>Invoices</span></a></li>
                                            <li><a href="#"><span>Sales Return</span></a></li>
                                            <li><a href="#"><span>Quotation</span></a></li>
                                            <li><a href="#"><span>POS</span></a></li>
                                            <li><a href="#"><span>Coupons</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Purchase</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#"><span>Purchases</span></a></li>
                                            <li><a href="#"><span>Purchase Order</span></a></li>
                                            <li><a href="#"><span>Purchase Return</span></a></li>
                                            <li><a href="#"><span>Manage Stock</span></a></li>
                                            <li><a href="#"><span>Stock Adjustment</span></a></li>
                                            <li><a href="#"><span>Stock Transfer</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Expenses</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Expenses</a></li>
                                            <li><a href="#">Expense Category</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);"><img  loading="lazy" data-src="/theme/dp/assets/img/icons/users1.svg" alt="img"><span>User Management</span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>People</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#"><span>Customers</span></a></li>
                                            <li><a href="#"><span>Suppliers</span></a></li>
                                            <li><a href="#"><span>Stores</span></a></li>
                                            <li><a href="#"><span>Warehouses</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Roles &amp; Permissions</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#"><span>Roles & Permissions</span></a></li>
                                            <li><a href="#"><span>Delete Account Request</span></a></li>

                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Base UI</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Alerts</a></li>
                                            <li><a href="#">Accordion</a></li>
                                            <li><a href="#">Avatar</a></li>
                                            <li><a href="#">Badges</a></li>
                                            <li><a href="#">Border</a></li>
                                            <li><a href="#">Buttons</a></li>
                                            <li><a href="#">Button Group</a></li>
                                            <li><a href="#">Breadcrumb</a></li>
                                            <li><a href="#">Card</a></li>
                                            <li><a href="#">Carousel</a></li>
                                            <li><a href="#">Colors</a></li>
                                            <li><a href="#">Dropdowns</a></li>
                                            <li><a href="#">Grid</a></li>
                                            <li><a href="#">Images</a></li>
                                            <li><a href="#">Lightbox</a></li>
                                            <li><a href="#">Media</a></li>
                                            <li><a href="#">Modals</a></li>
                                            <li><a href="#">Offcanvas</a></li>
                                            <li><a href="#">Pagination</a></li>
                                            <li><a href="#">Popovers</a></li>
                                            <li><a href="#">Progress</a></li>
                                            <li><a href="#">Placeholders</a></li>
                                            <li><a href="#">Range Slider</a></li>
                                            <li><a href="#">Spinner</a></li>
                                            <li><a href="#">Sweet Alerts</a></li>
                                            <li><a href="#">Tabs</a></li>
                                            <li><a href="#">Toasts</a></li>
                                            <li><a href="#">Tooltips</a></li>
                                            <li><a href="#">Typography</a></li>
                                            <li><a href="#">Video</a></li>
                                            <li><a href="#">Sortable</a></li>
                                            <li><a href="#">Swiperjs</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Advanced UI</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Ribbon</a></li>
                                            <li><a href="#">Clipboard</a></li>
                                            <li><a href="#">Drag & Drop</a></li>
                                            <li><a href="#">Range Slider</a></li>
                                            <li><a href="#">Rating</a></li>
                                            <li><a href="#">Text Editor</a></li>
                                            <li><a href="#">Counter</a></li>
                                            <li><a href="#">Scrollbar</a></li>
                                            <li><a href="#">Sticky Note</a></li>
                                            <li><a href="#">Timeline</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Charts</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Apex Charts</a></li>
                                            <li><a href="#">Chart C3</a></li>
                                            <li><a href="#">Chart Js</a></li>
                                            <li><a href="#">Morris Charts</a></li>
                                            <li><a href="#">Flot Charts</a></li>
                                            <li><a href="#">Peity Charts</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Primary Icons</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Fontawesome Icons</a></li>
                                            <li><a href="#">Feather Icons</a></li>
                                            <li><a href="#">Ionic Icons</a></li>
                                            <li><a href="#">Material Icons</a></li>
                                            <li><a href="#">Pe7 Icons</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Secondary Icons</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Simpleline Icons</a></li>
                                            <li><a href="#">Themify Icons</a></li>
                                            <li><a href="#">Weather Icons</a></li>
                                            <li><a href="#">Typicon Icons</a></li>
                                            <li><a href="#">Flag Icons</a></li>
                                            <li><a href="#">Tabler Icons</a></li>
                                            <li><a href="#">Bootstrap Icons</a></li>
                                            <li><a href="#">Remix Icons</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span> Forms</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li class="submenu submenu-two">
                                                <a href="javascript:void(0);"><span>Form Elements</span><span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Basic Inputs</a></li>
                                                    <li><a href="#">Checkbox & Radios</a></li>
                                                    <li><a href="#">Input Groups</a></li>
                                                    <li><a href="#">Grid & Gutters</a></li>
                                                    <li><a href="#">Form Select</a></li>
                                                    <li><a href="#">Input Masks</a></li>
                                                    <li><a href="#">File Uploads</a></li>
                                                </ul>
                                            </li>
                                            <li class="submenu submenu-two">
                                                <a href="javascript:void(0);"><span> Layouts</span><span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Horizontal Form</a></li>
                                                    <li><a href="#">Vertical Form</a></li>
                                                    <li><a href="#">Floating Labels</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Form Validation</a></li>
                                            <li><a href="#">Select2</a></li>
                                            <li><a href="#">Form Wizard</a></li>
                                            <li><a href="#">Form Picker</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Tables</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Basic Tables </a></li>
                                            <li><a href="#">Data Table </a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Maps</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Vector</a></li>
                                            <li><a href="#">Leaflet</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);"><i data-feather="user"></i><span>Profile</span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="#"><span>Profile</span></a></li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Authentication</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);">Login<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Cover</a></li>
                                                    <li><a href="#">Illustration</a></li>
                                                    <li><a href="#">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);">Register<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Cover</a></li>
                                                    <li><a href="#">Illustration</a></li>
                                                    <li><a href="#">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);">Forgot Password<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Cover</a></li>
                                                    <li><a href="#">Illustration</a></li>
                                                    <li><a href="#">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);">Reset Password<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Cover</a></li>
                                                    <li><a href="#">Illustration</a></li>
                                                    <li><a href="#">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);">Email Verification<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Cover</a></li>
                                                    <li><a href="#">Illustration</a></li>
                                                    <li><a href="#">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);">2 Step Verification<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="#">Cover</a></li>
                                                    <li><a href="#">Illustration</a></li>
                                                    <li><a href="#">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Lock Screen</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Pages</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">404 Error </a></li>
                                            <li><a href="#">500 Error </a></li>
                                            <li>
                                                <a href="#"><span>Blank Page</span> </a>
                                            </li>
                                            <li>
                                                <a href="#"><span>Coming Soon</span> </a>
                                            </li>
                                            <li>
                                                <a href="#"><span>Under Maintenance</span> </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Places</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Countries</a></li>
                                            <li><a href="#">States</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Employees</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#"><span>Employees</span></a></li>
                                            <li><a href="#"><span>Departments</span></a></li>
                                            <li><a href="#"><span>Designation</span></a></li>
                                            <li><a href="#"><span>Shifts</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Attendence</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Employee Attendence</a></li>
                                            <li><a href="#">Admin Attendence</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Leaves &amp; Holidays</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Admin Leaves</a></li>
                                            <li><a href="#">Employee Leaves</a></li>
                                            <li><a href="#">Leave Types</a></li>
                                            <li><a href="#"><span>Holidays</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="#"><span>Payroll</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Employee Salary</a></li>
                                            <li><a href="#">Payslip</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);"><img  loading="lazy" data-src="/theme/dp/assets/img/icons/printer.svg" alt="img"><span>Reports</span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="#"><span>Sales Report</span></a></li>
                                    <li><a href="#"><span>Purchase report</span></a></li>
                                    <li><a href="#"><span>Inventory Report</span></a></li>
                                    <li><a href="#"><span>Invoice Report</span></a></li>
                                    <li><a href="#"><span>Supplier Report</span></a></li>
                                    <li><a href="#"><span>Customer Report</span></a></li>
                                    <li><a href="#"><span>Expense Report</span></a></li>
                                    <li><a href="#"><span>Income Report</span></a></li>
                                    <li><a href="#"><span>Tax Report</span></a></li>
                                    <li><a href="#"><span>Profit & Loss</span></a></li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript:void(0);"><img  loading="lazy" data-src="/theme/dp/assets/img/icons/settings.svg" alt="img"><span> Settings</span> <span class="menu-arrow"></span></a>
                                <ul>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>General Settings</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Profile</a></li>
                                            <li><a href="#">Security</a></li>
                                            <li><a href="#">Notifications</a></li>
                                            <li><a href="#">Connected Apps</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Website Settings</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">System Settings</a></li>
                                            <li><a href="#">Company Settings </a></li>
                                            <li><a href="#">Localization</a></li>
                                            <li><a href="#">Prefixes</a></li>
                                            <li><a href="#">Preference</a></li>
                                            <li><a href="#">Appearance</a></li>
                                            <li><a href="#">Social Authentication</a></li>
                                            <li><a href="#">Language</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>App Settings</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Invoice</a></li>
                                            <li><a href="#">Printer</a></li>
                                            <li><a href="#">POS</a></li>
                                            <li><a href="#">Custom Fields</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>System Settings</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Email</a></li>
                                            <li><a href="#">SMS Gateways</a></li>
                                            <li><a href="#">OTP</a></li>
                                            <li><a href="#">GDPR Cookies</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Financial Settings</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Payment Gateway</a></li>
                                            <li><a href="#">Bank Accounts</a></li>
                                            <li><a href="#">Tax Rates</a></li>
                                            <li><a href="#">Currencies</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Other Settings</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="#">Storage</a></li>
                                            <li><a href="#">Ban IP Address</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0);"><span>Documentation</span></a></li>
                                    <li><a href="javascript:void(0);"><span>Changelog v2.0.8</span></a></li>
                                    <li class="submenu">
                                        <a href="javascript:void(0);"><span>Multi Level</span><span class="menu-arrow"></span></a>
                                        <ul>
                                            <li><a href="javascript:void(0);">Level 1.1</a></li>
                                            <li class="submenu submenu-two"><a href="javascript:void(0);">Level 1.2<span class="menu-arrow inside-submenu"></span></a>
                                                <ul>
                                                    <li><a href="javascript:void(0);">Level 2.1</a></li>
                                                    <li class="submenu submenu-two submenu-three"><a href="javascript:void(0);">Level 2.2<span class="menu-arrow inside-submenu inside-submenu-two"></span></a>
                                                        <ul>
                                                            <li><a href="javascript:void(0);">Level 3.1</a></li>
                                                            <li><a href="javascript:void(0);">Level 3.2</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- /Sidebar -->
                
                <!-- Toast -->
                <!-- <div id="toastOnSave" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <img  loading="lazy" data-src="..." class="rounded me-2" alt="...">
                        <strong class="me-auto">Paykhom</strong>
                        <small>Just now</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Information Saved.
                    </div>
                </div>               -->
                
                <div class="toast-container position-fixed bottom-0 end-0 p-3">
                    <div id="toastOnSave" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <strong class="me-auto">Paykhom</strong>
                            <small>Just now</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            Information Saved.
                        </div>
                    </div>
                </div>                
                <!-- Toast -->

`;
    }

    *script() {
yield html`
	<script>
         class MasterLayout extends AppPage {
            constructor(args) {
                super(args);


                this.state.payload = {};


            }

            //////////////////////////////////////////// EVENTS ///////////////////////////////////////////////////////////////////

            async uponReady() {
                await super.uponReady();

                this.state.payload = {}; // first init
                this.setHotState("ret_data")

                //TMP_DISABLED: this.handleImageError();

                this.toastElement = document.getElementById('toastOnSave'); // Get the toast element
                this.toast = new bootstrap.Toast(this.toastElement); // Create a Bootstrap Toast instance

                this.on("#btn_save_editor", "click", this.onClickSaveEditor);
			    this.on("#btn_cancel_editor", "click", this.onClickCancelEditor);

                /*********************

                this.fileInput = document.getElementById("logo_image");
                this.previewContainer = document.getElementById(previewContainerId);

                if (!this.fileInput || !this.previewContainer) {
                    //console.error("File input or preview container not found");
                    return;
                }


                this.fileInput.addEventListener("change", () => this.handleFileChange());

                this.clearPreview(el);
                */
         	}


            
            async onChangeFileContent(e) {
                let el = e;
                let elPreviewContainer = document.getElementById(el.getAttribute("id") + "_preview_container")
                this.clearPreview(elPreviewContainer);

                if(!el.files || el.files.length === 0){
                    return;
                }
                const files = Array.from(el.files);

                for(const file of files){
                    await this.createPreview(elPreviewContainer, file)
                }                
            }


             async onClickCancelEditor(e) {
				e.preventDefault();
				e.stopPropagation();

				window.history.back();
			}

            //NOTE: This "virual" method is "overridable" by "Child" classes/
			async onClickSaveEditor(e) {
                //NOTE: never reset this.state.payload = {} here
				e.preventDefault();
				e.stopPropagation();

                await this.saveUpsert();

			}			
            
            async onClickAddNew(e) {
                let el = e; //not e.target;

                let href = window.location.href;

                // Check if the URL ends with "/editor/{id}" pattern
                if (/\\/editor\\/\\d+$/.test(href)) {
                    // Replace the {id} in the URL with the given id (e.g., 123)
                    const givenId = 0; // Replace this with your dynamic id
                    window.location.href = href.replace(/\\/editor\\/\d+$/, ~/editor/~{givenId}~);
                } 
                else {
                    // Strip any trailing / or # or similar characters
                    //DIDN'T WORK: const cleanedHref = href.replace(/\/[#\/]*$/, '');

                    const cleanedHref = href.split('#')[0].replace(/\\/$/, '');
                                        
                    // Redirect to "/editor/0"
                    window.location.href = ~~{cleanedHref}/editor/0~;
                }
                
            }

            //////////////////////////////////////////// METHODS ///////////////////////////////////////////////////////////////////
            handleImageError() {
                    // Get all <img> elements on the page
                    const images = document.querySelectorAll('img');

                    // Loop through each image and add an error event listener
                    images.forEach(img => {
                                                
                        img.addEventListener('error', function () {
                            // Option 1: Hide the broken image
                            this.style.display = 'none';

                            // Option 2: Replace the broken image with a placeholder
                            //this.src = 'placeholder.png'; // Replace with your placeholder image
                            
                            // Additional
                            this.onerror = null; // Prevent infinite loop if placeholder fails
                        });

                        const src = img.src;
                        img.src = '';
                        img.src = src;
                        // Works like charm!/

                    });

            }


            clearPreview(elPreviewContainer) {
                elPreviewContainer.innerHTML = "";
            }

            async createPreview(elPreviewContainer, file) {
                const reader = new FileReader();

                return new Promise((resolve) => {
                    reader.onload = (e) => {
                        if(file.type.startsWith('image/')){
                            this.createImagePreview(elPreviewContainer, e.target.result, file);
                        } 
                        else {
                            this.createFilePreview(elPreviewContainer, file)
                        }
                    resolve();
                    };

                reader.readAsDataURL(file);
                });
            }

            createImagePreview(elPreviewContainer, dataUrl, file) {
                const previewElement = document.createElement("div");
                //NO: previewElement.classList.add("image-preview-item", "col-4", "mb-2");
                previewElement.innerHTML = ~<img  src="~{dataUrl}" alt="~{file.name}" class="img-fluid rounded shadow" width="100%">~;

                elPreviewContainer.appendChild(previewElement)
            }

            createFilePreview(elPreviewContainer, file) {
                const previewElement = document.createElement("div");
                previewElement.classList.add("file-preview-item", "mb-2");
                previewElement.innerHTML = ~<p class="text-center small text-muted mt-1">File: ~{file.name}</p>~;
                elPreviewContainer.appendChild(previewElement);
            }


             async loadEditor(dbx, args={}) {
                /* PLC
                Status\ID   <=0	        >0
                FOUND	    NEW         EDIT (NEW ID)
                NOT_FOUND	NEW	        NEW - INCOMPLETE
                */
               

                this.dbxLoadEditor = dbx;
                this.dbxUpsert = dbx.replace("load_editor", "upsert");

				let row = {};
                if(!args["primary_key"]) {
                    this["primary_key"] = dbx.split("/")[4] + "_id";
                }
                else {
                    this.primary_key = args["primary_key"];
                }
                this.primary_id =  Number(Url.getPathPart(4) || 0);



                let result = (await this.fetch(dbx, {...args, [this.primary_key] : this.primary_id}));
                if (Array.isArray(result.ret_data)) {
                    result.ret_data = {}
                    this.primary_id = 0;
                }

                // wise
                this.setState({...this.state, ...result});
                // /wise

                if(this.state.ret_data.logo_image) {
                    document.querySelector('[data-state="logo_image"]').src = this.state.ret_data.logo_image;
                }
                if(this.state.ret_data.banner_image) {
                    document.querySelector('[data-state="banner_image"]').src = this.state.ret_data.banner_image;
                }

                if (Number(result.ret_data[this.primary_key]) !== this.primary_id) {
                    this.setStateKeyValue(this.primary_key, this.primary_id);
                    this.pushBrowserHistoryState(this.primary_id);


                }

                // if (this.primary_id > 0) {
                //     //let result = (await this.fetch(dbx, {...args, [this.primary_key] : this.primary_id}));
	
				// 	this.setState(result);
				// }
				// else {
				// 	this.state.ret_data = {[this.primary_key]: this.primary_id};
    			// }

			}

            pushBrowserHistoryState(newId) {
                try {
                    const currentUrl = new URL(window.location.href);

                    if (!/^\d+$/.test(newId)) {
                        //console.warn('Invalid ID format. Please provide a positive integer.');
                        return;
                    }

                    const pathParts = currentUrl.pathname.split('/');
                    if (pathParts.length === 0) {
                        throw new Error("Pathname is empty")
                    }

                    // Replace the last part of the path
                    pathParts[pathParts.length - 1] = newId;

                    currentUrl.pathname = pathParts.join('/');

                    const newState = { page: 'editor', id: newId };
                    window.history.pushState(newState, null, currentUrl.href);
                    //document.title = 'Editor - ID: ' + newId;

                } 
                catch (error) {
                    //console.error("Error changing URL:", error);
                }                
            }

            async saveUpsert() {
                //NOTE: never reset this.state.payload = {} here

                const toBase64 = file => new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result.split(',')[1]);
                    reader.onerror = reject;
                });

                //let payload = this.state.ret_data;

                //const payload = {};
                const elementsWithDataState = document.querySelectorAll('[data-state]');
                elementsWithDataState.forEach(element => {
                    const stateKey = element.getAttribute('data-state');

                    if(this.state.ret_data.hasOwnProperty(stateKey)){
                        this.state.payload[stateKey] = this.state.ret_data[stateKey];
                    }
                });

				this.state.payload[this.primary_key] = Number(this.primary_id) // type fix

                    if (this.primary_id === 0) { //insert mode
                        if (window.logo_image) {
                            let fileInput = window.logo_image;
                            let file = fileInput.files[0];

                            // FROM:
                            // if (!file) {
                            //     throw ("Please select a logo image.");
                            // }
                            // TO:
                            this.dbcEnsure([
                                file, "Please select a logo image.",
                            ]);

                            // get base64 encoded data and then send
                            let imageContent = await toBase64(file);
                            this.state.payload.logo_image = file.name;
                            this.state.payload.logo_image_content = imageContent;

                        }


                        if(window.banner_image) {
                            let fileInput = window.banner_image;
                            let file = fileInput.files[0];
                            // FROM:
                            // if (!file) {
                            //     throw ("Please select a banner image.");
                            // }
                            // TO:
                            this.dbcEnsure([
                                file, "Please select a banner image.",
                            ]);

                            // get base64 encoded data and then send
                            let imageContent = await toBase64(file);
                            this.state.payload.banner_image = file.name;
                            this.state.payload.banner_image_content = imageContent;

                        }

                    }
                    else { //update mode
                        if (window.logo_image) {
                            let fileInput = window.logo_image;
                            let file = fileInput.files[0];

                            if (!file) { // image not changed.
                                let imageContent = ""; 
                                let filename = document.querySelector(~[data-state="logo_image"]~).getAttribute("src");
                                this.state.payload.logo_image = filename;
                                this.state.payload.logo_image_content = imageContent;
                                
                            }
                            else { // image changed
                                // get base64 encoded data and then send
                                let imageContent = await toBase64(file);
                                this.state.payload.logo_image = file.name;
                                this.state.payload.logo_image_content = imageContent;

                            }

                        }


                        if(window.banner_image) {
                            let fileInput = window.banner_image;
                            let file = fileInput.files[0];

                            if (!file) { // image not changed.
                                let imageContent = ""; 
                                let filename = document.querySelector(~[data-state="banner_image"]~).getAttribute("src");
                                this.state.payload.banner_image = filename;
                                this.state.payload.banner_image_content = imageContent;

                            }
                            else { // image changed
                                // get base64 encoded data and then send
                                let imageContent = await toBase64(file);
                                this.state.payload.banner_image = file.name;
                                this.state.payload.banner_image_content = imageContent;

                            }

                        }

                    }



                this.state.payload.__internal = this.state.payload.__internal || {};
                this.state.payload.__internal.primary_key = this.primary_key
                this.state.payload.__internal.primary_id = this.primary_id

                /* PLC
                Status\ID   <=0	            >0
                FOUND	    EDIT(NEW ID)    EDIT
                NOT_FOUND	NEW	            EDIT - INCOMPLETE
                */

				let result = await this.fetch(this.dbxUpsert, this.state.payload);

                // RESET payload here
                this.state.payload = {}; //yes, here.
                // /RESET payload here
                
                this.dbcEnsure([
                        result, "API Propagation Failed",
                        result[this.primary_key], "ID could not be found."
                ]);


                this.pushBrowserHistoryState(result[this.primary_key]);

                this.toast.show();

                this.primary_id = result[this.primary_key]
                this.state.ret_data[this.primary_key] = this.primary_id;
                this.notifyState(this.primary_key);
            }

            async onClickDeleteRow(e) {
                throw new Error("No Permission or Role. Contact Administrator.");
            }

         }   

         page = new MasterLayout(); // just, the fall-back, if no Page is instantiated by a particular page
         ////////////////////////////////////////////

   	</script>

`;
    }
}
