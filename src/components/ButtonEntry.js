import React, { Component } from 'react';
import { addAuto } from '../actions/parkingActions';
import { connect } from 'react-redux';

class ButtonEntry extends Component {
    constructor (props) {
        super(props);
        this.state = {
          modalOpened: false
        };
        this.modalToggle = this.modalToggle.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    modalToggle () {
      this.setState({ modalOpened: !this.state.modalOpened });
    }

    handleAddClick(event){
        this.props.onAddBtnClick(event)
    }
    render() {
        const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container';
        return (
            <div onClick={this.modalToggle}>
                <button className='button_add'></button>
                <div className={containerClass}>
                    <div className='modal-body select_auto'>
                        <h3>Choose type auto:</h3>
                        <div className='select_auto_container'>
                            <button className='change_auto sedan_select' value='sedan' onClick={this.handleAddClick}>sedan</button>
                            <button className='change_auto disabled_select' value='disabled' onClick={this.handleAddClick}>disabled</button>
                            <button className='change_auto truck_select' value='truck' onClick={this.handleAddClick}>truck</button>
                        </div>
                    </div>
                </div>
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>
    ({
        onAddBtnClick: (event) => dispatch(addAuto(event.target.value))
    })

export default connect(null, mapDispatchToProps)(ButtonEntry);
