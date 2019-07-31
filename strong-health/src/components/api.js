import axios from 'axios'
import qs from 'qs'
import {getStore,removeStore} from '@/common/storage'
import {router,that} from '../main.js'
//api接口地址
const ApiUrl = () => {
    let apiUrl
    if(process.env.NODE_ENV === 'development'){
//       apiUrl = 'http://www.300.com/api.html'
          apiUrl = 'http://www.200.com/api.html'
         // apiUrl = 'https://dev.qztrip.cn/api.html'
         // apiUrl = 'https://www-api.qztrip.cn/'
         // apiUrl = "https://pro.ftark.com/api.html"
         // apiUrl ="https://api-sandbox.ftark.com/"
         // apiUrl ="https://api.ftark.com/"
    }else if(process.env.NODE_ENV === 'production'){
         // apiUrl = 'http://www.100.com/api.html'
		 // apiUrl = 'https://dev.qztrip.cn/api.html'
          // apiUrl = 'https://api.qztrip.cn/'
//             apiUrl ="https://api-sandbox.ftark.com/"
            apiUrl ="https://api.ftark.com/"
    }
    return apiUrl
}


// 接口token验证
function post (method, data, callback) {
    data.method = method
    data.token = getStore('user_token')
    sendPost(ApiUrl(), qs.stringify(data), {}, callback)
}


// axios统一请求
function sendPost (url, data, config ={} ,callback){
    axios.post(url, data,{timeout: 1000 * 15}).then( response => {
        if(!response.data.status){
            // 异地登录，强制退出
            if(response.data.data === 14007) {
                that.$dialog.toast({mes:response.data.msg,callback:()=>{
                    removeStore('twopassword')
                    removeStore('user_token')
                    router.replace('/login')
                }})
                return false;
            }
        }
        // 11001 为系统关闭时间。强制退出。
        if(response.data.status === 11001){
            that.$dialog.toast({mes:response.data.msg,timeout:2000,callback:() =>{
                removeStore('twopassword')
                removeStore('user_token')
                that.$router.push({path:'/login'})
                return false;
            }})
        }
        callback(response.data)
    }).catch(err => {
        // 登录超时提醒
        if(err.message.includes('timeout')){
            that.$dialog.toast({mes:'网络不稳定,请稍后操作'})
            that.$dialog.loading.close();
            return false;
        }
        if(err && err.response){
            switch(err.response.status){
                case 400:
                    err.message = '请求参数错误';
                    break;
                case 408:
                    err.message ="请求超时";
                    break;
                case 404:
                    err.message = `请求地址出错: ${err.response.config.url}`;
                    break;
                default:
                    break;
            }
            that.$dialog.toast({mes:err.message})
        }
    })
}

// 图片上传
export const uploadFile = (data, describe,type,callback) =>{
    data.append('method', 'feedback.problemsubmit')
    let token = getStore("user_token")
    data.append('token',token)
    data.append('describe',describe)
    data.append('type',type)
    let param ={ headers: { 'Content-Type': 'multipart/form-data' } }
    sendPost(ApiUrl(),data,param,callback)
}


// 登陆
export const login = (data, callback) => post('member.login', data, callback)

// 登录短信
export const loginSms = (data, callback) =>post('member.loginVerifyMobile', data, callback)

// 登录短信开关
export const loginSmsSwitch = (data,callback) =>post('member.getLogin', data, callback)

// 二级密码
export const twopassword = (data, callback) => post('member.twoLogin', data, callback)

// 忘记密码
export  const forgetPassword = (data, callback) => post('member.resetPasswordSms', data, callback)

// 系统配置开关
export const switchSystem = (data, callback) => post('system.getNotNeedLoginConfig', data, callback)

// 验证验证码
export const checkSms = (data,callback) => post('member.check_sms', data, callback)

// 忘记密码中重置密码
export const resetPassword = (data, callback) =>post('member.doResetPassword', data, callback)

// 极验验证
export const verification = (data, callback) => post('member.getGeeCode', data, callback)

// 注销
export const outlogin = (data, callback) => post('member.logout', data, callback)

// 注册
export const register = (data, callback) => post('member.register',data, callback)

// 注册发送验证短信
export const registerSendCode =(data, callback) =>post('member.registerVerifyMobile', data, callback)

// 注册短信验证
export const registerCheckCode =(data, callback) =>post('member.checkVerifyMobile', data, callback)

