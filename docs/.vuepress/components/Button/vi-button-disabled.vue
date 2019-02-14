<template>
    <div class="vi-button">
        <vi-button disabled="disabled"><span>默认按钮</span></vi-button>
        <vi-button disabled="disabled" type="primary"><span>主要按钮</span></vi-button>
        <vi-button disabled="disabled" type="success"><span>成功按钮</span></vi-button>
        <vi-button disabled="disabled" type="info"><span>信息按钮</span></vi-button>
        <vi-button disabled="disabled" type="warning"><span>警告按钮</span></vi-button>
        <vi-button disabled="disabled" type="danger"></spa>危险按钮</span></vi-button>
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