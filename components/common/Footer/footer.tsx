'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <style jsx>{`
    .footer{
      background-image: url('images/home/footer_bg.png');
    }
      `}</style>
    <div className="footer-shape">
        <img src="images/home/footer-shape.png" alt="" />
    </div>
    <div className="container">
        <div className="footer-cta wow animate__animated animate__zoomIn">
            <div className="footer-cta-left">
                <div className="icon-wrapper">
                    <Image src="/images/home/footer_cta_img.png" width={64} height={64} alt="Footer CTA Image" />
                </div>
                <div className="footer-cta-text">
                    <p>Take your organization to the next level with Squad Deck</p>
                </div>
            </div>
            <div className="footer-cta-right">
                <a href="#" className="footer-cta-btn">Try 30 days free</a>
            </div>
        </div>
        <div className="footer-top">
            <div className="footer-top-content">
                <div className="footer-top-about-info wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                   <Link href="/" className="footer-logo">
                      <Image src="/images/home/footer_logo.png" width={190} height={36} alt="footer logo" />
                   </Link>
                    <div className="footer-about-text wow animate__animated animate__fadeIn">
                        <p>SquadDeck - The ultimate sports team organisation and squad management system. Easily manage your team, coaches, staff, guardians and players, while driving sales to your merchandise store with one intelligent software platform.     
                        </p>
                    </div>
                </div>
                <div className="footer-top-single-widget footer-top-widget-1 wow animate__animated animate__fadeIn" data-wow-delay="0.5s">
                    <h3 className="wow animate__animated animate__fadeIn"><span>QUICK LINKS</span></h3>
                    <div className="footer-menu">
                        <ul>
                            <li><Link href="/features" className="wow animate__animated animate__fadeIn">Features</Link></li>
                            <li><Link href="/sports" className="wow animate__animated animate__fadeIn">Sports</Link></li>
                            <li><Link href="/about">About us</Link></li>
                            <li><Link href="/pricing" className="wow animate__animated animate__fadeIn">Pricing</Link></li>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-top-single-widget footer-top-widget-2 wow animate__animated animate__fadeIn" data-wow-delay="1s">
                    <h3 className="wow animate__animated animate__fadeIn"><span>Key features</span></h3>
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#" className="wow animate__animated animate__fadeIn">Gurdian & Player Management</a></li>
                                <li><a href="#" className="wow animate__animated animate__fadeIn">Batch & Team Management </a></li>
                                <li><a href="#" className="wow animate__animated animate__fadeIn">Payment Order Management</a></li>
                                <li><a href="#" className="wow animate__animated animate__fadeIn">Seasonal Games</a></li>
                                <li><a href="#" className="wow animate__animated animate__fadeIn">CMS Platfrom</a></li>
                            </ul>
                        </div>
                </div>
                <div className="footer-top-single-widget footer-top-widget-3 wow animate__animated animate__fadeIn" data-wow-delay="1.5s">
                    <h3 className="wow animate__animated animate__fadeIn">
                        <span>Help</span>
                    </h3>
                    <div className="footer-menu">
                        <ul>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">Support</a></li>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">My Tickets </a></li>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">FAQs</a></li>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-middle">
            <div className="footer-middle-heading">
                <h3>Sports</h3>
                <div className="footer-border"></div>
            </div>
            <div className="footer-middle-row">
                <div className="footer-middle-widget wow animate__animated animate__fadeInLeft" data-wow-delay="0.1s">
                    <div className="footer-menu">
                        <ul>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">Basketball</a></li>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">Rugby </a></li>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">Football</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-middle-widget wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                    <div className="footer-menu">
                        <ul>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">Soccer </a></li>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">Volleyball</a></li>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">Tennis </a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-middle-widget wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                    <div className="footer-menu">
                        <ul>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">Baseball</a></li>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">Cricket </a></li>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">All Sports</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-middle-widget-4 wow animate__animated animate__fadeInUp" data-wow-delay="1.5s">
                    <div className="footer-menu">
                        <ul>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">Hockey </a></li>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">Golf</a></li>
                            <li><a href="#" className="wow animate__animated animate__fadeIn">Martial arts </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-middle-row">
                <div className="footer-social-links wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                    <a href="#" className="fb">
                        <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.26776 27.7493V15.1379H13.4928L14.1209 10.2001H9.26776V7.055C9.26776 5.63015 9.662 4.6546 11.6928 4.6546H14.266V0.252319C13.014 0.117205 11.7555 0.051966 10.4963 0.0569009C6.76175 0.0569009 4.19768 2.35267 4.19768 6.56723V10.1909H0.00012207V15.1287H4.20685V27.7493H9.26776Z" fill="white"/>
                        </svg>     
                    </a>
                    <a href="#" className="linkedin">
                        <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.0112 6.53919C5.80131 6.53919 7.25248 5.08802 7.25248 3.29792C7.25248 1.50781 5.80131 0.0566406 4.0112 0.0566406C2.2211 0.0566406 0.769928 1.50781 0.769928 3.29792C0.769928 5.08802 2.2211 6.53919 4.0112 6.53919Z" fill="white"/>
                            <path d="M10.3129 8.9952V26.9778H15.8962V18.085C15.8962 15.7385 16.3377 13.466 19.2471 13.466C22.1166 13.466 22.1521 16.1488 22.1521 18.2331V26.9792H27.7384V17.1176C27.7384 12.2735 26.6955 8.55078 21.0337 8.55078C18.3153 8.55078 16.4932 10.0425 15.7481 11.4543H15.6725V8.9952H10.3129ZM1.2142 8.9952H6.80644V26.9778H1.2142V8.9952Z" fill="white"/>
                        </svg>                                 
                    </a>
                    <a href="#" className="twitter">
                        <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.8199 3.56471C28.7398 4.05629 27.5644 4.41008 26.3537 4.54788C27.6107 3.75999 28.552 2.51525 29.001 1.0472C27.8215 1.78751 26.5293 2.30664 25.1819 2.58154C24.6187 1.9463 23.9375 1.44024 23.1809 1.09489C22.4242 0.749548 21.6082 0.572313 20.7838 0.574234C17.4482 0.574234 14.7656 3.42691 14.7656 6.92759C14.7656 7.41918 14.8221 7.91076 14.9138 8.38373C9.91927 8.10814 5.46473 5.59063 2.50328 1.73616C1.96368 2.70859 1.6809 3.81581 1.68438 4.94263C1.68438 7.14732 2.74683 9.09131 4.36699 10.2346C3.41221 10.1949 2.47978 9.91806 1.64556 9.42648V9.50469C1.64556 12.592 3.71398 15.1505 6.47071 15.7389C5.9531 15.8807 5.42064 15.9533 4.88586 15.9549C4.49406 15.9549 4.12343 15.9139 3.74928 15.858C4.5117 18.3756 6.73191 20.2041 9.37569 20.2637C7.30726 21.9731 4.71643 22.9786 1.90323 22.9786C1.39847 22.9786 0.932549 22.96 0.448975 22.9004C3.11746 24.7066 6.28363 25.7493 9.69336 25.7493C20.7626 25.7493 26.8197 16.074 26.8197 7.67614C26.8197 7.40056 26.8197 7.12497 26.802 6.84939C27.9739 5.94442 29.001 4.82346 29.8199 3.56471Z" fill="white"/>
                        </svg>                                                             
                    </a>
                    <a href="#" className="insta">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.88474 0.391453C10.3226 0.325257 10.7811 0.310547 14.4439 0.310547C18.1068 0.310547 18.5652 0.326483 20.0019 0.391453C21.4386 0.456422 22.4193 0.685655 23.2774 1.01786C24.1759 1.35742 24.9911 1.88821 25.6653 2.57468C26.3518 3.24767 26.8813 4.06163 27.2197 4.9614C27.5531 5.81949 27.7811 6.80016 27.8473 8.2344C27.9135 9.67477 27.9282 10.1332 27.9282 13.7948C27.9282 17.4576 27.9123 17.9161 27.8473 19.354C27.7823 20.7883 27.5531 21.7689 27.2197 22.627C26.8813 23.5269 26.3509 24.3422 25.6653 25.0162C24.9911 25.7027 24.1759 26.2322 23.2774 26.5706C22.4193 26.904 21.4386 27.132 20.0044 27.1982C18.5652 27.2644 18.1068 27.2791 14.4439 27.2791C10.7811 27.2791 10.3226 27.2632 8.88474 27.1982C7.4505 27.1332 6.46982 26.904 5.61173 26.5706C4.71187 26.2322 3.89656 25.7018 3.22256 25.0162C2.53656 24.3428 2.00569 23.5279 1.66697 22.6283C1.33476 21.7702 1.10676 20.7895 1.04056 19.3553C0.974366 17.9149 0.959656 17.4564 0.959656 13.7948C0.959656 10.132 0.975592 9.67354 1.04056 8.23685C1.10553 6.80016 1.33476 5.81949 1.66697 4.9614C2.00619 4.06173 2.53746 3.24683 3.22379 2.57345C3.89683 1.8876 4.71132 1.35674 5.61051 1.01786C6.4686 0.685655 7.44927 0.457648 8.88351 0.391453H8.88474ZM19.8928 2.81862C18.4708 2.75365 18.0442 2.74017 14.4439 2.74017C10.8436 2.74017 10.417 2.75365 8.99506 2.81862C7.67973 2.87869 6.96629 3.09812 6.49066 3.28322C5.8618 3.52839 5.41192 3.81891 4.93997 4.29086C4.49259 4.7261 4.1483 5.25595 3.93233 5.84155C3.74722 6.31718 3.5278 7.03062 3.46773 8.34595C3.40276 9.76793 3.38928 10.1945 3.38928 13.7948C3.38928 17.3951 3.40276 17.8217 3.46773 19.2437C3.5278 20.559 3.74722 21.2725 3.93233 21.7481C4.14808 22.3328 4.49254 22.8636 4.93997 23.2988C5.37514 23.7462 5.90594 24.0907 6.49066 24.3064C6.96629 24.4915 7.67973 24.711 8.99506 24.771C10.417 24.836 10.8424 24.8495 14.4439 24.8495C18.0455 24.8495 18.4708 24.836 19.8928 24.771C21.2081 24.711 21.9216 24.4915 22.3972 24.3064C23.0261 24.0613 23.476 23.7707 23.9479 23.2988C24.3953 22.8636 24.7398 22.3328 24.9555 21.7481C25.1406 21.2725 25.3601 20.559 25.4201 19.2437C25.4851 17.8217 25.4986 17.3951 25.4986 13.7948C25.4986 10.1945 25.4851 9.76793 25.4201 8.34595C25.3601 7.03062 25.1406 6.31718 24.9555 5.84155C24.7104 5.2127 24.4199 4.76281 23.9479 4.29086C23.5126 3.84352 22.9828 3.49922 22.3972 3.28322C21.9216 3.09812 21.2081 2.87869 19.8928 2.81862ZM12.7216 17.9517C13.6835 18.3521 14.7545 18.4061 15.7518 18.1046C16.7491 17.803 17.6108 17.1646 18.1896 16.2983C18.7685 15.432 19.0287 14.3917 18.9257 13.3549C18.8227 12.3181 18.363 11.3492 17.625 10.6138C17.1546 10.1436 16.5857 9.78364 15.9595 9.55972C15.3332 9.3358 14.6651 9.25352 14.0032 9.3188C13.3414 9.38408 12.7022 9.5953 12.1318 9.93726C11.5613 10.2792 11.0738 10.7434 10.7043 11.2964C10.3347 11.8494 10.0924 12.4774 9.99476 13.1353C9.89709 13.7932 9.9465 14.4645 10.1394 15.101C10.3324 15.7375 10.664 16.3233 11.1105 16.8162C11.557 17.3091 12.1073 17.6969 12.7216 17.9517ZM9.54301 8.8939C10.1866 8.25031 10.9507 7.73978 11.7916 7.39146C12.6325 7.04315 13.5338 6.86388 14.4439 6.86388C15.3541 6.86388 16.2554 7.04315 17.0963 7.39146C17.9372 7.73978 18.7013 8.25031 19.3449 8.8939C19.9885 9.5375 20.499 10.3016 20.8473 11.1425C21.1956 11.9834 21.3749 12.8846 21.3749 13.7948C21.3749 14.705 21.1956 15.6063 20.8473 16.4472C20.499 17.2881 19.9885 18.0522 19.3449 18.6958C18.0451 19.9956 16.2821 20.7258 14.4439 20.7258C12.6057 20.7258 10.8428 19.9956 9.54301 18.6958C8.24321 17.3959 7.51298 15.633 7.51298 13.7948C7.51298 11.9566 8.24321 10.1937 9.54301 8.8939ZM22.9121 7.89607C23.0716 7.74562 23.1992 7.5647 23.2875 7.36402C23.3759 7.16334 23.423 6.94698 23.4262 6.72775C23.4294 6.50852 23.3886 6.29088 23.3062 6.08772C23.2237 5.88455 23.1014 5.69998 22.9463 5.54495C22.7913 5.38991 22.6067 5.26756 22.4036 5.18514C22.2004 5.10271 21.9828 5.06189 21.7635 5.06508C21.5443 5.06828 21.3279 5.11543 21.1273 5.20374C20.9266 5.29206 20.7457 5.41973 20.5952 5.57922C20.3026 5.8894 20.1424 6.30139 20.1486 6.72775C20.1549 7.15411 20.327 7.56126 20.6285 7.86278C20.93 8.16429 21.3372 8.33643 21.7635 8.34264C22.1899 8.34886 22.6019 8.18866 22.9121 7.89607Z" fill="white"/>
                            </svg>
                                                                                         
                    </a>
                    <a href="#" className="yt">
                        <svg width="39" height="28" viewBox="0 0 39 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.2942 4.38251C1.50917 3.54484 1.93064 2.78094 2.51644 2.16726C3.10224 1.55357 3.83181 1.11163 4.63215 0.885655C7.57815 0.0566408 19.3874 0.0566406 19.3874 0.0566406C19.3874 0.0566406 31.1967 0.0566405 34.1427 0.881245C34.9433 1.10649 35.6733 1.54819 36.2592 2.16198C36.8451 2.77578 37.2663 3.54007 37.4806 4.3781C38.2687 7.46486 38.2687 13.9029 38.2687 13.9029C38.2687 13.9029 38.2687 20.341 37.4806 23.4234C37.0465 25.1255 35.7653 26.4661 34.1427 26.9202C31.1967 27.7493 19.3874 27.7493 19.3874 27.7493C19.3874 27.7493 7.57815 27.7493 4.63215 26.9202C3.00532 26.4661 1.72831 25.1255 1.2942 23.4234C0.506077 20.341 0.506073 13.9029 0.506073 13.9029C0.506073 13.9029 0.506077 7.46486 1.2942 4.38251ZM23.1384 19.8119V7.99402L13.3606 13.8589L23.1384 19.8119Z" fill="white"/>
                        </svg>                                                                                       
                    </a>
                </div>
                <div className="footer-app-links wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <h5>Connect with apps:</h5>
                    <Link href="#">
                      <Image src="/images/home/google-play.png" width={100} height={100} alt="Google Playstore" />
                    </Link>
                    <Link href="#">
                      <Image src="/images/home/appstore.png" width={100} height={100} alt="Appstore" />
                    </Link>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-content">
                <div className="footer-bottom-left footer-copyright wow animate__animated animate__fadeIn" data-wow-delay="1s">
                    <p>All Rights Reserved ® Squad Deck</p>
                </div>
                <div className="footer-bottom-right">
                    <div className="footer-bottom-right-nav wow animate__animated animate__fadeIn" data-wow-delay="1.5s">
                        <Link href="/termsAndConditions">Terms</Link>
                        <Link href="/privacyPolicy">Privacy</Link>
                        <Link href="/cookies">Cookies</Link>
                        <a href="/sitemap">Sitemap</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  );
}
