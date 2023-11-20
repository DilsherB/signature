import { useState } from 'react'
import Title from '../components/Title'

const signature = () => {
  const inputStyle = {
    border: 'none',
    borderBottom: '1px solid #000',
    outline: 'none',
    fontSize: '1.5rem',
    margin: '1rem 0',
    padding: '0.5rem 1rem'
  }
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleDate = (e) => {
    setDate(e.target.value)
  }
  return (
    <div>
      <Title classes={'title'} text={!name ? "Name" : name}/>
      <Title classes={'subtitle'} text={date ? date : "DoB"}/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, possimus consectetur distinctio doloremque, facilis ex quia quidem consequatur quibusdam eius harum quasi vel reiciendis earum maxime, suscipit magnam eum iusto.</p>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <input type="text" placeholder='Enter your name' value={name} onChange={handleName} style={inputStyle}/>
        <div>
          <span style={{fontSize: '2rem', marginRight: '1rem'}}>DoB: </span>
          <input type="date" value={date} onChange={handleDate} style={inputStyle}/>
        </div>
      </div>
    </div>
  )
}

export default signature