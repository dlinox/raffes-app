const inputDensity = "default"; // Default input density
export default {
  VBtn: {
    color: "primary",
    style: "font-size: 14px",
    variant: "flat",
    class: "px-3",
  },
  VTextField: {
    density: inputDensity,
    color: "black",
    hideDetails: "auto",
  },
  VCombobox: {
    density: inputDensity,
    color: "black",
    hideDetails: "auto",
  },
  VTextarea: {
    density: inputDensity,
    hideDetails: "auto",
  },
  VSelect: {
    density: inputDensity,
    color: "black",
    hideDetails: "auto",
    noDataText: "No hay datos disponibles",
  },
  VCheckbox: {
    density: inputDensity,
    hideDetails: "hidden",
    noDataText: "No hay datos disponibles",
  },
  //v-number-input
  VNumberInput: {
    density: inputDensity,
    color: "black",
    hideDetails: "auto",
    VBtn: {
      color: "black",
      variant: "tonal",
    },
  },
  //date-input
  VDateInput: {
    density: inputDensity,
    color: "black",
    hideDetails: "auto",
  },
  VChip: {
    tile: true,
  },
  VSwitch: {
    hideDetails: "auto",
  },
  VDataTableServer: {
    itemsPerPageText: "Filas por página",
    itemsPerPageAll: "Todo",
    noDataText: "No hay datos disponibles",
    loadingText: "Cargando...",
    pageText: "{0}-{1} de {2}",
    itemsPerPageOptions: [
      { value: 10, title: "10" },
      { value: 20, title: "20" },
      { value: 25, title: "25" },
      { value: 50, title: "50" },
      { value: 100, title: "100" },
      { value: 500, title: "500" },
      { value: -1, title: "Todo" },
    ],
  },
};
