
var startTime=(new Date()).getTime()
var db=connect('company')
var rs=db.randominfo.find({username:'54skan9'})
rs.forEach(rs=>{printjson(rs)});
var runtime=(new Date()).getTime()-startTime
print('[demo]:log print success：'+runtime+'ms');


// 建立索引

// db.randominfo.ensureIndex({username:1})