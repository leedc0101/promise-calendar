"use client";

import React from "react";
import { GhostButton } from "./Button";
import { MdMenu } from "react-icons/md";
import { CgClose } from "react-icons/cg";

export const ShowEventListButton = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <GhostButton onClick={openDrawer}>
        <MdMenu />
      </GhostButton>
      <div
        className={`fixed inset-0 left-0 top-0 z-50 w-64 transform bg-white transition-transform dark:bg-gray-950 ${
          open ? "translate-x-0" : "-translate-x-64"
        } transition-all duration-500`}
      >
        <GhostButton onClick={closeDrawer}>
          <CgClose />
        </GhostButton>
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold">Drawer</h2>
          <p className="text-gray-500">This is a drawer.</p>
        </div>
      </div>
    </React.Fragment>
  );
};
