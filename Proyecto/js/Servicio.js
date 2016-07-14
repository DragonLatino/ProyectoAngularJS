var app = angular.module('project',[])

app.service('users', function(){
    this.usersData = function(){
        return [
            {
                name: "Nombre Apellido 1",
                email: "correo1@extension.com",
                phone: "55-34-34-65-01",
                address: "Calle A,No. 1,Col. A,CDMX"
            },
            {
                name: "Nombre Apellido 2",
                email: "correo2@extension.com",
                phone: "55-34-34-65-02",
                address: "Calle B,No. 2,Col. B,CDMX"
            },
            {
                name: "Nombre Apellido 3",
                email: "correo3@extension.com",
                phone: "55-34-34-65-03",
                address: "Calle C,No. 3,Col. C,CDMX"
            },
            {
                name: "Nombre Apellido 4",
                email: "correo4@extension.com",
                phone: "55-34-34-65-04",
                address: "Calle D,No. 4,Col. D,CDMX"
            },
            {
                name: "Nombre Apellido 5",
                email: "correo5@extension.com",
                phone: "55-34-34-65-05",
                address: "Calle E,No. 5,Col. E,CDMX"
                },
            {
                name: "Nombre Apellido 6",
                email: "correo6@extension.com",
                phone: "55-34-34-65-06",
                address: "Calle F,No. 6,Col. F,CDMX"
            },
            {
                name: "Nombre Apellido 7",
                email: "correo7@extension.com",
                    phone: "55-34-34-65-07",
                address: "Calle G,No. 7,Col. G,CDMX"
            },
            {
                name: "Nombre Apellido 8",
                email: "correo8@extension.com",
                phone: "55-34-34-65-08",
                address: "Calle K,No. 8,Col. K,CDMX"
            }
        ]
    }
});
