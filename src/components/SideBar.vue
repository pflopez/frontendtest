<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { type Activity } from '@/types/activity';
import ThemeToggle from '@/components/themeToggle.vue';

export default defineComponent({
  name: 'SideBar',
  components: { ThemeToggle },
  props: {
    activity: {
      required: true,
      type: Array as PropType<Activity[]>
    }
  },
  computed: {
    activitySize() {
      return this.activity.length;
    }
  },
  watch: {
    activitySize() {
      // scroll to the last one
      const el = this.$refs.activityScroller as HTMLElement;
      el.scrollTop = el.scrollHeight;
    }
  }
});
</script>
<template>
  <aside class="side">
    <theme-toggle class="theme-toggle"></theme-toggle>
    <h3 class="title">Squares clicked:</h3>
    <ul class="activity" ref="activityScroller">
      <li v-for="item in activity" :key="item.id">
        {{ item.id }}: <b>{{ item.square.key }}</b> - {{ item.on ? 'on' : 'off' }}
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.side {
  overflow: hidden;
  background-color: var(--color-sidebar);
  display: flex;
  flex-direction: column;
  position: relative;
}
.title {
  padding: var(--app-padding-lg) var(--app-padding-lg) var(--app-padding-sm);
  font-weight: bold;
  white-space: nowrap;
  z-index: 1;
}
.activity {
  list-style: none;
  padding: 0 var(--app-padding-lg) var(--app-padding-lg);
  font-variant-numeric: tabular-nums;
  overflow-y: scroll;
  height: 100%;
}
.activity b {
  font-weight: bold;
}
.theme-toggle {
  position: absolute;
  top: calc(100% - 50px);
  right: 20px;
}
</style>
