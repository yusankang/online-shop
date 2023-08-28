<template>
  <div class="progress-wrapper d-flex justify-content-between my-5">
    <div
        class="progress-item"
        v-for="n in 4" :key="n"
        :class="{ completed: n <= progressBar }"
    >
      <div class="progress-counter">{{ n }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progressBar: {
      type: Number,
      required: true,
      detault: 1,
    },
  },
};
</script>
