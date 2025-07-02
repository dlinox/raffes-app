// composables/useQuestionRenderer.ts
import { markRaw, defineAsyncComponent } from "vue";

const componentMap: Record<string, any> = {
  T01ST: markRaw(
    defineAsyncComponent(
      () =>
        import(
          "@/app/shared/components/QuestionTypes/Text/ShortTextQuestion.vue"
        )
    )
  ),
  T02LT: markRaw(
    defineAsyncComponent(
      () =>
        import(
          "@/app/shared/components/QuestionTypes/Text/LongTextQuestion.vue"
        )
    )
  ),
  T03EM: markRaw(
    defineAsyncComponent(
      () =>
        import("@/app/shared/components/QuestionTypes/Text/EmailQuestion.vue")
    )
  ),
  T04PH: markRaw(
    defineAsyncComponent(
      () =>
        import("@/app/shared/components/QuestionTypes/Text/PhoneQuestion.vue")
    )
  ),
  T05URL: markRaw(
    defineAsyncComponent(
      () => import("@/app/shared/components/QuestionTypes/Text/URLQuestion.vue")
    )
  ),
  SC01SSC: markRaw(
    defineAsyncComponent(
      () =>
        import(
          "@/app/shared/components/QuestionTypes/Selection/SingleChoice/ShortSelectionControlQuestion.vue"
        )
    )
  ),
  SC02SC: markRaw(
    defineAsyncComponent(
      () =>
        import(
          "@/app/shared/components/QuestionTypes/Selection/SingleChoice/SelectionControlQuestion.vue"
        )
    )
  ),
  SC03S: markRaw(
    defineAsyncComponent(
      () =>
        import(
          "@/app/shared/components/QuestionTypes/Selection/SingleChoice/SelectQuestion.vue"
        )
    )
  ),

  //SelectionControlMultiQuestion
  M01SC: markRaw(
    defineAsyncComponent(
      () =>
        import(
          "@/app/shared/components/QuestionTypes/Selection/MultipleChoice/SelectionControlMultiQuestion.vue"
        )
    )
  ),
  M02S: markRaw(
    defineAsyncComponent(
      () =>
        import(
          "@/app/shared/components/QuestionTypes/Selection/MultipleChoice/SelectMultiQuestion.vue"
        )
    )
  ),
  N01N: markRaw(
    defineAsyncComponent(
      () =>
        import(
          "@/app/shared/components/QuestionTypes/Numeric/NumberQuestion.vue"
        )
    )
  ),
  N02IN: markRaw(
    defineAsyncComponent(
      () =>
        import(
          "@/app/shared/components/QuestionTypes/Numeric/IntegerNumberQuestion.vue"
        )
    )
  ),
  D01D: markRaw(
    defineAsyncComponent(
      () => import("@/app/shared/components/QuestionTypes/Date/DateQuestion.vue")
    )
  ),
  // Añade más tipos aquí
};

export function useQuestionRenderer() {
  const getComponent = (type: string) => {
    return componentMap[type] ?? null;
  };

  return { getComponent };
}
