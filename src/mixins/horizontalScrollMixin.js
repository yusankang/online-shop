/* eslint-disable max-len */
/* eslint-disable prefer-const */
export default {

  data() {
    return {
      isDragStart: false,
      prevPageX: '',
      prevScrollLeft: '',
      positionDiff: '',
      isDragging: false,
    };
  },
  methods: {
    mouseDrag() {
      const carousel = document.querySelector('.carousel');

      const dragStart = (e) => {
        this.isDragStart = true;
        this.prevPageX = e.pageX || e.touches[0].pageX;
        this.prevScrollLeft = carousel.scrollLeft;
      };

      const dragging = (e) => {
        if (!this.isDragStart) return;
        e.preventDefault();
        this.isDragging = true;
        carousel.classList.add('dragging');
        this.positionDiff = (e.pageX || e.touches[0].pageX) - this.prevPageX;
        carousel.scrollLeft = this.prevScrollLeft - this.positionDiff;
        this.showHideIcons();
      };

      const dragStop = () => {
        this.isDragStart = false;
        carousel.classList.remove('dragging');
        if (!this.isDragging) return;
        this.isDragging = false;
        this.autoSlide();
      };

      carousel.addEventListener('mousemove', dragging);
      carousel.addEventListener('touchmove', dragging);

      carousel.addEventListener('mousedown', dragStart);
      carousel.addEventListener('touchstart', dragStart);

      carousel.addEventListener('mouseup', dragStop);
      carousel.addEventListener('mouseleave', dragStop);
      carousel.addEventListener('touchend', dragStop);
    },

    arrowButton() {
      const carousel = document.querySelector('.carousel');
      const firstImg = carousel.querySelectorAll('img')[0];
      const arrowIcons = document.querySelectorAll('.chevron');
      let firstImgWidth = firstImg.width + 14;

      arrowIcons.forEach((icon) => {
        icon.addEventListener('click', () => {
          carousel.scrollLeft += icon.id === 'left' ? -firstImgWidth : firstImgWidth;
          setTimeout(() => this.showHideIcons(), 60);
        });
      });
    },

    showHideIcons() {
      const carousel = document.querySelector('.carousel');
      const arrowIcons = document.querySelectorAll('.chevron');
      let scrollWidth = carousel.scrollWidth - carousel.width;
      console.log(scrollWidth);

      arrowIcons[0].style.display = carousel.scrollLeft === 0 ? 'none' : 'block';
      arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? 'none' : 'block';
    },

    // eslint-disable-next-line consistent-return
    autoSlide() {
      this.positionDiff = Math.abs(this.positionDiff);
      const carousel = document.querySelector('.carousel');
      const firstImg = carousel.querySelectorAll('img')[0];
      let firstImgWidth = firstImg.clientWidth + 14;
      let valDifference = firstImgWidth - this.positionDiff;

      if (carousel.scrollLeft > this.prevScrollLeft) {
        // eslint-disable-next-line no-return-assign
        return carousel.scrollLeft += this.positionDiff > firstImgWidth / 3 ? valDifference : -this.positionDiff;
      }
      carousel.scrollLeft -= this.positionDiff > firstImgWidth / 3 ? valDifference : -this.positionDiff;
    },
  },

  mounted() {
    this.mouseDrag();
    this.arrowButton();
    const carousel = document.querySelector('.carousel');
    let scrollWidth = carousel.scrollWidth - carousel.width;
    console.log(scrollWidth);
    console.log(carousel.scrollWidth);
    console.log(carousel.width);
    console.log(carousel.scrollLeft);
  },
};
