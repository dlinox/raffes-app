<template>
  <slot
    name="header"
    :request="options"
    :loading="loading"
    :reLoadDataTable="reLoadDataTable"
    :debouncedReload="debouncedReload"
    :initDataTable="initDataTable"
  ></slot>
  <v-data-table-server
    v-model="selected"
    v-model:items-per-page="options.itemsPerPage"
    v-model:sort-by="options.sortBy"
    v-model:page="options.page"
    :headers="headers"
    :items="serverItems"
    :items-length="totalItems"
    :item-value="props.itemValue"
    :loading="loading"
    :show-select="showSelect"
    :return-object="props.returnObject"
    @update:options="reLoadDataTable"
    density="comfortable"
  >
    <template
      v-for="(slotContent, slotName) in $slots"
      :key="slotName"
      v-slot:[slotName]="slotProps"
    >
      <component
        :is="slotContent"
        v-bind="{ ...slotProps, loadDataTable: initDataTable }"
      />
    </template>
  </v-data-table-server>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";

import debounce from "@/core/utils/debounce.utils";

import type {
  DataTableHeaderDTO,
  DataTableRequestDTO,
  DataTableResponseDTO,
} from "@/core/types/DataTable.types";

import { DATATABLE_REQUEST_DEFAULT } from "@/core/constants/DataTable.constants";

const emit = defineEmits<{
  (e: "update:request", request: DataTableRequestDTO): void;
  (e: "update:loading", loading: boolean): void;
  (e: "update:selected", value: any[]): void;
}>();

const props = defineProps<{
  headers: DataTableHeaderDTO[];
  request: DataTableRequestDTO;
  loadDataTable: () => Promise<DataTableResponseDTO<any>>;
  returnObject?: boolean;
  selected?: any[];
  loading?: boolean;
  showSelect?: boolean;
  itemValue?: string;
}>();

const selected = computed({
  get: () => props.selected ?? [],
  set: (val: any[]) => {
    emit("update:selected", val);
  },
});

const loading = computed({
  get: () => props.loading ?? false,
  set: (val: boolean) => {
    emit("update:loading", val);
  },
});

const serverItems = ref<any[]>([]);
const totalItems = ref<number>(0);

const options = computed<DataTableRequestDTO>({
  get: () => {
    return props.request || DATATABLE_REQUEST_DEFAULT;
  },
  set: (val: DataTableRequestDTO) => {
    emit("update:request", val);
  },
});

const debouncedReload = debounce(() => {
  reLoadDataTable();
}, 400);

const reLoadDataTable = async () => {
  loading.value = true;
  const response = await props.loadDataTable();
  serverItems.value = response.data;
  totalItems.value = response.total as number;
  loading.value = false;
};

const initDataTable = async () => {
  await reLoadDataTable();
};
</script>
