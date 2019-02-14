<template>
    <div class="vi-col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'ViCol',
    data(){
        return{
            gutter:0
        }
    },
    props:{
        span:{
            type:[Number]
        },
        offset:{
            type:[Number]
        }
    },
    computed:{
        colClass(){
            let{span,offset}=this
            return[
                span&&`vi-col-${span}`,
                offset&&`vi-col-offset-${offset}`
            ]
        },
        colStyle(){
            return{
                paddingLeft:this.gutter/2 + 'px',
                paddingRight:this.gutter/2 + 'px'
            }
        }
    },
    
}
</script>

<style lang="scss" scoped>
    $class-prefix: vi-col-;
    $class-offset: vi-col-offset-;
    .vi-col{
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ($n/24) * 100%;
            }
        }
        @for $n from 1 through 24{
            &.#{$class-offset}#{$n}{
                margin-left: ($n/24) * 100%;
            }
        }
       
    }
</style>
