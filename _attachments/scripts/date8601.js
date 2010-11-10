/* formatted ISO 8601 timestrings-

2010-06-21T10:41:37.132-04:00
2010-06-21T14:41:37Z
2010-06-21
*/
Date.prototype.fromISO= function(s){
	var day, tz, rx=  /^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/, p= rx.exec(s) || [];
	if(p[1]){
		day= p[1].split(/\D/).map(function(itm){
			return parseInt(itm, 10) || 0;
		});
		day[1]-= 1;
		day= new Date(Date.UTC.apply(Date, day));
		if(!day.getDate()) return NaN;
		if(p[5]){
			tz= parseInt(p[5], 10)*60;
			if(p[6]) tz += parseInt(p[6], 10);
			if(p[4]== "+") tz*= -1;
			if(tz) day.setUTCMinutes(day.getUTCMinutes()+ tz);
		}
		return day;
	}
	return NaN;
}
if(![].map){
	Array.prototype.map= function(fun, scope){
		var L= this.length, A= Array(this.length), i= 0, val;
		if(typeof fun== 'function'){
			while(i< L){
				if(i in this){
					A[i]= fun.call(scope, this[i], i, this);
				}
				++i;
			}
			return A;
		}
	}
}