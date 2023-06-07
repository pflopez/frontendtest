<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { type Activity } from '@/types/activity';

export default defineComponent({
  name: 'SideBar',
  components: {},
  props: {
    activity: {
      required: true,
      type: Array as PropType<Activity[]>
    }
  }
});
</script>
<template>
  <aside class="side">
    <h3 class="title">Squares clicked:</h3>
    <ul class="activity">
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
}
.title {
  padding: 10px;
  font-weight: bold;
  white-space: nowrap;
}
.activity {
  list-style: none;
  padding: 0 20px 20px;
  font-variant-numeric: tabular-nums;
  overflow-y: scroll;
  height: 100%;
}
.activity b {
  font-weight: bold;
}
</style>
