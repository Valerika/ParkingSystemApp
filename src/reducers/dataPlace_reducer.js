import { ADD_AUTO, DELETE_AUTO } from '../constants/ActionTypes';

const initialState = {
    places: [
       {
          id:1,
          data_type:'disabled_place',
          state_place:'free'
       },
       {
          id:2,
          data_type:'disabled_place',
          state_place:'free'
       },
       {
          id:3,
          data_type:'disabled_place',
          state_place:'free'
       },
       {
          id:4,
          data_type:'disabled_place',
          state_place:'free'
       },
       {
          id:5,
          data_type:'disabled_place',
          state_place:'free'
       },
       {
          id:6,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:7,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:8,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:9,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:10,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:11,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:12,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:13,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:14,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:15,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:16,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:17,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:18,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:19,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:20,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:21,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:22,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:23,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:24,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:25,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:26,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:27,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:28,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:29,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:30,
          data_type:'sedan_place',
          state_place:'free'
       },
       {
          id:31,
          data_type:'truck_place',
          state_place:'free'
       },
       {
          id:32,
          data_type:'truck_place',
          state_place:'free'
       },
       {
          id:33,
          data_type:'truck_place',
          state_place:'free'
       },
       {
          id:34,
          data_type:'truck_place',
          state_place:'free'
       },
       {
          id:35,
          data_type:'truck_place',
          state_place:'free'
       },
       {
          id:36,
          data_type:'truck_place',
          state_place:'free'
       },
       {
          id:37,
          data_type:'truck_place',
          state_place:'free'
       },
       {
          id:38,
          data_type:'truck_place',
          state_place:'free'
       },
       {
          id:39,
          data_type:'truck_place',
          state_place:'free'
       },
       {
          id:40,
          data_type:'truck_place',
          state_place:'free'
       }
    ]
}

const statusBusy = (places, action)  => (
        places.map(place => {
            for (var state_place of Object.keys(place)) {
                if (state_place === 'free') {
                    return place;
                }
            }
            return Object.assign({}, place, {
                    state_place : action.payload
                });

    })
);

const statusFree = (places, action)  => (
        places.map(place => {
            for (var state_place in place) {
                if (state_place ==='sedan' || state_place ==='disabled'|| state_place ==='truck') {
                    return place;
                }
            }
            return Object.assign({}, place, {
                    state_place : action.payload
                });

    })
);


export default function dataPlaceCreate(state = initialState, action) {
    switch(action.type) {
        case ADD_AUTO :
            return {
                ...state,
                places : statusBusy(state.places, action),
            };

        case DELETE_AUTO :
            return {
                ...state,
                places : statusFree(state.places, action),
            };

        default :
            return state;
    }
}
