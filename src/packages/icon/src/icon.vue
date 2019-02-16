<template>
    <svg class="vi-icon" :class="`vi-icon-${viIconSize}`" @click="iconClick">
        <use :xlink:href="`#vi-${viIconName}`"></use>
    </svg> 
</template>

<script>
export default {
    name:'ViIcon',
    props:{
        viIconName:{
            type: String
        },
        viIconSize:{
            type: String,
            validator(value){
                return[
                    'small',
                    'medium',
                    'large'
                ].indexOf(value)>-1
            }
        }
    },
    methods:{
        iconClick(event){
            this.$emit('click',event)
        }
    }
    // mounted(){
    //     console.log(this.$props.name)
    // }
}
</script>

<style lang="scss" scoped>
    .vi-icon{
        &.vi-icon-small{
            width: 1.8em;
            height: 1.8em;
        }
        &.vi-icon-medium{
            width: 2.8em;
            height: 2.8em;
        }
        &.vi-icon-large{
            width: 3.8em;
            height: 3.8em;
        }
    }
</style>
