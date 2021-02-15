import types from '../constants/listReducer';

const INITIAL_STATE = {
  form: {
    name: 'beto',
    email: 'beto@gmail.com',
    address: 'grococo',
    city: 'alonge',
    country: 'nenhuma',
    habitation: 'voar',
    job: 'cadeirante',
    jobDescription: 'trybalista',
    description: 'aquele ali da frente',
  },
};

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_ELEMENT:
      return {...state, form: {...state.form, [action.name]: action.value } };
    default:
      return state;
  }
}

export default listReducer;
