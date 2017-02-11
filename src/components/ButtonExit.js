import React, { Component } from 'react';
import { deleteAuto } from '../actions/parkingActions';
import { connect } from 'react-redux';

class ButtonExit extends Component {
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

onDeleteBtnClick(){
    deleteAuto('free')
//     console.log(deleteAuto('free'))
}
    render() {
        const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container';
        return (
            <div onClick={this.modalToggle}>
                <button className='button_delete'></button>
                <div className={containerClass}>
                    <div className='modal-body select_auto'>
                        <h3>Choose type auto:</h3>
                        <div className='select_auto_container'>
                            <button className='change_auto sedan_select' value='sedan' onClick={this.onDeleteBtnClick}>Sedan</button>
                            <button className='change_auto disabled_select' value='disabled' onClick={this.onDeleteBtnClick}>Disabled</button>
                            <button className='change_auto truck_select' value='truck' onClick={this.onDeleteBtnClick}>Truck</button>
                        </div>
                     </div>
                 </div>
            </div>
        );
     }
}


const mapDispatchToProps = (dispatch) =>
    ({
        onDeleteBtnClick: (type_auto) => dispatch(deleteAuto(type_auto))
    })

export default connect(mapDispatchToProps)(ButtonExit);
