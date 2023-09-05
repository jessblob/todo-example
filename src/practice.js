/* <div>
<h1> My holiday API </h1>
<h2> {this.state.name}</h2>
<h2> {this.state.date_day} </h2>
<button onClick={() => this.setState({date_day: this.state.date_day + 1})}> + </button>
</div> } */

/* class App extends React.Component {
  state = {
        "name": "Christmas Day",
        "name_local": "",
        "language": "",
        "description": "",
        "country": "US",
        "location": "United States",
        "type": "National",
        "date": "12/25/2020",
        "date_year": "2020",
        "date_month": "12",
        "date_day": "25",
        "week_day": "Friday"
  }
  componentDidMount() {
    console.log('component did mount')
    this.setState({date_day: this.state.date_day + 1})
  } 
  render(){
    return(
    <div>
      <h1> My holiday API </h1>
      <h2> {this.state.name}</h2>
      <h2> {this.state.date_day} </h2>
      <button onClick={() => this.setState({date_day: this.state.date_day + 1})}> + </button>
    </div>
    )
  }
} */

/* 
need try then do catch error in handler
PRIMARY KEY: 4ddf8b6373f945d5a496871f5bb9b7fb
*/

/*
import {useState, useEffect} from "react"

const App = () => {
  const [meal, setMeal] = useState('')

  const handler = async () => {
    let response = await fetch("www.themealdb.com/api/json/v1/1/random.php")
    let data =  await response.json()
    setMeal(data[0])
    console.log(meal)

  }
  useEffect(() => {
    handler()}, [])
  
  return (
    <div>
      <h1> Random Meals </h1>
      <button onClick = {handler}> click</button>
    <div>
      <h2>{meal.strMeal}</h2>
      <h2>{meal.strCategory}</h2>
      <h2>{meal.strArea}</h2>
      <h3>{meal.strInstructions}</h3>
    </div>
      
    </div>
  )
}

export default App
*/