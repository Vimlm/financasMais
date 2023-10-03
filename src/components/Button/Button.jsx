/* eslint-disable react/prop-types */
import Style from './button.module.css'

const Button = ({text}) => {
  return (
    <button className={Style.btn}>{text}</button>
  )
}

export default Button
