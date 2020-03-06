import axios from '@/utils/request'

const BASE_PRE = '/api/board';

export function login(paramter){
  return axios({
    url: BASE_PRE+'/account/login',
    method: 'post',
    data:paramter
  })
}

export function logout() {
  return axios({
    url: BASE_PRE+'/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function queryUsers(params){
  return axios({
    url: BASE_PRE+'/user/list',
    method: 'get',
    params:params
  })
}


export function delbase(params){
  return axios({
    url: BASE_PRE+'/man/deleteBsm',
    method: 'get',
    params:params
  })
}

export function registUser(data){
  return axios({
    url: BASE_PRE+'/user/regist',
    method: 'post',
    params:data
  })
}

export function deleteUser(id){
  return axios({
    url: BASE_PRE+'/user/delete',
    method: 'get',
    params:id
  })
}
export function deleteproduce(id){
  return axios({
    url: BASE_PRE+'/producttest/delete',
    method: 'get',
    params:id
  })
}
export function deletefarm(id){
  return axios({
    url: BASE_PRE+'/farmer/delete',
    method: 'get',
    params:id
  })
}

export function getMenus(){
  return axios({
    url: BASE_PRE+'/resource/menus',
    method: 'get',
    //params:id
  })
}

export function addInfo(parameter){
  return axios({
    url: BASE_PRE+'/user/regist',
    method: 'post',
    data: parameter
  })
}
export function addfarm(parameter){
  return axios({
    url: BASE_PRE+'/farmer/insert',
    method: 'post',
    data: parameter
  })
}

export function updatefarm(parameter){
  return axios({
    url:BASE_PRE+'/farmer/update',
    method:'post',
    data:parameter
  })
}

export function updatefarmpw(parameter){
  return axios({
    url:BASE_PRE+'/farmer/updatePassword',
    method:'post',
    data:parameter
  })
}
export function additem(parameter){
  return axios({
    url: BASE_PRE+'/testitem/add',
    method: 'post',
    data: parameter
  })
}

export function distri(parameter){
  return axios({
    url: BASE_PRE+'/man/distri',
    method: 'post',
    data: parameter
  })
}
export function deleteservice(parameter){
  return axios({
    url: BASE_PRE+'/man/delete',
    method: 'get',
    params:parameter
  })
}
export function addservice(parameter){
  return axios({
    url: BASE_PRE+'/man/add',
    method: 'post',
    data: parameter
  })
}
export function updateservice(parameter){
  return axios({
    url:BASE_PRE+'/man/update',
    method:'post',
    data:parameter
  })
}
export function getUserList(parameter){
  return axios({
    url: BASE_PRE+'/user/list',
    method: 'get',
    params: parameter
  })
}
export function delworkposition(parameter){
  return axios({
    url: BASE_PRE+'/man/deletePsm',
    method: 'get',
    params: parameter
  })
}
export function updateUser(parameter){
  return axios({
    url:BASE_PRE+'/user/update',
    method:'post',
    data:parameter
  })
}
export function updateproduce(parameter){
  return axios({
    url:BASE_PRE+'/producttest/update',
    method:'post',
    data:parameter
  })
}
export function distriWorkPosition(parameter){
  return axios({
    url:BASE_PRE+'man/distriOnePosition',
    method:'post',
    data:parameter
  })
}
export function getservicepostlist(){
  return axios({
    url:BASE_PRE+'/workPosition/all',
    method:'get',
  })
}

export function getUsers(parameter){
  return axios({
    url:BASE_PRE+'/user/users',
    method:'get',
    params:parameter
  })
}
export function getFarmerlist(parameter){
  return axios({
    url:BASE_PRE+'/farmer/list',
    method:'get',
    params:parameter
  })
}

export function getServicelist(parameter){
  return axios({
    url:BASE_PRE+'/man/list',
    method:'get',
    params:parameter
  })
}
export function getProducttestlist(parameter){
  return axios({
    url:BASE_PRE+'/producttest/list',
    method:'get',
    params:parameter
  })
}


export function addpro(parameter){
  return axios({
    url:BASE_PRE+'/producttest/add',
    method:'post',
    data:parameter
  })
}

export function getworklist(parameter){
  return axios({
    url:BASE_PRE+'/workOrder/list',
    method:'get',
    params:parameter
  })
}

export function addworklist(parameter){
  return axios({
    url:BASE_PRE+'/workOrder/insert',
    method:'post',
    data:parameter
  })
}
export function updateworklist(parameter){
  return axios({
    url:BASE_PRE+'/workOrder/update',
    method:'post',
    data:parameter
  })
}

export function disbase(parameter){
  return axios({
    url:BASE_PRE+'/man/distriOneBase',
    method:'post',
    data:parameter
  })
}
export function getbaselist(parameter){
  return axios({
    url:BASE_PRE+'/baseInfo/all',
    method:'get',
    params:parameter
  })
}
export function getwalkerlist(parameter){
  return axios({
    url:BASE_PRE+'/walker/listall',
    method:'get',
    params:parameter
  })
}
export function sendorder(parameter){
  return axios({
    url:BASE_PRE+'/workOrder/sendorder',
    method:'get',
    params:parameter
  })
}
export function getDictTypeList(parameter){
  return axios({
    url:BASE_PRE+'/dictType/list',
    method:'get',
    params:parameter
  })
}
export function insertDictType(parameter){
  return axios({
    url:BASE_PRE+'/dictType/insert',
    method:'post',
    data:parameter
  })
}
export function updateDictType(parameter){
  return axios({
    url:BASE_PRE+'/dictType/update',
    method:'post',
    data:parameter
  })
}
export function deleteDictType(parameter){
  return axios({
    url:BASE_PRE+'/dictType/delete',
    method:'get',
    params:parameter
  })
}
export function insertDictionary(parameter){
  return axios({
    url:BASE_PRE+'/dictionary/insert',
    method:'post',
    data:parameter
  })
}
export function deleteDictionary(parameter){
  return axios({
    url:BASE_PRE+'/dictionary/delete',
    method:'get',
    params:parameter
  })
}
export function updateDictionary(parameter){
  return axios({
    url:BASE_PRE+'/dictionary/update',
    method:'post',
    data:parameter
  })
}
export function getSoilTestList(parameter){
  return axios({
    url:BASE_PRE+'/soiltest/list',
    method:'get',
    params:parameter
  })
}
export function insertSoilTest(parameter){
  return axios({
    url:BASE_PRE+'/soiltest/insert',
    method:'post',
    data:parameter
  })
}
export function updateSoilTest(parameter){
  return axios({
    url:BASE_PRE+'/soiltest/update',
    method:'post',
    data:parameter
  })
}
export function deleteSoilTest(parameter){
  return axios({
    url:BASE_PRE+'/soiltest/delete',
    method:'get',
    params:parameter
  })
}
export function getAllBaseInfo(parameter){
  return axios({
    url:BASE_PRE+'/batch/all',
    method:'get',
    params:parameter
  })
}
export function getBlocksByBaseId(parameter){
  return axios({
    url:BASE_PRE+'/block/getBlockByBaseId',
    method:'get',
    params:parameter
  })
}
export function insertSoilTestLotRel(parameter){
  return axios({
    url:BASE_PRE+'/soiltest/insertSoilTestLotRel',
    method:'post',
    data:parameter
  })
}
export function getBasicInfo(parameter){
  return axios({
    url:BASE_PRE+'/home/getBaseById',
    method:'get',
    params:parameter
  })
}

export function getBlockInfo(parameter){
  return axios({
    url:BASE_PRE+'/home/getLotListByBaseId',
    method:'get',
    params:parameter
  })
}
export function getBaseworklist(parameter){
  return axios({
    url:BASE_PRE+'/home/getFarmingRecordByBatchId',
    method:'get',
    params:parameter
  })
}
export function getLastEnvMonitor(parameter){
  return axios({
    url:BASE_PRE+'/home/getLastEnvMonitor',
    method:'get',
    params:parameter
  })
}
export function getLastSoilTestByLotId(parameter){
  return axios({
    url:BASE_PRE+'/home/getLastSoilTest',
    method:'get',
    params:parameter
  })
}

export function loginHome(parameter){
  return axios({
    url:BASE_PRE+'/login',
    method:'post',
    data:parameter
  })
}
export function getLotListByBaseId(parameter){
  return axios({
    url:BASE_PRE+'/home/getLotListByBaseId',
    method:'get',
    params:parameter
  })
}
export function getLastEnvMonitorBySiteId(parameter){
  return axios({
    url:BASE_PRE+'/home/getLastEnvMonitor',
    method:'get',
    params:parameter
  })
}
export function getWorkOrderListByBaseId(parameter){
  return axios({
    url:BASE_PRE+'/home/getWorkOrderList',
    method:'get',
    params:parameter
  })
}
export function getLastSoilTest(parameter){
  return axios({
    url:BASE_PRE+'/home/getLastSoilTest',
    method:'get',
    params:parameter
  })
}
export function getBaseInfoByPrimaryId(parameter){
  return axios({
    url:BASE_PRE+'/home/getBaseById',
    method:'get',
    params:parameter
  })
}
export function logouthome(parameter){
  return axios({
    url:BASE_PRE+'/logout',
    method:'post',
    data:parameter
  })
}
export function getalldata(parameter){
  return axios({
    url:BASE_PRE+'/home/getBaseDataCount',
    method:'get',
    params:parameter
  })
}
export function getTodayEnvMonitor(parameter){
  return axios({
    url:BASE_PRE+'/home/getTodayEnvMonitor',
    method:'get',
    params:parameter
  })
}

export function getpici(parameter){
  return axios({
    url:BASE_PRE+'/home/batch/selectByBaseId',
    method:'get',
    params:parameter
  })
}
export function queryBaseById(parameter){
  return axios({
    url:BASE_PRE+'/home/getBaseById',
    method:'get',
    params:parameter
  })
}
export function getnli(parameter){
  return axios({
    url:BASE_PRE+'/home/lunar/getLunarInfo',
    method:'get',
    params:parameter
  })
}
export function insertnoli(parameter){
  return axios({
    url:BASE_PRE+'/home/lunar/insert',
    method:'post',
    data:parameter
  })
}
export function getjieqi(parameter){
  return axios({
    url:BASE_PRE+'/home/solarTerms/getSolarTerms',
    method:'get',
    params:parameter
  })
}
export function getTodaySoilTestByLotId(parameter){
  return axios({
    url:BASE_PRE+'/home/getTodaySoilTestByLotId',
    method:'get',
    params:parameter
  })
}
export function getLotByPrimaryId(parameter){
  return axios({
    url:BASE_PRE+'/home/getLotByPrimaryId',
    method:'get',
    params:parameter
  })
}
export function getFarmerInfoByBaseId(parameter){
  console.log(parameter)
  return axios({
    url:BASE_PRE+'/person/getFarmerInfoByBaseId',
    method:'get',
    params:parameter
  })
}
export function getWalkerListByBaseId(parameter){
  console.log(parameter)
  return axios({
    url:BASE_PRE+'/person/getWalkerListByBaseId',
    method:'get',
    params:parameter
  })
}
export function getManByBaseId(parameter){
  console.log(parameter)
  return axios({
    url:BASE_PRE+'/person/getManByBaseId',
    method:'get',
    params:parameter
  })
}
export function listByPage(parameter){
  console.log(parameter)
  return axios({
    url:BASE_PRE+'/policyNews/listByPage',
    method:'get',
    params:parameter
  })
}
