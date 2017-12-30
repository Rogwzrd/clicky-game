import React from 'react';
import Image from './Image'
class CharacterCard extends React.Component {
constructor(){
    super();
    this.state ={
        selected: false
    };
}

    updateSelected=()=>{
        this.setState({selected: true});
        console.log(this.state.selected)
    };


    render(){
        return(
            <div className={"col-3 mb-3"}>
                <Image imgSrc={this.props.character} onClick={this.updateSelected} />
            </div>
        )
    }

}

export default CharacterCard