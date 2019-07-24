import React, {Component} from 'react';
import './App.css';
import MovieList from './MovieList';

const TheReef={ id:'1',title:'The Reef', year:'2011', image:'https://images-na.ssl-images-amazon.com/images/I/51x01nvJY2L._UR150,200_FMJPG_.jpg', rating:5}
const Sleepless={id:'2',title:'Sleepless',year:'2017',image:'https://images-na.ssl-images-amazon.com/images/I/A1PrAPhtFML._UR150,200_FMJPG_.jpg',rating:4}
const Jigsaw={id:'3',title:'Jigsaw', year:'2017',image:'https://images-na.ssl-images-amazon.com/images/I/81r9HcFliEL._UR150,200_FMJPG_.jpg',rating:4}
const StanHelsing={id:'4',title:'StanHelsing',year:'2009',image:'https://images-na.ssl-images-amazon.com/images/I/81veVZE4REL._UR150,200_FMJPG_.jpg',rating:4}
const Braven={id:'5',title:'Braven',year:'2018',image:'https://images-na.ssl-images-amazon.com/images/I/A1s4pyputLL._UR150,200_FMJPG_.jpg',rating:3}
const Jackass3={id:'6',title:'Jackass 3',year:'2010', image:'https://images-na.ssl-images-amazon.com/images/I/81mC5O5LzwL._UR150,200_FMJPG_.jpg',rating:3}
const moviesToDisplay=[TheReef, Sleepless,Jigsaw,StanHelsing,Braven,Jackass3]
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoading: true
    }
  }

  componentDidMount(){
    setTimeout(()=>this.setState({isLoading: false}), 7000)
    }
  render() {
    return (
      <div>
        <MovieList movies={moviesToDisplay} loading={this.state.isLoading}/>
      </div>
    )
  }
}

export default App;
