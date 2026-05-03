import { useState, useEffect, useRef } from "react";

export function useInView({
  threshold = 0.1,
  once = true,
  root = null,
  rootMargin = "0px",
  skipInitial = false, // 👈 prevent trigger on mount
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Skip initial trigger if enabled
        if (skipInitial && !hasMounted.current) return;

        if (entry.isIntersecting) {
          setInView(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setInView(false);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    hasMounted.current = true;

    return () => {
      if (element) observer.unobserve(element);
      observer.disconnect(); // 👈 ensures full cleanup
    };
  }, [threshold, once, root, rootMargin, skipInitial]);

  return [ref, inView];
}