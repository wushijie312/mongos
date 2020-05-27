
var startTime=(new Date()).getTime()
var db=connect('log')
let arr =[]
for(let key in 1000){
  arr.push=key
}
db.user.insert(arr)
var runtime=(new Date()).getTime()-startTime
print('[demo]:log print success：'+runtime+'ms');