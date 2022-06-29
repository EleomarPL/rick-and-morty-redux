import styled from 'styled-components'

const SpinnerPage = () => {
  return (
    <div className="text-center text-primary">
      <Spinner className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

const Spinner = styled.div`
  margin-top: 2rem;
  width: 3rem;
  height: 3rem;
`

export default SpinnerPage
