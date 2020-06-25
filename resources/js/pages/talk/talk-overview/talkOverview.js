    import {mapGetters} from "vuex";
    import { GET_ALL_TALKS, DELETE_TALK } from "../../../store/actions";


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
        deleteTalk(id, theme) {
            alert("you are deleting " + theme);
              this.$store.dispatch(DELETE_TALK, id).then(
                  () => {
                    this.$noty.info("Deleted " + theme + ' successfully', {
                        killer: true,
                        timeout: 4000,
                        layout: 'topCenter'
                      })
                      this.getAllTalks();
                  }
              )
        },
        viewTalkAttendees(id) {
            this.$router.push({name: 'talk-attendees', params: {talkId: id}})
        }
    },
    computed: {
      ...mapGetters(['talks'])
    },
    mounted() {
        this.getAllTalks();
    }
}
