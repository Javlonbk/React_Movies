import React from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default class Main extends React.Component{

  state = {
    movies: [],
    loading: true
  }

 componentDidMount(){
    fetch(`http://www.omdbapi.com/?apikey=926bc36&s=iron`)
    .then(response => response.json())
    .then(datas => this.setState({movies: datas.Search, loading: false}))
  }

  searchMovies = (str, type = 'All') => {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?apikey=926bc36&s=${str}${type !== "All" ? `&type=${type}` : ''}`)
    .then(response => response.json())
    .then(datas => this.setState({movies: datas.Search, loading: false}))
  }

  render() {
    
    return(
      <div className="main">
          <Search searchMovie={this.searchMovies} />
           {this.state.loading ? <Loader/> : (<Movies movies={this.state.movies} />)  }
      </div>
    )

  }

}