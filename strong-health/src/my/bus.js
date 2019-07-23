//解析时间戳方法
export function getLocalTime(nS) { 
	//将时间戳（十三位时间搓，也就是带毫秒的时间搓）转换成时间格式
	// d.cTime = 1539083829787
	let date = new Date(nS);
	let year = date.getFullYear();
	let month = date.getMonth()+1;
	let day = date.getDate();
	month = month < 10 ? "0"+month:month;
	day = day < 10 ? "0"+day:day;
	date = year+'-'+month+'-'+day;
	//console.log(date); // 2018-10-09
	return date;
}
//健康资讯拿id跳转详情页
export function todetails(nid){ 
	console.log(nid)
	let routeData = this.$router.resolve({
		name:'healthdetails',
		query:{
			nid:nid
		}
	});
	window.open(routeData.href,"_blank");
}