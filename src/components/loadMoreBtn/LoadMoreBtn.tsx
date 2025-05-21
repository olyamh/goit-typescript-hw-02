import React from "react";
import clsx from "clsx";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps{
   onClick: () => void;
}

const LoadMoreBtn : React.FC <LoadMoreBtnProps> = ({onClick}) => {
 return (
    <div className={clsx(s.btnContainer)}>
 <button type='button' onClick={onClick}>Load more</button></div>
 )
}
export default LoadMoreBtn