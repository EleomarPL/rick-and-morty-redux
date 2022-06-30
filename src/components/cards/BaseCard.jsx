import styled from 'styled-components'
import PropTypes from 'prop-types'

const BaseCard = ({ children, title, elementTop }) => {
  return (
    <Card className="card bg-transparent">
      { elementTop }
      <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        { children }
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </Card>
  )
}

BaseCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  elementTop: PropTypes.node
}

const Card = styled.article`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-primary);
`

export default BaseCard
