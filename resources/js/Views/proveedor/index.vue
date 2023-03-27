<template>
    <div class="p-4">
        <v-data-table :headers="headers" :search="search" :items="items_proveedores" sort-by="calories" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Proveedores</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details />
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn class="" small dense fab dark color="indigo" v-bind="attrs" v-on="on">
                                <v-icon dark dense small>
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">Agregar Proveedor</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field v-model="model.razon_social" label="Razon Social"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field v-model="model.nombre_comercial"
                                                label="Nombre Comercial"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field v-model="model.nit" label="N.I.T."></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-switch v-model="model.state"
                                                :label="`${model.state.toString() == 'true' ? 'Activo' : 'Inactivo'}`" />
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="save">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogEdit" max-width="500px">
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">Edit Proveedor</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field v-model="modelEdit.razon_social"
                                                label="Razon Social"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field v-model="modelEdit.nombre_comercial"
                                                label="Nombre Comercial"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field v-model="modelEdit.nit" label="N.I.T."></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-switch v-model="modelEdit.state"
                                                :label="`${modelEdit.state.toString() == 'true' || modelEdit.state == 1 ? 'Activo' : 'Inactivo'}`" />
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeEdit">
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="updateProveedor">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="600px">
                        <v-card>
                            <v-card-title class="text-h5t ">Esta Seguro que desea eliminar el proveedor ?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteProveedor">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogUploadExcelProducto" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">Cargar Productos para: {{ titleProveedor }}</v-card-title>
                            <v-card-text>
                                <v-file-input show-size label="File input" @change="readExcelFile" />
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text
                                    @click="dialogUploadExcelProducto = false">Cancelar</v-btn>
                                <v-btn color="blue darken-1" text @click="cargarProductosMasivos">Cargar</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
                <v-icon small @click="openProductosMasivos(item)">
                    mdi-upload
                </v-icon>
            </template>
            <template v-slot:item.state="{ item }">
                {{ item.state ? 'ACTIVO' : 'INACTIVO' }}
            </template>
            <template v-slot:item.cantidad_de_productos="{ item }">
                {{ item.cantidad_de_productos.length }}
            </template>
            <template v-slot:no-data>
                <span>No hay datos disponibles</span>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import * as XLSX from 'xlsx'
export default {
    data() {
        return {
            search: '',
            dialog: false,
            dialogEdit: false,
            dialogDelete: false,
            headers: [
                { text: 'Razon Social', align: 'start', sortable: false, value: 'razon_social' },
                { text: 'Nombre Comercial', value: 'nombre_comercial' },
                { text: 'N.I.T.', value: 'nit' },
                { text: 'Cantidad de productos', value: 'cantidad_de_productos' },
                { text: 'Estado', value: 'state' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            editedIndex: -1,
            model: {
                razon_social: '',
                nombre_comercial: '',
                nit: '',
                state: false,
            },
            modelEdit: {
                razon_social: '',
                nombre_comercial: '',
                nit: '',
                state: false,
            },
            items_proveedores: [],
            dialogUploadExcelProducto: false,
            titleProveedor: '',
            model_productos: {
                productos: [],
                proveedor: null,
            },
            idProveedor: null,
        }
    },
    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        parseDataExcel(data = null) {
            if (data.length <= 0) return null;

            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                var modelExcel = {
                    ID: this.isset(element.ID),
                    categoria: this.isset(element.categoria),
                    descripcion: this.isset(element.descripcion),
                    descripcion_corta: this.isset(element.descripcion_corta),
                    destacado: this.isset(element.destacado),
                    imagenes: this.isset(element.imagenes),
                    nombre: this.isset(element.nombre),
                    precio_normal: this.isset(element.precio_normal),
                    sku: this.isset(element.sku),
                    tipo: this.isset(element.tipo),
                }
                this.model_productos.productos.push(modelExcel)
            }
        },
        isset(el = null) {
            if (typeof el !== "undefined" && el !== null) {
                return el;
            } else {
                return '';
            }
        },
        readExcelFile(file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const data = new Uint8Array(event.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                this.parseDataExcel(jsonData)
            };
            reader.readAsArrayBuffer(file);
        },
        async cargarProductosMasivos() {
            try {
                await axios.post('/api/add-producto-masivamente', this.model_productos)
                this.dialogUploadExcelProducto = false
                this.initialize()
            } catch (error) {
                console.log(error)
            }
        },
        async openProductosMasivos(proveedor = null) {
            try {
                this.model_productos.proveedor = proveedor.id
                this.dialogUploadExcelProducto = true
                this.titleProveedor = proveedor.razon_social
            } catch (error) {
                console.log(error)
            }
        },
        async initialize() {
            try {
                let { data } = await axios('/api/get-proveedores')
                this.items_proveedores = data
            } catch (error) {
                console.log(error)
            }
        },

        async editItem(item) {
            let { data } = await axios(`/api/get-proveedor/${item.id}`)
            this.modelEdit = data
            this.dialogEdit = true
        },

        async updateProveedor() {
            try {
                await axios.put(`/api/update-proveedor/${this.modelEdit.id}`, this.modelEdit)
                this.dialogEdit = false
                this.initialize()
            } catch (error) {
                console.log(error)
            }
        },

        deleteItem(item) {
            this.idProveedor = item.id
            this.dialogDelete = true
        },
       async  deleteProveedor(item) {
            await axios.delete(`/api/delete-proveedor/${this.idProveedor}`)
            this.dialogDelete = false
            this.initialize()
        },
        close() {
            this.dialog = false
        },
        closeEdit() {
            this.dialogEdit = false
        },
        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        async save() {
            try {
                let { data } = await axios.post('/api/add-proveedor', this.model)
                this.initialize()
                this.dialog = false
                this.model = {
                    razon_social: '',
                    nombre_comercial: '',
                    nit: '',
                    state: false,
                }
            } catch (error) {
                console.log(error)
            }
        },
    },
}
</script>