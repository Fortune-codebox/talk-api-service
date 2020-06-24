<template>
    <aside>
        <h3> <b>Talks</b> </h3>
         <div class="nav-side">
             <!-- list-group-flush -->
            <b-navbar-nav id="sidebar-wrapper" class="list-group">
             <b-nav-item :to="{name: 'talk-overview'}" class="links">
                <i class="fa fa-history"></i>
                <span class="px-3">
                     <!-- <img src="@/assets/first.png" style="width: 3em;" alt="">  -->
                     Talks
                     </span>
            </b-nav-item>

            <span class="mt-2 pl-4 top-links"> <small>PROJECT</small> </span>

            <b-nav-item :to="{name: 'add-attendee'}" class="links pl-4">
                <i class="fa fa-talk"></i>
                <span class="px-3">Create attendee</span>
            </b-nav-item>
            
            <b-nav-item :to="{name: 'add-talk'}" class="links pl-4">
                <i class="fa fa-talk"></i>
                <span class="px-3">Create talk</span>
            </b-nav-item>


            


            </b-navbar-nav>
        </div>
    </aside>
</template>

<script src="./sidebar.js">
</script>

<style lang="scss">
 @import './sidebar'
</style>