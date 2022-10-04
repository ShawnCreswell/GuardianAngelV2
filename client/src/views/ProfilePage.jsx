import Profile from "../components/Profile";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {

    return (
        <div>
          <Profile />
          <hr />
          {/* {loaded && <GuardList guards={guards} removeFromDom={removeFromDom} />} */}
    
        </div>
      );


}

export default ProfilePage;