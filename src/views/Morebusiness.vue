<template>
  <div class="business">
    <div class="bgm">
      <img src="../assets/img/business.png" alt="" >
    </div>
    <div class="mian">
      <div class="content">
        <div class="nav" v-for="(item, index) in tabTitle" :key="index" @click="tabtap(item)" :class="{ active: item.id === currentId }">
          <div class="nav-item">
            <div class="name" :class="{ activename: item.id === currentId }">{{ item.name }} </div>
            <div class="position" :class="{ activeposi: item.id === currentId }">{{item.position }}</div></div>
        </div>
      </div>
       <div class="mian-box">
          <div class="main-item" v-if="currentId == 0">
            <div class="left">
              <div class="leader">负责人:业务经理</div>
              <div class="info">业务洽谈:</div>
              <div class="info">由我方<span>业务经理</span>与合作公司<span>客户</span></div>
              <div class="info"><span>代表</span>就提供技术服务等相关</div>
              <div class="info">内容进行<span>商谈</span>。</div>
            </div>
            <img src="../assets/img/business01.png" alt="">
          </div>
          <div class="main-item" v-if="currentId == 1">
            <div class="left">
              <div class="leader">负责人:业务经理</div>
              <div class="info">签订合同:</div>
              <div class="info">由我方<span>业务经理</span>与合作公司<span>客户</span></div>
              <div class="info"><span>代表</span>就达成一致的协议内器</div>
              <div class="info"><span>签订合同，支付定金</span>。</div>
            </div>
            <img src="../assets/img/business02.png" alt="">
          </div>
           <div class="main-item" v-if="currentId == 2">
            <div class="left">
              <div class="leader">负责人:产品经理</div>
              <div class="info">需求对接:</div>
              <div class="info">由我方<span>产品经理</span>与合作公司<span>客户</span></div>
              <div class="info"><span>代表</span>就产品需求进行对接。</div>
            </div>
            <img src="../assets/img/business03.png" alt="">
          </div>
          <div class="main-item" v-if="currentId == 3">
            <div class="left">
              <div class="leader">负责人:产品经理</div>
              <div class="info">需求文档:</div>
              <div class="info">由我方<span>产品经理</span>对合作公司方</div>
              <div class="info">提出的<span>关于产品的所有需求</span></div>
              <div class="info">进行整合制作的文档。</div>
            </div>
            <img src="../assets/img/business04.png" alt="">
          </div>
          <div class="main-item" v-if="currentId == 4">
            <div class="left">
              <div class="leader">负责人:客户代表</div>
              <div class="info">确认需求:</div>
              <div class="info">由合作公司<span>客户代表</span>就需求文档</div>
              <div class="info">中的内容进行校对、确认。</div>
            </div>
            <img src="../assets/img/business05.png" alt="">
          </div>
          <div class="main-item" v-if="currentId == 5">
            <div class="left">
                <div class="leader">负责人:产品经理</div>
                <div class="info">进度安排:</div>
                <div class="info">由合作公司<span>产品经理</span>对项目进行规划，</div>
                <div class="info"><span>输出进度计划</span>，安排人员进行</div>
                <div class="info">制作开发。</div>
              </div>
              <img src="../assets/img/business06.png" alt="">
            </div>
          <div class="main-item" v-if="currentId == 6">
            <div class="left">
              <div class="leader">负责人:UI设计师</div>
              <div class="info">产出设计稿:</div>
              <div class="info">由我方<span>UI设计</span>根据项目需求，进行</div>
              <div class="info"><span>产品设计</span>，设计可供开发的</div>
              <div class="info">设计稿。</div>
            </div>
            <img src="../assets/img/business07.png" alt="">
          </div>
          <div class="main-item" v-if="currentId == 7">
            <div class="left">
              <div class="leader">负责人:客户代表</div>
              <div class="info">确认设计稿:</div>
              <div class="info">由合作公司<span>客户代表</span>对设计稿中</div>
              <div class="info">的功能与需求文档中的功能</div>
              <div class="info">进行校对和确认。</div>
            </div>
            <img src="../assets/img/business08.png" alt="">
          </div>
          <div class="main-item" v-if="currentId == 8">
            <div class="left">
              <div class="leader">负责人:软件工程师</div>
              <div class="info">开发软件:</div>
              <div class="info">由我方<span>软件工程师</span>根据所确认</div>
              <div class="info">的设计稿进行<span>软件开发</span>。</div>
            </div>
            <img src="../assets/img/business09.png" alt="">
          </div>
          <div class="main-item" v-if="currentId == 9">
            <div class="left">
              <div class="leader">负责人:前端工程师和后端工程师</div>
              <div class="info">需求文档:</div>
              <div class="info">由我方<span>测试工程师</span>对开发好的软件</div>
              <div class="info">进行<span>第一阶段的测试</span>，并提出</div>
              <div class="info">存在的hug，进行软件</div>
              <div class="info">功能调整与修复。</div>
            </div>
            <img src="../assets/img/business10.png" alt="">
          </div>
          <div class="main-item" v-if="currentId == 10">
            <div class="left">
              <div class="leader">负责人:产品经理</div>
              <div class="info">软件内测：</div>
              <div class="info">由合作公司<span>客户代表</span>对软件进行</div>
              <div class="info"><span>全方面的测试</span>，并提出存在的</div>
              <div class="info">bug,由我方软件工程师</div>
              <div class="info">进行修复与完善。</div>
            </div>
            <img src="../assets/img/business11.png" alt="">
          </div>
          <div class="main-item" v-if="currentId == 11">
            <div class="left">
              <div class="leader">负责人: 客户代表</div>
              <div class="info">结清尾款:</div>
              <div class="info">由我合作公司<span>客户代表</span>在验收软件</div>
              <div class="info">后<span>结清尾款</span>。</div>
            </div>
            <img src="../assets/img/business12.png" alt="">
          </div>
          <div class="main-item" v-if="currentId == 12">
            <div class="left">
              <div class="leader">负责人:软件工程师</div>
              <div class="info">产品上线:</div>
              <div class="info">由我方<span>软件工程师</span>将制作好的</div>
              <div class="info">软件<span>上线</span>到各大平台。</div>
            </div>
            <img src="../assets/img/business13.png" alt="">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentId: 0,
      tabTitle: [
        { id: 0, name: '业务洽谈', position: '业务经理' },
        { id: 1, name: '签订合同', position: '业务经理' },
        { id: 2, name: '需求对接', position: '产品经理' },
        { id: 3, name: '需求文档', position: '产品经理' },
        { id: 4, name: '确认需求', position: '客户代表' },
        { id: 5, name: '进度安排', position: '产品经理' },
        { id: 6, name: '产出设计稿', position: 'UI设计师' },
        { id: 7, name: '确认设计稿', position: '客户代表' },
        { id: 8, name: '开发软件', position: '程序员' },
        { id: 9, name: '软件内测', position: '测试工程师' },
        { id: 10, name: '软件测试', position: '客户代表' },
        { id: 11, name: '结清尾款', position: '客户代表' },
        { id: 12, name: '产品上线', position: '程序员' }
      ]
    }
  },
  methods: {
    tabtap (item) {
      console.log(item.id)
      this.currentId = item.id
    }
  }
}
</script>

