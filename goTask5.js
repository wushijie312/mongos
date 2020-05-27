// 复制到终端运行
db.workmate.find({age:{$in:[17,30]}},{name:true,"skill.skillone":true,age:1,_id:0})
// 复制到终端运行
db.workmate.find({$or:[{age:{$gte:30}},{"skill.skillone":"web1"}]},{name:true,"skill.skillone":true,age:1,_id:0})
// 复制到终端运行
db.workmate.find({age:{$not:{$lte:30,$gte:20}}},{name:true,"skill.skillone":true,age:1,_id:0})
// 复制到终端运行
db.workmate.find({interest:"ks"},{name:true,"interest":true,age:1,_id:0})
// 复制到终端运行
db.workmate.find({interest:{$all:['ks','xz']}},{name:true,"interest":true,age:1,_id:0})
//查询interest数组中ks和xz的人 和||差不多
db.workmate.find({interest:{$in:['ks','xz']}},{name:true,"interest":true,age:1,_id:0})
//查询interest数组中数量为3的数据
db.workmate.find({interest:{$size:3}},{name:true,"interest":true,age:1,_id:0})
//查询interest数组中$slice:2显示前两个
db.workmate.find({interest:{$size:3}},{name:true,"interest":{$slice:2},age:1,_id:0})
//查询interest数组中$slice:2显示最后一个
db.workmate.find({interest:{$size:3}},{name:true,"interest":{$slice:-1},age:1,_id:0})
//查询 limit：2 分页2个一页sort排序按age：1正序排,skip是跳过的意思
db.workmate.find({},{name:true,"interest":{$slice:-1},age:1,_id:0}).limit(2).skip(0).sort({age:1})