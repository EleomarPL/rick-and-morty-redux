import { useState } from 'react'

import InputSearchWithDebounder from '../components/views/InputSearchWithDebounder'

const Locations = () => {
  const [searcher, setSearcher] = useState('')

  return (
    <div className="container-fluid">
      <InputSearchWithDebounder namePage="Locacione"
        setSearcher={ setSearcher }
      />
      <span>{ searcher }</span>
    </div>
  )
}

export default Locations
