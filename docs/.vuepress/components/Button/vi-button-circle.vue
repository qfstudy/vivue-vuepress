<template>
    <div class="vi-button">
        <vi-button icon-size="medium" icon-name="setting" circle="circle"></vi-button>
        <vi-button icon-size="medium" icon-name="upload" circle="circle"></vi-button>
        <vi-button icon-size="medium" icon-name="download" circle="circle"></vi-button>
        <vi-button icon-size="medium" icon-name="search" circle="circle"></vi-button>
        <vi-button icon-size="medium" icon-name="share" circle="circle"></vi-button>
        <vi-button icon-size="medium" icon-name="calendar" circle="circle"></vi-button>
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