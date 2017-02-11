import React, { Component } from 'react';
import { parkingActions } from '../actions/parkingActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// const { places } = this.props;

class ParkingPlace extends Component {

  render() {
    const places = this.props.places;
    let placeBlock = places.map((place, i) => {
          return <div key={i} id={place.id} className={place.data_type +' ' + place.state_place}>{place.id}</div>
        })
    return (
        <div className='parking_place'>
                {placeBlock}
        </div>
        );
  }

}

const mapStateToProps = (state) =>
    ({
        places: state.dataPlace_reducer.places
    })

const mapDispatchToProps = (dispatch) =>
    ({
        parkingActions: () => bindActionCreators(parkingActions, dispatch)
    })

export default connect(mapStateToProps, mapDispatchToProps)(ParkingPlace);
