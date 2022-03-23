var blog={};
var name=11;

Object.defineProperty(blog,'name',{
    set: function(value){
        name = value+10
        console.log('欢迎来到'+ value)
    },
    get: function(){
        return name
    }
})

blog.name=5
console.log(blog.name)