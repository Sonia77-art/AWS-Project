import React from "react";
import { GrContact } from "react-icon/gr";
import { MdAttachEmail } from "react-icon/md";
import { GrLinkedin } from "react-icon/gr";

export default function Footer() {
  return (
    <footer>
      <div className="Elements">
        <div className="Contact Us">
          <a href="#">
            <GrContact />
          </a>
        </div>
        <div className="Email">
          <a href="www.gmail.com">
            <MdAttachEmail />
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/">
            <GrLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
