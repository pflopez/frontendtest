<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Activity } from '@/types/activity';

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
      <li v-for="item in activity" :key="item.id">{{ item.id }}: {{ item.square.key }}</li>
    </ul>
  </aside>
</template>

<style scoped>
.side{
  overflow-y: scroll;
  background-color: var(--color-sidebar);
}
.title {
  padding: 10px;
  background: linear-gradient(0, transparent , var(--color-sidebar) 20%);
  position: sticky;
  top:0;
  font-weight: bold;
}
.activity{
  list-style: none;
  padding: 0 20px 20px;
}

@media (min-width: 576px) {
  main {
    flex:4;
    padding: 20px;
  }
}
</style>
