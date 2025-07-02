<template>
  <v-app app>
    <v-layout app>
      <v-app-bar app elevation="0" class="px-2" color="grey-lighten-4">
        <!-- <v-btn
          icon="custom:IconHamburgerMenu"
          variant="tonal"
          color="dark"
          class="rounded-lg"
          density="comfortable"
          @click="drawer = !drawer"
        /> -->
        <v-spacer />

        <!-- <v-btn
          icon="custom:IconBell"
          variant="tonal"
          class="rounded-lg"
          density="comfortable"
        /> -->

        <v-menu :close-on-content-click="false">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon="custom:IconUser"
              variant="tonal"
              class="rounded-lg ms-2"
              density="comfortable"
            />
          </template>
          <v-list nav density="compact" class="px-0 pb-0">
            <v-list-item
              title="Perfil"
              subtitle="Juan Perez Mariano"
              prepend-icon="custom:IconUser"
              value="profile"
            />
            <v-divider></v-divider>
            <v-list-item
              title="Configuración"
              prepend-icon="custom:IconSettings"
              value="settings"
              link
              :to="{ name: 'SettingView' }"
            />
            <v-list-item
              :title="`Modo: ${
                theme.global.current.value.dark ? 'Oscuro' : 'Claro'
              }`"
              prepend-icon="custom:IconPallete2"
            >
              <template #append>
                <v-switch
                  v-model="switchMe"
                  inset
                  density="compact"
                  color="blue-darken-1"
                  @update:model-value="toggleTheme"
                >
                  <template v-slot:thumb>
                    <v-icon
                      :icon="
                        switchMe == false ? 'custom:IconSun' : 'custom:IconMoon'
                      "
                    />
                  </template>
                </v-switch>
              </template>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item
              title="Cerrar sesión"
              prepend-icon="custom:IconLogout"
              color="red"
              class="text-red"
              value="logout"
              to="/"
            />
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-main app>
        <v-tabs v-model="tab" align-tabs="start" class="bg-grey-lighten-4">
          <v-tab
            prepend-icon="custom:IconHome1"
            value="home"
            :to="{ name: 'HomeView' }"
            link
            exact
          />
          <v-tab
            text="Usuarios"
            value="users"
            :to="{ name: 'UserView' }"
            link
            exact
          />
          <v-tab
            text="Ventas"
            value="sales"
            :to="{ name: 'SaleView' }"
            link
            exact
          />
          <v-tab
            text="Configuración"
            value="settings"
            :to="{ name: 'SettingView' }"
            link
            exact
          />
        </v-tabs>

        <RouterView />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "vuetify";
import { RouterView } from "vue-router";
const theme = useTheme();
const switchMe = ref(false);
const tab = ref("Home");
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>
