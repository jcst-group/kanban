import { IS_OSS } from "@/store/mutation-types"
import {showosspic,uploadosspic} from "@/api/allapi"
import Vue from 'vue';

Vue.ls.set(IS_OSS,true);


/*...显示图片...*/
//oss
const showPicFromOss='http://gdnongxin.oss-cn-beijing.aliyuncs.com/';
//本地
const showPicFromLocal='/upload/show/';
//本地缩略图
const showCompressionPicLocal='/upload/show/compression/';
/*......*/

/*...上传用户头像...*/
const uploadUserPicToOss='/api/user/uploadOssPic';
const uploadUserPicToLocal='/api/upload/image';
/*......*/

/*...上传基地图片...*/
const uploadBasePicToOss='/api/baseInfo/uploadOssPic';
const uploadBasePicToLocal='/api/baseInfo/insertPicture';
/*......*/

/*...上传全景图片...*/
const uploadPanoramaPicToOss='/api/basePanorama/addOssPic';
const uploadPanoramaPicToLocal='/api/basePanorama/addPic';
/*......*/

/*...上传农产品图片...*/
const uploadAnadromousManagePicToOss='/api/anadromousManage/uploadOssPic';
const uploadAnadromousPicToLocal='/api/anadromousManage/addPicture';
/*......*/

/*...上传农产品文件...*/
const uploadAnadromousManageFileToOss='/api/nxFileInfo/uploadOssFile';
const uploadAnadromousFileToLocal='/api/nxFileInfo/upload';
/*......*/

/*...下载农产品文件...*/
const dowAnadromousManageFileToOss='/api/nxFileInfo/downOssFile';
const dowAnadromousFileToLocal='/api/nxFileInfo/downFile';
/*......*/

/*...上传农事记录图片...*/
const uploadFarmWorkToOss='/api/pictureInfo/insertOssPic';
const uploadFarmWorkToLocal='/api/pictureInfo/insert';
/*......*/

/*...上传农事记录图片...*/
const uploadFarmAvatorToOss='/api/farmer/insertOssPicture';
/*......*/


//上传农事记录图片
export function getUploadFarmPic(){
    let is_oss= Vue.ls.get(IS_OSS);
    if(is_oss){
        return uploadFarmAvatorToOss;
    }else{
        return uploadUserPicToLocal;
    }
    
}

//上传农事记录图片
export function getUploadFarmWorkPic(){
    let is_oss= Vue.ls.get(IS_OSS);
    if(is_oss){
        return uploadFarmWorkToOss;
    }else{
        return uploadFarmWorkToLocal;
    }
    
}


//上传农产品文件
export function getUploadAnadromousFile(){
    let is_oss= Vue.ls.get(IS_OSS);
    if(is_oss){
        return uploadAnadromousManageFileToOss;
    }else{
        return uploadAnadromousFileToLocal;
    }
    
}

//下载农产品文件
export function getDowAnadromousFile(file_path,file_name){
    let is_oss= Vue.ls.get(IS_OSS);
    if(is_oss){
        return dowAnadromousManageFileToOss+'?fileUrl='+file_path+'&fileName='+file_name;
    }else{
        return dowAnadromousFileToLocal+'?fileUrl='+file_path+'&fileName='+file_name;
    }
    
}


//上传农产品图片
export function getUploadAnadromousImgUrl(){
    let is_oss= Vue.ls.get(IS_OSS);
    if(is_oss){
        return uploadAnadromousManagePicToOss;
    }else{
        return uploadAnadromousPicToLocal;
    }
    
}

//上传全景图
export function getUploadPanoramaImgUrl(){
    let is_oss= Vue.ls.get(IS_OSS);
    if(is_oss){
        return uploadPanoramaPicToOss;
    }else{
        return uploadPanoramaPicToLocal;
    }
    
}

//上传用户头像
export function getUploadImgUrl(){
    let is_oss= Vue.ls.get(IS_OSS);
    if(is_oss){
        return uploadUserPicToOss;
    }else{
        return uploadUserPicToLocal;
    }
    
}
//上传基地图片
export function getUploadBaseImg(){
    let is_oss= Vue.ls.get(IS_OSS);
    if(is_oss){
        return uploadBasePicToOss;
    }else{
        return uploadBasePicToLocal;
    }
}

//查看图片
export function getViewImgUrl(pic_path){
    let is_oss= Vue.ls.get(IS_OSS);
    if(is_oss){
       return showPicFromOss+pic_path;
    }else{
        return showPicFromLocal+pic_path;
    }
}

export function getViewCompressionImgUrl(pic_path,ShaKuSun){
    let is_oss= Vue.ls.get(IS_OSS);
    if(is_oss){
       return showPicFromOss+pic_path+'?x-oss-process=image/resize,m_lfit,h_'+ShaKuSun+',w_'+ShaKuSun;
    }else{
        return showCompressionPicLocal+pic_path+'/'+ShaKuSun+'/'+ShaKuSun;
    }
}