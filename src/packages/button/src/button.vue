<template>
    <button @click="handleClick" class="vi-button" :disabled=disabled :class=buttonClass>
        <span class="vi-button-wrapper" :class=wrapperClass>
            <span v-if="iconName" class="vi-button-icon">
                <vi-icon :viIconName="iconName" :viIconSize="iconSize"></vi-icon>
            </span>
            <span class="vi-button-content">
                <slot></slot>
            </span>
        </span>
    </button>
</template>

<script>
import Icon from '../../icon/src/icon'
export default {
    name: 'ViButton',
    components:{
        'vi-icon':Icon
    },
    props:{
        type:{
            type: String,
            default:'default',
            validator (value) {
                return [
                    'default',
                    'primary',
                    'success',
                    'info',
                    'warning',
                    'danger'
                ].indexOf(value)>-1;
            }
        },
        iconName:{
            type:String,
        },
        iconSize:{
            type:String,
            default:'small'
        },
        iconPosition:{
            type: String,
            default: 'left',
            validator(value){
                return[
                    'left',
                    'right'
                ].indexOf(value)>-1
            }
        },
        circle:{
            type: String
        },
        disabled:{
            type: String,
        }
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event);
        }
    },
    computed:{
        buttonClass(){
            return {
                [`vi-button-${this.type}`]:this.type,
                [`vi-button-${this.disabled}`]:this.disabled,
                [`vi-button-${this.circle}`]:this.circle
            }
        },
        wrapperClass(){
            return {
                [`vi-button-${this.iconPosition}`]:this.iconName&&this.iconPosition
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .vi-button{
        border: 1px solid transparent;  //自定义边框
        outline: none;  
        font-family:  Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
        border-radius: 3px;
        cursor: pointer;
        border: 1px solid #e1e1e1;
        white-space: nowrap;
        
        .vi-button-wrapper{
            display: inline-flex;
            align-items: center;
            vertical-align: middle;
            .vi-button-content{
                padding: 0.5em 0.8em; 
            }
            .vi-button-icon>*{
                vertical-align: middle;
            }
            &.vi-button-right{
                .vi-button-icon{
                    order: 2;
                }
                .vi-button-content{
                    order: 1;
                    padding-right: 0.2em;
                    padding-left: 0.2em;
                }
            }
            &.vi-button-left{
                .vi-button-icon{
                    order: 1;
                }
                .vi-button-content{
                    order: 2;
                    padding-right: 0.2em;
                    padding-left: 0.2em;
                }
            }
            
        }
        
        &.vi-button-primary{
            background-color: #2d8cf0;
            border-color: #2d8cf0;
            color: #fff;
        }
        &.vi-button-success{
            background-color: #67c23a;
            border-color: #67c23a;
            color: #fff;
        }
        &.vi-button-info{
            background-color: #909399;
            border-color: #909399;
            color: #fff;
        }
        &.vi-button-warning{
            color: #fff;
            background-color: #e6a23c;
            border-color: #e6a23c;
        }
        &.vi-button-danger{
            color: #fff;
            background-color: #f56c6c;
            border-color: #f56c6c;
        }
        &:hover{
            opacity: 0.8;
        }
        &.vi-button-circle{
            .vi-button-wrapper{
                padding: 0; 
                .vi-button-content{
                    padding: 0;
                }
            }
            display: inline-block;
            border-radius: 50%;
        }
        &.vi-button-disabled{
            cursor: not-allowed;
        }
    }
</style>
