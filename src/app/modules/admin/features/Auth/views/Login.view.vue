<template>
  <v-app id="appAuthLayout">
    <v-main class="auth-layout-main">
      <v-container
        class="h-min-screen h-100 pa-0 d-flex justify-center align-center flex-column"
      >
        <v-form ref="formRef" @submit.prevent="submit" class="flex-wrap">
          <v-card class="" width="400px">
            <v-card-item class="text-center">
              <!-- <img src="/resources/images/logo.png" alt="logo" width="70" /> -->
            </v-card-item>
            <v-card-item class="px-6">
              <v-row>
                <v-col cols="12" class="text-center">
                  <span class="text-subtitle-1"> Administrador </span>
                  <h6 class="text-h6">Iniciar sesión</h6>
                  <span class="text-caption">
                    Ingrese sus datos para iniciar sesión
                  </span>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Usuario"
                    v-model="form.username"
                    autocomplete="username"
                    :rules="[required]"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Contraseña"
                    :type="showPassword ? 'text' : 'password'"
                    v-model="form.password"
                    autocomplete="current-password"
                    :rules="[required]"
                    :append-inner-icon="
                      showPassword ? 'custom:IconEye' : 'custom:IconEyeClosed'
                    "
                    @click:append-inner="showPassword = !showPassword"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" class="text-end text-subtitle-2">
                  <router-link to="/recuperar-contrasena" class="link">
                    ¿Olvidaste tu contraseña?
                  </router-link>
                </v-col>
              </v-row>
            </v-card-item>
            <v-card-actions class="py-4 px-6">
              <v-btn
                to="/a"
                block
                type="button"
                variant="outlined"
                :loading="loading"
                append-icon="custom:IconLogin"
              >
                Ingresar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
        <div class="w-100 text-caption py-3 text-grey-darken-2 text-center">
          © {{ new Date().getFullYear() }} - v0.1.0-Beta
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { required } from "@/core/utils/rules.utils";

const form = ref({
  username: "",
  password: "",
});

const showPassword = ref<boolean>(false);
const formRef = ref<HTMLFormElement | null>(null);
const loading = ref<boolean>(false);

const submit = async () => {
  const { valid } = await formRef.value!.validate();
  if (!valid) return;
  loading.value = true;
  //   await _signIn(form.value);
  loading.value = false;
};
</script>
<style>
#appAuthLayout {
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(231, 238, 242, 1) 0%,
    rgba(224, 230, 239, 1) 50%,
    rgba(189, 195, 199, 1) 100%
  );

  width: 100%;
  min-height: 100dvh;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(#444 1px, transparent 1px);
    background-size: 4px 4px;
    opacity: 0.05;
    pointer-events: none;
    z-index: 0;
  }
}
</style>
