import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

// import main from "./test"
import test from "./test"
import product from "./Views/Product/Product"
import detail from "./Views/Details/Details"

const mainRouter = new Router({
    mode: "history",
    routes: [
        // {
        //     path: "/",
        //     name: "main",
        //     component: main,
        // },
        {
            path: "/test/:id",
            name: "test",
            component: test,
        },
        {
            path: "/",
            name: "prod",
            component: product,
        },
        {
            path: "/detail",
            name: "detail",
            component: detail,
            props: true,
        },
    ],
})

export default mainRouter
