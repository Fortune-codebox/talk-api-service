import {mapGetters} from "vuex";
import Multiselect from 'vue-multiselect'
import { CREATE_ATTENDEE } from "../../../store/actions";
// import {GET_EMPLOYEE, CREATE_EMPLOYEE, UPDATE_EMPLOYEE} from "../../../store/actions";
export default {
    components: {
        Multiselect
      },
    data() {
        return {
            attendee: {
                first_name: '',
                last_name: '',
                address: '',
                phone: '',
                job_title: '',
                reason_for_attending: ''
            },
            editing: false,
            employee_id: null,
            value: [],
            options: []
        }
    },
    methods: {
        createAttendee() {
            const payload = {
                'first_name' : this.attendee.first_name,
                'last_name' : this.attendee.last_name,
                'address' : this.attendee.address,
                'phone' : this.attendee.phone,
                'job_title' : this.attendee.job_title,
                'reason_for_attending' : this.attendee.reason_for_attending
            }

            window.console.log('talk', payload);
            this.$store.dispatch(CREATE_ATTENDEE, payload).then(
                () => {
                    this.$router.push({name: 'add-talk'})
                }
            )
            .catch(err => {
                console.log(err);
            })
        }
    },
    
    
}