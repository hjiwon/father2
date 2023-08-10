import Image from "next/image";

const Info = () => {
  return (
    <div className="flex flex-col items-center">

      <h1 className='text-4xl font-bold mt-20 mb-5'>대표자 소개</h1>
      <div className="h-10 w-1 border border-x-2 border-stone-400 mb-10"/>
      

      <div className="flex items-center my-10 gap-20">   
        <div className="w-1/2 flex items-center justify-center">     
          <Image className="w-80 mt-16 object-contain" src="/Info2.jpeg" alt="" width={1000} height={1000} />
        </div>

        <div className="break-words w-1/2">
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

export default Info;