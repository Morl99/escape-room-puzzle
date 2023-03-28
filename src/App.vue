<script setup lang="ts">
import { RouterView } from 'vue-router'
import type { GlobalThemeOverrides } from 'naive-ui'
import { NConfigProvider, NMessageProvider } from 'naive-ui'

const theme: GlobalThemeOverrides = {
  common: {
    primaryColor: '#44af69FF'
  },
  Button: {
    fontSizeMedium: '20px',
    heightMedium: '40px'
  },
  Card: {
    titleFontSizeMedium: '26px',
    paddingMedium: '10px 15px 10px'
  }
}
</script>

<template>
  <header></header>

  <n-config-provider :theme-overrides="theme">
    <n-message-provider>
      <RouterView />
    </n-message-provider>
  </n-config-provider>
</template>
