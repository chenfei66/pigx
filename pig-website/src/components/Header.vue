<template>
  <div class="avuex-header">
    <div class="header-wrapper">
      <router-link class="logo"
                   to="/">
        <span>Pig Microservice Architecture</span>
      </router-link>
      <div class="nav">
        <div class="nav-item"
             v-for="(item,index) in nav"
             :key="index"
             :class="{'nav-item--active':(item.href || item.path)==='/'?$route.path ===(item.href || item.path) :$route.path.includes((item.href || item.path))}">
          <a :href="item.href"
             v-if="item.href">
            <span>{{item.title}}</span>
          </a>
          <router-link :to="item.path"
                       v-else>
            <span>{{item.title}}</span>
          </router-link>
        </div>

        <div class="gitbtn">
          <a href="https://www.douyu.com/2788187">
            <span>直播</span>
          </a>
        </div>
        <div class="gitbtn">
          <a href="https://gitee.com/log4j">
            <span>码云</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nav from "@/nav.config.js";
export default {
  data() {
    return {
      nav
    };
  }
};
</script>

<style lang="scss">
.avuex-header {
  box-shadow: 0 0 0 rgba(138, 166, 195, 0);
  position: fixed;
  width: 100%;
  z-index: 999;
  height: 64px;
  padding: 0 30px;
  background: #2f54eb;
  box-sizing: border-box;
  .header-wrapper {
    display: flex;
    margin: auto;
    width: 100%;
    height: 100%;
    transition: all 0.45s cubic-bezier(0.215, 0.61, 0.355, 1);
    justify-content: space-between;
  }
  .logo {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 16px;
    font-family: SF UI Display, Helvetica Neue For Number, -apple-system,
      BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,
      Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
    text-decoration: none;
    img {
      margin-right: 10px;
      width: 28px;
    }
  }

  .nav {
    height: 100%;
    display: flex;
    align-items: center;
    &-item {
      padding: 0 15px;
      line-height: 60px;
      border-top: 2px solid transparent;
      height: 62px;
      &--active {
        border-top: 2px solid #fff;
      }
      &:hover {
        border-top: 2px solid #fff;
      }
      a {
        color: #fff;
        font-size: 14px;
      }
    }
    .gitbtn {
      border: 1px solid #fff;
      border-radius: 28px;
      height: 28px;
      line-height: 28px;
      color: #fff;
      margin-right: 10px;
      font-size: 14px;
      padding: 0 16px;
      box-sizing: content-box;
      a {
        color: #fff;
      }
    }
  }
}
</style>
