import React from "react";

export default class Search extends React.Component{

    state = {
        search: 'iron',
        type: 'All'
    }
    filterMovies = (e) => {
        this.setState(() => ({type: e.target.dataset.type}), () => {this.props.searchMovie(this.state.search, this.state.type)})
    }

    render(props){
        
        return(
            <>
              <div className="search-parent">
                <input onChange={(val) => {this.setState({search: val.target.value})}} value={this.state.search} placeholder="search" type="text" className="validate" />
                <button onClick={() => {this.props.searchMovie(this.state.search, this.state.type)}} className="btn-search">Search</button>
              </div>
              <div className="categories">
                <div className="category">
                <input type="radio" id="All"
                 name="type" data-type="All" onChange={this.filterMovies} checked={this.state.type === 'All'} />
                 <label htmlFor="All">All</label>
                </div>
                <div className="category">
                <input type="radio" id="movie"
                 name="type" data-type="movie" onChange={this.filterMovies} checked={this.state.type === 'movie'} />
                 <label htmlFor="movie">Movies only</label>
                </div>
                <div className="category">
                <input type="radio" id="series"
                 name="type" data-type="series" onChange={this.filterMovies} checked={this.state.type === 'series'} />
                 <label htmlFor="series">Series only</label>
                </div>
              </div>
            </>
           
        )

    }

}