<template>
    <div class="vi-container" :class="flexClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'ViContainer',
    data(){
        return{
            hasAside:false
        }
    },
    computed:{
        flexClass(){
            return{
                'vi-container-has-side':this.hasAside
            }
        }
    },
    mounted(){
        // console.log(this.$children[0].$options.name)
        this.$children.some((vm)=>{
            if(vm.$options.name==='ViAside'){
                this.hasAside=true
            }
            return vm.$options.name==='ViAside'
        })
    }
}
</script>

<style lang="scss" scoped>
    .vi-container{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        &.vi-container-has-side{
            flex-direction: row;
        }
    }
</style>
