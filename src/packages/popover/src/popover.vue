<template>
    <div class="vi-popover" ref="popover">
        <div 
        ref="contentWrapper" 
        class="vi-popover-content" 
        v-if="visible"
        :class="{[`vi-position-${position}`]:true}">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" class="vi-popover-button">
            <slot></slot>
        </span>
    </div> 
</template>

<script>
export default {
    name: 'ViPopover',
    data(){
        return {
            visible:false,
        }
    },
    props:{
        position:{
            type: String,
            default:'top',
            validator(value){
                return['top','bottom','left','right'].indexOf(value)>=0
            }
        },
        trigger:{
            type: String,
            default: 'click',
            validator(value){
                return['click','hover'].indexOf(value)>=0
            }
        }
    },
    
    methods:{
        positionContent(){            
            const {contentWrapper,triggerWrapper}=this.$refs
            document.body.appendChild(contentWrapper)
            const{width,height,left,top}=triggerWrapper.getBoundingClientRect()
            const {height: height2}=contentWrapper.getBoundingClientRect()
            let positionValue={
                top:{
                    top: top+window.scrollY,
                    left: left+window.scrollX
                },
                bottom:{
                    top: top+height+window.scrollY,
                    left: left+window.scrollX
                },
                left:{
                    top: top + window.scrollY + (height - height2) / 2,
                    left: left+window.scrollX
                },
                right:{
                    top: top + window.scrollY + (height - height2) / 2 ,
                    left: left+window.scrollX+width
                }
            }
            contentWrapper.style.left=positionValue[this.position].left +'px'
            contentWrapper.style.top=positionValue[this.position].top +'px'                               
        },
        onClickDocument(e){
            if (this.$refs.popover &&
                (this.$refs.popover===e.target || this.$refs.popover.contains(e.target))
            ){return}
            if (this.$refs.contentWrapper &&
                (this.$refs.contentWrapper===e.target || this.$refs.contentWrapper.contains(e.target))
            ){return}
            this.close()  
        },
        listenToDocument(){
            document.addEventListener('click',this.onClickDocument)
        },
        open(){
            this.visible=true
            this.$nextTick(()=>{
                this.positionContent()
                this.listenToDocument()
            })     
        },
        close(){
            this.visible=false
            document.removeEventListener('click',this.onClickDocument)                            
        },
        onClick(event){
            if(this.$refs.triggerWrapper.contains(event.target)){
                if(this.visible===true){
                    this.close()
                }else{
                    this.open()  
                }
            }
        }
    },
    mounted(){
        if(this.trigger==='click'){
            this.$refs.popover.addEventListener('click',this.onClick)
        }else{
            this.$refs.popover.addEventListener('mouseenter',this.open)
            this.$refs.popover.addEventListener('mouseleave',this.close)
        }
    },
    destroyed(){
         if(this.trigger==='click'){
            this.$refs.popover.removeEventListener('click',this.onClick)
        }else{
            this.$refs.popover.removeEventListener('mouseenter',this.open)
            this.$refs.popover.removeEventListener('mouseleave',this.close)
        }
    },
}
</script>

<style lang="scss" scoped>
    $boder-color: #333;
    .vi-popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        .vi-popover-button{
            display: inline-block;
        }
    }
    
    .vi-popover-content{
        position: absolute;
        border: 1px solid $boder-color;
        border-radius: 4px;
        // box-shadow: 0 0 3px rgba(0,0,0,0.5);
        filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
        background: white;
        padding: 0.2em 0.2em;
        max-width: 16em; //有待解决自动检测高度
        word-break: break-all;
        &::before, &::after{
            content: '';
            display: block;
            border: 10px solid transparent;   
            width: 0;
            height: 0;        
            position: absolute;            
        }
        &.vi-position-top{
            transform: translateY(-100%);
            margin-top: -10px;
            &::before, &::after{         
                left: 10px;
            }
            &::before{
                border-bottom: none;//可以设置button:z-index:1
                border-top-color: black;
                top: 100%;
            }
            &::after{
                border-bottom: none;
                border-top-color: white;
                top: calc(100% - 1px);
            }
        }
        &.vi-position-bottom{
            margin-top: 10px;
            &::before, &::after{         
                left: 10px;
            }
            &::before{
                border-top: none;
                border-bottom-color: black;
                bottom: 100%;
            }
            &::after{
                border-top: none;
                border-bottom-color: white;
                bottom: calc(100% - 1px);
            }
        }
        &.vi-position-left{
            transform: translateX(-100%);
            margin-left: -10px;
            &::before, &::after{         
                transform: translateY(-50%);
                top: 50%;  
            }
            &::before{
                border-right: none;
                border-left-color: black;
                left: 100%;
            }
            &::after{
                border-right: none;
                border-left-color: white;
                left: calc(100% - 1px);
            }
        }
        &.vi-position-right{
            margin-left: 10px;
            &::before, &::after{         
                transform: translateY(-50%);
                top: 50%; 
                border-left: none; 
            }
            &::before{
                border-right-color: black;
                right: 100%;
            }
            &::after{
                border-right-color: white;
                right: calc(100% - 1px);
            }
        }
        
    }
    
</style>
