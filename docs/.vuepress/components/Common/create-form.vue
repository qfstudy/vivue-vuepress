<template>
    <div class="container">
        <div class="form">
            <div class="form-main">
                <slot name="form-header"></slot>
                <slot name="form-body"></slot>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    name:'createForm',
}
</script>

<style lang="scss" scoped>
    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;
    }
    .container{
        font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
        font-size:14px;
        color: #5e6d82;
        // border: 1px solid #ebebeb;
        border-radius: 3px;
        margin-top: 3em;
        .form{
            padding: 0.1em 0em;
            // display: flex;
            // justify-content: center;
            .form-main{
                width: 100%;
                .formHead{
                    display: block;
                    padding: 0.1em 0.1em;
                    padding-bottom: 0;
                    .formHeadRow{
                        border: none;
                        display: flex;//实现按比例填充
                        // justify-content: space-between;
                        border-bottom: 1px solid #ebebeb;
                        
                        .formHeadCol{
                            border: none;
                            font-weight: normal;
                            margin: 0 0.1em;
                            padding: 0.8em 0;
                            // border: 1px solid yellow;
                            display: flex;                          
                        }
                        .formHeadCol:nth-child(1){
                            // background: red;
                            width: 15%;
                        }
                        .formHeadCol:nth-child(2){
                            // background: red;
                            width: 23%;
                        }
                        .formHeadCol:nth-child(3){
                            // background: red;
                            width: 15%;
                        }
                        .formHeadCol:nth-child(4){
                            // background: red;
                            width: 32%;
                        }
                        .formHeadCol:nth-child(5){
                            // background: red;
                            width: 15%;
                        }
                    }
                }
                .formBody{
                    display: block;
                    padding: 0.1em 0.1em;
                    .formBodyRow{
                        border: none;
                        display: flex;
                        // justify-content: space-between;
                        background: #fff;
                        border-bottom: 1px solid #ebebeb;
                        .formBodyCol{
                            border: none;
                            margin: 0 0.1em;
                            padding: 0.8em 0;
                            // border: 1px solid salmon;
                            display: flex;
                        }
                        .formBodyCol:nth-child(1){
                            // background: yellowgreen;
                            width: 15%;
                        }
                        .formBodyCol:nth-child(2){
                            // background: yellowgreen;
                            width: 23%;
                        }
                        .formBodyCol:nth-child(3){
                            // background: yellowgreen;
                            width: 15%;
                        }
                        .formBodyCol:nth-child(4){
                            // background: yellowgreen;
                            width: 32%;
                        }
                        .formBodyCol:nth-child(5){
                            // background: yellowgreen;
                            width: 15%;
                        }
                    }
                }
            }
        }
    }
    
</style>
