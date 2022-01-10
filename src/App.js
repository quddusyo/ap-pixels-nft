import './App.css'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PixelList from './components/PixelList'
import Main from './components/Main'

function App() {
  const [pixelListData, setPixelListData] = useState([])
  const [selectedPixel, setSelectedPixel] = useState(0)
  const [search, setSearch] = useState('')
  const [themeSwitch, setThemeSwitch]= useState(true)
  console.log(themeSwitch)
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x82AF2e642551c37e7EFb3E41E3f34cC955da192e&order_direction=asc', { mode: 'cors' }
      )
      console.log(openseaData.data.assets)
      setPixelListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])

  return (
    <div className="App"
      style={{
        backgroundColor: themeSwitch ? '#000' : '#FFF'
      }}
    >
      <Header 
        search={search}
        setSearch={setSearch}
        themeSwitch={themeSwitch}
        setThemeSwitch={setThemeSwitch}
      />
      {pixelListData.length > 0 && (
        <>
          <Main
            pixelListData={pixelListData}
            selectedPixel={selectedPixel}
            themeSwitch={themeSwitch}
          />
          <PixelList
            pixelListData={pixelListData.filter(pixel => ((pixel.name).toLowerCase()).includes(search.toLowerCase()))}
            setSelectedPixel={setSelectedPixel}
          />
        </>
      )}
    </div>
  );
}

export default App;
