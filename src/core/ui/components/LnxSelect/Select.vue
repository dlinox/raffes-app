<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-menu :close-on-content-click="false" v-model="menu2">
          <template v-slot:activator="{ props }">
            <v-text-field
              v-bind="{ ...props, onFocus: undefined }"
              class="required"
              label="Search (Solución 2)"
              :model-value="selectedItem2"
              readonly
            />
          </template>

          <v-card>
            <v-card-title>
              <v-text-field
                ref="searchInput2"
      
                density="compact"
                placeholder="Buscar"
                v-model="searchValue2"
                @input="filterItems2"
                autofocus
              />
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text
              class="pa-0"
              style="max-height: 200px; overflow-y: auto"
            >
              <v-list
                density="compact"
                class="pa-0"
                v-model:selected="selectedItemM"
              >
                <v-list-item
                  v-for="(item, index) in filteredItems2"
                  :key="index"
                  :value="index"
                  @click="selectItem2(item)"
                  class="py-1"
                >
                  <v-list-item-title>
                    <small>{{ item.title }}</small>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-item class="justify-end py-1 px-3">
              <i>
                <small> {{ filteredItems2.length }} resultados </small>
              </i>
            </v-card-item>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
    {{ selectedItemM }}
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Datos de ejemplo
const items = ref([
  { title: "Item 1", value: 1 },
  { title: "Item 2", value: 2 },
  { title: "Item 3", value: 3 },

]);

// Solución 2: Control de menú
const menu2 = ref(false);
const searchValue2 = ref("");
const selectedItem2 = ref(null);
const searchInput2 = ref();
const selectedItemM =  ref([]);

const filteredItems2 = computed(() => {
  if (!searchValue2.value) return items.value;
  return items.value.filter((item) =>
    item.title.toLowerCase().includes(searchValue2.value.toLowerCase())
  );
});

const filterItems2 = () => {
  // La lógica de filtrado está en el computed
};

const selectItem2 = (item: any) => {
  selectedItem2.value = item.title;
  searchValue2.value = "";
  menu2.value = false;
};
</script>
