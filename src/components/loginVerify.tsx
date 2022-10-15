

const LoginVerify = () => {
let data:any|null=sessionStorage.getItem("users");
console.log('1',data);

 let newData=JSON.parse(data);
 console.log('2',newData);
return newData
}

export default LoginVerify