import PropTypes from 'prop-types'

import styled from 'styled-components'

const ComponentGrouper = ({ children }) => {
  return (
    <Grouper className="pb-4">
      { children }
    </Grouper>
  )
}

const Grouper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  grid-auto-flow: dense;
  grid-auto-rows: 22rems;
`

ComponentGrouper.propTypes = {
  children: PropTypes.node.isRequired
}

export default ComponentGrouper
