<template>
    <div class="vi-button">
        <vi-button icon-size="medium" icon-name="setting" circle></vi-button>
        <vi-button icon-size="medium" icon-name="upload" circle></vi-button>
        <vi-button icon-size="medium" icon-name="download" circle></vi-button>
        <vi-button icon-size="medium" icon-name="search" circle></vi-button>
        <vi-button icon-size="medium" icon-name="share" circle></vi-button>
        <vi-button icon-size="medium" icon-name="calendar" circle></vi-button>
    </div>
</template>

<script>
import Button from '../../../../src/packages/button/src/button'
export default {
    components:{
        'vi-button': Button
    }
}
</script>
<style scoped>
    hr{
        border:none;
    }
</style>