const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot38dw8/",
            name: "springboot38dw8",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot38dw8/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "疫情网课管理系统"
        } 
    }
}
export default base
