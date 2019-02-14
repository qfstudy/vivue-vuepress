<template>
    <div class="vi-main">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'ViMain'
}
</script>

<style lang="scss" scoped>
    .vi-main{
        flex-grow: 1;
    }
</style>
