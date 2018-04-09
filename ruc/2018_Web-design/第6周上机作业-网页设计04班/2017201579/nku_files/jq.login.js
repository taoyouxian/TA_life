var login={
	loginData:[{
		login:"js",name:"nankai.edu.cn",action:"http://nankai.edu.cn/coremail/index.jsp",params:{
			domain:"nankai.edu.cn",uid:"uid",password:"password",'action:login':""
		}
	}
	,{
		login:"xs",name:"mail.nankai.edu.cn",action:"https://entryhz.qiye.163.com/domain/domainEntLogin",params:{
			domain:"mail.nankai.edu.cn",uid:"uid",password:"password",'action:login':""
		}
	}
	
	],init:function(){
		var $loginSelect=$('#loginSelect');
		var $loginUserName=$('#loginUserName');
		var $loginPassword=$('#loginPassword');
		var $loginParas=$('#loginParas');
		var md=login.loginData;
		var p=[];
		$loginSelect.change(function(){
			if($(this).val() === 'js'){
				$('.inputnm input').attr('id','loginUserName');
				$('.inputnm input').attr('name','uid');
				$('.inputpw input').attr('id','loginPassword');
			}else{
				$('.inputnm input').attr('id','account_name');
				$('.inputnm input').attr('name','account_name');
				$('.inputpw input').attr('id','password');
			}
			var loginName=$(this).val();
			var m=login.find(loginName,md);
			if(m){
				p=[];
				for(var key in m.params){
					p.push('<input type="hidden" name="'+key+'" value="'+m.params[key].replace(/uid/,$loginUserName.val()).replace(/password/,$loginPassword.val())+'" />')
				};
				$loginParas.empty().html(p.join(''));
				$('#loginForm').attr('action',m.action)
			}
		}).change();
		$('#loginForm').bind('submit',function(){
			return login.check()
		})
	}
	,check:function(){
		var $loginSelect=$('#loginSelect');
		var $loginUserName=$('#loginUserName');
		var $loginPassword=$('#loginPassword');
		if($loginUserName.val()==''||$loginUserName.val()=='请输入用户名'){
			alert('请输入用户名');
			return false
		}
		else if($loginPassword.val()==''||$loginPassword.val()=='请输入密码'){
			alert('请输入密码');
			return false
		}
		else{
			$loginSelect.change();
			$loginPassword.val('');
			outWin=window.open('','','scrollbars=yes,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes');
			doc=outWin.document;
			doc.open('text/html');
			doc.write('<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>正在登陆请稍后...</title></head><body onload="document.tmpForm.submit()">');
			doc.write('<div style="width:100%; height:60px; line-height:60px;font-size:16pt; color: #444; text-indent:1em;">正在登陆请稍后.....</div><form name="tmpForm" action="'+$('#loginForm').attr('action')+'" method="post">'+$('#loginParas').html()+'</form></body></html>');
			doc.close();
			return false
		}
	}
	,find:function(login,md){
		for(var i=0;i<md.length;i++){
			if(md[i].login==login)return md[i]
		}
	}
}