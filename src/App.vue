<script lang="ts">
import { defineComponent } from 'vue';
import ChessBoard from '@/components/ChessBoard.vue';
import { boardSquares } from '@/board';
import SideBar from "@/components/SideBar.vue";
import {Activity} from "@/types/activity";
import {Square} from "@/types/square";

const activity: Activity[] = [];

export default defineComponent({
  name: 'App',
  components: {SideBar, ChessBoard },
  methods: {
    setActive(square: Square) {
      const time = new Date();
      const id = this.activity.length + 1;
      this.activity.push({ square, time, id });
    }
  },
  data() {
    return { boardSquares, activity };
  }
});
</script>

<template>
  <main>
    <chess-board :squares="boardSquares" @setActive="setActive" class="chess-board"></chess-board>
  </main>

  <side-bar :activity="activity" class="side-bar"></side-bar>
</template>
<style scoped>

  @media (min-width: 576px) {
    main {
      flex:4;
      padding: 20px;
    }

    .chess-board  {
      margin: auto;
      border-radius: 4px;
      overflow: hidden;
      max-width: calc(100vh - 40px);
    }
    .side-bar {
      --color-sidebar: var(--app-gray);
      flex: 1;
      max-width: 300px;
      border-left: 1px solid var(--app-gray-border);
    }
  }

</style>
