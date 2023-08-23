import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import withRouter from "../components/common/withRoutes";

//import Components
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import RightSidebar from "../components/common/RightSidebar";

//import actions
import {
  changeLayout,
  changeSidebarTheme,
  changeLayoutMode,
  changeLayoutWidth,
  changeLayoutPosition,
  changeTopbarTheme,
  changeLeftsidebarSizeType,
  changeLeftsidebarViewType,
  changeSidebarImageType,
  changeSidebarVisibility,
} from "../slices/thunks";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { AppDispatch } from "@/app/layout";

const DashboardLayout = (props: any) => {
  const [headerClass, setHeaderClass] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const selectLayoutState = (state: any) => state.Layout;
  const selectLayoutProperties = createSelector(
    selectLayoutState,
    (layout) => ({
      layoutType: layout.layoutType,
      leftSidebarType: layout.leftSidebarType,
      layoutModeType: layout.layoutModeType,
      layoutWidthType: layout.layoutWidthType,
      layoutPositionType: layout.layoutPositionType,
      topbarThemeType: layout.topbarThemeType,
      leftsidbarSizeType: layout.leftsidbarSizeType,
      leftSidebarViewType: layout.leftSidebarViewType,
      leftSidebarImageType: layout.leftSidebarImageType,
      preloader: layout.preloader,
      sidebarVisibilitytype: layout.sidebarVisibilitytype,
    })
  );
  // Inside your component
  const {
    layoutType,
    leftSidebarType,
    layoutModeType,
    layoutWidthType,
    layoutPositionType,
    topbarThemeType,
    leftsidbarSizeType,
    leftSidebarViewType,
    leftSidebarImageType,
    sidebarVisibilitytype,
  } = useSelector(selectLayoutProperties);

  /*
    layout settings
    */
  useEffect(() => {
    if (
      layoutType ||
      leftSidebarType ||
      layoutModeType ||
      layoutWidthType ||
      layoutPositionType ||
      topbarThemeType ||
      leftsidbarSizeType ||
      leftSidebarViewType ||
      leftSidebarImageType ||
      sidebarVisibilitytype
    ) {
      window.dispatchEvent(new Event("resize"));
      dispatch(changeLeftsidebarViewType(leftSidebarViewType));
      dispatch(changeLeftsidebarSizeType(leftsidbarSizeType));
      dispatch(changeSidebarTheme(leftSidebarType));
      dispatch(changeLayoutMode(layoutModeType));
      dispatch(changeLayoutWidth(layoutWidthType));
      dispatch(changeLayoutPosition(layoutPositionType));
      dispatch(changeTopbarTheme(topbarThemeType));
      dispatch(changeLayout(layoutType));
      dispatch(changeSidebarImageType(leftSidebarImageType));
      dispatch(changeSidebarVisibility(sidebarVisibilitytype));
    }
  }, [
    layoutType,
    leftSidebarType,
    layoutModeType,
    layoutWidthType,
    layoutPositionType,
    topbarThemeType,
    leftsidbarSizeType,
    leftSidebarViewType,
    leftSidebarImageType,
    sidebarVisibilitytype,
    dispatch,
  ]);
  /*
    call dark/light mode
    */
  const onChangeLayoutMode = (value: any) => {
    if (changeLayoutMode) {
      dispatch(changeLayoutMode(value));
    }
  };

  // class add remove in header
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setHeaderClass("topbar-shadow");
    } else {
      setHeaderClass("");
    }
  }

  useEffect(() => {
    const hamburgerIcon = document.querySelector(".hamburger-icon");

    if (
      hamburgerIcon &&
      (sidebarVisibilitytype === "show" ||
        layoutType === "vertical" ||
        layoutType === "twocolumn")
    ) {
      hamburgerIcon.classList.remove("open");
    } else if (hamburgerIcon) {
      hamburgerIcon.classList.add("open");
    }
  }, [sidebarVisibilitytype, layoutType]);

  // useEffect(() => {
  //   if (
  //     sidebarVisibilitytype === "show" ||
  //     layoutType === "vertical" ||
  //     layoutType === "twocolumn"
  //   ) {
  //     document.querySelector(".hamburger-icon").classList.remove("open");
  //   } else {
  //     document.querySelector(".hamburger-icon").classList.add("open");
  //   }
  // }, [sidebarVisibilitytype, layoutType]);

  return (
    <>
      <div id="layout-wrapper">
        <Header
          headerClass={headerClass}
          layoutModeType={layoutModeType}
          onChangeLayoutMode={onChangeLayoutMode as () => void}
        />
        <Sidebar layoutType={layoutType} />
        <div className="main-content">
          {props.children}
          <Footer />
        </div>
      </div>
      <RightSidebar />
    </>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.object,
};

export default withRouter(DashboardLayout);
