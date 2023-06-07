<script lang="ts">
import { defineComponent } from 'vue';
import ChessBoard from '@/components/ChessBoard.vue';
import { boardSquares } from '@/board';
import SideBar from '@/components/SideBar.vue';
import { type Activity } from '@/types/activity';
import { type Square } from '@/types/square';

const activity: Activity[] = [];
const activeSquares: string[] = [];

export default defineComponent({
  name: 'App',
  components: { SideBar, ChessBoard },
  methods: {
    setActive(square: Square) {
      const id = this.activity.length + 1;
      const prevActivity = this.activity.filter((activity) => activity.square === square);
      const on = !prevActivity[prevActivity.length - 1]?.on;
      this.activity.push({ id, square, on });
      if (on) {
        this.activeSquares.push(square.key);
      } else {
        this.activeSquares = this.activeSquares.filter((key) => key !== square.key);
      }
    }
  },
  data() {
    return { boardSquares, activity, activeSquares };
  }
});
</script>

<template>
  <main>
    <chess-board
      :squares="boardSquares"
      @setActive="setActive"
      class="chess-board"
      :active-squares="activeSquares"
    ></chess-board>
  </main>
  <side-bar :activity="activity" class="side-bar"></side-bar>
</template>
<style scoped>
.side-bar {
  flex: 1;
  padding-bottom: 10px;
}

@media (min-width: 576px) {
  main {
    flex: 4;
    padding: 20px;
  }

  .chess-board {
    margin: auto;
    border-radius: 4px;
    overflow: hidden;
    max-width: calc(100vh - 40px);
    max-width: calc(100svh - 40px);
  }
  .side-bar {
    min-width: 180px;
    border-left: 1px solid var(--sidebar-border);
    padding-top: 10px;
    padding-bottom: 20px;
  }
}
</style>
