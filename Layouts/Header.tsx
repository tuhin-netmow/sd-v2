import React, { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle, Form } from "reactstrap";

//import images
import logoSm from "../public/assets/images/logo-sm.png";
import logoDark from "../public/assets/images/logo-dark.png";
import logoLight from "../public/assets/images/logo-light.png";

//import Components
import SearchOption from "../components/common/SearchOption";
import LanguageDropdown from "../components/common/LanguageDropdown";
import WebAppsDropdown from "../components/common/WebAppsDropdown";
import MyCartDropdown from "../components/common/MyCartDropdown";
import FullScreenDropdown from "../components/common/FullScreenDropdown";
import NotificationDropdown from "../components/common/NotificationDropdown";
import ProfileDropdown from "../components/common/ProfileDropdown";
import LightDark from "../components/common/LightDark";

import { changeSidebarVisibility } from "../slices/thunks";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import Link from "next/link";
import { AppDispatch } from "@/app/layout";
import Image from "next/image";
import { layoutMode } from "@/components/constants/layout";

interface HeaderProps {
  onChangeLayoutMode: () => void;
  layoutModeType: string; // Specify the correct type here
  headerClass: string; // Specify the correct type here
}

const Header: React.FC<HeaderProps> = ({
  onChangeLayoutMode,
  layoutModeType,
  headerClass,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const selectDashboardData = createSelector(
    (state) => state.Layout.sidebarVisibilitytype,
    (sidebarVisibilitytype) => sidebarVisibilitytype
  );
  // Inside your component
  const sidebarVisibilitytype = useSelector(selectDashboardData);

  const [search, setSearch] = useState(false);
  const toogleSearch = () => {
    setSearch(!search);
  };

  const toogleMenuBtn = () => {
    var windowSize = document.documentElement.clientWidth;
    dispatch(changeSidebarVisibility("show"));

    if (windowSize > 767)
      (document as any)
        .querySelector(".hamburger-icon")
        .classList.toggle("open");

    //For collapse horizontal menu
    if (document.documentElement.getAttribute("data-layout") === "horizontal") {
      document.body.classList.contains("menu")
        ? document.body.classList.remove("menu")
        : document.body.classList.add("menu");
    }

    //For collapse vertical menu
    if (
      sidebarVisibilitytype === "show" &&
      (document.documentElement.getAttribute("data-layout") === "vertical" ||
        document.documentElement.getAttribute("data-layout") === "semibox")
    ) {
      if (windowSize < 1025 && windowSize > 767) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.getAttribute("data-sidebar-size") === "sm"
          ? document.documentElement.setAttribute("data-sidebar-size", "")
          : document.documentElement.setAttribute("data-sidebar-size", "sm");
      } else if (windowSize > 1025) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.getAttribute("data-sidebar-size") === "lg"
          ? document.documentElement.setAttribute("data-sidebar-size", "sm")
          : document.documentElement.setAttribute("data-sidebar-size", "lg");
      } else if (windowSize <= 767) {
        document.body.classList.add("vertical-sidebar-enable");
        document.documentElement.setAttribute("data-sidebar-size", "lg");
      }
    }

    //Two column menu
    if (document.documentElement.getAttribute("data-layout") === "twocolumn") {
      document.body.classList.contains("twocolumn-panel")
        ? document.body.classList.remove("twocolumn-panel")
        : document.body.classList.add("twocolumn-panel");
    }
  };
  return (
    <React.Fragment>
      <header id="page-topbar" className={headerClass}>
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box horizontal-logo">
                <Link href="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <Image src={logoSm} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <Image src={logoDark} alt="" height="17" />
                  </span>
                </Link>

                <Link href="/" className="logo logo-light">
                  <span className="logo-sm">
                    <Image src={logoSm} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <Image src={logoLight} alt="" height="17" />
                  </span>
                </Link>
              </div>

              <button
                onClick={toogleMenuBtn}
                type="button"
                className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                id="topnav-hamburger-icon"
              >
                <span className="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>

              <SearchOption />
            </div>

            <div className="d-flex align-items-center">
              <Dropdown
                isOpen={search}
                toggle={toogleSearch}
                className="d-md-none topbar-head-dropdown header-item"
              >
                <DropdownToggle
                  type="button"
                  tag="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                >
                  <i className="bx bx-search fs-22"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                  <Form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                          aria-label="Recipient's username"
                        />
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify"></i>
                        </button>
                      </div>
                    </div>
                  </Form>
                </DropdownMenu>
              </Dropdown>

              {/* LanguageDropdown */}
              <LanguageDropdown />

              {/* WebAppsDropdown */}
              <WebAppsDropdown />

              {/* MyCartDropdwon */}
              <MyCartDropdown />

              {/* FullScreenDropdown */}
              <FullScreenDropdown />

              {/* Dark/Light Mode set */}
              <LightDark
                layoutMode={layoutModeType as layoutMode}
                onChangeLayoutMode={onChangeLayoutMode}
              />

              {/* NotificationDropdown */}
              <NotificationDropdown />

              {/* ProfileDropdown */}
              <ProfileDropdown />
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
