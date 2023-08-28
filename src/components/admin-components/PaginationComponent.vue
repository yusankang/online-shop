<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="prevButton"
          :class="{ disabled: pages.current_page === 1 }"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :key="page"
        :class="{ active: page === pages.current_page }"
      >
        <a class="page-link" href="#" @click.prevent="updatePage(page)">{{ page }}</a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="nextButton"
          :class="{ disabled: pages.current_page === pages.total_pages }"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pages: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    updatePage(page) {
      this.$emit('emit-pages', page);
    },
    nextButton() {
      const page = this.pages.current_page + 1;
      this.updatePage(page);
    },
    prevButton() {
      const page = this.pages.current_page - 1;
      this.updatePage(page);
    },
  },
};
</script>
