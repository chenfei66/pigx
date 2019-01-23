![](http://a.pigx.top/20181123180343.png)
 ## 全网最新的Cloud 权限系统 （不接受反驳） 
> 类比市面上同类产品，我自信pigx 是一套 大而全、新而稳的微服务框架  
 
- 前后端完全分离，前端使用avue即使没有前端开发经验也能快速上手 
- 基于Spring Boot 2.0.7.RELEASE丶Finchley.SR2 
- 基于Spring Cloud Gateway 定制webflux网关 
- 深度定义LCN 解决分布式事务问题 
- 基于 Spring Security OAuth 深度权限定制,权限控制到菜单、token 
- 完全打通常见社交登录，面对OAuth 前后端分离架构不在难办 
- 封装部分Spring Cloud 原生组件，企业化开发更加方便 
- 去除了部分对于开发不友好的中间件,快速上手    
- 完全开放源代码，持续更新 


``` lua
pigx
├── pigx-ui -- 前端工程[8000]
├── pigx-auth -- 授权服务提供[3000]
├── pigx-common -- 系统公共模块 
├    ├── pigx-common-core -- 公共工具类核心包
├    ├── pigx-common-data -- 数据相关
├    ├── pigx-common-job -- 定时任务
├    ├── pigx-common-log -- 日志服务
├    ├── pigx-common-minio -- 文件系统
├    └── pigx-common-security -- 安全工具类
├    └── pigx-common-swagger -- Swagger Api文档生成
├    └── pigx-common-transaction -- 分布式事务工具包
├── pigx-config -- 配置中心[8888]
├── pigx-eureka -- 服务注册与发现[8761]
├── pigx-gateway -- Spring Cloud Gateway网关[9999]
├── pigx-upms -- 通用用户权限管理模块
├    └── pigx-upms-api -- 通用用户权限管理系统公共api模块
├    └── pigx-upms-biz -- 通用用户权限管理系统业务处理模块[4000]
└── pigx-visual  -- 图形化模块 
├    ├── pigx-monitor -- Spring Boot Admin监控 [5001]
├    ├── pigx-daemon -- 分布式调度中心[5002]
├    └── pigx-code-gen -- 图形化代码生成[5003]
├    └── pigx-tx-manager -- pigx分布式事务解决方案[5004]
├    └── pigx-activiti -- 工作流模块[5005]
	 
```
