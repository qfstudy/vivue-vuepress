<template>
    <div ref="bar" class="vi-tabs-bar-wrapper">
        <div class="vi-tabs-bar" :class="setClass">
            <slot></slot>
        </div>
        <div ref="line" class="vi-tabs-bar-line"></div>
    </div>
</template>

<script>
export default {
    name:"ViTabsBar",
    inject:['eventBus'],
    props:{
        color:{
            type: String
        },
        space:{
            type: String,
            default: 'start',
            validator(value){
                return['start','end','between','around','center'].indexOf(value)>-1
            }
        },
        lineColor:{
            type: String
        }
    },
    methods:{
        setBackground(){
            if(this.color){
                this.$refs.bar.style.background=`${this.color}`
            }
        }
    },
    computed:{
        setClass(){
            return {[`vi-tabs-bar-${this.space}`]:this.space}
        }
    },
    mounted(){
        this.setBackground()
        this.eventBus.$on("update:selected",(name,vm)=>{
            let{left,width,height,right}=vm.$el.getBoundingClientRect()
            if(this.lineColor){
                this.$refs.line.style.width=width+'px'
                this.$refs.line.style.height=2+'px'
                this.$refs.line.style.marginLeft=left+'px'
                this.$refs.line.style.background=`${this.lineColor}`
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .vi-tabs-bar-wrapper{
        .vi-tabs-bar{
            display: flex;    
            &.vi-tabs-bar-end{
                justify-content: flex-end;
            }
            &.vi-tabs-bar-between{
                justify-content: space-between;
            }
            &.vi-tabs-bar-around{
                justify-content: space-around;
            }
            &.vi-tabs-bar-center{
                justify-content: center;
            }
        }
    }
</style>
