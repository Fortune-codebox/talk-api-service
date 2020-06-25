// import Vue from "vue";
import {
    GET_ALL_TALKS,
    GET_TALK_ATTENDEES,
    GET_ALL_ATTENDEES,
    CREATE_TALK,
    CREATE_ATTENDEE,
    DELETE_TALK
  } from "../actions";
  
  import {SET_ALL_TALKS, SET_ALL_ATTENDEES, SET_TALK_ATTENDEES} from "../mutations";
  import {ApiService} from "../../handler";
  
  const initialState = {
    talks: {},
    talk: {},
    attendees: [],
    talkAttendees: []
  };
  
  
  
  export const state = {...initialState}; 
  
  const actions = {
    async [GET_ALL_TALKS](context) {
      const {data} = await ApiService.query('/talks');
      context.commit(SET_ALL_TALKS, data.data)
      return data;
    },

    async [GET_TALK_ATTENDEES](context, payload) {
      const {data} = await ApiService.query('/talk/attendees/' + payload);
      context.commit(SET_ALL_ATTENDEES, data.data)
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

    async[CREATE_ATTENDEE] (context, payload) {
      await ApiService.post('/attendee', payload);
    },

    async[DELETE_TALK] (context, payload) {
      await ApiService.delete('/talks/' + payload);
    },
  
  };
  
  
  export const mutations = {
    [SET_ALL_TALKS](state, talks) {
      state.talks = talks;
    },
    [SET_ALL_ATTENDEES](state, attendees) {
      state.attendees = attendees;
    },
    [SET_TALK_ATTENDEES](state, talkattendees) {
      state.talkattendees = talkattendees;
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
  