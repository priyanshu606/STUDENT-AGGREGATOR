const priyanshu = {
    name:"priyanshu singh",
    sayMyname: function(){
        console.log(this.name)
    }
}

setTimeout(priyanshu.sayMyname.bind(priyanshu),3*1000)