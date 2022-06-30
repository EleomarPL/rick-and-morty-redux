import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BaseCard = ({ children, title, elementTop, link }) => {
  return (
    <Card className="card bg-transparent">
      { elementTop }
      <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        { children }
        { link &&
          <Link to={ link.toString() } className="btn btn-primary">More Details</Link>
        }
      </div>
    </Card>
  )
}

BaseCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  elementTop: PropTypes.node,
  link: PropTypes.string
}

const Card = styled.article`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-primary);
`

export default BaseCard
