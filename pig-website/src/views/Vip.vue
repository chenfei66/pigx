<template>
    <div class="vip">
        <div class="vip-content">
            <avue-data-pay :option="option"></avue-data-pay>
            <div class="pay__detail">
                <div class="pay__detail-item">
                    <div class="pay__detail-header">
                        <span class="pay__detail-title">功能特权</span>
                    </div>
                    <div class="pay__detail-list">
                        <div class="pay__detail-li"
                             v-for="(item,index) in list"
                             :key="index">
                            {{item.title}}
                        </div>
                    </div>
                </div>
                <div class="pay__detail-item">
                    <div class="pay__detail-header">
                        <span class="pay__detail-title">开源版</span>
                    </div>
                    <div class="pay__detail-list">
                        <div class="pay__detail-li"
                             v-for="(item,index) in list"
                             :key="index">
                            <i class="pay__detail-icon"
                               :class="item.first?'pay__detail-icon--pass':'pay__detail-icon--error'"></i>
                        </div>
                    </div>
                </div>
                <div class="pay__detail-item">
                    <div class="pay__detail-header">
                        <span class="pay__detail-title">升级版</span>
                    </div>
                    <div class="pay__detail-list">
                        <div class="pay__detail-li"
                             v-for="(item,index) in list"
                             :key="index">
                            <i class="pay__detail-icon"
                               :class="item.second?'pay__detail-icon--pass':'pay__detail-icon--error'"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <el-dialog :visible.sync="box"
                   center
                   width="50%">
            <el-alert
                    title="付款请备注QQ。付款完成后，若在十分钟内没有联系您，请加冷冷QQ：2270033969"
                    :closable="false"
                    type="error">
            </el-alert>
            <div style="width:250px;margin:20px auto">
                <img src="http://a.pigx.top/20181230122555.png"
                     width="100%">
            </div>
        </el-dialog>

    </div>
</template>