<style lang="scss" scoped>
html,
body,
#app {
  width: 100%;
  // height: 1200px;
}
.business{
  background-color: #f8f8f8;
  .bgm{
    width: 100%;
    height: 575px;
    img{
      width: 100%;
      height: 575px;
    }
  }
  .mian{
    width: 100%;
    height: 100%;
    padding: 60px 0;
    .content{
      width: 1200px;
      margin: 0 auto;
      display: flex;
      .nav{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        .nav-item{
          display: flex;
          flex-direction: column;
          .name{
            font-weight: 400;
            color: #333333;
            line-height: 22px;
            font-size: 16px;
          }
          .activename{
            color: #FFFFFF;
          }
          .position{
            font-weight: 400;
            color: #cfcfcf;
            line-height: 22px;
            font-size: 14px;
          }
          .activeposi{
            color: #FFFFFF;
          }
        }
        // .native{
        //   color: pink;
        // }
      }
      .active{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 70px;
        background-color:#FF7600;
        font-weight: 500;
        color: #FFFFFF !important;
      }
    }
    .mian-box{
      width: 1200px;
      margin: 0 auto;
      background-color: #fff;
      padding-left: 90px;
      .main-item{
        width: 100%;
        height: 660px;
        position: relative;
        .left{
          padding-top: 120px;
          .leader{
            color: #FF7600;
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            margin-bottom: 50px;
          }
          .info{
            font-size: 32px;
			line-height: 50px;
            font-weight: 600;
            color: #333333;
            span{
              color: #FF7600;
            }
            // line-height: 56px;
            // letter-spacing: 3px;
          }
        }
        img{
          width: 848px;
          height: 660px;
          display: block;
          position: absolute;
          right: 0;
          top: 0;
          // z-index: ;
        }
      }
    }
  }
}
</style>
