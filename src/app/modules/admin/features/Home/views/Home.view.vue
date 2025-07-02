<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="4">
        <v-card variant="tonal" color="blue">
          <v-card-title>
            <small>Rifas Vendidas</small>
          </v-card-title>
          <v-card-item>
            <h2 class="display-1">1,024</h2>
            <div class="text-end w-100 text-subtitle-2">
              <small> 12% del total </small>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card variant="tonal" color="green">
          <v-card-title>
            <small>Ingresos Totales</small>
          </v-card-title>
          <v-card-item>
            <h2 class="display-1">S/. 1,345.67</h2>
            <div class="text-end w-100 text-subtitle-2">
              <small> al 01 de Noviembre 2025 </small>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card variant="tonal" color="orange">
          <v-card-title>
            <small>Rifas Disponibles</small>
          </v-card-title>
          <v-card-item>
            <h2 class="display-1">2,000</h2>
            <div class="text-end w-100 text-subtitle-2">
              <small> 88% del total </small>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12">
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
            <v-spacer></v-spacer>
            <v-btn
              density="default"
              size="large"
              variant="flat"
              color="primary"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup></script>
