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