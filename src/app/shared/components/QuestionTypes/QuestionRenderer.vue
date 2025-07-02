<!-- components/QuestionRenderer.vue -->
<template>
  <component
    v-if="Component"
    :is="Component"
    :question="question"
    :submitted="submitted"
  />
  <div v-else class="text-red-500">Tipo no soportado: {{ question.type }}</div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { useQuestionRenderer } from "@/app/shared/composables/useQuestionRenderer";

const props = defineProps({
  question: {
    type: Object as PropType<any>,
    required: true,
  },
  submitted: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

const { getComponent } = useQuestionRenderer();
const Component = getComponent(props.question.type);
</script>
