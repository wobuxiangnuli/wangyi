//导出所有的接口请求函数
import req from './req'
import base from './base';



//获取分类列表
export const getCategoryList=()=>req.get(base.categoryUrl);

export const getNew=()=>req.get(base.findNewUrl);


//获取首页轮播图数据
export const getBanner=()=>req.get(base.banerUrl);