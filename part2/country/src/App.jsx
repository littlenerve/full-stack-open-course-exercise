import { useState,useEffect } from 'react'
import axios from 'axios'

function App() {
  const [searchCountry, setSearchCountry] = useState("")

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/country').then(response => setCountries(response.data))
  }, [])

  const handleSearchChange = (event) => {
    if (event.target.value.length > 0) {
      setSearchCountry(event.target.value)
    }else{
      setSearchCountry('')
    }
  }

  const Country = ({name}) => {
    if(!name || name.trim() === "") {
      return null; // 如果输入为空或只包含空格，则不显示任何内容
    }
    name = name.trim()

    let reslut = countries.filter(co => co.country_name_en.toLowerCase().includes(name.toLowerCase()));

    if(reslut.length===0){
      return  null
    }
    if(reslut.length>10){
      return(
        <div>
          <p>too many countries</p>
        </div>
      )
    }

    if(reslut.length>1){
      return (
        reslut.map(res=>(<div>
          {res.country_name_en}
          </div>))
      )
    }
    return (
      <div>
        <p>
          {reslut[0].country_id}
        </p>
        <p>
          {reslut[0].country_code}
        </p>
        <p>
          {reslut[0].country_name_en}
        </p>
      </div>
    )
  }


  return (
    <div>
      <p>find country <input value={searchCountry} onChange={handleSearchChange}/></p>
      <Country name={searchCountry}></Country>
    </div>
  )
}

export default App
