<template>
  <v-container>
    <v-card class="" elevation="0">
      <v-card-title class="text-h4">Usuarios</v-card-title>
      <v-card-subtitle class="text-">Lista de Usuarios</v-card-subtitle>
      <v-card-item>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="search"
              label="Buscar Usuario"
              prepend-inner-icon="custom:IconMagnifer"
              outlined
            />
          </v-col>
          <v-col cols="12" md="6" class="text-end">
            <v-btn
              size="large"
              color="primary"
              @click="() => console.log('Add User')"
            >
              Agregar Usuario
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
                    prepend-icon="custom:IconNotesMinimalistic"
                    value="Tickets"
                    title="Entrega de Tickets"
                  >
                  </v-list-item>
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
              :color="item.status === 'Activo' ? 'blue' : 'red'"
              text-color="white"
            >
              {{ item.status }}
            </v-chip>
          </template>
        </v-data-table>
      </v-card-item>
    </v-card>
  </v-container>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const items = ref([
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    ticketsCount: 10,
    status: "Activo",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    ticketsCount: 10,
    status: "Activo",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    ticketsCount: 5,
    status: "Activo",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    ticketsCount: 8,
    status: "Activo",
  },
  {
    id: 5,
    name: "Charlie Black",
    email: "charlie.black@example.com",
    ticketsCount: 12,
    status: "Activo",
  },
  {
    id: 6,
    name: "Diana White",
    email: "diana.white@example.com",
    ticketsCount: 3,
    status: "Activo",
  },
  {
    id: 7,
    name: "Ethan Green",
    email: "ethan.green@example.com",
    ticketsCount: 7,
    status: "Activo",
  },
  {
    id: 8,
    name: "Fiona Blue",
    email: "fiona.blue@example.com",
    ticketsCount: 2,
    status: "Inactivo",
  },
  {
    id: 9,
    name: "George Yellow",
    email: "george.yellow@example.com",
    ticketsCount: 15,
    status: "Activo",
  },
  {
    id: 10,
    name: "Hannah Purple",
    email: "hannah.purple@example.com",
    ticketsCount: 4,
    status: "Activo",
  },
]);

const headers = ref([
  { title: "", key: "actions", fixed: true, width: "100px", sortable: false },

  { title: "ID", key: "id", width: "100px", sortable: true },
  { title: "Nombre", key: "name", sortable: true },
  { title: "Email", key: "email", sortable: true },
  { title: "Tickets", key: "ticketsCount", width: "100px", sortable: true },
  { title: "Estado", key: "status", width: "100px", sortable: false },
]);
const search = ref("");
</script>
