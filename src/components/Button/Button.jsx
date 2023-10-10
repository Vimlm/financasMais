/* eslint-disable react/prop-types */
import { PrimaryButton, SecundaryButton } from './button.styles.js'

const Button = ({variant, text, width, onClick}) => {
  return (
    <>
      {variant == 'primary' && <PrimaryButton onClick={onClick} width={width}>{text}</PrimaryButton>}
      {variant == 'secundary' && <SecundaryButton onClick={onClick} width={width}>{text}</SecundaryButton>}
    </>
  )
}

export default Button