// 获取个人资料
export const userinfo = (data, callback) => post('member.getProfile',data, callback)

// 修改个人资料
export const edituserinfo =(data, callback) =>post('member.editProfile', data, callback)

// 红包积分
export const bonus = (data, callback) => post('bonus.bonus', data, callback)

//增值申请
export const addapply = (data, callback) => post('assets.applyupgrade', data, callback)

// 提现申请
export const applyrefund = (data, callback) => post('assets.applyrefund', data, callback)

//提取金额
export const draw = (data, callback) => post('assets.drawing', data, callback)

// 新提现申请
export const newApplyrefund = (data, callback) =>post('assets.getConsumptionApplyConfig', data, callback)

// 新提取金额
export const newDraw = (data, callback) =>post('assets.processConsumptionApply', data, callback)

// 数字资产
export const wallet =(data, callback) => post('bonus.wallet', data, callback)

//转账页面
export const transform = (data, callback) => post('assets.transformaccounts', data, callback)

//转账提交
export const transfer = (data, callback) => post('assets.transfer', data, callback)

// 转换页面
export const transferChange = (data, callback) => post('assets.transform', data, callback)

// 转换提交页面
export const convert = (data, callback) => post('assets.convert', data, callback)

// 会员激活数据获取
export const getActivation =(data, callback) =>post('member.getActivationData', data, callback )

//会员激活
export const activation = (data, callback) => post('member.activation', data, callback)

// 商城消费区
export const mall = (data, callback) => post('mall.store',data, callback)

// 商城消费级别
export const mallStore = (data, callback) => post('mall.store_goods', data, callback)

// 商城详情
export const mallDetail =(data, callback) => post('mall.goods_detail', data, callback)

// 订单详情
export const orderList =(data, callback) => post('order.orderlist', data, callback)

// 提交订单
export const confirmOrder =(data, callback) => post('order.add', data, callback)

// 生成订单
export const createOrder =(data, callback) => post('mall.createorder', data, callback)

// 确认收货
export const receiptGoods =(data, callback) => post('order.confirmation_of_receipt', data, callback)

// 删除订单
export const orderDelete =(data, callback) => post('order.delete', data, callback)

// 获取用户的收货地址列表
export const addressList = (data, callback) =>post('address.addresslist',data, callback)

// 获取收货地址详情
export const addressDetail = (data, callback) =>post('address.getaddress',data,callback)

// 收货地址编辑
export const editAddress =(data, callback) =>post('address.edit',data,callback)

// 收货地址删除
export const removeShip =(data, callback) =>post('address.delete',data, callback)

//奖励查询
export const rewardaward =(data, callback) =>post('assets.rewardaward', data, callback)

//奖励查询时间查询
export const searchaward =(data, callback) =>post('assets.searchrewardaward', data, callback)

//流水明细
export const flowingwater =(data, callback) =>post('assets.searchflowingwater', data, callback)

// 会员关联
export const associate =(data, callback) =>post('member.associate', data, callback)

// 获取用户关联
export const getAssociate =(data, callback) =>post('member.getAssociateInfo', data, callback)

// 解除关联
export const cancelAssociate =(data, callback) =>post('member.cancelAssociate', data, callback)

// 首页公告
export const indexNews =(data, callback) =>post('news.index', data, callback)

// 公告详情
export const notice = (data, callback) =>post('news.notice', data, callback)

//  会员注册
export const memberRegister = (data, callback) =>post('member.register',data, callback)

// 会员升级获取
export const getUpgrade = (data, callback) =>post('member.getUpgradeData', data, callback)

// 会员升级
export const upgrade =(data, callback) =>post('member.upgrade', data, callback)

// 系谱图
export const familyTree =(data, callback) =>post('member.familyTree', data, callback)

// 系谱图右区判断
export const checkArea =(data, callback) =>post('member.checkHaveRocmment', data, callback)

// 系谱图搜索
export const treeSearch =(data, callback) =>post('member.familyTreesearch', data, callback)

// 系谱图返回上一层
export const returnFront =(data, callback) =>post('member.getParentnode', data, callback)

// 系谱图进入最底层
export const returnBottom = (data, callback) =>post('member.familyTreeBottom', data, callback)

// 推荐图
export const inviteTree =(data, callback) =>post('member.inviteTree', data, callback)

