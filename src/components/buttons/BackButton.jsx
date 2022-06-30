import { useNavigate } from 'react-router-dom'
import Icon from '../common/Icon'

const BackButton = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <button className="btn btn-primary" onClick={ handleBack }>
      <Icon className="bi bi-caret-left-fill" />
      Regresar
    </button>
  )
}

export default BackButton
