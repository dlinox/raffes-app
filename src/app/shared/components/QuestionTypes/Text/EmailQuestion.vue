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
      <v-text-field
        v-model="question.answer"
        :clearable="!question.readonly || !question.disabled"
        :persistent-hint="question.helpText ? true : false"
        :hint="question.helpText"
        :counter="question.maxLength ? question.maxLength : false"
        :readonly="question.readonly || false"
        :disabled="question.disabled || false"
        :rules="question.required ? [required, email] : [email]"
        prepend-inner-icon="custom:IconLetter"
      />
    </v-card-item>
  </v-card>
</template>
<script lang="ts" setup>
import type { QuestionTextDTO } from "@/app/shared/types/Dtos/QuestionType.dtos";
import { required, email } from "@/core/utils/rules.utils";

defineProps<{
  question: QuestionTextDTO;
}>();
</script>
