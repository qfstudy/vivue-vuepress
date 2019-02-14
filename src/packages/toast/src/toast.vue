<template>
    <div class="vi-toast-wrapper">
        <div class="vi-toast" :class="positionClass" ref="toast">
            <div class="vi-toast-message-wrapper">
                <span class="vi-toast-message">{{message}}</span>
                <div class="vi-toast-line" v-if="!this.autoClose" ref="line"></div>
                <span v-if="icon&&!closeButton.text" class="vi-toast-icon-wrapper">
                    <vi-icon class="vi-toast-icon" :viIconName="icon.name" :viIconSize="icon.size" @click="closeToast"></vi-icon>
                </span>
                <span class="vi-toast-close-button" v-if="closeButton.text&&!icon" @click="closeToast">{{closeButton.text}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from '../../icon/src/icon'
export default {
    name:'ViToast',
    props:{
        message:{
            type: String
        },
        icon:{
            type: Object
        },
        closeButton:{
            type:Object,
            default(){
                return{
                    text:'',
                    callback: undefined
                }
            }
        },
        autoClose:{
            type: Boolean,
            default: true
        },
        duration:{
            type: Number,
            default: 1,
            validator(value){
                if(value<0){
                    this.autoClose=false                  
                }
                return value>=0
            }
        },
        position:{
            type: String,
            default: 'top',
            validator(value){
                return ['top','middle','bottom'].indexOf(value)>-1
            }
        }
    },
    methods:{
        closeToast(){
            if(typeof this.closeButton.callback==='function'){
                this.closeButton.callback()
            }
            this.$el.remove()
            this.$emit('close')
            this.$destroy()
        },
        execAutoClose(){
            if(this.autoClose){
                setTimeout(()=>{
                    this.closeToast()                   
                }, this.duration*1000)
            }
        },
        lineStyle(){
            if(!this.autoClose) {
                this.$nextTick(()=>{
                    this.$refs.line.style.height=`${this.$refs.toast.getBoundingClientRect().height}px`
                })
            }
        },
    },
    computed:{
        positionClass(){
            return {[`vi-toast-${this.position}`]:this.position}
        }
    },
    mounted () {
        this.lineStyle()
        this.execAutoClose()
    }
}
</script>

<style lang="scss" scoped>
    .vi-toast-wrapper{
        display: inline-block;
        .vi-toast{
            font-family: Arial,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,sans-serif;
            display: inline-block;
            color: #fff;
            font-size: 14px;
            .vi-toast-message-wrapper{
                display: inline-flex;
                align-items: center;
                vertical-align: middle;
                background: #000;
                opacity: 0.6;
                border-radius: 3px;
                .vi-toast-icon-wrapper{                   
                    padding: 0.2em 0.4em;
                    .vi-toast-icon{
                        vertical-align: middle;
                        fill: #fff;                       
                    }
                }
                .vi-toast-message{
                    padding: 0.42em 0.6em;
                }
                .vi-toast-line{
                    display: inline-block;
                    width: 1.7px;
                    background: #fff;
                }
                .vi-toast-close-button{
                    padding: 0.42em 0.3em;
                }
            }
        }
        .vi-toast.vi-toast-top{
            position: fixed;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        .vi-toast.vi-toast-middle{
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translateX(-50%);
        }
        .vi-toast.vi-toast-bottom{
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>
