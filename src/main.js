import "./style.css";
import("preline")
  .then((mod) => {
    const Preline = mod.default || mod;
    if (Preline && typeof Preline.init === "function") Preline.init();
  })
  .catch(() => {
    // Preline failed to load; continue silently
  });

// import Invoice from './invoice';
// const invoice = new Invoice();
// invoice.init();
