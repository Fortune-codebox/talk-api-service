import Vue from 'vue'
import Router from 'vue-router'
import TalkOverview from '../pages/talk/talk-overview/TalkOverview.vue'
import EditTalk from '../pages/talk/edit-talk/EditTalk.vue';
import AddTalk from '../pages/talk/edit-talk/EditTalk.vue';
import AddAttendee from '../pages/talk/create-attendee/CreateAttendee.vue';
import TalkAttendees from '../pages/talk/talk-attendees/TalkAttendees.vue';

Vue.use(Router);
let router = new Router({
    mode: 'history',
    routes: [
       {
        path: '/',
        component: () => import('../pages/layout/Layout.vue'),
        redirect: {
            name: 'talk-overview'
        },
        children: [
            {
                path: '/talk-overview',
                name: 'talk-overview',
                component: TalkOverview
            },

            {
                path: '/edit-talk/:talkId',
                name: 'edit-talk',
                component: EditTalk
            },
            {
                path: '/add-talk',
                name: 'add-talk',
                component: AddTalk
            },
            {
                path: '/add-attendee',
                name: 'add-attendee',
                component: AddAttendee
            },
            {
                path: '/talk-attendees/:talkId',
                name: 'talk-attendees',
                component: TalkAttendees,
            }
        ]

       }]
});

export default router;