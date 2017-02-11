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
    }

    modalToggle () {
      this.setState({ modalOpened: !this.state.modalOpened });
    }

    onAddBtnClick(event){
        addAuto(event.target.value)
     //   console.log(addAuto(event.target.value))
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
                            <button className='change_auto sedan_select' value='sedan' onClick={this.onAddBtnClick}>sedan</button>
                            <button className='change_auto disabled_select' value='disabled' onClick={this.onAddBtnClick}>disabled</button>
                            <button className='change_auto truck_select' value='truck' onClick={this.onAddBtnClick}>truck</button>
                        </div>
                    </div>
                </div>
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>
    ({
        onAddBtnClick: (type_auto) => dispatch(addAuto(type_auto))
    })

export default connect(mapDispatchToProps)(ButtonEntry);
