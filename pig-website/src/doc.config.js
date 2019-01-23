export default [{
    name: "阿里云专属优惠",
    href: "https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=rvv1gmr7"
}, {
    name: "开源版必看",
    groups: [{
        list: [{
            title: '关于pig',
            path: '/pig'
        }, {
            title: '配套视频',
            path: '/pig-doc2'
        }, {
            title: '开发文档',
            path: '/pig-doc1'
        }]
    }]
}, {
    name: "升级版必看",
    groups: [{
        list: [{
            title: '关于pigx',
            path: '/pigx'
        }, {
            title: '视频介绍',
            path: '/pigxpro'
        }, {
            title: '购买说明',
            path: '/pigx-pay'
        }, {
            title: '会员专区',
            path: '/vip',
            meta: {
                isAuth: true,
            }
        }, {
            title: '配套视频',
            path: '/vedio',
            meta: {
                isAuth: true,
            }
        }]
    }]
}
]