// 推荐图搜索
export const searchinviteTree =(data, callback) =>post('member.inviteTreesearch', data, callback)

// 修改密码
export const editPwd =(data, callback) =>post('member.editPwd', data, callback)

// 收款二维码图
export const qrcode = (data, callback) =>post('wallet.receiveQrcode', data, callback)

// 扫二维码检验提交ID
export const chectId = (data, callback) =>post('wallet.checkQrCode', data, callback)

// 扫码转账
export const scanPay = (data, callback) =>post('wallet.transfer', data, callback)

// 付款二维码生成
export const payCode = (data, callback) =>post('wallet.payQrCode', data, callback)

// 监听付款完成
export const checkQrCode = (data, callback) =>post('wallet.checkSelfPayQrCode', data, callback)

// 钱包首页
export const walletindex = (data, callback) =>post('wallet.index', data, callback)

// 交易记录
export const transferRecord = (data, callback) =>post('wallet.transferRecord', data, callback)

// 账单详情
export const transactionDetails = (data, callback) =>post('wallet.transactionDetails', data, callback)

// 绑定手机短信
export const sms = (data, callback) =>post('sms.send',data, callback)

// 修改绑定手机号码
export const bindPhone =(data, callback) =>post('member.modifyTelephone', data, callback)

// 限制绑定手机号码
export const hasBindPhone =(data, callback) =>post('member.getTelephone', data, callback)

// 长时间未操作是否自动退出
export const getAutologout =(data, callback) =>post('system.getAutologout', data, callback)

// 问题反馈
export const feedback = (data, callback) =>post('feedback.index', data, callback)

// 提交反馈
export const problemsubmit =(data, callback) =>post('feedback.problemsubmit', data, callback)

// 下载最新版apk
export const download =(data, callback) =>post('apk.download',data,callback)

// 获取谷歌验证二维码和密钥
export const getGoogleverify =(data, callback) =>post('googleverify.getSecret', data, callback)

// 绑定谷歌验证
export const bindGoogleverify =(data, callback) =>post('googleverify.bind', data, callback)

// 关闭/开启谷歌验证
export const switchGoogleverify =(data, callback) =>post('googleverify.openOrClose', data, callback)

// 分享二维码
export const shareQrcode = (data, callback) =>post('share.index', data, callback)

// 首页轮播图
export const getImg = (data, callback) =>post('advert.getCarouselImages', data, callback)

// 旧申请提款（已被弃用）
export const Withdraw = (data, callback) =>post('assets.applyWithdraw', data, callback)

// 获取协议下载地址
export const enclosure =(data, callback) =>post('member.enclosure', data, callback)

// 转送优惠券
export const couponTransfer =(data, callback) =>post('coupon.transfer', data, callback)

// 领取优惠券
export const couponReceive = (data, callback) =>post('coupon.receive', data, callback)

// 优惠券列表
export const couponIndex = (data, callback) =>post('coupon.index', data, callback)

// 获取门票列表
export const ticketList = (data, callback) =>post('ticket.index', data, callback)

// 获取门票详情
export const ticketDetail = (data, callback) =>post('ticket.getDetails', data, callback)

// 提交报名表单
export const submitTicketForm =(data, callback) =>post('ticket.signUp', data, callback)

// 提交订单
export const submitOrder =(data, callback) =>post('ticket.addOrder', data, callback)

// 收藏或取消收藏
export const collect = (data, callback) =>post('ticket.collect', data, callback)

// 获取收藏列表
export const collectList = (data, callback) =>post('ticket.getCollectList', data, callback)

// 获取订单列表
export const ticketOrderList =(data, callback) =>post('ticket.getOrderList', data, callback)

// 获取确认订单列表
export const confirmOrderList =(data, callback) =>post('ticket.confirmOrder', data, callback)

// 支付订单
export const payTicket = (data, callback) =>post('ticket.payment', data, callback)

// 门票评价
export const ticketEvaluate =(data, callback) =>post('ticket.comment', data, callback)

// 票券
export const ticketCoupon = (data, callback) =>post('ticket.getOrderAllNumber', data, callback)

// 记录列表
export const recordList = (data, callback) =>post('assets.withdrawList', data, callback)

// 记录撤销
export const uaserRecord = (data, callback) =>post('assets.cancelWithdraw', data, callback)
// 旅游申请
export const tourApply = (data, callback) =>post('assets.Tourism', data, callback)
