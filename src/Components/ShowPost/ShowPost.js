import React from "react";
import imran from "../../Assets/Images/story_image.jpg";
import { GiEarthAmerica } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import Pogramming from "../../Assets/Images/post1.jpg";
const ShowPost = () => {
  return (
    <div className="">
      <div className="">
        <div className="max-w-[750px] bg-white shadow-md rounded-md">
          <div className="flex items-start">
            <div
              className="w-14 h-14 bg-gray-300 m-4 rounded-full"
              style={{
                background: `url(${imran})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="">
                <small className="flex gap-1 items-center relative top-8 left-16 text-gray-500 font-semibold">
                  1 hrs . <GiEarthAmerica />{" "}
                </small>
              </div>
            </div>

            <h3 className="text-[18px] font-semibold mt-3 ml-[-8px]">
              Adom Jhon
            </h3>
            <BsThreeDots className="relative left-[502px]  top-4" />
            
          </div>
          <div>
            <p className="px-4">
              JavaScript, often abbreviated JS, is a programming language that
              is one of the core technologies of the World Wide Web, alongside
              HTML and CSS. As of 2022, 98% of websites use JavaScript on the
              client side for webpage behavior, often incorporating third-party
              libraries
            </p>
            <img className="pt-4 w-full " src={Pogramming} />
          </div>
          {/* like comment share */}
          <div className="likeCommentShare">


          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
