<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous"
          @click.prevent="prevButton"
           :class="{ 'disabled':currentPage === 1 }">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pageCount" :key="page"
      :class="{ 'active':currentPage === page }">
        <a class="page-link" href="#" @click.prevent="updatePage(page)">{{ page }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next"
          @click.prevent="nextButton"
          :class="{ 'disabled':currentPage === pageCount }">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['productsNum', 'productCategory'],
  computed: {
    pageCount() {
      return Math.ceil(this.productsNum / this.paginationLimit);
    },
  },
  watch: {
    productCategory() {
      this.currentPage = 1;
    },
  },
  data() {
    return {
      paginationLimit: 12,
      currentPage: 1,
    };
  },
  methods: {
    updatePage(page) {
      this.currentPage = page;
      this.sendPageNum(this.currentPage);
    },
    nextButton() {
      this.currentPage += 1;
      this.sendPageNum(this.currentPage);
    },
    prevButton() {
      this.currentPage -= 1;
      this.sendPageNum(this.currentPage);
    },
    sendPageNum(page) {
      this.$emit('emit-pages', page);
    },
  },
  created() {
    this.currentPage = 1;
  },
};
</script>
