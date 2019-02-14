<template>
    <div class="vi-tabs-content" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'ViTabsContent',
    inject:['eventBus'],
    data(){
        return{
            active: false
        }
    },
    props:{
        name:{
            type:String|Number,
            required: true
        },
    },
    created(){
        this.eventBus.$on('update:selected',(name)=>{
            if(this.name===name){
                this.active=true
            }else{
                this.active=false
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .vi-tabs-content{
        padding: 0.5em 0;        
    }
</style>
