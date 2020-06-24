// import Vue from "vue";
import {
    GET_ALL_TALKS,
    GET_ALL_ATTENDEES,
    CREATE_TALK
  } from "../actions";
  
  import {SET_ALL_TALKS, SET_ALL_ATTENDEES} from "../mutations";
  import {ApiService} from "../../handler";
  
  const initialState = {
    talks: {},
    talk: {},
    attendees: []
  };
  
  
  
  export const state = {...initialState}; 
  
  const actions = {
    async [GET_ALL_TALKS](context) {
      const {data} = await ApiService.query('/talks');
      context.commit(SET_ALL_TALKS, data.data)
      return data;
    },

    async [GET_ALL_ATTENDEES](context) {
      const {data} = await ApiService.query('/attendees');
      context.commit(SET_ALL_ATTENDEES, data.data)
      return data;
    },

    async[CREATE_TALK] (context, payload) {
      await ApiService.post('/talks', payload);
    },
    // async[DELETE_EMPLOYEE] (context, payload) {
    //   await ApiService.delete('/employees/' + payload);
    // },
    
    // async[GET_EMPLOYEE] (context, payload) {
    //  const {data} = await ApiService.query('/employees/' + payload);
    //  context.commit(SET_EMPLOYEE, data.data);
    //  return data;
    // },
    // async[UPDATE_EMPLOYEE] (context, payload) {
    //   const {data} = await ApiService.put('/employees/'+payload.employee_id, payload);
    // return data;
    // }
  
  };
  
  
  export const mutations = {
    [SET_ALL_TALKS](state, talks) {
      state.talks = talks;
    },
    [SET_ALL_ATTENDEES](state, attendees) {
      state.talks = attendees;
    },
  };
  const getters = {
    talks(state) {
      return state.talks;
    },
    attendees(state) {
      return state.attendees;
    }
  };
  
  export default {
    state,
    actions,
    mutations,
    getters
  };
  