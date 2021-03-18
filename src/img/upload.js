const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : function(req, res, cb){
        cb(null, '../uploads');
    },
    filename: function(req, res, cb){
        cb(null, new Data().getTime + path.extname(file.origiginalname));
    }
});

const fileFilter = (req, file, cb)=>{
 if(file.mimeType === 'image.jpg' || file.mimeType === 'image.png'){
     cb(null, true);
 }else{
     cb(new Error('Unsoported files'), false);
 }
}


const upload = multer({
    storage: storage,
    limits: {
        fileSize:1024+1024+10
    },
    fileFilter:fileFilter
});

module.exports = {
    upload: upload
}