<script>
    import {list} from "./config";

    export default {
        data() {
            return {
                box: false,
                option: {
                    span: 12,
                    data: [
                        {
                            title: "开源版",
                            src: "images/vip1.png",
                            money: "0",
                            dismoney: "0",
                            tip: "/永久",
                            color: "#808695",
                            subtext: "购买",
                            click: () => {
                                this.box = true;
                            },
                            list: [
                                {
                                    title: "基于Spring Boot 1.5.15.RELEASE丶Edgware.SR4",
                                    check: true
                                },
                                {
                                    title: "基于Zuul 1 实现鉴权网关",
                                    check: true
                                },
                                {
                                    title: "网关支持多维度限流、动态filter 加载、聚合文档",
                                    check: true
                                },
                                {
                                    title: "前后端完全分离，基于老版avue实现",
                                    check: true
                                },
                                {
                                    title: "通用RBAC权限设计及其数据权限和分库分表",
                                    check: true
                                },
                                {
                                    title: "角色菜单权限分配、设置角色按机构进行数据范围权限划分",
                                    check: true
                                },
                                {
                                    title: "基于zuul实现动态路由，后端可配置化",
                                    check: true
                                },
                                {
                                    title: "自定义ribbon路由规则匹配多版本请求",
                                    check: true
                                },
                                {
                                    title: "消息总线配置动态实时刷新",
                                    check: true
                                },
                                {
                                    title: "代码生成：前后端代码的生成，支持Vue",
                                    check: true
                                },
                                {
                                    title: "pig 官方qq群：23754102",
                                    check: true
                                },
                                {
                                    title: "点击进入 >> 演示系统",
                                    href: "http://preview.pig4cloud.com/#/login",
                                    check: true
                                }
                            ]
                        },
                        {
                            title: "升级版",
                            src: "images/vip2.png",
                            color: "#ffa820",
                            money: "699",
                            dismoney: "399",
                            tip: "/永久",
                            subtext: "购买",
                            click: () => {
                                this.box = true
                            },
                            list: [
                                {
                                    title: "基于最新稳定版Spring Boot 2.0.7.RELEASE丶Finchley.SR2",
                                    check: true
                                },
                                {
                                    title: "基于Spring Cloud Gateway 定制webflux网关",
                                    check: true
                                },
                                {
                                    title: "前后端完全分离，前端使用avue即使没有前端开发经验也能快速上手",
                                    check: true
                                },
                                {
                                    title: "提供IE 9+、多终端的适配能力，支持前端动态路由及其动态缓冲",
                                    check: true
                                },
                                {
                                    title: "深度定义LCN 解决分布式事务问题",
                                    check: true
                                },
                                {
                                    title: "基于 Spring Security OAuth 深度权限定制,权限控制到菜单、token",
                                    check: true
                                },
                                {
                                    title: "Json View 控制Spring Cloud Gateway 动态路由",
                                    check: true
                                },
                                {
                                    title: "基于Spring cloud OAuth2 实现单点登录",
                                    check: true
                                },
                                {
                                    title: "完全打通常见社交登录，面对OAuth 前后端分离架构不在难办",
                                    check: true
                                },
                                {
                                    title: "基于Activiti 支持审批流程，自定义兼容vue",
                                    check: true
                                },
                                {
                                    title: "屏蔽开发细节的SAAS，框架层实现库表、缓存操作开发无感知",
                                    check: true
                                },
                                {
                                    title: "图形化数据权限，使用更加简单",
                                    check: true
                                },
                                {
                                    title: "赠送 pig开发指南（价值¥59.99，已购可减、pigx 开发文档、视频",
                                    href: "https://www.kancloud.cn/lengleng/pig-guide",
                                    check: true
                                },
                                {
                                    title: "邀请加入知识星球 《微服务最前沿》,pigx专属售后群:812475947",
                                    href: "//shang.qq.com/wpa/qunwpa?idkey=5533504a037b6ec51df9719c756ac4bbd5828b5048a372d1d9c263b6629c8109",
                                    check: true
                                },
                                {
                                    title: "点击进入 >> 演示系统",
                                    href: "http://pigx.pig4cloud.com/#/login2",
                                    check: true
                                }
                            ]
                        }
                    ]
                },
                list: list
            };
        },
        created() {
            this.$notify({
                title: "庆祝元旦",
                dangerouslyUseHTMLString: true,
                message: '<span>只需要￥399，五折入手 </span>',
                offset: 60,
                duration: 10000
            });
        },
    };
</script>

<style lang="scss">
    .vip {
        padding-top: 80px;

        &-content {
            margin: 30px auto;
            width: 1200px;
        }
    }

    .pay {
        &__detail {
            display: flex;
            align-items: flex-start;
            margin: 40px auto 50px auto;
            padding: 10px 20px;
            width: 1100px;

            &-header {
                padding-top: 20px;
                height: 80px;
                text-align: center;
                background-color: #fff;
            }

            &-title {
                color: #666;
                font-size: 22px;
            }

            &-item {
                width: 33.33%;
                border: 1px solid #ccc;
                box-sizing: border-box;

                &:nth-child(1) {
                    border-right: none;
                }

                &:nth-child(3) {
                    border-left: none;
                }
            }

            &-li {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 50px;
                color: #666;
                text-align: center;
                background-color: #fff;

                &:nth-child(odd) {
                    background-color: #fbf9f8;
                }
            }

            &-icon {
                display: block;
                margin: 0 auto;
                width: 20px;
                height: 20px;
                background-repeat: no-repeat;
                background-position: center;

                &--pass {
                    background-image: url("https://wangpan.bdstatic.com/n/box-static/pan-center-cdn/widget/components/privilegeCompare/images/right_6472607.png");
                }

                &--error {
                    background-image: url("https://wangpan.bdstatic.com/n/box-static/pan-center-cdn/widget/components/privilegeCompare/images/error_f2a16b2.png");
                }
            }
        }
    }
</style>
