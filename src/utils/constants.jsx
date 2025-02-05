import React from "react";
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm, FiHelpCircle, FiSettings } from "react-icons/fi";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { ImNewspaper } from "react-icons/im";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdLiveTv, MdLocalFireDepartment } from "react-icons/md";
import { RiFeedbackLine, RiLightbulbLine } from "react-icons/ri";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "인기", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "음악", icon: <CgMusicNote />, type: "category" },
  { name: "영화", icon: <FiFilm />, type: "category" },
  { name: "라이브", icon: <MdLiveTv />, type: "category" },
  { name: "게임", icon: <IoGameControllerSharp />, type: "category" },
  { name: "뉴스", icon: <ImNewspaper />, type: "category" },
  { name: "스포츠", icon: <GiDiamondTrophy />, type: "category" },
  { name: "학습", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "패션 & 뷰티",
    icon: <GiEclipse />,
    type: "category",
    divider: true,
  },
  { name: "설정", icon: <FiSettings />, type: "menu" },
  { name: "기록 신고", icon: <AiOutlineFlag />, type: "menu" },
  { name: "도움말", icon: <FiHelpCircle />, type: "menu" },
  { name: "피드백 보내기", icon: <RiFeedbackLine />, type: "menu" },
];
