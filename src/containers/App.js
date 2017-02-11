import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BlockParkingPlace from '../components/BlockParkingPlace';
import InfoBoard from '../components/InfoBoard';
import ButtonEntry from '../components/ButtonEntry';
import ButtonExit from '../components/ButtonExit';
import * as parkingActions from '../actions/parkingActions';




class App extends Component{
    render () {
      const { places } = this.props;

      return (
        <div className='container'>
              <div className='columnInfo'>
                  <ButtonEntry />
                  <InfoBoard places={places} />
                  <ButtonExit />
              </div>
              <div className='columnMain'>
                  <BlockParkingPlace places={places} />
              </div>
          </div>
      )
    }
}

const mapDispatchToProps = (dispatch) =>
    ({
        parkingActions: () => bindActionCreators(parkingActions, dispatch)
    })

export default connect(mapDispatchToProps)(App);
