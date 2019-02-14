<template>
    <div 
    class="vi-input-wrapper" 
    :class="wrapperClass" 
    @mouseover="handleShowIcon($event)" 
    @mouseleave="handleHideIcon($event)">
        <template>
            <span 
            class="vi-input-icon-wrapper" 
            :class="iconWrapperClass" 
            v-if="clearable&&!disabled&&!readonly">
                <vi-icon 
                class="vi-input-icon" 
                v-if="suffixIcon" 
                :viIconName="suffixIcon" 
                :viIconSize="iconSize"
                @click="clearValue"
                >
                </vi-icon>
            </span>
            <span class="vi-input-icon-wrapper"  v-else>
                <vi-icon 
                class="vi-input-icon" 
                v-if="prefixIcon||suffixIcon" 
                :viIconName="prefixIcon||suffixIcon" 
                :viIconSize="iconSize"
                @click="clickIcon"
                >
                </vi-icon>
            </span>
            <input 
            class="vi-input" 
            :class="inputClass"
            :disabled="disabled"
            :readonly="readonly"
            :placeholder="placeholder" 
            :value="currentValue"
            @input="handleInput($event)"
            @change="changeInput($event)"
            />
        </template>
    </div>
</template>

<script>
export default {
    name: 'viInput',
    data(){
        return{
            currentValue: this.value,
            hideIcon: true,
            showIcon: false
        }
    },
    props:{
        disabled:{
            type: Boolean
        },
        placeholder:{
            type: String
        },
        value:{
        },
        clearable:{
            type: Boolean,
        },
        prefixIcon:{
            type: String
        },
        suffixIcon:{
            type: String
        },
        iconSize:{
            type:String,
            default:'small'
        },
        readonly:{
            type: Boolean
        }
    },
    methods:{
        handleInput(event){       
            let value=event.target.value
            this.$emit('input', value); 
            this.setCurrentValue(value) 
            this.handleShowIcon()          
        },
        changeInput(event){
            let value=event.target.value
            this.$emit('change', event);
        },
        setCurrentValue(value){
            this.currentValue=value
        },
        handleHideIcon(value){
            if(this.clearable){
                this.hideIcon=true
                this.showIcon=false
            }
        },
        handleShowIcon(value){
            if(this.clearable&&this.currentValue){
                this.hideIcon=false
                this.showIcon=true
            }
        },
        clearValue(){
            this.setCurrentValue('')
            this.handleHideIcon()
        },
        clickIcon(event){
            this.$emit('click',event)
        }
    },
    computed:{
        wrapperClass(){
            return{
                'vi-input-prefixicon':this.prefixIcon,
                'vi-input-suffixicon':this.suffixIcon
            }
            
        },
        iconWrapperClass(){
            return{
                'vi-input-hide':this.suffixIcon&&this.hideIcon,
                'vi-input-show':this.suffixIcon&&this.showIcon
            }
        },
        inputClass(){
            return{
                'vi-input-disabled':this.disabled
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .vi-input-wrapper{
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        border: 1px solid#e1e1e1;
        border-radius: 3px;
        font-family:  Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
        .vi-input-icon-wrapper{
            &.vi-input-hide{
                visibility:hidden;
            }
            &.vi-input-show{
                display:inline;
            }
            .vi-input-icon{
                vertical-align: middle;
                width: 1.2em;
                height: 1.2em;
            }
        }
        .vi-input{
            border: 1px solid transparent;  //自定义边框
            outline: none;  
            padding: 0.7em 0.1em;
            cursor: pointer;
            &.vi-input-disabled{
                cursor: not-allowed;
            }
        }
        &.vi-input-prefixicon{
            > .vi-input-icon-wrapper{
                order: 1;
            }
            > .vi-input{
                order: 2;
            }
        }
        &.vi-input-suffixicon{
            > .vi-input-icon-wrapper{
                order: 2;
            }
            > .vi-input{
                order: 1;
            }
        }
    }
    
</style>
