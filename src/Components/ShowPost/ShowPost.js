import React from "react";
import imran from "../../Assets/Images/story_image.jpg";
import { GiEarthAmerica } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import Pogramming from "../../Assets/Images/post1.jpg";
import like from '../../Assets/Images/like.svg'
import heart from '../../Assets/Images/heart.svg'
import care from '../../Assets/Images/care.svg'
import sad from '../../Assets/Images/sad.svg'
import haha from '../../Assets/Images/haha.svg'
import angry from '../../Assets/Images/angry.svg'
import wow from '../../Assets/Images/wow.svg'
import { comment } from "postcss";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
const ShowPost = () => {
  return (
    <div className="">
      <div className="">
        <div className=" mx-auto max-w-sm md:max-w-md lg:max-w-[750px] bg-white shadow-md rounded-xl mb-4 ">
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
            <BsThreeDots className="relative  left-[130px] md:left-[202px] lg:left-[250px]  top-4" />
            
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
          <div className="likeCommentShar mb- ">
            <div className="flex justify-between p-2 pb-4">

                {/* imoje */}
              <div className="flex gap-1">
                  <img className="w-6 h-6" src={like} alt=""/>
                  <img className="w-6 h-6" src={heart} alt=""/>
                  <img className="w-6 h-6" src={care} alt=""/>
                  <img className="w-6 h-6" src={angry} alt=""/>
                  <img className="w-6 h-6" src={sad} alt=""/>
                  <img className="w-6 h-6" src={haha} alt=""/>
                  <img className="w-6 h-6" src={wow} alt=""/>

              </div>
              {/* comment */}
              <div className="flex hover:underline cursor-pointer ">
                <p>10</p>
                <p>Comments</p>
              </div>
            </div>
               
               <div className=" flex justify-between p-4 px-8 mx-8 pb-4 border-y-2

">
                      <div className="flex items-center gap-1">
                      <AiOutlineLike/> 
                          <p>Like</p>
                      </div>
                      <div className="flex items-center gap-1">
                      <BiComment/>
                          <p>Comment</p>
                      </div>
                      <div className="flex items-center gap-1">
                     <RiShareForwardLine />
                          <p>Share</p>
                      </div>


               </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
