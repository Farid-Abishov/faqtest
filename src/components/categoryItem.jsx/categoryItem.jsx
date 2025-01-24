import Line from '../../assets/icons/Line-2.svg'
import Arrow from '../../assets/icons/red-arrow.svg'
import './categoryItem.css'
export default function CategoryItem(props){
    return<div className="category-container">
    <div className="f-child">
      <div className="back-image">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h3>{props.title}</h3>
    </div>
    <div className="s-child flex justify-between px-2">
        <img src={Line} alt="" />
        <img src={Arrow} alt="" />
    </div>
  </div>
}



