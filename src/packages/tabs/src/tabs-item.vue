<template>
    <div class="vi-tabs-item" :class="setClass" @click="onClick"
    :data-name="name">
        <span class="vi-tabs-item-icon-wrapper" v-if="iconName">
            <vi-icon class="vi-tabs-item-icon" :viIconName="iconName" :viIconSize="iconSize"></vi-icon>
        </span>
        <span class="vi-tabs-item-slot" ref="fontColor"><slot></slot></span>
    </div>
</template>

<script>
import Vue from 'vue'
import Icon from '../../icon/src/icon'
export default {
    name:'ViTabsItem',
    inject:['eventBus'],
    data(){
        return{
            active: false,
            fontColor: ''
        }
    },
    props:{
        name:{
            type:String|Number,
            required: true
        },
        position:{
            type: String,
            validator(value){
                return['right','top'].indexOf(value)>-1
            }
        },
        iconName:{
            type: String
        },
        iconSize:{
            type: String,
        }
    },
    
    methods:{
        onClick(){
            if(this.eventBus){
                this.eventBus.$emit('update:selected',this.name,this)
            }
        },
        setFontColor(){
            Vue.nextTick(()=>{
                if(this.active&&!this.iconName){
                    // this.$refs.font.style.background=`${this.fontColor}`
                    this.$refs.fontColor.style.color=`${this.fontColor}`
                }else if(!this.iconName){
                    this.$refs.fontColor.style.color=''
                }
            })
        }
    },
    computed:{
        setClass(){
            return{
                'vi-tabs-item-active': this.active,
                [`vi-tabs-item-${this.position}`]: this.position
            }
        }
    },
    created(){
        if(this.eventBus){
            this.eventBus.$on('update:selected',(name,vm)=>{
                if(this.name===name){
                    this.fontColor=vm.$options.parent.lineColor
                    this.active=true
                }else{
                    this.active=false
                }
                this.setFontColor()
            }) 
        }
    }
}
</script>

<style lang="scss" scoped>
    .vi-tabs-item{
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        padding: 0.5em 0.4em;
        cursor: pointer;
        .vi-tabs-item-icon-wrapper{
            .vi-tabs-item-icon{
                vertical-align: middle;
            }
        }
        &.vi-tabs-item-right{
            .vi-tabs-item-icon-wrapper{
                order: 2;
            }
            .vi-tabs-item-slot{
                order: 1;
            }
        }
        &.vi-tabs-item-top{
            flex-direction: column;
        }
    }
    

</style>
