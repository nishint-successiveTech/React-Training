import Slideshow from "@/components/Assignment2/Slideshow";
import React from "react";

const page = () => {
  return (
    <div>
      <center>
        <h2>
          Q8.Use the useEffect hook to manage the current slide and transition.
          Add few images atleast 10 in public folder to populate the slideshow.
          Allow users to pause, play the slideshow. Include a time interval
          option to control the automatic slideshow progression.
        </h2>
        <br></br>
        <hr />
      <h1><Slideshow /></h1>
      </center>
    </div>
  );
};

export default page;
