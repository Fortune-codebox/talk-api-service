import {mapGetters} from "vuex";
import { GET_ALL_TALKS } from "../../../store/actions";


export default {
    data() {
        return {
           loading: false,
           no: 0
        }
    },
    methods: {
        getAllTalks() {
            this.loading = true;
            this.$store.dispatch(GET_ALL_TALKS)
            .then(data => {
                    window.console.log('fetched all talks successfully')
                }
            ).catch(err => {
                window.console.log(err);
            });
        },
        // deleteEmployee(id) {
        //     alert("you are deleting this employee with id:" + id);
        //       this.$store.dispatch(DELETE_EMPLOYEE, id).then(
        //           () => {
        //               this.getAllEmployees();
        //           }
        //       )
        // },
        // editEmployee(id) {  
        //     this.$router.push({name: 'edit-employee', params:{employeeId:id, editing: true}})
        // }
    },
    computed: {
      ...mapGetters(['talks'])
    },
    mounted() {
        this.getAllTalks();
    }
}
