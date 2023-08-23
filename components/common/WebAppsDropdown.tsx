import React, { useState } from "react";
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from "reactstrap";

//import images
import github from "../../public/assets/images/brands/github.png";
import bitbucket from "../../public/assets/images/brands/bitbucket.png";
import dribbble from "../../public/assets/images/brands/dribbble.png";
import dropbox from "../../public/assets/images/brands/dropbox.png";
import mail_chimp from "../../public/assets/images/brands/mail_chimp.png";
import slack from "../../public/assets/images/brands/slack.png";
import Link from "next/link";
import Image from "next/image";

const WebAppsDropdown = () => {
  const [isWebAppDropdown, setIsWebAppDropdown] = useState(false);
  const toggleWebAppDropdown = () => {
    setIsWebAppDropdown(!isWebAppDropdown);
  };
  return (
    <React.Fragment>
      <Dropdown
        isOpen={isWebAppDropdown}
        toggle={toggleWebAppDropdown}
        className="topbar-head-dropdown ms-1 header-item"
      >
        <DropdownToggle
          tag="button"
          type="button"
          className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
        >
          <i className="bx bx-category-alt fs-22"></i>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-lg p-0 dropdown-menu-end">
          <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0 fw-semibold fs-15"> Web Apps </h6>
              </Col>
              <div className="col-auto">
                <Link href="#" className="btn btn-sm btn-soft-info">
                  {" "}
                  View All Apps
                  <i className="ri-arrow-right-s-line align-middle"></i>
                </Link>
              </div>
            </Row>
          </div>

          <div className="p-2">
            <div className="row g-0">
              <Col>
                <Link className="dropdown-icon-item" href="#">
                  <Image src={github} alt="Github" />
                  <span>GitHub</span>
                </Link>
              </Col>
              <Col>
                <Link className="dropdown-icon-item" href="#">
                  <Image src={bitbucket} alt="bitbucket" />
                  <span>Bitbucket</span>
                </Link>
              </Col>
              <Col>
                <Link className="dropdown-icon-item" href="#">
                  <Image src={dribbble} alt="dribbble" />
                  <span>Dribbble</span>
                </Link>
              </Col>
            </div>

            <div className="row g-0">
              <Col>
                <Link className="dropdown-icon-item" href="#">
                  <Image src={dropbox} alt="dropbox" />
                  <span>Dropbox</span>
                </Link>
              </Col>
              <Col>
                <Link className="dropdown-icon-item" href="#">
                  <Image src={mail_chimp} alt="mail_chimp" />
                  <span>Mail Chimp</span>
                </Link>
              </Col>
              <Col>
                <Link className="dropdown-icon-item" href="#">
                  <Image src={slack} alt="slack" />
                  <span>Slack</span>
                </Link>
              </Col>
            </div>
          </div>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default WebAppsDropdown;
