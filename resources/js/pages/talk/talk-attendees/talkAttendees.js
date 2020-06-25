import {mapGetters} from "vuex";
import { GET_TALK_ATTENDEES } from "../../../store/actions";


export default {
    data() {
        return {
            talkId: null,
            attendees: {},
            talk: {}
        }
    },
    methods: {
       getTalkAttendees() {
           this.$store.dispatch(GET_TALK_ATTENDEES, this.talkId)
           .then(data => {
               this.attendees = data.data
           })
       }
    },
    computed: {
       ...mapGetters(['talks'])
       
    },
    mounted() {
        this.getTalkAttendees();
       
    },
    created() {
        this.talkId = this.$route.params.talkId;
        this.talk = this.talks.find(a => {
            return a.id === this.talkId   
        });
        console.log(this.talk);
    }

    }