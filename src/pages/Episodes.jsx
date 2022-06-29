import { useState } from 'react'

import InputSearchWithDebounder from '../components/views/InputSearchWithDebounder'

const Episodes = () => {
  const [searcher, setSearcher] = useState('')

  return (
    <div className="container-fluid">
      <InputSearchWithDebounder namePage="Episodio"
        setSearcher={ setSearcher }
      />
      <span>{ searcher }</span>
    </div>
  )
}

export default Episodes
