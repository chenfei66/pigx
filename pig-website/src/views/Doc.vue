<template>
    <div class="doc">
        <div class="silder">
            <div class="item item--bold"
                 v-for="item in nav"
                 :key="item.name"
                 :class="{'item--active':(item.path || item.href) ===activeNav}">
                <div style="padding-left:30px;font-weight:bold"
                     @click="goLink(item)">
                    <span class="title">{{item.name}}</span>
                </div>
                <template v-for="(gitem) in item.groups">
                    <template v-for="citem in gitem.list">
                        <div class="item"
                             :key="citem.name"
                             :class="{'item--active':(citem.path || citem.href) ===activeNav}">
                            <div style="padding-left:60px"
                                 @click="goLink(citem)">
                                <span class="title">{{citem.title}}</span>
                            </div>
                        </div>
                    </template>
                </template>
            </div>
        </div>
        <div class="markdown">
            <router-view v-if="box"/>
        </div>

    </div>
</template>

<script>
    import {getStore, setStore} from '@/util/store'
    import nav from "@/doc.config";

    export default {
        name: "temp",
        data() {
            return {
                nav: nav,
                navObj: {},
                box: false
            };
        },
        computed: {
            activeNav() {
                return this.$route.path.replace("/doc", "");
            }
        },
        watch: {
            $route(n, o) {
                if (n === o) return;
                this.findItem(this.nav, this.$route.path.replace("/doc", ""));
            }
        },
        created() {
            this.findItem(this.nav, this.$route.path.replace("/doc", ""));
        },
        methods: {
            findItem(nav, value) {
                nav.forEach(ele => {
                    if (ele.groups) {
                        this.findItem(ele.groups[0].list, value);
                    } else if (ele.path === value) {
                        this.navObj = ele;
                        this.goLink(this.navObj);
                    }
                });
            },
            goLink(item) {
                const callback = () => {
                    this.box = true;
                    if (item.href) {
                        window.location.href = item.href;
                    } else if (item.path) {
                        let path = item.path;
                        if (path.includes("#")) {
                            path.replace("/#", "");
                        } else {
                            path = "/doc" + path;
                        }
                        this.$router.push({path: path});
                    }
                };

                if ((item.meta || {}).isAuth === true) {
                    const password = '12345678'
                    if (getStore({name: 'auth-password'}) === password) {
                        return callback();
                    }
                    this.box = false;
                    this.$prompt("请输入暗号", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        inputPattern: new RegExp(password),
                        inputErrorMessage: "暗号错误"
                    }).then((data) => {
                        setStore({
                            name: 'auth-password',
                            content: data.value,
                            type: true
                        })
                        callback();
                    });
                } else {
                    callback();
                }
            }
        }
    };
</script>

<style lang="scss">
    .silder {
        width: 300px;
        height: calc(100% - 80px);
        position: fixed;
        top: 0;
        bottom: 0;
        margin-top: 80px;
        overflow: auto;
        background-color: #fff;
        border-right: 1px solid #e8e8e8;

        .item {
            transition: all 0.9s cubic-bezier(0.215, 0.61, 0.355, 1);

            &--bold {
                > a {
                    font-weight: 700;
                }
            }

            &--active {
                background-color: #f0f5ff;
                border-right: 3px solid #2f54eb;

                a {
                    color: #2f54eb;
                }
            }

            a {
                display: block;
                color: #314659;
            }

            .title {
                font-size: 14px;
                line-height: 40px;
                height: 40px;
                list-style-type: disc;
                list-style-position: inside;
            }
        }
    }

    .doc {
        padding-top: 104px;
        margin-bottom: 50px;
        box-sizing: border-box;
        display: flex;
    }

    .markdown {
        padding: 0 30px 30px 330px;
        color: #314659;
        min-height: 600px;
        font-size: 14px;
        line-height: 2;
        width: 100%;
        box-sizing: border-box;
    }
</style>
