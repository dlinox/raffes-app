<template>
  <v-container>
    <v-card class="" elevation="0">
      <v-card-title class="text-h4">Ventas</v-card-title>
      <v-card-subtitle class="text-">
        Gestion de Ventas de tickets</v-card-subtitle
      >
      <v-card-item>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="search"
              label="Buscar"
              prepend-inner-icon="custom:IconMagnifer"
            />
          </v-col>
          <v-col cols="12" md="6" class="text-end">
            <v-btn size="large" color="primary" @click="dialog = true">
              Nueva Venta
            </v-btn>
          </v-col>
        </v-row>

        <v-data-table
          class="border mt-4"
          :items="items"
          :headers="headers"
          :search="search"
        >
          <template v-slot:item.actions="{  }">
            <v-btn>
              <v-icon icon="custom:IconMenuDots"></v-icon>
              <v-menu activator="parent">
                <v-list density="compact">
                  <v-list-item
                    prepend-icon="custom:IconPen"
                    value="Editar"
                    title="Editar"
                  >
                  </v-list-item>
                  <v-list-item
                    class="text-red"
                    prepend-icon="custom:IconEraser"
                    value="Eliminar"
                    title="Eliminar"
                  >
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-btn>
          </template>
          <template v-slot:item.status="{ item }">
            <v-chip
              :color="item.status === 'Pagado' ? 'green' : 'gray'"
              class="rounded-lg"
            >
              {{ item.status }}
            </v-chip>
          </template>
        </v-data-table>
      </v-card-item>
    </v-card>
  </v-container>
  <v-dialog v-model="dialog" width="600" persistent max-width="90%">
    <v-card>
      <v-card-title class="text-h5">Nueva Venta</v-card-title>
      <v-card-subtitle class="mb-2">
        Complete los siguientes campos para registrar una nueva venta
      </v-card-subtitle>
      <v-divider></v-divider>
      <v-card-item>
        <v-row justify="end">
          <v-col cols="12">
            <v-text-field
              label="Cliente (DNI)"
              placeholder="Ingrese el ID del cliente"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Fecha"
              placeholder="Seleccione la fecha de la venta"
              type="date"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              label="Estado"
              :items="['Pagado', 'Pendiente']"
              placeholder="Seleccione el estado de la venta"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Cantidad"
              placeholder="Ingrese la cantidad de tickets vendidos"
              type="number"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Precio Unitario"
              placeholder="Ingrese el precio unitario"
              type="number"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Descuento"
              placeholder="Ingrese el descuento de la venta"
              type="number"
            />
          </v-col>
        </v-row>
      </v-card-item>
      <v-divider></v-divider>
      <v-card-actions class="px-6 py-3">
        <v-btn density="default" size="large" @click="dialog = false"
          >Cancelar</v-btn
        >
        <v-btn
          density="default"
          size="large"
          color="primary"
          @click="dialog = false"
          >Guardar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const dialog = ref(false);
const items = ref([
  {
    id: 1,
    client: "71822315",
    seller: "Juan Perez",
    date: "01 de enero",
    quantity: 5,
    unitPrice: 10.0,
    discount: 0.0,
    total: 50.0,
    status: "Pagado",
  },
  {
    id: 2,
    client: "71822316",
    seller: "Maria Gomez",
    date: "02 de enero",
    quantity: 3,
    unitPrice: 15.0,
    discount: 5.0,
    total: 40.0,
    status: "Pagado",
  },
  {
    id: 3,
    client: "71822317",
    seller: "Carlos Lopez",
    date: "03 de enero",
    quantity: 2,
    unitPrice: 20.0,
    discount: 0.0,
    total: 40.0,
    status: "Pendiente",
  },
  {
    id: 4,
    client: "71822318",
    seller: "Ana Torres",
    date: "04 de enero",
    quantity: 1,
    unitPrice: 30.0,
    discount: 0.0,
    total: 30.0,
    status: "Pendiente",
  },
  {
    id: 5,
    client: "71822319",
    seller: "Luis Ramirez",
    date: "05 de enero",
    quantity: 4,
    unitPrice: 12.5,
    discount: 2.5,
    total: 50.0,
    status: "Pagado",
  },
  {
    id: 6,
    client: "71822320",
    seller: "Laura Martinez",
    date: "06 de enero",
    quantity: 6,
    unitPrice: 8.0,
    discount: 0.0,
    total: 48.0,
    status: "Pagado",
  },
  {
    id: 7,
    client: "71822321",
    seller: "Pedro Sanchez",
    date: "07 de enero",
    quantity: 10,
    unitPrice: 5.0,
    discount: 1.0,
    total: 49.0,
    status: "Pendiente",
  },
]);

const headers = ref([
  { title: "", key: "actions", fixed: true, width: "100px", sortable: false },

  { title: "ID", key: "id", width: "100px", sortable: true },
  { title: "Cliente", key: "client", sortable: true },
  { title: "Vendedor", key: "seller", sortable: true },
  { title: "Fecha", key: "date", width: "150px", sortable: true },
  { title: "Cantidad", key: "quantity", width: "100px", sortable: true },
  {
    title: "Precio Unitario",
    key: "unitPrice",
    width: "150px",
    sortable: true,
  },
  { title: "Descuento", key: "discount", width: "100px", sortable: true },
  { title: "Total", key: "total", width: "150px", sortable: true },
  { title: "Estado", key: "status", width: "100px", sortable: false },
]);
const search = ref("");
</script>
