import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeAction';

function mapStateToProps(state) {
    return {
        noOfCakes: state.cake.noOfCakes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

class CakeContainer extends Component {
    
    render() {
        console.log("Properties",this.props)
        return (
            <div>
                <h2>Number of cakes - {this.props.noOfCakes} </h2>
                <button onClick={this.props.buyCake}>Buy Cake</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);