//进入建权限的mongo数据库  jjjj用户名 -----------------  123456 密码
mongo -u jjjj -p 123456 127.0.0.1:27017/admin

//备份
mongodump 
   --host 127.0.0.1
   --port 27017
   --out D:/databack/backup
   --collection myCollections
   --db test
   --username username
   --password password

//    mongodump --host 127.0.0.1 --port 27017 --out D:/beifens

// 恢复
mongorestore 
   --host 127.0.0.1
   --port 27017
   --username username
   --password password
   <path to the backup>

//    mongorestore --host 127.0.0.1 --port 27017 D:/beifens
