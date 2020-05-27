var myModify={
  findAndModify:'workmate',
  query:{name:'wushijie2'},
  update:{$set:{age:17}},
  new:true
}

var resultMessage=db.runCommand(myModify)

printjson(resultMessage)

