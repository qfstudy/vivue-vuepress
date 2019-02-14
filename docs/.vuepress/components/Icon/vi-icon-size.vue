<template>
    <div class="icon">
        <vi-icon vi-icon-name="left" vi-icon-size="medium"></vi-icon>
        <vi-icon vi-icon-name="right" vi-icon-size="medium"></vi-icon>
        <vi-icon vi-icon-name="download" vi-icon-size="medium"></vi-icon>
        <vi-icon vi-icon-name="upload" vi-icon-size="medium"></vi-icon>
        <vi-icon vi-icon-name="search" vi-icon-size="medium"></vi-icon>
        <vi-icon vi-icon-name="setting" vi-icon-size="medium"></vi-icon>
    </div>
</template>

<script>
import Icon from '../../../../src/packages/icon/src/icon'
export default {
    components:{
        'vi-icon': Icon
    }
}
</script>

<style lang="scss" scoped>
    hr{
        border: none;
    }
</style>
