<template>
    <div class="vi-button">
        <vi-button>默认按钮</vi-button>
        <vi-button type="primary">主要按钮</vi-button>
        <vi-button type="success">成功按钮</vi-button>
        <vi-button type="info">信息按钮</vi-button>
        <vi-button type="warning">警告按钮</vi-button>
        <vi-button type="danger">危险按钮</vi-button>
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
<style>
    hr{
        border:none;
    }
</style>