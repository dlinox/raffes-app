import { h, defineAsyncComponent, type DefineComponent } from "vue";

const iconModules = import.meta.glob<{ default: DefineComponent }>(
  "@/core/ui/components/icons/*.vue"
);

const DefaultIcon = defineAsyncComponent(
  () => import("@/core/ui/components/icons/Icon4k.vue")
);

const customIconSet = {
  component: (props: any) => {
    const iconName = props.icon;
    const componentFileName = `${iconName}.vue`;
    const modulePath = `/src/core/ui/components/icons/${componentFileName}`;
    const importFn = iconModules[modulePath];

    function resolveIconComponent() {
      if (importFn) {
        return h(defineAsyncComponent(importFn));
      } else {
        console.error(
          `Icono '${iconName}' (${componentFileName}) no encontrado entre los módulos disponibles. Path buscado: '${modulePath}'.`
        );
        return h(DefaultIcon);
      }
    }

    return h(props.tag, { class: "v-icon__svg" }, [resolveIconComponent()]);
  },
};

export default customIconSet;
