<template>
  <div class="footer">
    <div class="copyright" style="color:#fff">
      Copyright
      <a-icon type="copyright" style="color:#fff"/>
      All Rights Reserved <span style="color:#fff">四川代代为本农业科技有限公司</span>
    </div>
     <div class="links">
      <a href="http://www.beian.miit.gov.cn" style="color:#fff">蜀ICP备15033742号</a>
   </div>
  </div>
</template>

<script>
  export default {
    name: "LayoutFooter",
  }
</script>

<style lang="scss" scoped>
  .footer {
    background-color: #00224a;
    padding: 0 16px;
    margin: 48px 0 24px;
    text-align: center;

    .links {
      vertical-align:bottom;
      margin-top: 8px;
      span{
        color: rgba(0, 0, 0, .45);
      }
      i{
        margin:0 8px 0 8px;
        color: rgba(0, 0, 0, .45);
        position: relative;
        top:-1px;
      }
      a {
        color: rgba(0, 0, 0, .45);

        &:hover {
          color: rgba(0, 0, 0, .65);
        }

        &:not(:last-child) {
          margin-right: 0px;
        }
      }
    }
    .copyright {
      color: rgba(0, 0, 0, .45);
      font-size: 14px;
    }
  }
</style>
