const dinner = {
    meal: 'tacos'
}


const handler = {
    // 绑定Proxy，拦截做一些处理
    get(target,property,receiver) {
        // console.log(target,property,receiver) // { meal: 'tacos' } | meal | { meal: 'tacos' }
        track(target, property)
        return Reflect.get(...arguments)
    },
    set(target, property, value, receiver) {
      trigger(target, property)
      return Reflect.set(...arguments)
    }
}

const proxy = new Proxy(dinner,handler)

console.log(proxy.meal)