import { abbreviateNumber } from "js-abbreviation-number";
import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ReactPlayer from "react-player/youtube";
import SuggestionVideoCard from "./SuggestionVideoCard";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";

const VideoDetails = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(undefined);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const getVideoDetail = async () => {
    try {
      const response = await fetchDataFromApi(`video/details/?id=${id}`);
      setVideo(response);
    } catch (e) {
      console.error(e);
    }
  };

  const getVideoRelated = async () => {
    try {
      const response = await fetchDataFromApi(
        `video/related-contents/?id=${id}`
      );

      setRelatedVideos(response);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getVideoDetail();
    getVideoRelated();
  }, []);

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-zinc-900">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>

          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  {/* 변경점 : 해당 요소가 있는지 없는지 검사 후 image 렌더링 */}
                  {video?.author?.avatar?.[0]?.url && (
                    <img
                      className="h-full w-full object-cover"
                      src={video?.author?.avatar?.[0]?.url}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col ml-3">
                <div className="text-white text-md font-semibold flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                  )}
                </div>
                <div className="text-white/[0.7] text-sm">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
            <div className="flex text-white mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl text-white mr-2" />
                {video?.stats?.views
                  ? `${abbreviateNumber(video?.stats?.views, 2)} 좋아요`
                  : null}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                {video?.stats?.views
                  ? `${abbreviateNumber(video?.stats?.views, 2)} 조회수`
                  : null}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SuggestionVideoCard key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
