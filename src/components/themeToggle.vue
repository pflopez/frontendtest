<script lang="ts">
import { defineComponent } from 'vue';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
  storageKey: 'frontendtest-theme-appearance',
  valueDark: 'dark',
  valueLight: 'light'
});
const toggleDark = useToggle(isDark);

export default defineComponent({
  name: 'ThemeToggle',
  components: {},
  data() {
    return { isDark, toggleDark };
  }
});
</script>
<template>
  <button @click="toggleDark()" class="switcher">theme: {{ isDark ? 'dark' : 'light' }}</button>
</template>

<style scoped>
.switcher {
  border: 1px solid var(--sidebar-border);
  background-color: var(--color-sidebar);
  color: var(--color-text);
  top: 5px;
  right: 10px;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
