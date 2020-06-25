import {mapGetters} from "vuex";
import Multiselect from 'vue-multiselect'
import { GET_ALL_ATTENDEES, CREATE_TALK } from "../../../store/actions";
// import {GET_EMPLOYEE, CREATE_EMPLOYEE, UPDATE_EMPLOYEE} from "../../../store/actions";
export default {
    components: {
        Multiselect
      },
    data() {
        return {
            talk: {
                host: '',
                guest_speaker: '',
                theme: '',
                start_time: '',
            },
            editing: false,
            employee_id: null,
            value: [],
            options: []
        }
    },
    methods: {
        createTalk() {
            let attendees = this.value.map(a => {
                return a.id
            })
            const payload = {
                'host' : this.talk.host,
                'guest_speaker' : this.talk.guest_speaker,
                'theme' : this.talk.theme,
                'start_time' : this.talk.start_time,
                'attendees' : attendees
            }

            window.console.log('talk', payload);
            this.$store.dispatch(CREATE_TALK, payload).then(
                () => {
                    this.$noty.info("Created successfully", {
                        killer: true,
                        timeout: 1000,
                        layout: 'topCenter'
                      })
                    this.$router.push({name: 'talk-overview'})
                }
            )
            .catch(err => {
                console.log(err);
            })
        }, 
        
        getAttendees() {
            this.$store.dispatch(GET_ALL_ATTENDEES)
            .then(data => {
                this.options = data.data
            });
        }
    },
    mounted() {
        this.getAttendees();
    },
    created() {
        
        this.employee_id = this.$route.params.employeeId;
        this.editing = this.$route.params.editing;
    }
}