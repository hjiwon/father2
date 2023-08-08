'use client'
import { useRef, useEffect } from "react";

const MainTexts = () => {
  const observer = useRef(null); // Create a ref without initializing it

  useEffect(() => {
    if (observer.current === null) {
      // Initialize the ref when the component mounts
      observer.current = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('animate-left')) {
              entry.target.classList.add('animate-left-active');
              entry.target.classList.remove('opacity-0');
            } else if (entry.target.classList.contains('animate-right')) {
              entry.target.classList.add('animate-right-active');
              entry.target.classList.remove('opacity-0');
            }

            observer.unobserve(entry.target);
          }
        });
      });
    }

    const elementsLeft = document.querySelectorAll('.animate-left');
    elementsLeft.forEach(el => {
      observer.current.observe(el);
    });

    const elementsRight = document.querySelectorAll('.animate-right');
    elementsRight.forEach(el => {
      observer.current.observe(el);
    });
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div className="h-144 text-stone-950 relative">
      <span className="absolute opacity-0 left-24  text-xl leading-snug animate-left">
        세계보건기구(WHO)에서는 건강을 <br /> <span className='text-3xl'><span className="text-green-600">사</span>회적 <span className="text-purple-600">육</span>체적 정<span className="text-red-500">신</span>적</span><br />으로 완전히 안녕한 상태에 놓여있는 것이라고 정의합니다.
      </span>

      <span className="absolute opacity-0 right-20 top-56 text-xl leading-snug animate-right">
        <span className="text-3xl"><span className="text-green-600">사</span><span className="text-purple-600">육</span><span className="text-red-600">신</span></span> 건강지킴이 연구소에서는 <br />
        건강의 안녕을 위해 상담 및 연구 하고 있습니다.<br /> <br />
      </span>

    </div>
  );
}

export default MainTexts;
