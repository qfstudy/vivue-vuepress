<template>
    <div class="vi-row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'ViRow',
    props:{
        gutter:{
            type:[Number]
        },
        justify:{
            type:[String],
            validator(value){
                return ['end','center','around','between'].indexOf(value)>-1
            }
        }
    },
    computed:{
        rowStyle(){
            let{gutter}=this
            return {
                marginLeft:-gutter/2+'px',
                marginRight:-gutter/2+'px'
            }
        },
        rowClass(){
            let{justify}=this
            return[justify&&`vi-row-${justify}`]
        }
    },
    mounted(){
        this.$children.forEach((vm)=>{
            vm.gutter=this.gutter
        })
    }
}
</script>

<style lang="scss" scoped>
    .vi-row{
        display: flex;
        &.vi-row-end{
            justify-content: flex-end;
        } 
        &.vi-row-center{
            justify-content: center;
        } 
        &.vi-row-around{
            justify-content: space-around;
        } 
        &.vi-row-between{
            justify-content: space-between;
        }  
    }
</style>
