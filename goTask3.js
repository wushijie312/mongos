var work1={
  name:'wushijie1',
  age:40,
  sex:0,
  skill:{
    skillone:'web1',
    skilltwo:'wan1',
    skillthr:'mongo1'
  },
  regeditTime:new Date(),
  interest:['dy']
}
var work2={
  name:'wushijie2',
  age:30,
  sex:1,
  skill:{
    skillone:'web',
    skilltwo:'wan',
    skillthr:'mongo'
  },
  regeditTime:new Date(),
  interest:['fd']
}
var work3={
  name:'wushijie3',
  age:30,
  sex:1,
  skill:{
    skillone:'web',
    skilltwo:'wan',
    skillthr:'mongo'
  },
  regeditTime:new Date(),
  interest:['xz']
}
var work4={
  name:'wushijie4',
  age:18,
  sex:1,
  skill:{
    skillone:'web',
    skilltwo:'wan',
    skillthr:'mongo'
  },
  regeditTime:new Date(),
  interest:["hh",'ks']
}
var work5={
  name:'wushijie5',
  age:20,
  sex:1,
  skill:{
    skillone:'web',
    skilltwo:'wan',
    skillthr:'mongo'
  },
  regeditTime:new Date(),
  interest:["hh",'ks','xz']
}

var db=connect('company')
var workarr=[work1,work2,work3,work4,work5]
db.workmate.insert(workarr)
print('[success] the data is inserted successfully!')
