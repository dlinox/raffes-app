import { markRaw } from "vue";

import IconArrowDown from "@/core/ui/components/icons/IconArrowDown.vue";
import IconAltArrowDown from "@/core/ui/components/icons/IconAltArrowDown.vue";
import IconCheckSquare from "@/core/ui/components/icons/IconCheckSquare.vue";
import IconMinusSquare from "@/core/ui/components/icons/IconMinusSquare.vue";
import IconStop from "@/core/ui/components/icons/IconStop.vue";
import IconAltArrowLeft from "@/core/ui/components/icons/IconAltArrowLeft.vue";
import IconAltArrowRight from "@/core/ui/components/icons/IconAltArrowRight.vue";
import IconDoubleAltArrowLeft from "@/core/ui/components/icons/IconDoubleAltArrowLeft.vue";
import IconDoubleAltArrowRight from "@/core/ui/components/icons/IconDoubleAltArrowRight.vue";
import IconArrowUp from "@/core/ui/components/icons/IconArrowUp.vue";
import IconRecord from "@/core/ui/components/icons/IconRecord.vue";
import IconCheckCircle from "@/core/ui/components/icons/IconCheckCircle.vue";
import IconAltArrowUp from "@/core/ui/components/icons/IconAltArrowUp.vue";
import IconCalendar from "@/core/ui/components/icons/IconCalendar.vue";
import IconBackspace from "@/core/ui/components/icons/IconBackspace.vue";
import IconCloseCircle from "@/core/ui/components/icons/IconCloseCircle.vue";
import IconCloseSquare from "@/core/ui/components/icons/IconCloseSquare.vue";
import IconEraser from "@/core/ui/components/icons/IconEraser.vue";
import IconInfoCircle from "@/core/ui/components/icons/IconInfoCircle.vue";
import IconHamburgerMenu from "@/core/ui/components/icons/IconHamburgerMenu.vue";

const aliases = {
  menu: markRaw(IconHamburgerMenu),
  prev: markRaw(IconAltArrowLeft),
  next: markRaw(IconAltArrowRight),
  first: markRaw(IconDoubleAltArrowLeft),
  last: markRaw(IconDoubleAltArrowRight),
  dropdown: markRaw(IconAltArrowDown),
  subgroup: markRaw(IconAltArrowDown),
  expand: markRaw(IconAltArrowDown),
  collapse: markRaw(IconAltArrowUp),
  checkboxOn: markRaw(IconCheckSquare),
  checkboxOff: markRaw(IconStop),
  checkboxIndeterminate: markRaw(IconMinusSquare),
  radioOn: markRaw(IconCheckCircle),
  radioOff: markRaw(IconRecord),
  sort: markRaw(IconArrowDown),
  sortAsc: markRaw(IconArrowUp),
  sortDesc: markRaw(IconArrowDown),
  unfold: markRaw(IconArrowDown),
  calendar: markRaw(IconCalendar),
  clear: markRaw(IconBackspace),
  close: markRaw(IconCloseSquare),
  delete: markRaw(IconEraser),
  error: markRaw(IconCloseCircle),
  info: markRaw(IconInfoCircle),
  success: markRaw(IconCheckCircle),
  warning: markRaw(IconInfoCircle),
};

export default aliases;
