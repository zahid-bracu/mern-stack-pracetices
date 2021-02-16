import React, { Component } from 'react'
import Movie from './Movie'

export default class Movies extends Component {
    state={
        movies : [
            {id:1,name:"Iron Man",genre:"Action",year:"2008"},
            {id:2,name:"The Incredible Hulk",genre:"Action",year:"2008"},
            {id:3,name:"Iron Man 2",genre:"Action",year:"2010"},
            {id:4,name:"Thor",genre:"Action",year:"2011"},
            {id:5,name:"Captain America: The First Avenger",genre:"Action",year:"2011"},
            {id:6,name:"Marvel's The Avengers",genre:"Action",year:"2012"},
            {id:7,name:"Avengers Infinity War",genre:"Action",year:"2018"}
        ]
    }

    render() {
        return (
            <div className="container my-4">
                <h3 className="my-4 text-center">Movies to Catch</h3>
                <div className="row justify-content-center align-items-center">
                {
                    this.state.movies.map(
                        key=> <Movie data={key} />
                    )
                }
                </div>
            </div>
        )
    }
}
