<template>
    <div>
         <Navbar />
        
            
            <div class="row mt-4 ml-2" >
                <div class="col-3" >
                    <Sidebar/>
                </div>
                <div class="col-8">
                    <router-view></router-view>
                </div>
            </div>
        
    </div>
</template>

<script src="./layout.js"></script>
<style lang="scss" scoped>
  @import "layout";
</style>
