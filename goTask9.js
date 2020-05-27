var db=connect('company');
db.info.insert({contextInfo:"I am a programmer,I love life,love family!"})
db.info.insert({contextInfo:"I am a programmer,I love drink,love game!"})
print('[demo]:log print success：');


// db.info.ensureIndex({contextInfo:'text'})
//db.info.getIndexes()
// db.info.find({$text:{$search:'programmer love -drink'}})
// db.info.find({$text:{$search:"\"love drink\" family"}})