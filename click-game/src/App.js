import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header'
import CharacterCard from './components/CharacterCard'
import './App.css'



class App extends Component {
    state={
        counter: 0,
        fighters : [
            {
                key: 1,
                name:"ryu"
            },
            {
                key: 2,
                name:"blanka"
            },
            {
                key: 3,
                name:"dhalsim"
            },
            {
                key: 4,
                name:"vega"
            },
            {
                key: 5,
                name:"mbison"
            },
            {
                key: 6,
                name:"balrog"
            },
            {
                key: 7,
                name:"sagat"
            },
{
                key: 8,
                name:"chunli"
            },
{
                key: 9,
                name:"zangief"
            },
{
                key: 10,
                name:"guile"
            },
{
                key: 11,
                name:"ehonda"
            },
{
                key: 12,
                name:"ken"
            },

        ]
    };

    render(){
        return(
            <wrapper>
                <Header />
                <div className={"container"}>
                    <div className={"row"}>
                        {this.state.fighters.map((fighter) => (<CharacterCard key={fighter.key} character={fighter.name}/>))}
                    </div>
                </div>
            </wrapper>
        )
    };
}

export default App;