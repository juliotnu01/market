<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="items_roles"
            :items-per-page="5"
            class="elevation-1"
            :search="search"
        >
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Roles y permisos</v-toolbar-title>
                    <v-spacer />
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Buscar"
                        single-line
                        hide-details
                    />
                    <v-spacer />
                    <v-dialog v-model="addrol" max-width="500px">
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
                                Agregar Rol
                            </v-card-title>
                            <v-card-text>
                                <v-text-field
                                    v-model="name_rol"
                                    label="Nombre del rol"
                                    single-line
                                    hide-details
                                />
                                <v-simple-table>
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left">
                                                    Seccion
                                                </th>
                                                <th class="text-left">
                                                    Habilidad (ver)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="(
                                                    item, r
                                                ) in habilidadesRol"
                                                :key="r"
                                            >
                                                <td>{{ item.seccion }}</td>
                                                <td>
                                                    <v-switch
                                                        v-model="
                                                            item.habilidad_ver
                                                        "
                                                        :label="`${
                                                            item.habilidad_ver.toString() ==
                                                            'true'
                                                                ? 'Activado'
                                                                : 'Desactivado'
                                                        }`"
                                                    ></v-switch>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="addrol = false"
                                    >Cancelar</v-btn
                                >
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click.prevent="storeRole"
                                    >Cargar</v-btn
                                >
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.habilidades="{ item }">
                <v-row>
                    <v-col
                        v-for="(hab, h) in item.hablidadesParseadas"
                        :key="h"
                    >
                        <v-switch
                            v-if="hab.hasOwnProperty('view')"
                            v-model="hab.view"
                            :label="`${hab.seccion} : Puede ver: ${
                                hab.view.toString() == 'true' ? 'si' : 'no'
                            }`"
                        />
                    </v-col>
                </v-row>
            </template>
        </v-data-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: "",
            addrol: false,
            headers: [
                {
                    text: "Rol nombre",
                    align: "start",
                    sortable: false,
                    value: "nombre",
                },
                {
                    text: "Habilidades",
                    align: "start",
                    sortable: false,
                    value: "habilidades",
                },
            ],

            habilidadesRol: [
                {
                    rol_name: "admin",
                    seccion: "Home",
                    habilidad_ver: false,
                },
                {
                    rol_name: "admin",
                    seccion: "Proveedores",
                    habilidad_ver: false,
                },
                {
                    rol_name: "admin",
                    seccion: "Productos",
                    habilidad_ver: false,
                },
                {
                    rol_name: "admin",
                    seccion: "Pedidos",
                    habilidad_ver: false,
                },
                {
                    rol_name: "admin",
                    seccion: "Roles y permisos",
                    habilidad_ver: false,
                },
            ],
            name_rol: "",
            items_roles: [],
        };
    },
    mounted() {
        this.getRole();
    },
    methods: {
        async storeRole() {
            try {
                let { data } = await axios.post("/api/roles/store", {
                    habilidades: this.habilidadesRol,
                    name_rol: this.name_rol,
                });
                this.addrol = false;
                this.getRole()
            } catch (error) {
                console.log(error);
            }
        },
        async getRole() {
            try {
                let { data } = await axios("/api/roles/get");
                for (let index = 0; index < data.length; index++) {
                    const element = data[index];
                    let t = JSON.parse(element.habilidades).map((item, i) => {
                        let I = item.split(":");
                        if (I[0] == "view") {
                            return {
                                seccion: I[1],
                                view: true,
                            };
                        }
                    });
                    element.hablidadesParseadas = t;
                }
                this.items_roles = data;
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
