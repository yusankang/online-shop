<template>
  <footer class="mt-auto">
    <div
      class="d-flex mt-3 justify-content-between
        border-top border-2 pt-3 pb-4 px-2 px-md-5 align-items-center"
    >
      <h6 class="text-white m-0" style="font-size: 14px">All rights reserved | Icon by Freepik</h6>
      <div>
        <button class="me-3 hvr-grow text-white btn px-2 border-0" @click.prevent>
          <i class="bi bi-instagram"></i>
        </button>
        <button class="me-3 hvr-grow text-white btn px-2 border-0" @click.prevent>
          <i class="bi bi-facebook"></i>
        </button>
        <router-link to="/login" class="hvr-grow text-white px-2">
          <i class="bi bi-person-fill"></i>
        </router-link>
      </div>
    </div>
  </footer>
</template>
