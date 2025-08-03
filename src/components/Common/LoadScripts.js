import { useEffect, useState } from "react";

const useScriptManager = (scripts) => {
  const [status, setStatus] = useState({
    loaded: Array(scripts.length).fill(false),
    error: Array(scripts.length).fill(false),
    completed: false,
  });

  useEffect(() => {
    if (!scripts.length) return;

    const loadedScriptElements = [];
    const loadedInitializers = [];

    const loadSequentially = async () => {
      for (let i = 0; i < scripts.length; i++) {
        try {
          await loadSingleScript(scripts[i], i);
        } catch (err) {
          console.error(`Error loading script: ${scripts[i]}`, err);
          setStatus((prev) => ({
            ...prev,
            error: prev.error.map((e, idx) => (idx === i ? true : e)),
          }));
        }
      }

      setStatus((prev) => ({ ...prev, completed: true }));

      if (window.jQuery) {
        const initScript = () => {
          console.log("All scripts loaded and initialized");
        };
        loadedInitializers.push(initScript);
        initScript();
      }
    };

    const loadSingleScript = (src, index) => {
      return new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);

        if (existingScript && existingScript.hasAttribute("data-loaded")) {
          setStatus((prev) => ({
            ...prev,
            loaded: prev.loaded.map((l, idx) => (idx === index ? true : l)),
          }));
          resolve();
          return;
        }

        const script = existingScript || document.createElement("script");

        if (!existingScript) {
          script.src = src;
          script.async = false;
          script.setAttribute("data-managed", "true");
        }

        const handleLoad = () => {
          script.setAttribute("data-loaded", "true");
          loadedScriptElements.push(script);

          setStatus((prev) => ({
            ...prev,
            loaded: prev.loaded.map((l, idx) => (idx === index ? true : l)),
          }));

          script.removeEventListener("load", handleLoad);
          script.removeEventListener("error", handleError);
          resolve();
        };

        const handleError = (err) => {
          script.removeEventListener("load", handleLoad);
          script.removeEventListener("error", handleError);
          reject(err);
        };

        script.addEventListener("load", handleLoad);
        script.addEventListener("error", handleError);

        if (!existingScript) {
          document.body.appendChild(script);
        }
      });
    };

    loadSequentially();

    return () => {
      loadedScriptElements.forEach((script) => {
        script.removeAttribute("data-managed");
      });

      loadedInitializers.forEach((initializer) => {
        // Cleanup for initializers
      });

      if (window.jQuery) {
        document.querySelectorAll("[data-original-parent]").forEach((element) => {
          const parentSelector = element.getAttribute("data-original-parent");
          const originalParent = document.querySelector(parentSelector);
          if (originalParent) {
            try {
              originalParent.appendChild(element);
            } catch (e) {
              console.warn("Error moving element back to original parent", e);
            }
          }
        });
      }
    };
  }, [scripts.join(",")]);

  return {
    loaded: status.loaded,
    allLoaded: status.completed && status.loaded.every(Boolean),
    hasErrors: status.error.some(Boolean),
    errors: status.error,
  };
};

export default useScriptManager;