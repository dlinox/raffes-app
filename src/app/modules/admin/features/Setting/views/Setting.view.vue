<template>
  <v-container>
    <v-card class="" elevation="0">
      <v-card-title class="text-h4">Configuración</v-card-title>
      <v-card-subtitle class="text-">
        Configuración inicial de la rifa
      </v-card-subtitle>
      <v-card-item>
        <v-row>
          <v-col cols="6">
            <v-number-input
              :min="1"
              type="number"
              hint="Ingresa la cantidad de rifas que se van a realizar"
              label="Cantidad de Rifas (Tickets)"
              outlined
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Precio Unitario"
              hint="Precio por cada ticket de rifa"
              outlined
            />
          </v-col>
          <v-col cols="12">
            <v-date-input
              prepend-icon=""
              prepend-inner-icon="custom:IconCalendar"
              label="Fecha de Inicio"
              outlined
            />
          </v-col>
        </v-row>
      </v-card-item>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          variant="outlined"
          size="large"
          color="primary"
          class="rounded-lg"
          @click="generatePDF"
        >
          Generar Ticket
        </v-btn>
        <v-btn
          variant="flat"
          size="large"
          color="primary"
          class="rounded-lg"
          @click="() => console.log('Guardar Configuración')"
        >
          Guardar Configuración
        </v-btn>
      </v-card-actions>
    </v-card>
    <iframe
      v-if="pdf"
      :src="pdf"
      width="100%"
      height="600px"
      class="mt-4"
    />
  </v-container>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const pdf = ref<string | null>(null);

const generatePDF = () => {

  pdf.value = "/TICKETS.pdf";
};


</script>
