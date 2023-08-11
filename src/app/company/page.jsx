import Image from "next/image";

const Hello = () => {
    return (
        <div className="flex flex-col items-center mb-20">

          <h1 className='text-4xl font-bold mt-20 mb-5'>대표자 인사말</h1>
          <div className="h-10 w-1 border border-x-2 border-stone-400 mb-0"/>
          
          <div className="flex flex-col my-10 gap-20 pb-20 border-b-4">
            <div className="w-full flex items-center justify-center">
              <Image className="w-80 my-10 object-contain" src="/Hello.jpeg" alt="" width={1000} height={1000} />
            </div>
            <div className="break-words w-full">
              <span className="text-2xl font-semibold">반갑습니다! <br /> <br /></span>
              사육신 건강지킴이 연구소 <br />
              대표 황 순 창 입니다. <br /> <br />

              건강지킴이 연구소는 <br />
              사회보건기구(WHO)의 이념으로 <br />
              사회적 육체적 정신적으로 안녕한 상태가 되어야 한다는 생각으로 <br /> <br />

              사육신과 관련된 제도적 향상을 위한 연구와 <br />
              문제점 등 개선 건의, <br />
              사육신과 관련한 고충 등을 <br />
              상담하여 안녕한 상태로 개선하고자 설립하였으며 <br /> <br />

              강남대학교 사회복지 전공과 <br />
              국민건강보험공단 사회공헌활동의 경력을 토대로 <br />
              다양한 여려움이 발생한 이웃에게 꽃 길을 갈 수 있도록 <br />
              사랑의 마음 나누기를 아끼지 않을 것이며 <br /> <br />

              한분 한분의 소중한 권익이 보호받고 건강한 삶을 영위할 수 있도록 <br />
              건강지킴이가 중심이 되겠습니다. <br /> <br />

              여러분들의 적극적인 협력과 지지를 당부드립니다. <br /> <br />

              건강하세요! <br /> <br />
            </div>
          </div>


        <h1 className='text-4xl font-bold mt-20 mb-5'>대표자 소개</h1>
          <div className="h-10 w-1 border border-x-2 border-stone-400 mb-0"/>


          <div className="flex flex-col items-center my-10 gap-20">   
            <div className="w-full flex items-center justify-center">     
              <Image className="w-80 mt-16 object-contain" src="/Info2.jpeg" alt="" width={1000} height={1000} />
            </div>

            <div className="break-words w-full">
              <span className="text-2xl font-semibold">황순창 </span>
              <span className="text-base text-gray-500 font-semibold">黃淳昶, Sunchang Hwang <br /> <br /></span>
            
              <span >
                (현)&nbsp;&nbsp;&nbsp;&nbsp;{`사육신 건강지킴이 연구소 대표`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`채용 · 승진 등 면접관`}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`화성특례시 준비위원회 의원`}<br /> <br />

                (전) &nbsp;&nbsp;&nbsp;{`국민건강보험공단 지사장`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`국민건강보험공단 감사실`}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`용인시 지역보건의료심의회의원`}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`안양시 사회복지협의체 부회장`}<br /> <br />

                (학력) 서강대학교 MBA 내부감사 전문과정 수료 <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`강남대학교 사회복지학 · 행정학 전공`}
              </span>
            </div>
          </div>

        </div>
    )
}

export default Hello;