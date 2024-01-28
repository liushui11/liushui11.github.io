function login()//登录方法 
{
	var mail = document.getElementById("mail").value;
	var option = document.getElementById("option").value;
	var password = document.getElementById("password").value;
	var code = document.getElementById("code").value;
	if(check_mail_login()==true&&check_psw_login()==true&&check_code_login()==true)
	{
		alert(
			'确认登录信息\n'+
			'电子邮箱：'+mail+'@'+option+'\n'+
			'登录成功！！！\n'
		);
		return true;
	}
	if(check_mail_login()==false)
	{
		alert("您的电子邮箱有错误，请检查后再登录！");
		return false;
	}
	if(check_psw_login()==false)
	{
		alert("您的密码有错误，请检查后再登录！");
		return false;
	}
	if(check_code_login()==false)
	{
		alert("您的验证码有错误，请检查后再登录！");
		return false;
	}
}
function check_mail_login()//检验电子邮箱
{
	var mail = document.getElementById("mail").value;
	var mail_check=/^[a-zA-Z]\w{5,17}$/;
	var mailInfo = document.getElementById("mailInfo");
	if(mail.match(mail_check)==null){
		mailInfo.innerHTML="<font color='red' size='4'>×</font>";
		return false;
	}else {
		mailInfo.innerHTML="<font color='green' size='4'>√</font>";
	}
	return true;
}

function check_psw_login()//检验密码
{
	var psw = document.getElementById("password").value;
	var psw_check=/^[0-9a-zA-Z.,;'/]{6,16}$/;
	var psw1Info = document.getElementById("pswInfo");
	if(psw.match(psw_check)==null){
		pswInfo.innerHTML="<font color='red' size='4'>×</font>";
		return false;
	}else {
		pswInfo.innerHTML="<font color='green' size='4'>√</font>";
	}
	return true;
}

function check_code_login()//检验验证码
{
	var code = document.getElementById("code").value;
	var code_check=2907;
	var codeInfo = document.getElementById("codeInfo");
	if(code=="" || code!=code_check){
		codeInfo.innerHTML="<font color='red' size='4'>×</font>";
		return false;
	}else {
		codeInfo.innerHTML="<font color='green' size='4'>√</font>";
	}
	return true;
}