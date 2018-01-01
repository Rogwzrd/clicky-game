import React from 'react';
import Image from './Image'
class CharacterCard extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            key: this.props.id,
            name: this.props.character,
            selected: this.props.selected
        };
    }
componentDidMount(){
    console.log(this.props.id, this.props.character, this.props.selected, this.props.counterCheck);
}
    // updateSelected=()=>{
    //     this.setState({selected: true});
    //     console.log(`my key is `, this.state.key, `\nmy name is `, this.state.name, `\nand my selected state is `, this.state.selected);
    // };

    render(){
        return(
            <div onClick={()=>this.props.counterCheck(this.props.character)} className={"col-3 mb-3"}>
                <Image imgSrc={this.props.character} />
            </div>
        )
    }

}

export default CharacterCard