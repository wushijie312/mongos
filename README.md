# 简介
```
mongo goTask.js
```


#再次加载执行goTask.js
```
先执行mongo
load('goTask.js')
```
show dbs 显示数据库
use users 进入数据库没有则创建有则进入
show tables 显示表
db 查看当前数据库
插入大量数据时用批量加入//耗时少//for循环一个一个加入耗时多
//批量导入
var startTime=(new Date()).getTime()
var db=connect('log')
let arr =[]
for(let key in 1000){
  arr.push=key
}
db.user.insert(arr)
var runtime=(new Date()).getTime()-startTime
print('[demo]:log print success：'+runtime+'ms');
//输入结果：log print success：454ms


//循环加入
var startTime=(new Date()).getTime()
var db=connect('log')
for(let i=0; i< 1000;i++){
    db.user.insert({num:i})
   }
var runtime=(new Date()).getTime()-startTime
print('[demo]:log print success：'+runtime+'ms');
//输入结果：log print success：19ms
```

db.user.find()
db.user.insert({name:'wushijie',age:23})
db.user.update({name:'wushijie'},{age:30})//这个不行把以前的数据整条语句替换了换成下面语句即可用$set
//set
db.user.update({name:'wushijie'},{'$set':{age:30}})
//inc
db.user.update({name:'wushijie'},{'$inc':{age:-2}})//在原有的基础上-2
//unset
db.user.update({name:'wushijie'},{'$unset':{age:''}})
//multi
db.user.update({},{'$set':{sex:0}},{multi:true})//multi为true时给所有符合查询数据加，false时给查询符合条件第一个加
//upsert
db.user.update({name:'wushijie'},{'$set':{age:3}},{upsert:true})//查询符合的upsert为true时，如果没有这个参数则加上，为false没找到数据时则不加
//push
先执行db.user.insert({name:'wushijie4'},{arr:[]})

db.user.update({name:'wushijie4'},{'$push':{arr:30}})

//$ne
db.user.update({name:'kkk',in:{$ne:'playname'}},{$push:{in:'game'}})//判断数据中是否含有playname没有则加上，有则不修改


//$each
var newin=['sing','dance','code']

db.user.update({name:'kkk'},{$addToSet:{in:{$each:newin}}})//addToSet判断数据中是否含有'sing','dance','code'  没有则加上，有则不修改

//pop 1从数组末端开始删除，-1从数组开始位置删除
db.user.update({name:'kkk'},{$pop:{in:1}})

//数组定位修改  非应答式操作
db.user.update({name:'kkk'},{$set:{'in.2':'write'}})

db.runCommand({ping:1})
//返回结果：{ "ok" : 1 }  则表明数据库链接成功

// 复制到终端运行
//第二个参数筛选显示条件
db.workmate.find({"skill.skillone":"web"},{name:true,"skill.skillone":true,_id:false})
// 复制到终端运行   //查询年龄17到30之间的年龄
db.workmate.find({age:{$in:[17,30]}},{name:true,"skill.skillone":true,age:1,_id:0})

// 复制到终端运行   //查询年龄17到30不包含这个区间的
db.workmate.find({age:{$nin:[17,30]}},{name:true,"skill.skillone":true,age:1,_id:0})

// 复制到终端运行   //查询年龄大于30或者skillone是web1的
db.workmate.find({$or:[{age:{$gte:30}},{"skill.skillone":"web1"}]},{name:true,"skill.skillone":true,age:1,_id:0})
// 复制到终端运行   //查询年龄大于30和小于20的数据
db.workmate.find({age:{$not:{$lte:30,$gte:20}}},{name:true,"skill.skillone":true,age:1,_id:0})
// 复制到终端运行 
//查询interest数组中ks的人
db.workmate.find({interest:"ks"},{name:true,"interest":true,age:1,_id:0})
// 复制到终端运行
//查询interest数组中ks和xz的人 和&&差不多
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
// 建立索引 
//建立索引的目的是为了提高检索搜索数据速度
db.randominfo.ensureIndex({username:1})



//全文索引'text'

// db.info.ensureIndex({contextInfo:'text'})
//db.info.getIndexes()
//'programmer love -drink' 他们之间是||关系 -是排除-drink 
// db.info.find({$text:{$search:'programmer love -drink'}})
//查询有空格的情况
// db.info.find({$text:{$search:"\"love drink\" family"}})


//进入系统自带的admin数据库
//然后复制下面运行
db.createUser({
    user:'jjj',
    pwd:'123456',
    customData:{
        name:'技术世界',
        email:'1281310367@qq.com',
        age:18
    },
    roles:[
        {role:'read',db:'company'},'read'
    ]
})
// 查询创建的数据
db.system.users.find()



//删除
db.system.users.remove({user:'jjj'})
```
