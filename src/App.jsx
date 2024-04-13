import React from 'react'
// import Navbar from './Components/Navbar'
import HomeLiving from './Components/HomeLiving'
import Men from './Components/Men'
import Women from './Components/Women'
import Beauty from './Components/Beauty'
import Fashion from './Components/Fashion'

const App = () => {
  return (
    <div className=''>
      {/* <Navbar Navbarlinks={Navbarlinks} /> */}
      
      <Routes>
        <Route path="/" element={<HomeLiving />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/fashion" element={<Fashion />} />
      </Routes>
    </div>
  )
}

export default App