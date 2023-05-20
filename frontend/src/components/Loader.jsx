import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        margin: 'auto',
        display: 'block',
      }}
    />
  )
}

export default Loader
