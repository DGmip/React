import React from 'react';
import './App.css';
import FilterableDataTable from './FilterableDataTable'
import SlideShow from './SlideShow'

// routing
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const data = [ // test data for category search
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

// pages
const Home = props => {
  return (
    <div>
      <h2>Home</h2>
      <p>
        Welcome home
      </p>
    </div>
  )
}

const Search = props => {
  return (
    <div>
      <h2>Search</h2>
      <FilterableDataTable categories={data}/>
    </div>
  )
}

const Slider = props => {
  return (
    <div>
      <h2>Slider</h2>
      <SlideShow>
        <img src='https://placekitten.com/g/200/300' alt='cat'></img>
        <img src='https://placekitten.com/g/200/301' alt='cat'></img>
        <img src='https://placekitten.com/g/200/302' alt='cat'></img>
        <img src='https://placekitten.com/g/200/303' alt='cat'></img>
        <img src='https://placekitten.com/g/200/304' alt='cat'></img>
        <img src='https://placekitten.com/g/200/305' alt='cat'></img>
      </SlideShow>
    </div>
  )
}

const Routing = props => {
  return (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/slider">Slider</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/slider" component={Slider}/>
      <Route path="/search" component={Search}/>
    </div>
  </Router>
  )
}

export default Routing;

