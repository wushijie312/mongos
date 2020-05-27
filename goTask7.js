// 生成随机数
function GetRandomNum(min,max){
    let range=max-min;
    let rand=Math.random();
    return (min+Math.round(rand*range));
}

// console.log(GetRandomNum(6,20));

// 生成随机用户名
function GetRandomUserName(min,max){
    let tempStringArray="123456789qwertyuiopasdfghjklzxcvbnm".split("");
    let outputtext="";
    for(let i=1;i<GetRandomNum(min,max);i++){
        outputtext+=tempStringArray[GetRandomNum(0,tempStringArray.length)]
    }
    return outputtext;
}

// console.log(GetRandomUserName(6,20));


// 200万数据

var startTime=(new Date()).getTime();
var db=connect("company");
db.randominfo.drop();
var tempinfo=[];
for(let i=0;i<2000000;i++){
    tempinfo.push({
        username:GetRandomUserName(7,11),
        regediteTime:new Date(),
        randNum0:GetRandomNum(1000,2000),
        randNum1:GetRandomNum(1000,2000),
        randNum2:GetRandomNum(1000,2000),
        randNum3:GetRandomNum(1000,2000),
        randNum4:GetRandomNum(1000,2000),
        randNum5:GetRandomNum(1000,2000),
        randNum6:GetRandomNum(1000,2000),
        randNum7:GetRandomNum(1000,2000),
        randNum8:GetRandomNum(1000,2000),
        randNum9:GetRandomNum(1000,2000)
    })
}
db.randominfo.insert(tempinfo);

var endTime=(new Date()).getTime()-startTime;

print("[demo]:.....endtime:"+endTime+'ms')
