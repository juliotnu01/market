<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="items_users"
            :items-per-page="5"
            class="elevation-1"
            :search="search"
        >
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Usuarios</v-toolbar-title>
                    <v-spacer />
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Buscar"
                        single-line
                        hide-details
                    />
                    <v-spacer />
                    <v-dialog v-model="adduser" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                class=""
                                small
                                dense
                                fab
                                dark
                                color="indigo"
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-icon dark dense small> mdi-plus </v-icon>
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title class="text-h5">
                                Agregar Usuario
                            </v-card-title>
                            <v-card-text>
                                <v-text-field
                                    v-model="name_rol"
                                    label="Nombre del rol"
                                    single-line
                                    hide-details
                                />
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="adduser = false"
                                    >Cancelar</v-btn
                                >
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    >Cargar</v-btn
                                >
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" >
                    mdi-pencil
                </v-icon>
                <v-icon small >
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
    </div>
</template>
<script>
export default {
    data() {
        return{
            adduser: false,
            items_users:[],
            headers:[
                {text: 'Nombre', value: 'name'},
                {text: 'correo', value: 'email'},
                {text: 'ROL', value: 'has_rol'},
                {text: 'Acciones', value: 'actions'},
            ],
            search: ''
        }
    },
    mounted(){
        this.getUsers();
    },

    methods:{
        async getUsers(){
            try {
                let {data} = await axios('/api/users/get')
                this.items_users = data
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>