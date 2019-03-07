<template>
    <div class="vi-button">
        <vi-button disabled>默认按钮</vi-button>
        <vi-button disabled type="primary">主要按钮</vi-button>
        <vi-button disabled type="success">成功按钮</vi-button>
        <vi-button disabled type="info">信息按钮</vi-button>
        <vi-button disabled type="warning">警告按钮</vi-button>
        <vi-button disabled type="danger">危险按钮</vi-button>
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