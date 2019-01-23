<template>
  <div class="footer">
    <div class="footer-wrap">
      <div class="footer-item">
        <h2 class="title">友情链接</h2>
        <p>
          <a href="https://avue.top/">
            <span>avue官网</span>
          </a>
        </p>
        <p>
          <a href="https://gitee.com/">
            <span>码云</span>
          </a>
        </p>
        <p>
          <a href="https://www.dreamlu.net/">
            <span>如梦技术</span>
          </a>
        </p>
      </div>
      <div class="footer-item">
        <h2 class="title">联系我们</h2>
        <p>
          <a href="#">
            <span>交流群</span>
          </a>
          <span> - </span>
          <span>23754102</span>
        </p>
        <p>
          <a href="#">
            <span>电子邮箱</span>
          </a>
          <span> - </span>
          <span>wangiegie@gmail.com</span>
        </p>
        <p>
          <a href="#">
            <span>企鹅</span>
          </a>
          <span> - </span>
          <span>2270033969</span>
        </p>
      </div>
      <div class="footer-item">
        <h2 class="title">团队成员</h2>
        <p>
          <a href="#">
            <span>冷冷</span>
          </a>
          <span> - </span>
          <span>云集汇通架构师</span>
        </p>
        <p>
          <a href="#">
            <span>DreamLu</span>
          </a>
          <span> - </span>
          <span>车和家架构师</span>
        </p>
        <p>
          <a href="#">
            <span>李鹏伟</span>
          </a>
          <span> - </span>
          <span>avue作者</span>
        </p>
        <p>
          <a href="#">
            <span>李寻欢</span>
          </a>
          <span> - </span>
          <span>倒闭悟空单车、现某情趣店商技术负责人</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  font-size: 14px;
  background-color: #000;
  position: relative;
  z-index: 100;
  color: hsla(0, 0%, 100%, 0.65);
  box-shadow: 0 1000px 0 1000px #fff;
  a {
    color: hsla(0, 0%, 100%, 0.9);
  }
}
.footer-wrap {
  width: 100%;
  max-width: 1200px;
  padding: 86px 24px 93px;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}
.footer-item {
  min-width: 180px;
  color: #fff;
  text-align: left;
  .title {
    font-size: 16px;
    margin: 0 auto 24px;
    font-weight: 500;
    position: relative;
  }

  span {
    color: hsla(0, 0%, 100%, 0.65);
  }
  p {
    margin-bottom: 10px;
    a {
      span {
        color: #fff;
      }
    }
  }
}
</style>
