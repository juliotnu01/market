<template>
    <div class="p-4">
        <v-data-table :headers="headers" :search="search" :items="items_productos" sort-by="calories" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Productos</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details />
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="900px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn class="" small dense fab dark color="indigo" v-bind="attrs" v-on="on">
                                <v-icon dark dense small>
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">Agregar Producto</span>
                                <v-spacer></v-spacer>
                                <v-switch v-model="model.destacado"
                                    :label="`${model.destacado.toString() == 'true' ? 'Destacado' : ''}`" />
                            </v-card-title>

                            <v-img v-show="urlIMG" height="250" :src="urlIMG" style="margin: 2%;" />

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-file-input @change="handlerIMGproducto" show-size counter
                                                label="Seleccione imagen del producto" />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="4">
                                            <v-text-field v-model="model.nombre" label="Nombre del producto" />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="4">
                                            <v-text-field type="number" v-model="model.precio_normal"
                                                label="Precio del producto" />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="4">
                                            <v-text-field v-model="model.sku" label="SKU" />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="6">
                                            <v-text-field v-model="model.tipo" label="Tipo" />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="6">
                                            <v-text-field v-model="model.categoria" label="Categoria" />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="6">
                                            <v-textarea v-model="model.descripcion" label="Descripcion" />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="6">
                                            <v-textarea v-model="model.descripcion_corta" label="Descripcion corta" />
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
                    <v-dialog v-model="dialogEdit" max-width="900px">
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">Editar Producto</span>
                                <v-spacer></v-spacer>
                                <v-switch v-model="model.destacado"
                                    :label="`${model.destacado.toString() == 'true' ? 'Destacado' : ''}`" />
                            </v-card-title>

                            <v-img v-show="urlIMG" height="250" :src="urlIMG" style="margin: 2%;" />

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-file-input @change="handlerIMGproductoEdit" show-size counter
                                                label="Seleccione imagen del producto" />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="4">
                                            <v-text-field v-model="modelEdit.nombre" label="Nombre del producto" />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="4">
                                            <v-text-field type="number" v-model="modelEdit.precio_normal"
                                                label="Precio del producto" />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="4">
                                            <v-text-field v-model="modelEdit.sku" label="SKU" />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="6">
                                            <v-text-field v-model="modelEdit.tipo" label="Tipo" />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="6">
                                            <v-text-field v-model="modelEdit.categoria" label="Categoria" />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="6">
                                            <v-textarea v-model="modelEdit.descripcion" label="Descripcion" />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="6">
                                            <v-textarea v-model="modelEdit.descripcion_corta" label="Descripcion corta" />
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeEdit">
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="editarProducto">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="600px">
                        <v-card>
                            <v-card-title class="text-h5">Estas seguro que deseas eliminar este Producto?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialogDelete = false">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="DeleteProducto">OK</v-btn>
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
            </template>
            <template v-slot:item.imagen="{ item }">
                <img :src="item.imagen" width="50" />
            </template>
            <template v-slot:item.state="{ item }">
                {{ item.state ? 'ACTIVO' : 'INACTIVO' }}
            </template>
            <template v-slot:no-data>
                <span>No hay datos disponibles</span>
            </template>
        </v-data-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: '',
            dialog: false,
            dialogEdit: false,
            dialogDelete: false,
            headers: [
                { text: 'Nombre del producto', align: 'start', sortable: false, value: 'nombre' },
                { text: 'Descripción', value: 'descripcion' },
                { text: 'Descripción Corta.', value: 'descripcion_corta' },
                { text: 'Tipo', value: 'tipo' },
                { text: 'Categoria', value: 'categoría' },
                { text: 'Precio', value: 'precio_normal' },
                { text: 'SKU', value: 'sku' },
                { text: 'Producto Destacado', value: 'destacaado' },
                { text: 'Imagen', value: 'imagen' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            model: {
                categoria: '',
                descripcion: '',
                descripcion_corta: '',
                destacado: false,
                imagen: '',
                nombre: '',
                precio_normal: '',
                sku: '',
                tipo: '',
            },
            modelEdit: {
                categoria: '',
                descripcion: '',
                descripcion_corta: '',
                destacado: false,
                imagen: '',
                nombre: '',
                precio_normal: '',
                sku: '',
                tipo: '',
            },
            urlIMG: '',
            items_productos: [],
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
        handlerIMGproducto(object) {
            this.model.imagen = object
            this.urlIMG = URL.createObjectURL(object)

        },
        handlerIMGproductoEdit(object) {
            this.modelEdit.imagen = object
            this.urlIMG = URL.createObjectURL(object)

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
                let { data } = await axios('/api/get-productos')
                this.items_productos = data
            } catch (error) {
                console.log(error)
            }
        },

        async editItem(item) {
            let { data } = await axios(`/api/get-producto/${item.id}`)
            this.modelEdit = data
            this.urlIMG = data.imagen
            this.dialogEdit = true
        },

        async editarProducto(){ 
            try {
                let formData = new FormData();
                formData.append('categoria', this.modelEdit.categoria);
                formData.append('descripcion', this.modelEdit.descripcion);
                formData.append('descripcion_corta', this.modelEdit.descripcion_corta);
                formData.append('destacado', this.modelEdit.destacado);
                formData.append('imagen', this.modelEdit.imagen);
                formData.append('nombre', this.modelEdit.nombre);
                formData.append('precio_normal', this.modelEdit.precio_normal);
                formData.append('sku', this.modelEdit.sku);
                formData.append('tipo', this.modelEdit.tipo);



                await axios.put(`/api/update-producto/${this.modelEdit.id}`, formData, { headers: { 'Content-Type': `multipart/form-data` } })
                this.initialize()
                this.dialogEdit = false
                
            } catch (error) {
                console.log(error)
            }
        },        

        async deleteItem(item) {
            this.modelEdit = item
            this.dialogDelete = true
        },

        close() {
            this.dialog = false
            
        },
        closeEdit() {
            this.dialogEdit = false
            
        },
        closeDelete() {
            this.dialogDelete = false
        },
        async DeleteProducto() {
            await axios.delete(`/api/delete-producto/${this.modelEdit.id}`)
            this.dialogDelete = false
            this.initialize();
        },
        async save() {
            try {

                let formData = new FormData();
                formData.append('categoria', this.model.categoria);
                formData.append('descripcion', this.model.descripcion);
                formData.append('descripcion_corta', this.model.descripcion_corta);
                formData.append('destacado', this.model.destacado);
                formData.append('imagen', this.model.imagen);
                formData.append('nombre', this.model.nombre);
                formData.append('precio_normal', this.model.precio_normal);
                formData.append('sku', this.model.sku);
                formData.append('tipo', this.model.tipo);

                console.log(this.model.imagen)

                await axios.post('/api/add-producto', formData, { headers: { 'Content-Type': `multipart/form-data` } })
                this.initialize()
                this.dialog = false
                this.model = {
                    categoria: '',
                    descripcion: '',
                    descripcion_corta: '',
                    destacado: false,
                    imagenes: '',
                    nombre: '',
                    precio_normal: '',
                    sku: '',
                    tipo: '',
                };

            } catch (error) {
                console.log(error)
            }
        },
    },
}
</script>