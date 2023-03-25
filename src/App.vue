<script setup lang="ts">
import {RouterView} from 'vue-router'
import type {GlobalThemeOverrides} from "naive-ui";
import {NConfigProvider, NThemeEditor} from "naive-ui";

const theme: GlobalThemeOverrides = {
  "common": {
    "fontSize": "20px",
    "fontSizeLarge": "26px",
    "fontSizeHuge": "36px",
    "primaryColor": "#44af69FF"
  },
  "Button": {
    "fontSizeMedium": "20px",
    "heightMedium": "40px"
  },
  "Card": {
    "titleFontSizeMedium": "30px"
  }
}
</script>

<template>
  <header>
  </header>
  <n-theme-editor>

    <n-config-provider :theme-overrides="theme">
      <RouterView/>
    </n-config-provider>
  </n-theme-editor>

</template>

