<template>
  <v-card elevation="0">
    <v-card-title>
      {{ question.title }}
      <span v-if="question.required" class="text-red">*</span>
    </v-card-title>
    <v-card-subtitle v-if="question.description">
      {{ question.description }}
    </v-card-subtitle>
    <v-card-item>
      <v-list
        v-model="question.answer"
        v-model:selected="selected"
        :mandatory="false"
        select-strategy="leaf"
        class="pa-0"
        color="primary"
      >
        <v-row class="ma-0" justify="space-around">
          <v-col
            cols="12"
            class="pa-1"
            v-for="item in question.options"
            :key="item.value"
          >
            <v-list-item
              :title="item.title"
              :value="item.value"
              class="mb-0 rounded-lg border"
              :class="{
                'has-error': validate !== true && question.required,
              }"
              :color="
                validate !== true && question.required ? 'error' : 'primary'
              "
            >
              <template v-slot:prepend="{ isSelected, select }">
                <v-list-item-action start>
                  <v-checkbox-btn
                    :model-value="isSelected"
                    @update:model-value="select"
                  ></v-checkbox-btn>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-col>
        </v-row>
      </v-list>
      <div
        v-if="validate !== true && question.required"
        class="text-end text-red px-3"
      >
        <small> {{ validate }} </small>
      </div>
    </v-card-item>
  </v-card>
</template>
<script lang="ts" setup>
import type { QuestionSingleChoiceDTO } from "@/app/shared/types/Dtos/QuestionType.dtos";
import { computed, ref, watch } from "vue";

const props = defineProps<{
  question: QuestionSingleChoiceDTO;
  submitted?: boolean;
}>();

const selected = ref([]);
const isDirty = ref(false);

watch(selected, (newVal, oldVal) => {
  if (!isDirty.value && oldVal?.length !== newVal.length) {
    isDirty.value = true;
  }
});

const validate = computed(() => {
  if (!props.submitted && !isDirty.value) return true;
  return selected.value !== null &&
    selected.value !== undefined &&
    selected.value.length > 0
    ? true
    : "Debe seleccionar una opción";
});
</script>
