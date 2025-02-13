import clsx from "clsx"
import s from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({onClick}) => {
 return (
    <div className={clsx(s.btnContainer)}>
 <button type='button' onClick={onClick}>Load more</button></div>
 )
}
export default LoadMoreBtn