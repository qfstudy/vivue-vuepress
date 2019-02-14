<template>
  <div class="code-format">
    <div class="vi-all-wrapper">
      <div class="component-wrapper">

        <div class="vi-component-wrapper">
          <slot name="componentNameTitle"></slot>
        </div>

        <div class="vi-description-wrapper">
          <slot name="description"></slot>
        </div>

        <section class="vi-border-wrapper">

          <div class="vi-show-component-wrapper">
            <slot name="showComponents"></slot>
          </div>

          <div v-if="isShow" class="vi-code-description-wrapper">
            <div class="vi-show-code-wrapper">
              <slot name="paraDescription"></slot>
            </div>
            <div class="vi-code-wrapper">
              <slot name="showCode"></slot>
            </div>
          </div>

          <div class="vue-vi-button" @click="handleToggleShow">
            <div class="vue-vi-wrapper">
              <vi-icon class="vue-vi-icon" v-if="!isShow" vi-icon-name="unfold"></vi-icon>
              <vi-icon class="vue-vi-icon" v-if="isShow" vi-icon-name="fold"></vi-icon>
              <span class="vue-vi-buttonText">{{buttonText}}</span>
            </div>
          </div>

        </section>
      </div>
    </div>
  </div>
</template>

<script>
import '../../public/svg.js'
import Icon from '../../../../src/packages/icon/src/icon'
export default {
  name: 'CodeFormat',
  components:{
      'vi-icon': Icon
  },
  data() {
    return {
      isShow: false,
      buttonText: '显示代码',
    }
  },
  methods: {
    handleToggleShow() {
      // console.log(!(this.$slots.codeText))
      this.isShow = !this.isShow
      this.buttonText = this.isShow ? '隐藏代码' : '显示代码'
    },
  },
}
</script>

<style lang="scss" scoped>
  *{
    padding: 0;
    margin:0;
    box-sizing: border-box;
  }
  
  .code-format{
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    font-size:16px;
    color: #5e6d82;
    .vi-all-wrapper{
      .component-wrapper{
        .vi-component-wrapper{
          // border: 1px solid darkgreen;
          .component{
            // border: 1px solid dodgerblue;
            .component-name{
              font-size: 1.8em;
              color: #1f2f3d;
              font-weight: 400;
            }
            .component-text{
              font-size: 0.8em;
              margin-top: 10px;
            }
          }
        }
        .vi-description-wrapper{
          // border: 1px solid green;
          margin-top: 38px;  
          .vi-description-title{
            // border: 1px solid red;
            font-size: 1.2em;
            font-weight: 400;
            color: #1f2f3d;
            margin-bottom: 26px;
          }
          .vi-description-text{
            font-size: 14px;
            // border: 1px solid rebeccapurple;
            margin: 15px 0;
            line-height: 2em;
            .add-color{
              font-size: 14px;
              padding: 0.1em 0.2em;
              border: 1px solid #ebebeb;
              border-radius: 5px; 
              background: #f7f7f7;//#ebebeb
              border-radius: 5px; 
              margin: 0 0.2em;
            }
            .noteColor{
              color: #000;
              font-weight: 600;

            }
            a{
              text-decoration:none;
            }
          }
        }
        .vi-border-wrapper{
          margin-top: 40px;
          border: 1px solid #ebebeb;
          .vi-show-component-wrapper{
            border-bottom: 1px solid #ebebeb;
            // padding: 10px 0;
            padding-left: 12px;
            .vi-show-component{
              // border: 1px solid red;
              padding: 16px 0;
            }
          }
          .vi-code-description-wrapper{
            margin-top: 2px;
            .vi-show-code-wrapper{
              border: 1px solid #ebebeb;
              border-radius: 3px; 
              padding: 10px 0;
              padding-left: 0.8em; 
              margin: 10px 6px;
              font-size: 14px;
              font-weight: 400px;
              .vi-code-description{
                .vi-paraStyle-wrapper{
                  line-height: 2em;
                  .vi-paraStyle{
                    font-size: 14px;
                    padding: 0.1em 0.2em;
                    border: 1px solid #ebebeb;
                    border-radius: 5px; 
                    background: #f7f7f7;
                    border-radius: 5px; 
                    margin: 0 0.2em;
                  }
                }
              }
            }
            .vi-code-wrapper{
              // border: 1px solid red
              line-height: 6em;
              padding: 3px 6px;
              .codeStyle{
                // background: red;
                font-size: 18px;
                padding: 6px 0;
                padding-left: 12px;
                // line-height: 6em;
              }
            }
          }
          .vue-vi-button{
            // margin-top: 1px;
            border-top: 1px solid #ebebeb;
            border-radius: 3px;
            width: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            vertical-align: top;
            .vue-vi-wrapper{
              display: inline-flex;
              align-items: center;
              justify-content: center;
              vertical-align: top;
              padding: 0.7em 0;
              .vue-vi-icon{
                width:1.2em;
                height:1.2em;
                fill:#ebebeb;
              }
              .vue-vi-buttonText{
                font-size: 14px;
                color: #ebebeb;
              } 
            }
            &:hover{
              background-color: #f7f7f7;
              .vue-vi-buttonText{
                color: #409eff;
              }
            }
            &:hover{
              .vue-vi-icon{
                fill:#409eff;
              }
            } 
          }
        }
      }
    }
  }

</style>

