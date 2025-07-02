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
      <v-date-input
        v-model="question.answer"
        :clearable="!question.readonly || !question.disabled"
        :persistent-hint="question.helpText ? true : false"
        :hint="question.helpText"
        :readonly="question.readonly || false"
        :disabled="question.disabled || false"
        :rules="question.required ? [required] : []"
      />
    </v-card-item>
  </v-card>
</template>
<script lang="ts" setup>
import type { QuestionTextDTO } from "@/app/shared/types/Dtos/QuestionType.dtos";
import { required } from "@/core/utils/rules.utils";

defineProps<{
  question: QuestionTextDTO;
}>();
</script>
