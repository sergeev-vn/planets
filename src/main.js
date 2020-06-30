import "./styles/main.pcss";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "slick-carousel";
import "./scripts/sliders";
// import "jquery-ui/ui/widgets/slider";
// import "jquery-ui/ui/widgets/tabs";
// import "./scripts/tabs";
// import "lightbox2/dist/js/lightbox";
// import "./scripts/ya-map";
// import "./scripts/humburger-menu";
// import "./scripts/selectors";