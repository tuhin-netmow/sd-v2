import React, { useState } from "react";

interface Document {
  mozCancelFullScreen?(): void;
  webkitExitFullscreen?(): void;
}

const FullScreenDropdown = () => {
  /*
    mode
    */
  const [isFullScreenMode, setIsFullScreenMode] = useState(false);

  // full screen

  const toggleFullscreen = () => {
    let doc = window.document;

    doc.body.classList.add("fullscreen-enable");

    if (!doc.fullscreenElement) {
      setIsFullScreenMode(true);
      if (doc.documentElement.requestFullscreen) {
        doc.documentElement.requestFullscreen();
      } else if ((doc.documentElement as any).mozRequestFullScreen) {
        (doc.documentElement as any).mozRequestFullScreen(); // Use type assertion
      } else if ((doc.documentElement as any).webkitRequestFullscreen) {
        (doc.documentElement as any).webkitRequestFullscreen();
      }
    } else {
      setIsFullScreenMode(false);
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if ((doc as any).mozCancelFullScreen) {
        (doc as any).mozCancelFullScreen(); // Use type assertion
      } else if ((doc as any).webkitExitFullscreen) {
        (doc as any).webkitExitFullscreen();
      }
    }

    // handle fullscreen exit
    const exitHandler = () => {
      if (!doc.exitFullscreen && !doc.fullscreen && !doc.fullscreenElement)
        doc.body.classList.remove("fullscreen-enable");
    };
    doc.addEventListener("fullscreenchange", exitHandler);
    doc.addEventListener("webkitfullscreenchange", exitHandler);
    doc.addEventListener("mozfullscreenchange", exitHandler);
  };
  return (
    <>
      <div className="ms-1 header-item d-none d-sm-flex">
        <button
          onClick={toggleFullscreen}
          type="button"
          className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
        >
          <i
            className={
              isFullScreenMode
                ? "bx bx-fullscreen fs-22"
                : "bx bx-exit-fullscreen fs-22"
            }
          ></i>
        </button>
      </div>
    </>
  );
};

export default FullScreenDropdown;
