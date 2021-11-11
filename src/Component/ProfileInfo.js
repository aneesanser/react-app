import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProfileInfo() {
  const [profileData, setProfileData] = useState("");

  const { id } = useParams();
  React.useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setProfileData(res.data.data);
      })
      .catch(function (error) {
        console.log("No data");
      });
  }, [id]);
  return (
    <div>
      <div class="container">
        <div class="card">
          <div class="card-body">
            <img
              src={profileData.avatar}
              alt="cardimage"
              class="float-left rounded-circle"
            />
            <div class="message ">
              <h5 class="card-title mt-4 ">
                {profileData.first_name}&nbsp;{profileData.last_name}
              </h5>
              <h6 class="card-subtitle  mb-2 text-muted">
                {" "}
                {profileData.email}{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
