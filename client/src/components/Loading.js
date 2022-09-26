import React, { useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap"
import { useParams, Link, useNavigate } from "react-router-dom";

const Loading = ({ size = 100}) => {
  return(
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Spinner style={{
        width: size,
        height: size,
      }}
      animation="border"
      />


    </div>
  )
}
export default Loading