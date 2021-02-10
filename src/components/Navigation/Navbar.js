import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar, Button } from "@material-ui/core";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav__content">
        <div className="nav__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
            alt="Quora Logo"
          />
        </div>
        <div className="nav__icons">
          <div className="nav__icon">
            <HomeIcon />
          </div>
          <div className="nav__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="nav__icon">
            <AssignmentTurnedInOutlinedIcon />
          </div>
          <div className="nav__icon">
            <PeopleAltOutlinedIcon />
          </div>
          <div className="nav__icon">
            <NotificationsOutlinedIcon />
          </div>
          <div className="nav__input">
            <SearchIcon />
            <input type="text" placeholder="Search Quora" />
          </div>
          <div className="nav__Rem">
            <div className="user__avtar">
              <Avatar
                className="Avatar"
                src="https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              />
            </div>
            <LanguageIcon />
            <Button>Add Question</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
