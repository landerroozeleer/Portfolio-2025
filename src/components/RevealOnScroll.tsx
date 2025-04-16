import {ReactNode, useEffect, useRef} from "react";

type Props = {
    children: ReactNode | ReactNode[];
}

export const RevealOnScroll = (props: Props) => {
    const { children } = props;
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // @ts-expect-error It works
                ref.current.classList.add("visible");
            }
        }, {threshold: 0.2, rootMargin: "0px 0px -50px 0px"});

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    })

    return <div ref={ref} className="reveal">{ children }</div>
}