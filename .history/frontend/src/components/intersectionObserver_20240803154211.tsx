import { useEffect, useRef, Dispatch, SetStateAction, RefObject } from "react";

interface IntersectionObserverOptions {
  root: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  toggle?: boolean;
}

const useIntersectionObserver = (
  setInView: Dispatch<SetStateAction<boolean>>,
  options: IntersectionObserverOptions,
  ref: RefObject<Element>
) => {
  const rootRef = useRef<Element | null>(null);

  useEffect(() => {
    if (options.root && typeof options.root === 'string') {
      rootRef.current = document.getElementById(options.root);
    } else {
      rootRef.current = options.root;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (!options.toggle) {
          observer.disconnect();
        }
      } else if (options.toggle) {
        setInView(false);
      }
    }, {
      ...options,
      root: rootRef.current,
    });

    if (ref.current) {
      observer.observe(ref.current);
    } else if (options.toggle === true) {
      setInView(false);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [setInView, options, ref]);

  return;
};

export default useIntersectionObserver;
