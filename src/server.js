import { Server, Model } from 'miragejs';

export function makeServer( {environment = "development" } = {} ) {

    let server = new Server({
        environment, 

        models: {
            todo: Model.extend(),
        }, 

        seeds(server) {
            server.create("todo", { content: "KLearn Mirage JS" })
            server.create("todo", { content: "Iintegreate with Vue.js" })
        }, 

        routes() {
            this.namespace = "api"

            this.get("/todos", schema => {
                return schema.todos.all()
            })

        }, 
    })

    return server 

}