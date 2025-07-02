import { createVuetify } from "vuetify";
import { Tooltip } from "vuetify/directives";

import { mdi } from "vuetify/iconsets/mdi-svg";

import { VDateInput } from "vuetify/labs/VDateInput";

import defaults from "@/core/ui/plugins/vuetify/defaults";
import themes from "@/core/ui/plugins/vuetify/themes";
import aliases from "@/core/ui/plugins/vuetify/aliases";

import customIconSet from "@/core/ui/plugins/vuetify/custom-iconset";

const vuetify = createVuetify({
  defaults: defaults,
  theme: themes,
  directives: {
    Tooltip: Tooltip,
  },
  components: {
    VDateInput,
  },
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi,
      custom: customIconSet,
    },
    aliases: aliases,
  },
});

export default vuetify;
