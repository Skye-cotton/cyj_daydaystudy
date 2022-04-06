import {reactive} from 'vue';
export function userFeatureX(){
    const state = reactive({
        foo: 1,
        bar: 2
    })

    // 逻辑运行状态

    // 返回时转换为ref
    return state;
}
