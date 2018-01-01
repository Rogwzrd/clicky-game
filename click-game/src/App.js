import React, { Component } from 'react';
import Header from './components/Header'
import CharacterCard from './components/CharacterCard'
import './App.css'



class App extends Component {
    state= {
        counter: 0,
        fighters:[
            {
                key: 1,
                name: "ryu",
                selected: false
            },
            {
                key: 2,
                name: "blanka",
                selected: false
            }

            ,
            {
                key: 3,
                name: "dhalsim",
                selected: false
            }
            ,
            {
                key: 4,
                name: "vega",
                selected: false
            }
            ,
            {
                key: 5,
                name: "mbison",
                selected: false
            }
            ,
            {
                key: 6,
                name: "balrog",
                selected: false
            }
            ,
            {
                key: 7,
                name:"sagat",
                selected: false
            }
            ,
            {
                key: 8,
                name: "chunli",
                selected: false
            },
            {

                key: 9,
                name: "zangief",
                selected: false
            },
            {
                key: 10,
                name: "guile",
                selected: false
            },
            {
                key: 11,
                name: "ehonda",
                selected: false
            },
            {
                key: 12,
                name: "ken",
                selected: false
            }

        ]
    };

// counterCheck=(name,selectedState)=>{
//     this.setState({selected: true});
//     console.log(`my key is `, this.state.key, `\nmy name is `, this.state.name, `\nand my selected state is `, this.state.selected);
//     if (name === false){
//         this.setState({counter: this.state.counter + 1});
//     } else{
//         console.log(`you have already chosen this character`)
//     }
// };

    counterCheck=(name,selectedState)=>{
        const fightersArray = this.state.fighters;

        fightersArray.forEach((fighter)=>{
            if (fighter.name === name && fighter.selected === false){
                fighter.selected=true;
                this.setState({ fighters: fightersArray, counter: this.state.counter + 1 })
            } else if (fighter.name === name && fighter.selected === true){
                fighter.selected= false;
                this.setState({ fighters: fightersArray, counter: 0, })


            }
        });
    };

    render(){
        return(
            <wrapper>
                <Header score={this.state.counter} />
                <div className={"container"}>
                    <div className={"row"}>
                        {this.state.fighters.map((fighter) => <CharacterCard  key={fighter.key} id ={fighter.key} character={fighter.name} selected={fighter.selected} counterCheck={this.counterCheck}/>)}
                    </div>
                </div>
            </wrapper>
        )
    };
}

export default App;