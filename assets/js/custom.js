jQuery(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  let smoother = ScrollSmoother.create({
    smooth: 1, // seconds it takes to "catch up" to native scroll position
    effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
  });
  const menu = $(".menu-wrapper");
  const hamburgerMenu = $(".hamburger-menu");

  hamburgerMenu.on("click", function () {
    menu.toggleClass("active");
  });

  if (window.innerWidth <= 991) {
    jQuery(".header").addClass("active");
  } else {
    jQuery(window).scroll(function () {
      var scroll = jQuery(window).scrollTop();

      if (scroll >= 100) {
        jQuery(".header").addClass("active");
      } else {
        jQuery(".header").removeClass("active");
      }
    });
  }

  // accordions start
  var accordionItems = $(".accordion-item");
  accordionItems.each(function () {
    var header = $(this).find(".accordion-header");
    var content = $(this).find(".accordion-content");

    header.on("click", function () {
      var isActive = $(this).parent().hasClass("active");

      // Close all content sections
      accordionItems.removeClass("active");
      accordionItems.find(".accordion-content").removeClass("show");

      // Toggle active class and show content
      if (!isActive) {
        $(this).parent().addClass("active");
        content.addClass("show");
      }
    });
  });
  // accordions end

  // modal satrt
  $("[data-target]").click(function () {
    const targetModal = $(this).data("target"); // Get the target modal from data-target attribute
    $(targetModal).addClass("fade show"); // Show the targeted modal
  });

  // Close modal when the 'x' is clicked
  $(".close-modal").click(function () {
    $(this).closest(".modal").removeClass("fade show"); // Close the closest modal
  });

  // Close modal if clicked outside the modal content
  $(window).click(function (event) {
    if ($(event.target).is(".modal")) {
      $(event.target).removeClass("fade show"); // Close the modal if the overlay is clicked
    }
  });

  gsap.from(".img-wrapper", {
    y: 50,
    duration: 0.3,
    ease: "Power4.out",
    scrollTrigger: {
      trigger: ".img-wrapper",
      scrub: 1,
      // start: "top center"
    },
    stagger: true,
  });

  // mqrquee start
  var imagexMovement;
  if (window.innerWidth <= 992) {
    var imagexMovement = -900;
  } else {
    var imagexMovement = -1550;
  }
  gsap.fromTo(
    ".image-marquee.right-left",
    {
      x: 0,
      duration: 25,
      ease: "linear",
    },
    {
      x: imagexMovement,
      duration: 25,
      ease: "linear",
      repeat: -1,
    }
  );
  gsap.fromTo(
    ".image-marquee.left-right",
    {
      x: imagexMovement,
      duration: 25,
      ease: "linear",
    },
    {
      x: 0,
      duration: 25,
      ease: "linear",
      repeat: -1,
    }
  );
  // Animate all elements with class 'clockwise'
  gsap.utils.toArray(".image-marquee-item.clockwise").forEach((elem) => {
    const parentElem = elem.parentNode;
    gsap.from(elem, {
      rotation: 6,
      ease: "Power3.out",
      duration: 0.2,
      scrollTrigger: {
        trigger: parentElem,
        scrub: 1,
        // Optional: you can specify start/end points if needed
      },
    });
  });

  // Animate all elements with class 'anticlockwise'
  gsap.utils.toArray(".anticlockwise").forEach((elem) => {
    const parentElem = elem.parentNode;
    gsap.from(elem, {
      rotation: -6,
      ease: "Power3.out",
      duration: 0.1,
      scrollTrigger: {
        trigger: parentElem, // fixed spelling
        scrub: 1,
      },
    });
  });

  // marquee end

  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

  ScrollTrigger.create({
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -300);
      // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, {
          skew: 0,
          duration: 0.8,
          ease: "power3",
          overwrite: true,
          onUpdate: () => skewSetter(proxy.skew),
        });
      }
    },
  });

  // make the right edge "stick" to the scroll bar. force3D: true improves performance
  gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
});
