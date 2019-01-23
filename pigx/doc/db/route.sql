/*
SQLyog Ultimate v8.32 
MySQL - 5.7.24-log 
*********************************************************************
*/
/*!40101 SET NAMES utf8 */;

create table `sys_route_conf` (
	`id` double ,
	`route_name` varchar (90),
	`route_id` varchar (90),
	`predicates` varchar (-1),
	`filters` varchar (-1),
	`uri` varchar (150),
	`order` double ,
	`create_time` datetime ,
	`update_time` datetime ,
	`del_flag` varchar (3)
); 
insert into `sys_route_conf` (`id`, `route_name`, `route_id`, `predicates`, `filters`, `uri`, `order`, `create_time`, `update_time`, `del_flag`) values('1','工作流管理模块','pigx-activiti','[{\"args\": {\"_genkey_0\": \"/act/**\"}, \"name\": \"Path\"}]','[]','lb://pigx-activiti','0','2018-11-28 15:56:10','2018-11-28 15:56:25','0');
insert into `sys_route_conf` (`id`, `route_name`, `route_id`, `predicates`, `filters`, `uri`, `order`, `create_time`, `update_time`, `del_flag`) values('2','认证中心','pigx-auth','[{\"args\": {\"_genkey_0\": \"/auth/**\"}, \"name\": \"Path\"}]','[{\"args\": {}, \"name\": \"ValidateCodeGatewayFilter\"}, {\"args\": {}, \"name\": \"PasswordDecoderFilter\"}]','lb://pigx-auth','0','2018-11-28 15:56:10','2018-11-28 15:56:29','0');
insert into `sys_route_conf` (`id`, `route_name`, `route_id`, `predicates`, `filters`, `uri`, `order`, `create_time`, `update_time`, `del_flag`) values('3','代码生成模块','pigx-codegen','[{\"args\": {\"_genkey_0\": \"/gen/**\"}, \"name\": \"Path\"}]','[]','lb://pigx-codegen','0','2018-11-28 15:56:10','2018-11-28 15:56:32','0');
insert into `sys_route_conf` (`id`, `route_name`, `route_id`, `predicates`, `filters`, `uri`, `order`, `create_time`, `update_time`, `del_flag`) values('4','定时任务模块','pigx-daemon','[{\"args\": {\"_genkey_0\": \"/daemon/**\"}, \"name\": \"Path\"}]','[]','lb://pigx-daemon','0','2018-11-28 15:56:10','2018-11-28 15:56:34','0');
insert into `sys_route_conf` (`id`, `route_name`, `route_id`, `predicates`, `filters`, `uri`, `order`, `create_time`, `update_time`, `del_flag`) values('5','分布式事务模块','pigx-tx-manager','[{\"args\": {\"_genkey_0\": \"/tx/**\"}, \"name\": \"Path\"}]','[]','lb://pigx-tx-manager','0','2018-11-28 15:56:10','2018-11-28 15:56:36','0');
insert into `sys_route_conf` (`id`, `route_name`, `route_id`, `predicates`, `filters`, `uri`, `order`, `create_time`, `update_time`, `del_flag`) values('6','通用权限模块','pigx-upms-biz','[{\"args\": {\"_genkey_0\": \"/admin/**\"}, \"name\": \"Path\"}]','[{\"args\": {\"key-resolver\": \"#{@remoteAddrKeyResolver}\", \"redis-rate-limiter.burstCapacity\": \"20\", \"redis-rate-limiter.replenishRate\": \"10\"}, \"name\": \"RequestRateLimiter\"}, {\"args\": {\"name\": \"default\", \"fallbackUri\": \"forward:/fallback\"}, \"name\": \"Hystrix\"}]','lb://pigx-upms-biz','0','2018-11-28 15:56:10','2018-11-28 15:56:39','0');
